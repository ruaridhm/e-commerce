import { Link } from 'react-router-dom';
//MUI
import { Typography, List, ListItem } from '@mui/material';
//Components
import Layout from '../components/Layout';
//Context
import { useAuth } from '../context/auth/AuthContext';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import ScrollButton from '../components/ScrollButton/ScrollButton';

export interface ICarouselItems {
  image: string;
  text: string;
  subText: string;
  buttonText: string;
  link: string;
  price: number;
}

const carouselItems: ICarouselItems[] = [
  {
    image: './fjalraven.jpg',
    text: 'Fjallraven',
    price: 109.95,
    subText: 'Foldsack No. 1 Backpack, Fits 15 Laptops',
    buttonText: 'Shop Fjallraven',
    link: '',
  },
  {
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    text: 'Slim Fit T-Shirts',
    price: 22.3,
    subText: 'three-button henley placket',
    buttonText: "Shop Men's Clothing",
    link: '',
  },
  {
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    text: 'Mens Cotton Jacket',
    price: 55.99,
    subText: 'great outerwear jackets for Spring/Autumn/Winter',
    buttonText: 'Shop Jackets',
    link: '',
  },
  {
    text: 'Mens Casual Slim Fit',
    price: 15.99,
    subText: 'The color could be slightly different.',
    buttonText: 'Shop Shirts',
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    link: '',
  },
  // {
  //   text: 'Mens Casual Slim Fit',
  //   price: 15.99,
  //   subText: 'The color could be slightly different.',
  //   buttonText: 'Shop Shirts',
  //   image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
  //   link: '',
  // },
];

const HomePage = () => {
  const { currentUser } = useAuth();
  return (
    <Layout>
      <HeroCarousel carouselItems={carouselItems} />
      <ScrollButton />
      <ProductGrid {...carouselItems[1]} direction='left' />
      <ProductGrid {...carouselItems[2]} direction='right' />
      <ProductGrid {...carouselItems[3]} direction='left' />
    </Layout>
  );
};
export default HomePage;
