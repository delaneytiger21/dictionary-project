import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      <p className="navbar">DELANEY'S DICTIONARY</p>
      <div className="container">
        <main><Dictionary /></main>
      </div>
      <footer>
        <small>Coded by Delaney Tiger</small>
      </footer>

    </div >
  );
}
