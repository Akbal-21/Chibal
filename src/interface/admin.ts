export interface IAdmin{
    Escuela: {
        Nombre: string;
    } | null;
    Turno: {
        Horario: string;
    } | null;
    Usuarios: {
        Nombres: string;
        Apellidos: string;
    };
    Usuario_id: number;
}