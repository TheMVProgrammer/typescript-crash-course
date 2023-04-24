import React, { useState } from 'react'
import './App.css'
import InputField from './assets/components/InputField'
import { ToDo } from './model'

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>('')
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()

    if(toDo) {
      setToDos([...toDos, { id: Date.now(), toDo: toDo, isDone: false }])
      setToDo("")
    }
  }

  console.log(toDos);

  return (
    <div className="App">
      <span className="heading">Taskify
      </span>
    <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
    {toDos.map(todo => <li>{todo.toDo}</li>)}
    </div>
  )
}

export default App
