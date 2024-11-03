import { useEffect, useState } from "react";
import CoffeCard from "../CoffeCard/CoffeCard";
import { Link, useNavigate } from "react-router-dom";


const DessertCoffee = () => {
    const [coffes,setCoffe]=useState([])
    useEffect(()=>{
        fetch('../../../public/coffees.json')
        .then(res=>res.json())
        .then(data=>setCoffe(data))
    },[])
    const navigate=useNavigate()
    const navigateAll=()=>{
       navigate("./Coffees")
    }
  const dessertCoffe=coffes.filter(coffe=>coffe.category==='Dessert Coffee')

    return (
        <>
        <div className="grid grid-cols-3 gap-5">
            {
                dessertCoffe.map(coffe=><CoffeCard coffe={coffe}></CoffeCard>)
            }
        </div>
        <div className="flex justify-center"> <button onClick={navigateAll} className="btn btn-warning">View All </button></div>
        </>
    );
};


export default DessertCoffee;