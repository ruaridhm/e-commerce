import { useReducer, FC } from 'react';
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import { IProduct } from './CartContext';
import {
  ADD_PRODUCT,
  CLEAR_CART,
  REMOVE_PRODUCT,
  INCREASE,
  DECREASE,
} from './types';

const CartState: FC = ({ children }) => {
  const initialState = {
    cartItems: [],
    //....
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);
  const addProduct = (product: IProduct) =>
    dispatch({ type: ADD_PRODUCT, payload: product });
  const increase = (product: IProduct) =>
    dispatch({ type: INCREASE, payload: product });
  const decrease = (product: IProduct) =>
    dispatch({ type: DECREASE, payload: product });
  const removeProduct = (product: IProduct) =>
    dispatch({ type: REMOVE_PRODUCT, payload: product });
  const clearCart = () => dispatch({ type: CLEAR_CART });

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        itemCount: state.itemCount,
        total: state.total,
        addProduct,
        increase,
        decrease,
        removeProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
