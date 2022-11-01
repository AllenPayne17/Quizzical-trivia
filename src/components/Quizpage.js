export const Quizpage = (props) => {

    console.log(props.choices)
    return (
        <div className="questions-container">
            <div className="question">
                <p>{props.question}</p>
            </div>
            <div className="choices-container">
                <button>{props.choices[0]}</button>
                <button>{props.choices[1]}</button>
                <button>{props.choices[2]}</button>
                <button>{props.choices[3]}</button>
            </div>
        </div>
    );
}