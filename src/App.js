import CounterItem from "./components/counter/CounterItem";
import WordStateItem from "./components/wordstate/WordstateItem";
import AddNumberItem from "./components/addition/AddNumberItem";
import SuperheroItem from "./components/superhero/SuperheroItem";
import MovieItem1 from "./components/movies/MovieItem1";
import './App.css';

function App() {
  return (
    <main>
      <h1 className="title">Using React Hooks</h1>
      <section className="container">
        <CounterItem />
        <WordStateItem />
        <AddNumberItem />
        <SuperheroItem />
        <MovieItem1 />
      </section>
    </main>
  );
}

export default App;
