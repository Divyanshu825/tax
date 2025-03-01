import React from 'react'
import '../../common/common.css';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Data, Data2 } from './ProductList';
import Aos from 'aos';
import { Image } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import './Images.css'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

const Images = () => {
    React.useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 5000,
            easing: "ease-in-out-cubic",
        });
    }, []);

    return (
        <div className='common_Container'>
            <div className="common_head"  >
                <h1>Images And Videos</h1>
                <h2>Home / Images Page</h2>
            </div>
            <h1 style={{
                display: 'flex',
                justifyContent: 'center',
                alignSelf: 'flex-start',
                paddingTop: '30px',
                paddingLeft: '40px',
                fontSize: '30px',
                fontFamily: 'sans-serif',
                fontWeight: 'bold'
            }}>Images</h1>
            <div className='Product_card_container' data-aos="fade-up" data-aos-duration="2000">
                {
                    Data.map((item, index) => {
                        return (
                            <Link to='/product/productlist'>
                                <Card sx={{ minHeight: '280px', width: 320 }}>
                                    <CardCover>
                                        <Image
                                            src={item.pic}
                                        />

                                    </CardCover>
                                    <CardCover
                                        sx={{
                                            background:
                                                'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                                        }}
                                    />
                                    <CardContent sx={{ justifyContent: 'flex-end' }}>
                                        <Typography level="title-lg" textColor="#fff" >
                                            <Link to="/productdesc">
                                                {item.Header}
                                            </Link>
                                        </Typography>
                                        {/* <Typography
                            startDecorator={<LocationOnRoundedIcon />}
                            textColor="neutral.300"
                            >
                            <Link to={'/ProductDesc.jsx'}>
                            California, USA
                            </Link>
                          </Typography> */}
                                    </CardContent>
                                </Card>
                            </Link>

                        )
                    })
                }

            </div>
            <h1>Images</h1>
            <div className='Product_card_container' data-aos="fade-up" data-aos-duration="2000">
                {
                    Data2.map((gc) => {
                        return (
                            <div>
                                <Card sx={{ minHeight: '280px', width: 320 }}>
                                    <CardCover>
                                        <video src={gc.pic} autoPlay loop muted />
                                    </CardCover>
                                    <CardCover
                                        sx={{
                                            background:
                                                'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                                        }}
                                    />
                                    <CardContent sx={{ justifyContent: 'flex-end' }}>
                                        <Typography level="title-lg" textColor="#fff" >
                                            <a href="/home">
                                                Yosemite National Park
                                            </a>
                                        </Typography>
                                        <Typography
                                            startDecorator={<LocationOnRoundedIcon />}
                                            textColor="neutral.300"
                                        >
                                            California, USA
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Images