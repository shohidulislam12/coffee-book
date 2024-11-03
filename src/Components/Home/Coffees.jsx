import { useEffect, useState } from "react";
import CoffeCard from "../CoffeCard/CoffeCard";


const Coffees = () => {
    const [coffes,setCoffe]=useState([])
    useEffect(()=>{
        fetch('../../../public/coffees.json')
        .then(res=>res.json())
        .then(data=>setCoffe(data))
    },[])
   
    return (
      
        <div className="grid grid-cols-3 py-6 gap-5">
            {
                coffes.map(coffe=><CoffeCard coffe={coffe}></CoffeCard>)
            }
           
        </div>
       
    );
};


export default Coffees;