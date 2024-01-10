import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Gallary from './components/Gallary'; 

function App() {
  return (
    <>
      <Header /> 
      <div className='main'>
        <Sidebar />
        <Gallary />
      </div>
    </>
  );
}

export default App;
