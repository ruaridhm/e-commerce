import { IProduct } from './CartContext';
import {
  ADD_PRODUCT,
  CLEAR_CART,
  DECREASE,
  INCREASE,
  REMOVE_PRODUCT,
} from './types';

type Actions =
  | {
      type: 'ADD_PRODUCT';
      payload: IProduct;
    }
  | {
      type: 'CLEAR_CART';
    }
  | {
      type: 'DECREASE';
      payload: IProduct;
    }
  | {
      type: 'INCREASE';
      payload: IProduct;
    }
  | {
      type: 'REMOVE_PRODUCT';
      payload: IProduct;
    };

const storeCartItems = (cartItems: IProduct[]) => {
  const cart = cartItems.length > 0 ? cartItems : [];
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const sumItems = (cartItems: IProduct[]) => {
  storeCartItems(cartItems);
  return {
    itemCount: cartItems.reduce((total, prod) => total + prod.quantity!, 0),
    total: cartItems.reduce(
      (total, prod) => total + prod.price * prod.quantity!,
      0
    ),
  };
};

const CartReducer = (state: any, action: Actions) => {
  switch (action.type) {
    case ADD_PRODUCT:
      // check if item is in cart
      if (
        !state.cartItems.find((item: IProduct) => item.id === action.payload.id)
      ) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };
    case INCREASE:
      const increaseIndex = state.cartItems.findIndex(
        (item: IProduct) => item.id === action.payload.id
      );
      state.cartItems[increaseIndex].quantity!++;

      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };
    case DECREASE:
      const decreaseIndex = state.cartItems.findIndex(
        (item: IProduct) => item.id === action.payload.id
      );
      const product = state.cartItems[decreaseIndex];
      if (product.quantity! > 1) {
        product.quantity!--;
      }

      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };
    case REMOVE_PRODUCT:
      const newCartItems = state.cartItems.filter(
        (item: IProduct) => item.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: [...newCartItems],
        ...sumItems(newCartItems),
      };
    case CLEAR_CART:
      localStorage.removeItem('cart');
      return {
        cartItems: [],
        itemCount: 0,
        total: 0,
      };
    default:
      return state;
  }
};

export default CartReducer;
