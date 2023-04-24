import './styles.css'
import React from 'react'

interface Props {
  toDo: string
  setToDo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ toDo, setToDo, handleAdd }) => {
  return (
    <form className='input' onSubmit={(e) => handleAdd(e)}>
      <input type='input' value={toDo} onChange={(e) => setToDo(e.target.value)} placeholder='Enter a task' className='input__box'/>
      <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField
