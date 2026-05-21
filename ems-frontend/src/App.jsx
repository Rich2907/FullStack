
import './App.css'
import FooterComponent from './components/FooterComponent'

import Header from './components/Header'
import { ListEmployeeComponents } from './components/ListEmployeeComponents'
import { BrowserRouter,Routes,Route} from 'react-router-dom'



function App() {
 
  return (
    <BrowserRouter>
      <>
        <Header/>
        <Routes>
          <Route path="/" element={<ListEmployeeComponents />} />
           <Route path="/employees" element={<ListEmployeeComponents />} />
        </Routes>
        <FooterComponent/>
      </>
    </BrowserRouter>

  )
}

export default App
