
import './App.css'
import FooterComponent from './components/FooterComponent'
import EmployeeComponent from './components/EmployeeComponent'
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
           <Route path="/add-employee" element={<EmployeeComponent />} />
           <Route path="/update-employee/:id" element={<EmployeeComponent />} />
        </Routes>
        <FooterComponent/>
      </>
    </BrowserRouter>

  )
}
//checking git

export default App
