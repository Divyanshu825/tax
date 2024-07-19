import React, { useEffect } from 'react'
import style from './Service.module.css';
import { FaCheck } from 'react-icons/fa';
import pic from '../../Images/bg3.avif'
import pic2 from '../../Images/bg4.avif'
import AOS from "aos";

const Service = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 2500,
      easing: "ease-in-out-cubic",
    });
  }, []);
  const Data = [
    {
      title: "OUR VISION",
      img: pic,
      des: "Bring your Android and iOS application concept to life on every mobile platform. BBT turns your best concepts into a real-time mobile application. We build the apps that are both striking and fully functional. Our appreciated application developers create incredible mobile apps for Android and iOS platforms at affordable. Our developers are reputed digital explorers who constantly push their limit to bring something new and unique in today's highly competitive market.",
      lang: ["React Native", "Java"],
    },
    {
      title: "OUR MISSION",
      img: pic2,
      des: "The expert team at BBT utilizes web development for making top quality and dynamic web applications to drive your business to heighten one step ahead of all the market competitors. Our well trained and knowledgeable team of web developers uses the newest technology trends available for website development, upgrade and integration services for several project necessities.",
      lang: ["React", "Next Js"],
    },

  ];


  return (
    <div className={style.Service_Container}>

      <div className="Overlay_Pages">
        <div className="Overlay_Pages">
          <div className={style.Service_head}>
            <h1>Service Page</h1>
            <h2>Home / Service Page</h2>
          </div>
        </div>
      </div>

      {/* <div className="Overlay_Pages">
        <div className="Overlay_Pages">
          <div className="right_container_3">
            <p>
              <FaCheck
                className="checkIcon"
                style={{ color: "green" }}
              />
              There are many variations of passages of Lorem Ipsum available.


            </p>
          </div>
        </div>
      </div> */}
      <div className="Overlay">
        <div className={style.Service_map_container}>
          {Data.map((item, index) => {
            return (
              <div
                data-aos={"fade"}
                className={index % 2 == 0 ? style.Service_map_main : style.Service_map_main2}
                key={item}
              >
                <div
                  className={
                    index % 2 == 0
                      ? style.Service_text_container_map
                      : style.Service_text_container_map2
                  }
                >
                  <h1 className={style.Service_map_title}>{item.title}</h1>
                  <p className={style.Service_map_des}>{item.des}</p>
                  {/* <Link href={"/contact"}>
                                        <button className={style.btn} type="submit">
                                            <span> Contact now</span>
                                        </button>
                                    </Link> */}
                </div>
                <div className={style.Service_image_container_map}>
                  <img
                    className={style.Service_image_map}
                    src={item.img}
                    alt="testing mode bor"
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>


    </div >
  )
}

export default Service
