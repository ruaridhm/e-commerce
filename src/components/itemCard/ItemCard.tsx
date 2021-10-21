import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CartContext, { IItem } from '../../context/cart/CartContext';
import { useContext } from 'react';

interface IItemCardProps {
  item: IItem;
}

const ItemCard: React.FunctionComponent<IItemCardProps> = (props) => {
  const { title, price, description, category, image, rating } = props.item;

  const cartContext = useContext(CartContext);
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
        <Button
          size='small'
          color='primary'
          onClick={() =>
            cartContext.cartDispatch({ type: 'add_item', payload: props.item })
          }
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
