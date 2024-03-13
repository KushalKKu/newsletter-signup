import './App.css';
import Sign from './components/Sign'
import Thankyou from './components/Thankyou';
import { Route,Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
<>
<BrowserRouter basename="/page">
<Routes>
  <Route path='/' element={<Sign/>}/>
  <Route path='/Thankyou/:email' element={<Thankyou/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
