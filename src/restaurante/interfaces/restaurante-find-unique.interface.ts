export interface RestauranteFindUnique {
  id: string;
  nome: string;
  mesas: { id: string; numero: number }[];
}
