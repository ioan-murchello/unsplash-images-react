import { useGlobalContext } from '../context';
import { BsSun, BsMoonFill } from 'react-icons/bs';



const Header = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <header>
      <div className='header-logo'>U-Images</div>
      <button className='dark-toggle' onClick={toggleDarkTheme}>
        {isDarkTheme ? <BsSun className='sun' /> : <BsMoonFill className='moon' />}
      </button>
    </header>
  );
};

export default Header;
