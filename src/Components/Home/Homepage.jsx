import Banner from "./Banner";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BreWedCoffee from "../CaragoriCoffe/BreWedCoffee";
import IcedCoffee from "../CaragoriCoffe/IcedCoffee";
import DessertCoffee from "../CaragoriCoffe/DessertCoffee";

const Homepage = () => {
    return (
        <div >
            <Banner></Banner>
            <div className="w-3/4 mx-auto text-center my-14 ">
                <h2 className="text-2xl my-5">Browse Coffees By Catagori</h2>
            <p>Chose your desired Coffee Catagori to Browse Throught Specific Coffeees that fir in your Test</p>
            </div>
            <Tabs >
  <div className=" mx-auto  border-b flex justify-center">
  <TabList>
      <Tab>BreWed Coffee</Tab>
      <Tab>Iced Coffee</Tab>
      <Tab>Dessert Coffee</Tab>
    </TabList>
  </div>

    <TabPanel>
        {/* import BreWedCoffee */}
      <BreWedCoffee></BreWedCoffee>
    </TabPanel>
    <TabPanel>
        {/* import Iced Coffee */}
   <IcedCoffee></IcedCoffee>
    </TabPanel>
    <TabPanel>
         {/* import Dessert Coffee */}
     <DessertCoffee></DessertCoffee>
    </TabPanel>
  </Tabs>

        </div>
    );
};

export default Homepage;