import React from 'react'
import './OurClient.css';
import { MdCarRental } from "react-icons/md";
import { LuShare2 } from "react-icons/lu";
import { MdOutlineAddRoad } from "react-icons/md";
import { TbMapCheck } from "react-icons/tb";
import { GiModernCity } from "react-icons/gi";


const OurClient = () => {

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
    // {
    //   id: 4,
    //   title: "All-India Permits",
    //   des: "GGowithcar.com cars come with an All-India Tourist Permit so that you can drive from Kashmir to",
    //   icon: <TbMapCheck />,
    //   bg: "#00b072",
    // },
    // {
    //   id: 5,
    //   title: "Endless Opportunities",
    //   des: "The vehicles you rent from Gowithcar.com can be used for trips out of the city or daily travels through town. Gowithcar.com also provides cars for pick-up and drop-off services at Indore airports and Indore bus and train stations.",
    //   icon: <GiModernCity />,
    //   bg: "#151515",
    // },
  ];

  return (
    <div className='OurClient_Container'>
      <div className="OurClient_head"  >
        <h1>OurClient Page</h1>
        <h2>Home / OurClient Page</h2>
      </div>

      <div className='OurClient_main'>
        <div className='OurClient_Des_head'>
          <h2>HERE’S THE LIST OF OUR VALUABLE CLIENTS</h2>
          <h1>Clientele</h1>
        </div>
        <div className='OurClient_Des_Content' >
          <p>We provide a new and better experience of Recruitment process. Now you can Organize and Simplify your Recruitment process using our fast response techniques. We enable you to get regular Updates of Resumes, uploaded by Job-Seekers from all over India via Email and SMS.</p>
        </div>
      </div>

      <div className="OurClient_main2">
        <div className="cardGrid">
          {data?.map((item, index) => (
            <div className="cardMain" key={item?.id}>
              <div data-color={item.bg} className="iconView" >
                {item?.icon}
              </div>
              <h4 className="title">{item?.title}</h4>
              <div className="des">{item.des}</div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default OurClient
