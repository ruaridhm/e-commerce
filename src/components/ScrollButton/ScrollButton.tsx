import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IconButton } from '@mui/material';

const ScrollButton = () => {
  return (
    <IconButton
      sx={{
        borderRadius: '50%',
        appearance: 'button',
        boxShadow: '0 2px 10px rgb(54 54 54 / 15%)',
      }}
    >
      <KeyboardArrowDownIcon />
    </IconButton>
  );
};

export default ScrollButton;
