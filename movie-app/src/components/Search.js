import React from 'react'
import {Form,Button} from 'react-bootstrap';
import { searchMovie } from '../api';



const Search = (q) => {
 

  if (q.length > 3) {
    const query =   searchMovie(q)
    console.log({query:query}) 
    
  }
   

 
  return (
    <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Cari"
      className="ms-5"
      aria-label="Search"
      onChange={({target}) => Search(target.value)}
    />
    <Button variant="success" className='ms-3'>Search</Button>
  </Form>
  )
}


export default Search
