// este archivo maneja la base de datos

export interface Task {
    //modelo de datos
    id: number;
    texto: string;
    dia: string;
    reminder: boolean;
}