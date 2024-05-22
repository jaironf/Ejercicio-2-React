import './App.css'
import Counter from './Components/Counter.jsx/Counter'
import ProfName from './Components/ProfName/ProfName'

function App() {
  // const [counter, setCounter] = useState(0)

  return (
    
      <div>
        <Counter initialState={0} toAdd={1} substract={1}/>
        <Counter initialState={0} toAdd={2} substract={2}/>
        <Counter initialState={0} toAdd={3} substract={3}/>
        <ProfName/>
      </div>
       
  )
}

export default App
