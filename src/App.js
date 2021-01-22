import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="app-scheme://sample-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          1の画面に飛ぶよ
        </a>
        <a
          className="App-link"
          href="app-scheme://sample-app-sub"
          target="_blank"
          rel="noopener noreferrer"
        >
          2の画面の方に飛ぶよ
        </a>
      </header>
    </div>
  );
}

export default App;
