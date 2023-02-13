import Backdrops from "./components/Backdrops";
import Modal from "./components/Modal";
import Todo from "./components/Todo";


function App() {

  return <div>
    <h1>MY TODOS</h1>
    <Todo text = 'react'  />
    <Todo text = 'nextjs' />
    <Todo text = 'nodejs' />
  </div>
}

export default App;
