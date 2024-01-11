import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from '../context';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallary = () => {
  const { searchTerm, setItemModal, setIsOpen, setIsFind, isFind } = useGlobalContext();
 
  const {
    data: { results = [] } = {},
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  useEffect(() => {
    if (results.length > 0) {
      setTimeout(() => { 
        setIsFind(true);
      }, 1500);
    }

      setIsFind(false);
    
  }, [isSuccess, results, setIsFind, searchTerm]);
 
  if (isLoading) {
    return (
      <section style={{paddingTop: '20px'}}>
        <h4>loading...</h4>
      </section>
    );
  }

  if (isError) {
    return (
      <section style={{paddingTop: '20px'}}>
        <h4>{error.message}</h4>
      </section>
    );
  }

  if (results.length < 1) {
    return (
      <section style={{paddingTop: '20px'}}>
        <h4>No results found...</h4>
      </section>
    );
  }

  // form motion.styles
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemAnimate = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  //======
  return (
    <>
      <motion.section
        variants={container}
        initial='hidden'
        animate='show'
        className='gallary'
      >
        {results.map((item) => {
          const url = item?.urls?.regular;
          return (
            <motion.div
              variants={itemAnimate}
              key={item.id}
              onClick={() => {
                setItemModal(item);
                setIsOpen(true);
              }}
            >
              <img src={url} alt={item.alt_de} />
            </motion.div>
          );
        })}
      </motion.section>
    </>
  );
};

export default Gallary;
