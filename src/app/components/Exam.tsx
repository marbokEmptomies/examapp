import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../store';
import { ExamState } from '../utils/examUtils';
import { Box, Card, CardContent, Typography } from '@mui/material';

const Exam: React.FC = () => {
    const { examId } = useParams<{ examId: string | undefined }>();

    console.log("Exam id: ", examId)
  
    // Get the exam state from the Redux store
    const examsById = useSelector((state: RootState) => state.exam) as { [key: string]: ExamState };

    console.log("Redux state: ", examsById)

    const exam = examsById[examId || ''];
  
    return (
      <Box>
        <Card>
          <CardContent>
            <Typography variant="h5">{exam?.title}</Typography>
            <Typography>{`Maksimipisteet: ${exam?.maxScore}`}</Typography>
          </CardContent>
        </Card>
      </Box>
    );
  };

export default Exam;
