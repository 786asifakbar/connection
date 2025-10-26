import './App.css'


function App() {
const [jokes , setJokes ] = useState([]) // create empty array to store jokes.

  return (
    <>
      
      <h1> chai aur code </h1>
      <p>Jokes : {jokes.length} </p> // value of jokes length 

      {
        jokes.map((joke , index) => (
          <div key={index,id}>
            <p>{joke.title}</p>
            <p>{joke.content}</p>
          </div>
        ))
      }



    
    
  
   
  </>
  )
}
export default App