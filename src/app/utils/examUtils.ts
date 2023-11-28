export interface ExamState {
    id: number;
    title: string;
    completed: boolean;
    score: number;
    maxScore: number;
    questions: string[];
    answers: string[];
  }
  
  export const generateRandomExam = (): ExamState => {
    return {
      id: Math.floor(Math.random() * 1000),
      title: 'Random Exam',
      completed: false,
      score: 0,
      maxScore: 100,
      questions: [],
      answers: [],
    };
  };
  