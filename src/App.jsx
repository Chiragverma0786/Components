import { useState } from 'react'
import Header from './components/header'
import Page1 from './pages/page1/page1'
import './App.css'
import Page3 from './pages/page3/page3'
import Page2 from './pages/page2/page2'
import Page4 from './pages/page4/page4'
import Page5 from './pages/page5/page5'

function App() {
  const [bgcolor, setBgcolor] = useState("#fff");
  return (
    <>
    <Header page1Style={bgcolor}/>
    <Page1 />
    <Page2 />
    <Page4 />
    <Page5 />
    </>
  )
}

export default App
