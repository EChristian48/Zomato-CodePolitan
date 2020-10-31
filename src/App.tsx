import React from 'react'
import { Helmet } from 'react-helmet'
import { Nav, Navbar } from 'react-bootstrap'

function App() {
  return (
    <>
      <Helmet title='Zomato CodePolitan' />

      <header>
        <Navbar bg='primary' expand='lg' sticky='top'>
          <Navbar.Brand href='#'>Zomato CodePolitan</Navbar.Brand>
        </Navbar>
      </header>
    </>
  )
}

export default App
