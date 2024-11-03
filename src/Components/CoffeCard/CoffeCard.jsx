

const CoffeCard = ({coffe}) => {
    const {name,image,category,type,origin,rating,popularity}=coffe
    return (
        <div className=" border  ">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className="card-body  text-left">
            <h2 className="text-xl">Name:{name}</h2>
            <p className="text-sm">Catagori:{category}</p>
            <p className="text-sm">Type:{type}</p>
            <p className="text-sm">Origin:{origin}</p>
            <p className="text-sm">Rating:{rating}</p>
            <p className="text-sm">Popularity:{popularity}</p>
         
        </div>
      </div>
    );
};

export default CoffeCard;