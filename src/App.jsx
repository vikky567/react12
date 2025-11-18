import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import A from './components/A'
import { ErrorBoundary } from 'react-error-boundary'
import B from './components/B'

function ErrorFallBack(error){
  return (
  <>
  <p>Something went wrong: {error.message} </p>
  </>
  );
}
function App() {
    return (
    <>
    <A />
    <B />
   </>

   
  )
}

export default App
