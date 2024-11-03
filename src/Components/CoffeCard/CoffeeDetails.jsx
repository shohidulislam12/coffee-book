import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const CoffeeDetails = () => {
    const data=useLoaderData()
    const [details,setdetails]=useState({})
    const {id}=useParams()


    const cardDatails=[...data].find(coffee=>coffee.id===parseInt(id))
    console.log(cardDatails);
   console.log(id);
 console.log(data);
   console.log(details);

    return (
        <div>
            <h2>Im from details</h2>
        </div>
    );
};

export default CoffeeDetails;