import { useEffect, useState } from "react";
import CoffeCard from "../CoffeCard/CoffeCard";
import { useNavigate } from "react-router-dom";


const IcedCoffee = () => {
    const [coffes,setCoffe]=useState([])
    useEffect(()=>{
        fetch('../../../public/coffees.json')
        .then(res=>res.json())
        .then(data=>setCoffe(data))
    },[])
    const iceCoffe=coffes.filter(coffe=>coffe.category==='Iced Coffee')
    const navigate=useNavigate()
    const navigateAll=()=>{
       navigate("./Coffees")
    }
    return (
        <>
        <div className="grid grid-cols-3 gap-5">
            {
                iceCoffe.map(coffe=><CoffeCard coffe={coffe}></CoffeCard>)
            }
        </div>
        <div className="flex justify-center"> <button onClick={navigateAll} className="btn btn-warning">View All </button></div>
        </>
    );
};

export default IcedCoffee;