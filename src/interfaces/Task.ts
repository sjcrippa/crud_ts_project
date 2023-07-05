export interface Task {
    id?: number;
    title: string;
    description: string;
    completed?: boolean;
};
// En este caso, al ser un proyecto meramente de front, el id y el completed no son necesariamente obligarios, por ende los dejo como opcionales para evitar error al momento de compilar