import { Box, Button, Grid, Typography } from '@mui/material';
import { ICarouselCardProps } from '../HeroCarousel/CarouselCard';
import { useHistory } from 'react-router-dom';

interface IImageGridItemProps {
  image: string;
}

const ImageGridItem = ({ image }: IImageGridItemProps) => {
  return (
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          height: '100%',
          width: '100%',
        }}
      />
    </Grid>
  );
};

interface IDetailGridItemProps {
  text: string;
  subText: string;
  buttonText: string;
  link: string;
}

const DetailGridItem = ({
  text,
  subText,
  buttonText,
  link,
}: IDetailGridItemProps) => {
  const history = useHistory();
  const handleClick = () => history.push(link);

  return (
    <Grid
      item
      xs={12}
      md={6}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h3'>{text}</Typography>
      <Typography variant='body1'>{subText}</Typography>
      <Button variant='contained' sx={{ mt: 1 }} onClick={handleClick}>
        {buttonText}
      </Button>
    </Grid>
  );
};

interface IProductGridProps extends ICarouselCardProps {
  direction: 'left' | 'right';
}

const ProductGrid = ({
  image,
  text,
  subText,
  buttonText,
  link,
  direction,
}: IProductGridProps) => {
  return (
    <Grid container spacing={2} sx={{ height: '33vw' }}>
      {direction === 'left' ? (
        <ImageGridItem image={image} />
      ) : (
        <DetailGridItem
          text={text}
          subText={subText}
          buttonText={buttonText}
          link={link}
        />
      )}
      {direction === 'right' ? (
        <ImageGridItem image={image} />
      ) : (
        <DetailGridItem
          text={text}
          subText={subText}
          buttonText={buttonText}
          link={link}
        />
      )}
    </Grid>
  );
};
export default ProductGrid;
