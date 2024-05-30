import axios from "axios";
import Image from "next/image";

async function page({ params }) {
    const options = {
        method: 'GET',
        url: `https://netflix54.p.rapidapi.com/title/details/?ids=${params.id}&lang=en`,
        headers: {
            'X-RapidAPI-Key': '2a24f3d89fmsh7adaab6a7cdec58p1e16aejsn113e2f16f648',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    let data;
    try{
        const res = await axios.request(options);
        // const res = await axios.get('http://localhost:8080/api/movies/'+params.id);
        data = res.data[0].details
    }catch(err){
        console.log(err.errors)
    }

    return (
        <div className="text-white mx-72 my-16 space-y-5">
            <div>
                <span className="text-red-500 text-4xl">Netflix </span>
                <span className="text-white text-4xl">/ {data.type}</span>
            </div>
            <div>
                <Image src={data.backgroundImage.url || ''} width={1000} height={500} alt={params.id} />
            </div>
            <div className="text-5xl text-sky-300">{data.title}</div>
            <div className="text-xl text-gray-400">{data.synopsis}</div>
            <div>
                <table className="">
                    <tr>
                        <td className="text-xl pr-10">Cast:</td>
                        <td className="flex flex-wrap">
                            {
                                data.cast.map(curr=><button key={curr.id} className="bg-slate-800 p-2 m-1 rounded-full">{curr.name}</button>)
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className="text-xl">Genres:</td>
                        <td>
                            {
                                data.genres.map(curr=><button key={curr.id} className="bg-slate-800 p-2 m-1 rounded-full">{curr.name}</button>)
                            }
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default page