import Image from "next/image";
import Link from "next/link";

function MovieCard({ movie }) {
    const { id, type, title, synopsis } = movie.jawSummary;
    return (
        <div className="w-60 min-h-64 bg-slate-700 m-8 flex flex-col justify-between items-start rounded-md shadow-lg shadow-slate-950 overflow-hidden">
            <div className="text-xl">
                <Image src={movie.jawSummary.backgroundImage.url} alt={title} width={500} height={100}></Image>
            </div>
            <div className="p-3">
                <div className="text-xl text-gray-950">{title}</div>
                <div className="text-ellipsis ">{synopsis.substring(0,66)+'...'}</div>

            </div>
            <Link href={'/movie/' + id} className="flex justify-center w-full">
                <button className="bg-slate-500 hover:bg-slate-400 p-2 m-2 rounded-full text-black " >
                    Read More
                </button>
            </Link>
        </div>
    )
}

export default MovieCard