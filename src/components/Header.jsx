import { useGlobalContext } from '../context';
import { BsSun, BsMoonFill } from 'react-icons/bs';



const Header = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <header>
      <div className='header-logo'>Logo</div>
      <button className='dark-toggle' onClick={toggleDarkTheme}>
        {isDarkTheme ? <BsSun /> : <BsMoonFill />}
      </button>
    </header>
  );
};

export default Header;
