import {useState} from 'react'

function App() {
  const [toDo, setTodo] = useState("")
  const [toDos, setTodos] = useState([])
  const onChange = (event) => {
    setTodo(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (toDo === '') {
      return
    }
    setTodos(currentArry => [toDo, ...currentArry])
    setTodo('')
  }
  console.log(toDos)
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={toDo}
          onChange={onChange}
          placeholder="Whrite your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  )
}

export default App
