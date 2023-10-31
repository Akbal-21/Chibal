// SortableItem.tsx
import React, { FC } from "react";
import { useSortable } from "@dnd-kit/sortable";
import Item from "./Item";

interface objeto{
  id:string,
  texto:string,
  color:string
}
interface SortableItemProps {
  letter: objeto;
}

export const SortableItem: FC<SortableItemProps> = ({ letter }) => {
  const { isDragging, attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: letter.id });

    const style = {/*
      transform: CSS.Transform.toString(transform),
      transition: transition || undefined,*/
  };

  return (
    <div className={`sortable-item ${isDragging ? "dragging" : ""}`}>
      <Item
        ref={setNodeRef}
        id={letter.texto.toString()}
        withOpacity={isDragging}
        
        itemColor={letter.color}
        
        {...attributes}
        {...listeners}
      >
        {letter.texto.toString()}
      </Item>
    </div>
  );
};

export default SortableItem;