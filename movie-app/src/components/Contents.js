import React from 'react'
import { Card } from 'react-bootstrap';
import './Content.css';

import { getMoviesList} from '../api';
import { useEffect, useState } from 'react';





function Contents() {
  const [popularMovies, setPopularMovies] = useState([])
  useEffect(()=>{

    getMoviesList().then((result)=>{
      setPopularMovies(result)
    })
  },[])
  console.log({popularMovies: popularMovies})
  return popularMovies.map((movie,i) =>{
    return (

                  <Card style={{ width: '20rem',backgroundColor:'black'}} >
                    <Card.Img variant='top' src={`${process.env.REACT_APP_BASEIMAGEURL}/${movie.poster_path}`} />
                    <Card.Body className='cardbody bg-success'>
                      <Card.Title>{movie.name}</Card.Title>
                    
                      <Card.Text>
                        {movie.vote_average}
                        {movie.overview}
                      </Card.Text>
                    
                    </Card.Body>
                  </Card>
                
        
               

  
     
      
         
        

          
      
     )
  
   }
  )
}

export default Contents;
