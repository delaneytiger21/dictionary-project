import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      <p className="navbar">Delaney's Dictionary</p>
      <div className="container">
        <main><Dictionary defaultKeyword="sunrise" /></main>
      </div>
      <footer>
        <small>Coded by Delaney Tiger</small>
      </footer>

    </div >
  );
}
