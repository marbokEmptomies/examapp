import { Card, CardContent, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

interface ExamCardProps {
    exam: {
        id: number,
        title: string,
        completed: boolean,
        score: number | null;
        maxScore: number;
    };
    onClick: () => void;
}

const ExamCard: React.FC<ExamCardProps> = ({ exam, onClick }) => {
    console.log("EXAM: ", exam)
    return (
        <>
            <Card onClick={exam.completed ? undefined : onClick} style={{ cursor: exam.completed ? "default" : "pointer" }}>
                <CardContent>
                    <Typography variant="h6">{exam.title}</Typography>
                    <Typography>{exam.completed !== false ? `Pisteet: ${exam.score}/${exam.maxScore}` : 'Tekemättä'}</Typography>
                </CardContent>
            </Card>
            <Outlet />
        </>
    )
}

export default ExamCard;