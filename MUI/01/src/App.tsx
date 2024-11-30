import { useState } from 'react'
import './App.css'
import Navbar from '../src/components/navbar'
import { CssBaseline } from '@mui/material'
import ToDoList from './components/ToDoList'
import {data} from './db/data'

function App() {

  return (
    <>
      <CssBaseline />
      <Navbar />
      <ToDoList data={data} />
    </>
  )
}

export default App
