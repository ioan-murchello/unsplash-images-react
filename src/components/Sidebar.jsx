import { debounce } from '../util/helpers';
import { useGlobalContext } from '../context';
import { useEffect } from 'react';
import {motion} from 'framer-motion'

let search;

const Sidebar = () => {
  const { setSearchTerm, isFind, searchHistory, setSearchHistory, setIsFind } =
    useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target && !e.target.value) return;
    setSearchTerm(e.target.value.trim() || 'islands');
    search = e.target.value.trim();
  };

  const debouncedOnChange = debounce(handleSubmit);

  useEffect(() => {
    if (!isFind || search === '' || search === undefined) {
      setIsFind(false);
      return;
    }

    if (isFind) {
      setSearchHistory((prev) => {
        const p = [...prev];
        const itemIn = p.filter((el) => el.text.includes(search));
        const newHistory = { id: prev.length + 1, text: search };

        if (itemIn.length > 0) {
          return prev;
        } 

        else if (prev.length < 1) {
          localStorage.setItem('history', JSON.stringify(newHistory));
          return [newHistory];
        } 

        else {
          const temp = [newHistory, ...prev];
          localStorage.setItem('history', JSON.stringify(temp));

          return temp;
        }
      });
    }

    setIsFind(false);
  }, [search, isFind, setSearchTerm]);

  let historyLength = searchHistory.length > 5 ? searchHistory.slice(0, 5) : searchHistory
 

  const onToggleHistory = (id) => {
    const arr = [...historyLength];
    const el = [...arr.filter((el) => el.id === id)];
    setSearchTerm(el[0].text);
  };

  const itemEL = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: {duration: 0.7}},
  };

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
        <motion.ul >
          {historyLength.length > 0 ? (
            historyLength.map((item) => {
              return (
                <motion.li variants={itemEL} initial='hidden' animate='show' key={item.id} onClick={() => onToggleHistory(item.id)}>
                  {item.text}
                </motion.li>
              );
            })
          ) : (
            <span>your history is empty</span>
          )}
        </motion.ul>
      </div>
    </aside>
  );
};

export default Sidebar;
