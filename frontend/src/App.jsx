import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

const [jokes , setJokes ] = useState([]) // create empty array to store jokes.

useEffect(()=>{
  axios.get(`/api/jokes`)
  .then((response)=>{
     setJokes(response.data);
  }).catch((error)=>{
    console.log(error);
  })
})

  return (
    <>
      
      <h1> chai aur code </h1>
      <p>Jokes : {jokes.length} </p> {/* display number of jokes */} 

      {
        jokes.map((joke , index) => (
          <div key={index.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
  </>
  )
}
export default App