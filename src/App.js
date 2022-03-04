import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Headercomponent from './components/HeaderComponent';
import Footercomponent from './components/FooterComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import CreateAndUpdateEmployeeComponent from './components/CreateAndUpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>

        <Headercomponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListEmployeeComponent />}></Route>
            <Route path="/employees" element={<ListEmployeeComponent />}></Route>
            {/*    <Route path="/add-employee" element={<CreateEmployeeComponent />}></Route>
            <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />}></Route> */}
            <Route path="/manage-employee/:id" element={<CreateAndUpdateEmployeeComponent />}></Route>
            <Route path="/view-employee/:id" element={<ViewEmployeeComponent />}></Route>

          </Routes>
        </div>
        <Footercomponent />

      </Router>
    </div>
  );
}

export default App;
