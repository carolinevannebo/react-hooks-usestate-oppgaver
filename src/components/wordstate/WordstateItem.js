import { useState } from "react";

const WordStateItem = () => {

    const [word, setWord] = useState("");
    
    const handleWordChange = (e) => {
        setWord(e.target.value);
    }

    return (
        <article>
            <h3>Task 2: A word in state</h3>
            <label htmlFor="input">Word</label>
            <input id="input" type="text" onChange={handleWordChange} />
            <p>The word in the state: {word}</p>
        </article>
    )
}

export default WordStateItem;