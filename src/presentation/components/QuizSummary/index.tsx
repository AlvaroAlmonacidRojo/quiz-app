import { Box, Button, Typography } from "@mui/material";

interface Props {
  correct: number;
  wrong: number;
  questionsAnswered: number;
  finalScore: number;
  onReset: () => void;
}
const QuizSummary = ({
  correct,
  wrong,
  questionsAnswered,
  finalScore,
  onReset,
}: Props) => {
  return (
    <Box display="grid" gap={2}>
      <Typography variant="h3">Summary</Typography>
      <Typography variant="h6" id="correct">
        Correct:{" "}
        <Typography variant="h6" component="span" fontWeight="700">
          {correct}
        </Typography>
      </Typography>
      <Typography variant="h6">
        Wrong:{" "}
        <Typography variant="h6" component="span" fontWeight="700">
          {wrong}
        </Typography>
      </Typography>
      <Typography variant="h6">
        Questions answered:{" "}
        <Typography variant="h6" component="span" fontWeight="700">
          {questionsAnswered}
        </Typography>
      </Typography>
      <Typography variant="h6">
        Final Score:{" "}
        <Typography variant="h6" component="span" fontWeight="700">
          {Math.round(finalScore)} %
        </Typography>
      </Typography>
      <Button variant="contained" color="primary" onClick={onReset}>
        Restart Quiz
      </Button>
    </Box>
  );
};

export default QuizSummary;
