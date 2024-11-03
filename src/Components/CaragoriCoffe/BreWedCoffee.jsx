import { useEffect, useState } from "react";
import CoffeCard from "../CoffeCard/CoffeCard";
import { useNavigate } from "react-router-dom";


const BreWedCoffee = () => {
    const [coffes,setCoffe]=useState([])
    useEffect(()=>{
        fetch('../../../public/coffees.json')
        .then(res=>res.json())
        .then(data=>setCoffe(data))
    },[])
    const brewedCoffe=coffes.filter(coffe=>coffe.category==='Brewed Coffee')

    const navigate=useNavigate()
    const navigateAll=()=>{
       navigate("./Coffees")
    }
    return (
        <> 
        <div className="grid grid-cols-3 py-6 gap-5">
            {
                brewedCoffe.map(coffe=><CoffeCard coffe={coffe}></CoffeCard>)
            }
           
        </div>
        <div className="flex justify-center"> <button onClick={navigateAll} className="btn btn-warning">View All </button></div>
         </>
    );
};

export default BreWedCoffee;