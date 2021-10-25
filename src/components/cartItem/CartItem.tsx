import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { IProduct } from '../../context/cart/CartContext';

export interface ICartItemComponentProps extends IProduct {
  increase: any;
  decrease: any;
  removeProduct: any;
}

const CartItemComponent = (props: ICartItemComponentProps) => {
  const {
    title,
    image,
    price,
    quantity,
    id,
    description,
    increase,
    decrease,
    removeProduct,
  } = props;
  const product = { title, image, price, quantity, id, description };
  return (
    <Card>
      <CardContent>
        <Typography variant='h5'>
          {title} X {quantity}
        </Typography>
        <Typography>${price * quantity!}</Typography>
      </CardContent>

      <CardActions>
        <Button onClick={() => increase(product)}>Increase</Button>
        <Button color='primary' onClick={() => removeProduct(product)}>
          Remove one from cart
        </Button>
        <Button onClick={() => decrease(product)}>Decrease</Button>
      </CardActions>
    </Card>
  );
};

export default CartItemComponent;
