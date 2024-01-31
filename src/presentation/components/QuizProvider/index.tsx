import useFetch from "@application/hooks/useFetch";
import { quizRepository } from "@application/services";
import { Quiz } from "@domain/models/Quiz";
import { Card, CircularProgress } from "@mui/material";
import QuizWizard from "../QuizWizard";

const QuizProvider = () => {
  const { data, loading } = useFetch<Quiz>(quizRepository.get);
  
  return (
    <Card>
      {loading && <CircularProgress role="progressbar" />}
      {data && <QuizWizard questions={data.results} />}
    </Card>
  );
};

export default QuizProvider;
