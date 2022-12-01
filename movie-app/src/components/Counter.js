import { useState } from "react";



import React from 'react'

function Counter() {
  const [search,setSearch]= useState()

  return (
    <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Cari"
      className="ms-5"
      aria-label="Search"
      onChange={({target}) => search(target.value)}
    />
    <Button variant="success" className='ms-3'>Search</Button>
  </Form>
  )
}

export default Counter;