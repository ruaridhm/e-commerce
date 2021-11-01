import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
        <IconButton onClick={() => increase(product)}>
          <AddIcon />
        </IconButton>
        <Button color='primary' onClick={() => removeProduct(product)}>
          Remove from cart
        </Button>
        <IconButton onClick={() => decrease(product)}>
          <RemoveIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CartItemComponent;
