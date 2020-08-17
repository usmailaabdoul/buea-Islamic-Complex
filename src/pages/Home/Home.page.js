import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/image1.jpg';
import img2 from '../../images/image2.jpg';
import img3 from '../../images/image3.jpg';

const Home = () => {
  return (
    <div>
     <Carousels /> 
    </div>
  );
};

export default Home;

const Carousels = () => {
  const [carouselInfos] = useState([
    {
      img: img1,
      heading: 'ALLAH HELP THOSE WHO HELP THEMSELVES',
      subHeading: '',
    },
    {
      img: img2,
      heading: 'ALLAH HELP THOSE WHO HELP THEMSELVES',
      subHeading: '',
    },
  ])
  return (
    <Carousel>
      {carouselInfos.map((info, key) => {
        return (
          <Carousel.Item key={key}>
            <img
              className="w-full flex block"
              src={info.img}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{info.heading}</h3>
              <p>{info.subHeading}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}