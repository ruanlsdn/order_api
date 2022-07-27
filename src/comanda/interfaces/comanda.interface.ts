export interface Comanda {
  id: string;
  mesa_id: string;
  pedidos?: {
    id: string;
    quantidade: number;
    produto: { descricao: string; preco: number };
  }[];
}
