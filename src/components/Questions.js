export const Quiestions = (props) => {
    return (
    <div className="question">
        <p>{props.question}</p>
        <div className="choices">
            <button>{props.choices[0]}</button>
            <button>{props.choices[1]}</button>
            <button>{props.choices[2]}</button>
            <button>{props.choices[3]}</button>
        </div>
        <hr/>
    </div>
    );
}