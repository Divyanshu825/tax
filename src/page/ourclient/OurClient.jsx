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
      title: "Flexible Rentals",
      des: "You decide whether you'd like to rent a car for an hour, a week, a month, or on a daily basis.",
      icon: <MdCarRental />,
      bg: "#079af0",
    },
    {
      id: 2,
      title: "Several Options",
      des: "Pick from our wide range of classy hatchbacks, comfortable sedans, and spacious SUVs.",
      icon: <LuShare2 />,
      bg: "#fea632",
    },
    {
      id: 3,
      title: "24X7 Roadside assistance",
      des: "Never Get Stuck on the Side of the Road: Enjoy Peace of Mind with 24/7 Roadside Assistance.",
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
  ];

  return (
    <div className='OurClient_Container'>

      <div className="Overlay_Pages">
        <div className="Overlay_Pages">
          <div className="OurClient_head"  >
            <h1>OurClient Page</h1>
            <h2>Home / OurClient Page</h2>
          </div>
        </div>
      </div>

      <div className="Overlay" >
        <div className="Overlay" >
          <div className='OurClient_Des_head' >
            <h2>HERE’S THE LIST OF OUR VALUABLE CLIENTS</h2>
            <h1>Clientele</h1>
          </div>
          <div className='OurClient_Des_Content' >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio recusandae facere rem! Fuga culpa sunt a fugiat tenetur modi et amet obcaecati officia, vel asperiores, sed illum aperiam rem? Asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ullam sapiente aspernatur dolorum deleniti? Veritatis facere consequatur aspernatur minus odit magni iure dignissimos nobis ex doloribus! Aspernatur ab dolores natus?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio recusandae facere rem! Fuga culpa sunt a fugiat tenetur modi et amet obcaecati officia, vel asperiores, sed illum aperiam rem? Asperiores!</p>
          </div>
        </div>

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
