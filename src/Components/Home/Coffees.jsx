import { useEffect, useState } from "react";
import CoffeCard from "../CoffeCard/CoffeCard";


const Coffees = () => {
    const [coffes,setCoffe]=useState([])
    useEffect(()=>{
        fetch('../../../public/coffees.json')
        .then(res=>res.json())
        .then(data=>setCoffe(data))
    },[])
   const handleSort=sortBy=>{
    if(sortBy==="popularity"){
       const sortpopolarity=[...coffes].sort((a,b)=>a.popularity-b.popularity)
           setCoffe(sortpopolarity)
    }
   else if(sortBy==="rating"){
       const sortrating=[...coffes].sort((a,b)=>b.rating-a.rating)
           setCoffe(sortrating)
    }
   }
    return (
      
        <div>
          
            <div className="flex justify-between" > 
                <h1 className="text-2xl">Sort Coffees By Popularity and Rating-> </h1>
               <span className="flex gap-5"> <button onClick={()=>handleSort("popularity")} className="btn btn-warning ">Sort By Popularity(ASC)</button>
               <button onClick={()=>handleSort("rating")} className="btn btn-warning">Sort By Rating (DSC)</button></span>
            </div>
            <div className="grid grid-cols-3 py-6 gap-5">
            {
                coffes.map(coffe=><CoffeCard coffe={coffe}></CoffeCard>)
            }
           
        </div>
        </div>
       
    );
};


export default Coffees;