import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[]; /*Array of strings for number it must be number[] */
let role: [number, string] /*Is going to contain one number and one string E.g: role = [1, "owner"]*/

/*Proper way to declare objects*/

type person = {
  name: string;
  age: number;
}


function App() {

  return (
    <div className="App">
      <h1>TypeScript Tutorial</h1>
    </div>
  )
}

export default App
