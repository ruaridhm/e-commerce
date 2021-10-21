import { createContext } from 'react';

export interface IItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export const initialCartState: ICartState = {
  items: {},
};

export interface ICartActions {
  type: 'add_item' | 'remove_item';
  payload: IItem;
}

export interface ICartState {
  items: { [key: string]: IItem[] };
}

export interface ICartContextProps {
  cartState: ICartState;
  cartDispatch: React.Dispatch<ICartActions>;
}

const CartContext = createContext<ICartContextProps>({
  cartState: initialCartState,
  cartDispatch: () => {},
});

export const CartContextConsumer = CartContext.Consumer;
export const CartContextProvider = CartContext.Provider;
export default CartContext;
