import { useLoaderData } from "react-router-dom";
import Detail from "./Detail";


const Details = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
            {
                data.map(news=><Detail key={news.id} news={news}></Detail>)
            }
        </div>
    );
};

export default Details;