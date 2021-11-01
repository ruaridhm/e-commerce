import { Box, Typography } from '@mui/material';
import ItemCard from '../components/ItemCard/ItemCard';
import Layout from '../components/Layout';
import { dummyItems } from '../dummyItems';

const ShopPage = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'space-around',
          width: '90vw',
          pt: 1,
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
