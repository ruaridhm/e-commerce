import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React, { useContext } from 'react';
import CartContext, { IItem } from '../../context/cart/CartContext';

export interface ICartItemComponentProps {
  item: IItem;
  quantity: number;
}

const CartItemComponent: React.FunctionComponent<ICartItemComponentProps> = (
  props
) => {
  const { title, price, image } = props.item;
  const { quantity } = props;
  const cartContext = useContext(CartContext);

  return (
    <Card>
      <CardContent>
        <Typography variant='h5'>
          {title} X {quantity}
        </Typography>
        <Typography>${price * quantity}</Typography>
      </CardContent>
      <CardActionArea>
        <CardActions>
          <Button
            color='primary'
            onClick={() =>
              cartContext.cartDispatch({
                type: 'remove_item',
                payload: props.item,
              })
            }
          >
            Remove one from cart
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default CartItemComponent;
