import { debounce } from '../util/helpers';
import { useGlobalContext } from '../context';

const Sidebar = () => {
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target && e.target.value) return;
    setSearchTerm(e.target.value || 'islands');
  };

  const debouncedOnChange = debounce(handleSubmit);

  return (
    <aside>
      <h1>unsplash images</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          placeholder='cat'
          onChange={debouncedOnChange}
        />
        <button type='submit'>search</button>
      </form>
    </aside>
  );
};

export default Sidebar;
