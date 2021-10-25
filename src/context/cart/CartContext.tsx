import { createContext } from 'react';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  quantity?: number;
}

type CartContextType = {
  cartItems: IProduct[];
  itemCount: number;
  total: number;
  addProduct: (product: IProduct) => void;
  increase: (product: IProduct) => void;
  decrease: (product: IProduct) => void;
  removeProduct: (product: IProduct) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType>(undefined!);

export default CartContext;
