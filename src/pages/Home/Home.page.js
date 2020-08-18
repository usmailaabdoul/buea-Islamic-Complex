import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/image1.jpg';
import img2 from '../../images/image2.jpg';
import img3 from '../../images/image3.jpg';

const Home = () => {
  return (
    <div>
      <Carousels />
      <section className="bg-gray-100 flex justify-between align-center px-20 ">
        <div style={styles.bodyInfo}>
          <h3 className="text-teal-500">Join the BUEA islamic community</h3>
          <p className="text-lg">Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu.
            Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum</p>
        </div>

        <div style={styles.contactInfo} className="bg-teal-400">
          <h5 className="text-teal-100 font-medium text-3xl">Contact us to join</h5>
          <p className="text-teal-100 font-medium text-xl my-3">+237 671411017/ +237 691212173</p>
          <a href="/contact" className="bg-red-500 px-4 py-3 my-3 text-xl rounded text-red-100 hover:text-red-100 hover:bg-red-400" style={styles.a}>contact us</a>
        </div>
      </section>

      <section style={styles.sermons}>
        <div className="shadow-sm w-3/4 m-5 p-5 rounded" >
          <h3 className="underline text-teal-500 text-center">Friday prayer sermons</h3>
          <h6>date: 14/08/2020</h6>
          <div>
            <p className="text-lg">Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu.
             Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum
              moderatius cu. Sit munere facilis accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui posse omnium mediocritatem est cu.
              Modus argumentum ne qui tation efficiendi in eos. Ei mea falli legere efficiantur et tollit aliquip debitis mei.
           No deserunt mediocritatem mel. Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu.</p>
            <p className="text-lg">Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu.
            Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum
             moderatius cu. Sit munere facilis accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui posse omnium mediocritatem est cu.
             Modus argumentum ne qui tation efficiendi in eos. Ei mea falli legere efficiantur et tollit aliquip debitis mei.
           No deserunt mediocritatem mel. Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 p-5 flex">
        <div style={styles.showcase}>
          <p>showcase images</p>
        </div>
        <div style={styles.about}>
          <h3 className="text-center text-teal-500">ABOUT THE BUEA ISLAMIC COMMUNITY</h3>
          <p className="text-center text-gray-800 m-4">
            Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit.
            Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit munere facilis accusam eu dicat falli consulatu at vis.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

const styles = {
  bodyInfo: {
    flex: 5,
    padding: '5rem',
    textAlign: 'center',
  },
  contactInfo: {
    flex: 3,
    marginRight: '5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  a: {
    textDecoration: 'none'
  },
  showcase: {
    flex: 2,
  },
  about: {
    flex: 4
  },
  sermons: {
    display: 'flex',
    justifyContent: 'center'
  }
}
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
    {
      img: img3,
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