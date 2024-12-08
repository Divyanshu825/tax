import React from 'react'
import './Service.css';
import { MdCarRental } from "react-icons/md";
import { LuShare2 } from "react-icons/lu";
import { MdOutlineAddRoad } from "react-icons/md";
import { TbMapCheck } from "react-icons/tb";
import { GiModernCity } from "react-icons/gi";


const Service = () => {

  const data = [
    {
      id: 1,
      title: "Banking / Securities",
      des: "ICICI Securities Kotak Securities HDFC Sales ING Vysya Reliance Securities",
      icon: <MdCarRental />,
      bg: "#079af0",
    },
    {
      id: 2,
      title: "Insurance",
      des: "ICICI Prudential Life Insurance Birla Sun Life Insurance Kotak Life Insurance HDFC Life Insurance Met Life Insurance Bharti AXA Future Generali",
      icon: <LuShare2 />,
      bg: "#fea632",
    },
    {
      id: 3,
      title: "Corporate / Business",
      des: "Mittal Corp Guruji Products Capital Aim LMS Inida Synoris Technologies Radisson Blu Covetus Technologies Future Technologies Stellar Furniture Systematix Infotech",
      icon: <MdOutlineAddRoad />,
      bg: "rgb(255, 72, 72)",
    },
    {
      id: 4,
      title: "All-India Permits",
      des: "GGowithcar.com cars come with an All-India Tourist Permit so that you can drive from Kashmir to",
      icon: <TbMapCheck />,
      bg: "#00b072",
    },
    {
      id: 5,
      title: "Endless Opportunities",
      des: "The vehicles you rent from Gowithcar.com can be used for trips out of the city or daily travels through town. Gowithcar.com also provides cars for pick-up and drop-off services at Indore airports and Indore bus and train stations.",
      icon: <GiModernCity />,
      bg: "#151515",
    },
    {
      id: 6,
      title: "Insurance",
      des: "ICICI Prudential Life Insurance Birla Sun Life Insurance Kotak Life Insurance HDFC Life Insurance Met Life Insurance Bharti AXA Future Generali",
      icon: <LuShare2 />,
      bg: "#fea632",
    },
  ];

  return (
    <div className='Service_Container'>
      <div className="Service_head"  >
        <h1>OurClient Page</h1>
        <h2>Home / OurClient Page</h2>
      </div>

      <div className="Service_main2">
        <div className="Service_cardGrid">
          {data?.map((item, index) => (
            <div className="Service_cardMain" key={item?.id}>

              <h4 className="Service_title">{item?.title}</h4>
              <div className="Service_des">{item.des}</div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Service
