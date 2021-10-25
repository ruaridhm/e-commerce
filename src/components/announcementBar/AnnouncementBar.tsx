import { useState } from 'react';
import { Typography, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface IAnnouncementBarProps {
  text: string;
}

const AnnouncementBar = ({ text }: IAnnouncementBarProps) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };
  return (
    <Box
      color='secondary'
      sx={{
        display: visible ? 'flex' : 'none',
        alignItems: 'center',
      }}
    >
      <Typography
        variant='body2'
        sx={{
          flexGrow: 1,
          justifySelf: 'center',
          textAlign: 'center',
          paddingLeft: '40px',
        }}
      >
        {text}
      </Typography>
      <IconButton aria-label='Close' onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

export default AnnouncementBar;
