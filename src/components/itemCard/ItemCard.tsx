import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useContext } from 'react';
import CartContext, { IProduct } from '../../context/cart/CartContext';

const ItemCard: React.FunctionComponent<IProduct> = (props) => {
  const { title, price, description, image } = props;

  const { addProduct, cartItems, increase } = useContext(CartContext);

  const isInCart = (product: IProduct, cartItems: IProduct[] | []) => {
    return cartItems.find((item) => item.id === product.id);
  };

  const itemInCart = isInCart(props, cartItems);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component='img' height='140' image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            €{price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {!itemInCart ? (
          <Button
            size='small'
            color='primary'
            onClick={() => addProduct(props)}
          >
            Add to cart
          </Button>
        ) : (
          <Button size='small' color='primary' onClick={() => increase(props)}>
            ADD MORE
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ItemCard;
