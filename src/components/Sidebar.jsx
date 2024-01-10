import { debounce } from '../util/helpers';
import { useGlobalContext } from '../context';

const Sidebar = () => {

  const { setSearchTerm } = useGlobalContext();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target && !e.target.value) return;
    setSearchTerm(e.target.value || 'islands')
  };
  
  const debouncedOnChange = debounce(handleSubmit);
  
  return (
    <aside>
      <h1>unsplash images</h1>
      <div className='form-wrapper'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='search'
            placeholder='islands'
            onChange={debouncedOnChange}
          />
        </form>
        <button type='submit'>search</button>
      </div>
      <div className='history'>
      </div>
    </aside>
  );
};

export default Sidebar;
