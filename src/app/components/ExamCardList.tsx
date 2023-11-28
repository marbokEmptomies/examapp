// ExamCardList.tsx
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import ExamCard from './ExamCard';
import { fetchInitialData } from '../../features/examApi';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';

function ExamCardList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get the exam state from the Redux store
  const examsById = useSelector((state: RootState) => state.exam);

  // Track whether data is available
  const [isDataAvailable, setIsDataAvailable] = useState<boolean>(false);

  useEffect(() => {
    // Dispatch the fetchInitialData action creator
    dispatch(fetchInitialData() as any)
      .then(() => {
        setIsDataAvailable(true);
      })
      .catch((error: any) => {
        // Handle error if needed
        setIsDataAvailable(false);
        console.error('Error fetching data: ', error);
      });
  }, [dispatch]);

  const handleExamClick = (examId: number) => {
    navigate(`/tentit/${examId}`);
  };

  return (
    <>
      <Box>
        <Typography variant="h4" mb={3}>
          Tentit:
        </Typography>
        <Box display="flex" gap={2}>
          {isDataAvailable ? (
            Object.values(examsById).map((exam) => (
              <ExamCard
                key={exam.id}
                exam={exam}
                onClick={() => handleExamClick(Number(exam.id))}
              />
            ))
          ) : (
            <Typography>Data not available</Typography>
          )}
        </Box>
      </Box>
      <Outlet />
    </>
  );
}

export default ExamCardList;
