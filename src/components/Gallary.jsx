
import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import { useGlobalContext } from "../context";

const url =
  `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`;

const Gallary = () => {

    const {searchTerm} = useGlobalContext()

    const res = useQuery({
        queryKey:['images',searchTerm],
        staleTime: 4000,
        queryFn: async () => {

            const result = await axios.get(`${url}&query=${searchTerm}`);

            return result.data
        },
         
    })

    if(res.isLoading){
        return <section>
            <h4>Loading...</h4>
        </section>
    }

    if(res.isError){
        return <section>
            <h4>There was an error...</h4>
        </section>
    }

    const results = res.data.results;
    if(results.length < 1){
        return <section>
            <h4>No results found...</h4>
        </section>
    }

  return (
    <section className="gallary">
        {results.map(item => {
            const url = item?.urls?.regular
            return <img key={item.id} src={url} alt={item.alt_de}/>
        })}
    </section>
  )
}

export default Gallary