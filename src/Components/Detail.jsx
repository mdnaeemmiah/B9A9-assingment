import { Link } from "react-router-dom";


const Detail = ({news}) => {
    const {name,description,title,image,location}= news;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">{title}</h2>
          
          <p>{description}</p>
          <h2 className="card-title">{location}</h2>
          <div className="card-actions">
           <Link to='/login' className="w-full"> <button className="btn w-full bg-green-400 ">Read more.....</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Detail;