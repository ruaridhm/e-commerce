import { useState } from 'react';
//MUI
import { Box, Container, IconButton, List, ListItem } from '@mui/material';
//Components
import CarouselCard from './CarouselCard';
//Icons
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';

const HeroCarousel = ({ carouselItems }: any) => {
  const [position, setPosition] = useState(0);
  const length = carouselItems.length;

  const handleChangePosition = (index: number) => {
    setPosition(index);
  };

  const handleNextDragPosition = () => {
    setPosition(position === length - 1 ? 0 : position + 1);
  };
  const handlePrevDragPosition = () => {
    setPosition(position === 0 ? length - 1 : position - 1);
  };

  if (!Array.isArray(carouselItems) || carouselItems.length <= 0) {
    return null;
  }

  const carouselPxValue = carouselItems.length * 10;
  console.log(carouselPxValue);
  return (
    <Container
      disableGutters
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        placeItems: 'center',
        m: 0,
        paddingTop: 1,
      }}
    >
      {carouselItems.map((carouselItem, index) => {
        return (
          <Box
            key={index}
            sx={
              index !== position
                ? {
                    opacity: 0,
                    transitionDuration: '1s ease',
                  }
                : {
                    opacity: 1,
                    transitionDuration: '1s',
                    transform: 'scale()1.08',
                  }
            }
          >
            {index === position && <CarouselCard {...carouselItem} />}
          </Box>
        );
      })}
      <List
        sx={{
          display: 'flex',
          position: 'absolute',
          top: '80%',
          right: '-10%',
        }}
      >
        {carouselItems.map((carouselItem, index) => {
          return (
            <ListItem key={index}>
              <IconButton
                onClick={() => {
                  handleChangePosition(index);
                }}
              >
                {position === index ? <CircleIcon /> : <CircleOutlinedIcon />}
              </IconButton>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default HeroCarousel;
