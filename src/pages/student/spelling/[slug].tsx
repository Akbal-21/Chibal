import React, { useState, useCallback, useEffect, useContext } from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
  rectSortingStrategy,
  rectSwappingStrategy,
} from "@dnd-kit/sortable";
import { Item } from "@/components";
import { Grid } from "@/components";
import { SortableItem } from "@/components";
import { v4 as uuidv4 } from "uuid";
import { generateRandomIntenseColor } from "@/components";
import { GetServerSideProps, NextPage } from "next";
import { getExerciseQuestions } from "@/api/getJson";
import { getLine } from "@/db/teacher";
import { ILine } from "@/interface";
import { chibalApi } from "@/api";
import { AuthContext } from "@/context";
import axios, { AxiosError } from "axios";

interface Props {
  word: string;
  idInciso: number;
}
export const App2: NextPage<Props> = ({ word, idInciso }) => {
  const { user } = useContext(AuthContext);
  const generateUniqueId = () => uuidv4();
  const generateItem = (s: string) => {
    return {
      id: generateUniqueId(),
      texto: s,
      color: s === "" ? "#ffffff" : generateRandomIntenseColor(),
    };
  };

  const handleSave = async () => {
    console.log("Guardado");
    console.log(word, idInciso);
    const palabra = word;
    const id = idInciso;
    const id_User = user?.Usuarios_id;
    console.log({ palabra, id, id_User });
    try {
      const response = await chibalApi({
        method: "POST",
        url: "/student/doExerciseBySpell",
        data: {
          palabra,
          id,
          id_User,
        },
      });

      if (response.status === 202) {
        // Esperar 3 segundos antes de redirigir a /student
        setTimeout(() => {
          window.location.href = "/student";
        }, 3000); // 3000 milisegundos = 3 segundos
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Manejar errores de Axios, por ejemplo, mostrar el mensaje de error
        console.error("Error de Axios:", (error as AxiosError).message);
      } else {
        // Manejar otros tipos de errores
        console.error("Error inesperado:", error);
      }
    }
  };

  const [list1, setList1] = useState<
    Array<{ id: string; texto: string; color: string }>
  >([]);
  const [list2, setList2] = useState<
    Array<{ id: string; texto: string; color: string }>
  >([]);

  // Llena list1 y list2 con elementos iniciales

  const generateRandomLetter = () => {
    const alphabet = "abcdefghijklmnñopqrstuvwxyz"; // Alfabeto español
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  };

  useEffect(() => {
    const emptyItems = Array.from({ length: word.length }, () =>
      generateItem("")
    );
    const letterItems = Array.from(word, (letter) => generateItem(letter));

    const moreItems = Array.from({ length: 15 - word.length }, () =>
      generateItem(generateRandomLetter())
    );

    const combinedItems = [...moreItems, ...letterItems].sort(
      () => Math.random() - 0.5
    );

    const newList1 = emptyItems;
    const newList2 = combinedItems;

    setList1(newList1);
    setList2(newList2);
  }, []);

  const [activeId, setActiveId] = useState<string | null>(null);
  const [isGameComplete, setIsGameComplete] = useState<boolean | null>(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id.toString());
  }, []);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (over === null || active === undefined) {
        setActiveId(null);
        return;
      }

      if (isGameComplete) {
        setActiveId(null);
        return;
      }
      if (active.id === over?.id) {
        // No hacer nada si el elemento se soltó en el mismo lugar
        setActiveId(null);
        return;
      }

      const sourceList = list1.find((item) => item.id === active.id)
        ? list1
        : list2;
      const targetList = list1.find((item) => item.id === over?.id)
        ? list1
        : list2;

      const draggedItem = sourceList.find((item) => item.id === active.id);

      const draggedItemIndex = sourceList.findIndex(
        (item) => item.id === active.id
      );
      const targetIndex = targetList.findIndex((item) => item.id === over?.id);
      const targetItem = targetList[targetIndex];

      if (!draggedItem) {
        // No encontró el elemento arrastrado, no hacer nada
        setActiveId(null);
        return;
      }

      if (sourceList === list1 && targetList === list2) {
        if (draggedItem.texto !== "") {
          sourceList.splice(draggedItemIndex, 1, generateItem(""));

          targetList.push(draggedItem);
        }
      } else if (sourceList === list2 && targetList === list1) {
        // Encuentra el índice del elemento arrastrado en list2

        if (draggedItemIndex !== -1) {
          if (targetIndex !== -1) {
            // Realiza el swap entre el elemento arrastrado y el elemento en list1

            const temp = targetItem;
            list1[targetIndex] = draggedItem;
            if (targetItem.texto === "") {
              list2.splice(draggedItemIndex, 1); //, temp);
            } else {
              list2.splice(draggedItemIndex, 1, temp);
            }
          }
        }
      } else if (sourceList === targetList && sourceList === list1) {
        const temp = targetItem;
        list1[targetIndex] = draggedItem;
        list1.splice(draggedItemIndex, 1, temp);
      }

      // Actualizar las listas en el estado
      setList1([...list1]);
      setList2([...list2]);

      setActiveId(null);

      const cadena = list1.map((item) => item.texto).join("");

      console.log(cadena);
      if (cadena === word) {
        console.log("cadena match");
        setIsGameComplete(true);
      }
    },
    [list1, list2]
  );

  interface objeto {
    id: string;
    texto: string;
    color: string;
  }
  [];
  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);
  const getItem = (itemId: string, list1: objeto[], list2: objeto[]) => {
    const itemInLists = [...list1, ...list2].find((item) => item.id === itemId);
    if (itemInLists !== undefined) return itemInLists;
    else return list2[0];
  };

  return (
    <div>
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      
      <div className="grid">
        <SortableContext items={list1} strategy={rectSortingStrategy}>
          <Grid columns={word.length}>
            {list1.map((objeto) => (
              <SortableItem key={objeto.id} letter={objeto} />
            ))}
          </Grid>
        </SortableContext>
        {isGameComplete && (
          <div className="text-4xl mt-4 text-center">
            <div className="m-2">¡Juego completado!</div>

            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              className="btn btn-secondary m-1 text-2xl"
              onClick={handleSave}
            >
              Enviar resultados
            </button>
          </div>
        )}
        <SortableContext items={list2} strategy={horizontalListSortingStrategy}>
          <Grid columns={5}>
            {list2.map((objeto) => (
              <SortableItem key={objeto.id} letter={objeto} />
            ))}
          </Grid>
        </SortableContext>
        <DragOverlay adjustScale style={{ transformOrigin: "0 0 " }}>
          {activeId ? (
            <Item
              id={getItem(activeId, list1, list2)?.texto}
              isDragging
              content={getItem(activeId, list1, list2)?.texto}
              itemColor={getItem(activeId, list1, list2)?.color}
            />
          ) : null}
        </DragOverlay>
      </div>
      
    </DndContext>
    </div>
  );
};

export default App2;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug = "" } = query as { slug: string };
  const line: ILine[] = await getLine(slug);
  let word = "";
  let idInciso = 0;

  if (line[0]) {
    word =line[0].LoSolicitado;
    idInciso = line[0].Incisos_id;
    console.log(idInciso);
    return {
      props: {
        word,
        idInciso,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/student",
        permanent: false,
      },
    };
  }
};
