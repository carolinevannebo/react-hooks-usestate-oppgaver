import {useState, useRef} from "react";

const SuperheroItem = () => {

    const [count, setCount] = useState(0);

    let [superheroArray, setSuperheroArray] = useState(JSON.parse(localStorage.getItem("Superheroes")) || []);
    const inputElement = useRef();

    const addSuperheroToLocalStorage = () => {
        setCount(count + 1);

        const input = inputElement.current.value;
        setSuperheroArray([...superheroArray, input]);
        inputElement.current.value = "";

        superheroArray.push(input);
        localStorage.setItem("Superheroes", JSON.stringify(superheroArray));
        superheroArray = JSON.parse(localStorage.getItem("Superheroes"));
    }

    return (
        <article>
            <h3>Task 4: Add superheroes</h3>
            <div>
                <label htmlFor="superhero-input">Superhero name</label>
                <input ref={inputElement} type="text" id="superhero-input"/>
                <button onClick={addSuperheroToLocalStorage}>Add Superhero</button>
            </div>
            <p>Number of superheroes: {count}</p>
            <ul>
                {superheroArray.map((superhero, index) => {
                    return <li key={index}>{superhero}</li>
                })}
            </ul>
        </article>
    )
}

export default SuperheroItem;