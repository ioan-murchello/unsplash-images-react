import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from '../context';
import Loader from './Loader';
import { useEffect, useState } from 'react';

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallary = () => {
  const { searchTerm } = useGlobalContext(); 

  const {
    data: { results = [] } = {},
    isLoading,
    isError,
    error, 
  } = useQuery({
    queryKey: ['images', searchTerm], 
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  if (isLoading) {
    return (
      <section>
        <h4>loading...</h4>
      </section>
    );
  }

  if (isError) {
    return (
      <section>
        <h4>{error.message}</h4>
      </section>
    );
  }

   
 if(results.length < 1){
    return <section><h4>No results found...</h4></section>
     
 }

   

  return (
    <section className='gallary'>
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <div key={item.id}>
            <img src={url} alt={item.alt_de} />
          </div>
        );
      })}
    </section>
  );
};

export default Gallary;
