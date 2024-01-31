import useInputChange from "@application/hooks/useInputChange";
import { Result } from "@domain/models/Quiz";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

interface Props {
  result: Result;
  onNext: (selectedOption: string) => void;
}

const QuizQuestion = ({ result, onNext }: Props) => {
  const { value, onChange, resetState } = useInputChange("");
  const inputProps = { value, onChange };
  const { type, question, correct_answer, incorrect_answers } = result;

  const answers = incorrect_answers?.concat(correct_answer);

  const onClick = () => {
    onNext(value);
    resetState();
  };

  return (
    <Box display="flex" gap={2} alignItems="center" flexDirection="column">
      <Typography variant="h5" fontWeight="800" dangerouslySetInnerHTML={{ __html: question }} />
      <FormControl>
        {type === "text" && <TextField {...inputProps} />}
        {(type === "multiple" || type === "boolean") && answers && (
          <RadioGroup name="radio-group" {...inputProps}>
            {answers.map((answer, index) => (
              <FormControlLabel
                key={answer + index}
                value={answer}
                control={<Radio />}
                label={<p>{answer}</p>}
              />
            ))}
          </RadioGroup>
        )}
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        disabled={value === ""}
        style={{ width: "fit-content" }}
        onClick={onClick}
      >
        Next
      </Button>
    </Box>
  );
};

export default QuizQuestion;
