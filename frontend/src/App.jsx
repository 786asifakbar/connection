
import './App.css'

function App() {
const [jokes , setJokes ] = useState([])

  return (
    <>
      <h1> chai aur code </h1>
      <p>Jokes : {jokes.length}</p>



{
  jokes.map((jokeObj) => (
    <div key={jokeObj.id}>
      <h3>Setup: {jokeObj.setup}</h3>
      <p>Punchline: {jokeObj.punchline}</p>
      <hr />
    </div>
  ))
}
    </>
  )
}

export default App
