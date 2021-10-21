import { ICartActions, ICartState } from './CartContext';

export const cartReducer = (state: ICartState, action: ICartActions) => {
  let item = action.payload;
  let items = { ...state.items };

  switch (action.type) {
    case 'add_item':
      if (items[item.name]) {
        items[item.name].push(item);
      } else {
        items[item.name] = [item];
      }

      return { ...state, items };
    case 'remove_item':
      items[item.name].pop();

      if (items[item.name].length === 0) delete items[item.name];

      return { ...state, items };
    default:
      return state;
  }
};
