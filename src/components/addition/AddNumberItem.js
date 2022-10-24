import {useState} from "react";

const AddNumberItem = () => {

    const [number, setNumber] = useState(0);
    const [sum, setSum] = useState(0);

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    }

    const addNumber = () => {
        setSum(parseInt(sum) + parseInt(number));
    }
    
    const subtractNumber = () => {
        setSum(parseInt(sum) - parseInt(number));
    }

    return (
        <article>
            <h3>Task 3: Let user decide number to add</h3>
            <input type="number" onChange={handleNumberChange}/>
            <button onClick={addNumber}>Add Number</button>
            <button onClick={subtractNumber}>Subtract Number</button>
            <p>The sum: {sum}</p>
        </article>
    )
}

export default AddNumberItem;