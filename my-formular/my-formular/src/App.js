import React from 'react'
import data from "./data"
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [paragraphs, setParagraphs] = useState([])


  const submitForm = (e) => {
    e.preventDefault()
    let amount = parseInt(count)


    // kontrola krajních hodnot
    if (amount < 0){
      amount = 1
    } else if (amount > 5){
      amount = 5
    }


    setParagraphs(data.slice(0, amount))
  }


  return (
    <section className="form-section">
      <h1>Lorem ipsum generátor</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="paragraphs">Odstavce:</label>
        <input type="number" id="paragraphs" onChange={ (e) => {setCount(e.target.value)} }/><br />
        <input type="submit" value="Vygenerovat"/>
      </form>


      <article>
        {
          paragraphs.map( (oneParagraph, index) => {
            return <p key={index}>{oneParagraph}</p>
          })
        }
      </article>
    </section>
  )
}


export default App










//const App = () => {
  //const [fullName, setFullName] = useState("")
  //const [email, setEmail] = useState("")
  //const [age, setAge] = useState("")


  //const [oneUser, setOneUser] = useState({fullName: "", email: "", age: ""})
  //const [users, setUsers] = useState([])

 