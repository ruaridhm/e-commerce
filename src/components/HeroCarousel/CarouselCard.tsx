import { Box, Button, Container, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

export interface ICarouselCardProps {
  image: string;
  text: string;
  subText: string;
  buttonText: string;
  link: string;
}

const CarouselCard = ({
  image,
  text,
  subText,
  buttonText,
  link,
}: ICarouselCardProps) => {
  const history = useHistory();
  const handleClick = () => history.push(link);

  console.log('image', image);

  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '75% 50%',
        backgroundSize: 'contain',
        height: '100vh',
        width: '98vw',
        cursor: 'grab',
      }}
    >
      <Container sx={{ pt: 40 }}>
        <Typography variant='h2'>{text}</Typography>
        <Typography variant='body1'>{subText}</Typography>
        <Button variant='contained' sx={{ mt: 1 }} onClick={handleClick}>
          {buttonText}
        </Button>
      </Container>
    </Box>
  );
};

export default CarouselCard;
