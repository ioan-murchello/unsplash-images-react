import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Gallary from './components/Gallary';

function App() {
  return (
    <main>
      <Header />
      <div className='container'>
        <div className='main-wrapper'>
          <aside className='aside'>
            <Sidebar />
          </aside>
          <Gallary />
        </div>
      </div>
    </main>
  );
}

export default App;
