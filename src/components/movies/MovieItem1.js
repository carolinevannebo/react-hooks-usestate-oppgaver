import { useState, useRef } from "react";

const MovieItem1 = () => {

    const [count, setCount] = useState(0);

    let [movieArray, setMovieArray] = useState(JSON.parse(localStorage.getItem("Movies")) || []);
    
    const titleElement = useRef();
    const categoryElement = useRef();

    let titleToPresent = "";

    const addMovieToLocalStorage = () => {
        setCount(count + 1);

        const inputTitle = titleElement.current.value;
        const inputCategory = categoryElement.current.value;

        const movieObject = { // er visst ikke lov med objekter?? hva faen
            title: inputTitle,
            category: inputCategory
        }

        setMovieArray([...movieArray, movieObject.toString()]);

        titleElement.current.value = "";
        categoryElement.current.value = "";

        movieArray.push(movieObject); // føles redundant men må være med for at det skal fungere på første klikk og ikke andre??
        localStorage.setItem("Movies", JSON.stringify(movieArray));
        movieArray = JSON.parse(localStorage.getItem("Movies"));

        titleToPresent = movieArray.slice(-1)[0].title; //blir ikke satt/funker ikke
    }

    return (
        <article>
            <h3>Task 2: A movie object, version 1</h3>
            <div>
                <label htmlFor="title">Title</label>
                <input ref={titleElement} type="text" id="title"/>
                <label htmlFor="category">Category</label>
                <input ref={categoryElement} type="text" id="category"/>
                <button onClick={addMovieToLocalStorage}>Add Movie</button>
            </div>
            <div>
                <h3>Title: {titleToPresent}</h3>
                <p>Category: {movieArray.map((movie) => movie.category)}</p>
            </div>    
            <p>Number of movies: {count}</p>
        </article>
    )
};

export default MovieItem1;