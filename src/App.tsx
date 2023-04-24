import React from 'react'
import './App.css'

// let name: string

// /* This is called union, is when I want to assign more than one type to a variable */
// let age: number | string

// age = 'Papito'
// age = 23

// /* -------------------------------------- */

// let isStudent: boolean
// let hobbies: string[] /* Array of strings, for number it must be number[] */
// let role: [number, string] /* Is going to contain one number and one string E.g: role = [1, "owner"] */

// let printName: (name: string) => never

/* Proper way to declare objects */

// type Person = {
//   name: string;
//   age?: number;
// }

// let person: Person = {
//   name: "Papolo",
//   age: 50
// }

// /* If I want to store an array of objects (In this case a person) */
// let lotsOfPeople: Person[]

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Taskify
      </span>
    </div>
  )
}

export default App
