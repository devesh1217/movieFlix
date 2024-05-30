import axios from 'axios';
import MovieCard from '../components/MovieCard';

export default async function Movie() {
    await new Promise(resolve=>setTimeout(resolve,2000));
    const options = {
        method: 'GET',
        url: 'https://netflix54.p.rapidapi.com/search/',
        params: {
            query: 'stranger',
            offset: '0',
            limit_titles: '50',
            limit_suggestions: '20',
            lang: 'en'
        },
        headers: {
            'X-RapidAPI-Key': '2a24f3d89fmsh7adaab6a7cdec58p1e16aejsn113e2f16f648',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    try{
        const res = await axios.request(options);
        // const res = await axios.get('http://localhost:8080/api/movies');
        return (
            <div className='text-white flex justify-evenly items-stretch flex-wrap sm:px-42 px-10'>
                {
                    res.data.titles.map(curr=>{
                        return <MovieCard movie={curr} key={curr.jawSummary.id}></MovieCard>
                    })
                }
            </div>
        )

    } catch(err){
        console.log(err.errors);

        return (
            <div className='flex justify-center italic text-red-600'>
                Unable to fetch
            </div>
        );
    }
}
