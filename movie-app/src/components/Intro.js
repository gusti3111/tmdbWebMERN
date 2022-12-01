import React,{useEffect, useState} from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
import "./intro.css"

function Intro() {
  // Name : getter
  // setName: setter
  const [Name,setName] = useState(0)

  // useEffect for rendering to browser
  useEffect(()=>{
    console.log(window)

  },[Name])


  return (
    <div className='intro'>
      <h1 className='name'>I have {Name} name</h1>
      <ButtonToolbar>
      <Button bsStyle="primary" onClick={() => setName((prev) => prev + 1)}>add Name</Button>


      </ButtonToolbar>
     
    </div>
  )
}

export default Intro