import Score from './Score';
import './Student.css';

export default function Student({student}) {
    return (

        <ul className="list">
            <li className="name">Name: {student.name}</li>
            <hr />
            <li className="bio">Bio: {student.bio}</li>
            { student.scores.map((x, index) => (
                //! ABOVE: Mapping two layers deep!
                //! Look at data: we need to map the 'scores' for each 'student'
            <Score score={x} index={index} key = {index} />
            ))  
            }
        </ul>
    )
}