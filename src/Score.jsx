import './Score.css';
export default function Score({score}) {
    return (
        <>
            <li className="score">score: {score.score}</li>
            <li className="date">date: {score.date}</li>
        </>
    )
}