import { Box, Typography } from '@mui/material';
import ItemCard from '../components/itemCard/ItemCard';
import { dummyItems } from '../dummyItems';

const ShopPage = () => {
  return (
    <>
      <Typography variant='h2'>Shop</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'space-around',
          width: '90vw',
        }}
      >
        {dummyItems.map((item) => {
          return <ItemCard item={item} key={item.id} />;
        })}
      </Box>
    </>
  );
};

export default ShopPage;
