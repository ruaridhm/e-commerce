import { Box, Typography } from '@mui/material';
import ItemCard from '../components/itemCard/ItemCard';
import Layout from '../components/Layout';
import { dummyItems } from '../dummyItems';

const ShopPage = () => {
  return (
    <Layout>
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
        {dummyItems.map((product) => {
          return <ItemCard {...product} key={product.id} />;
        })}
      </Box>
    </Layout>
  );
};

export default ShopPage;
