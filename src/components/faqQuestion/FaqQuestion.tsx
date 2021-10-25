import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandMore from './Expand';

interface IFaqQuestionProps {
  question: string;
  answer: string;
}

const FaqQuestion = ({ question, answer }: IFaqQuestionProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card onClick={handleExpandClick}>
      <Box sx={{ display: 'flex' }}>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <CardHeader title={question} />
      </Box>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography variant='body2'>{answer}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default FaqQuestion;
