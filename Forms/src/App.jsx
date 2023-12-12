import { useRef } from 'react'
import './App.css'
import ControlledForm from './components/ControlledForm'
import UncontrolledForm from './components/UncontrolledForm'

function App() {
 const formRef = useRef({});

  return (
    <ControlledForm formRef = {formRef}/>
  )
}

export default App
