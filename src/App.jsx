import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Gallary from './components/Gallary'; 
import Modal from './components/Modal';
import { useGlobalContext } from './context';

function App() {
  const{isOpen} = useGlobalContext()
  return (
    <>
      {isOpen && <Modal />}
      <Header />
      <div className='main'>
        <Sidebar />
        <Gallary />
      </div>
    </>
  );
}

export default App;
