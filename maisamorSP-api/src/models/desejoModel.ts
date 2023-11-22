export interface Desejo {
    id?: number;               // Identificador único para o desejo
    nomeCrianca: string;     // Nome da criança que fez o desejo
    desejo: string;          // Conteúdo do desejo
    idade: number;           // Idade da criança
    regiao: string;          // Região de SP onde a criança mora
    atendido: boolean;       // Indica se o desejo foi atendido ou não
}

