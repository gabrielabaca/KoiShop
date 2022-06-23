export interface IAddToCartProps {
    cantidad: number;
    max: number;
    onCantidad: (accion:string) => void;
    onAddToCart: () => void;
  }