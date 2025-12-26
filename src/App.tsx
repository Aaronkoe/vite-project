import Message from './Message'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Board from './tic_tac_toe/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <Message />
      </div>
      <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Tic Tac Toe</h2>
        <Board />
      </div>
    </div>
  )
}

export default App
