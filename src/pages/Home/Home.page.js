import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { BiCalendarAlt, BiTimeFive, BiMap } from 'react-icons/bi';
import { FaMosque } from 'react-icons/fa';
import { GiBookCover, GiBookmarklet, GiPayMoney, GiBookmark, GiNewspaper } from 'react-icons/gi';

import img1 from '../../images/image1.jpg';
import img2 from '../../images/image2.jpg';
import img3 from '../../images/image3.jpg';
import event from '../../images/event.jpg';
import dimg1 from '../../images/dimage1.jpg';
import dimg2 from '../../images/dimage2.jpg';
import dimg3 from '../../images/dimage3.jpg';
import service from '../../images/services.png';

import './home.scss';

const Home = () => {
  const [prayerTimes] = useState([
    { type1: 'Dawn Prayer', type2: 'FARJ', time: '05:10AM' },
    { type1: 'Midday Prayer', type2: 'ZUHR', time: '13:30PM' },
    { type1: 'Afternoon Prayer', type2: 'ASR', time: '15:30PM' },
    { type1: 'Sunset Prayer', type2: 'MAGRIB', time: '18:30PM' },
    { type1: 'Evening Prayer', type2: 'ISHA', time: '19:30PM' },
    { type1: 'Friday Prayer', type2: 'JUMUAH', time: '13:50PM' },
  ])
  return (
    <div>
      <Carousels />
      <section className="bg-gray-100 flex justify-between items-center px-20 ">
        <div style={styles.bodyInfo}>
          <h3 className="text-teal-500">Join the BUEA islamic community</h3>
          <p className="text-lg">Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu.
            Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum</p>
        </div>

        <div style={styles.contactInfo} className="bg-teal-400 py-10 rounded">
          <h5 className="text-teal-100 font-medium text-3xl">Contact us to join</h5>
          <p className="text-teal-100 font-medium text-xl my-3">+237 671411017/ +237 691212173</p>
          <a href="/contact" className="bg-red-500 px-4 py-3 my-3 text-xl rounded text-red-100 hover:text-red-100 hover:bg-red-400" style={styles.a}>contact us</a>
        </div>
      </section>

      <section style={styles.sermons}>
        <div className="shadow w-3/4 m-5 p-5 rounded" >
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
          <div class="col-1-of-2">
            <div class="composition">
              <img
                src={img1}
                alt="showcase img 1"
                className="composition__photo composition__photo--p1"
              />
              <img
                src={img2}
                alt="showcase img 1"
                className="composition__photo composition__photo--p2"
              />
              <img
                src={img3}
                alt="showcase img 1"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
        <div style={styles.about}>
          <h3 className="text-center text-teal-500">ABOUT THE BUEA ISLAMIC COMMUNITY</h3>
          <p className="text-center text-gray-800 m-4">
            Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit.
            Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit munere facilis accusam eu dicat falli consulatu at vis.
          </p>
          <p className="text-center text-gray-800 mx-4">
            Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit.
          </p>
        </div>
      </section>

      <section className="relative" >
        <div className="prayer" />

        <div className="prayer-text">
          <p className="text-center text-3xl underline">PRAYER TIMES</p>
          <div className="flex">
            {
              prayerTimes.map((prayerTime, key) => {
                return (
                  <div key={key} style={styles.prayerTimes}>
                    <p style={styles.prayerTimeTitle}>{prayerTime.type1}</p>
                    <div>
                      <p className="text-2xl">{prayerTime.type2}</p>
                      <p className="bg-teal-400 mx-8 py-2 rounded ">{prayerTime.time}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="p-10">
          <h2 className="text-center mt-5 mb-3 text-gray-900 font-bold text-3xl">PROGRAMS AND PROJECTS</h2>
          <p className="text-center text-xl mx-32">Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos</p>
        </div>

        <div className="mx-20 my-3 flex">
          <div className="w-1/4 bg-gray-100 shadow-md rounded mx-4">
            <img src={img1} alt="headerimg" className="w-full h-64 rounded-t " />
            <div className="flex mt-2 ml-2 items-center">
              <p><BiCalendarAlt className="text-xl text-teal-500" /></p>
              <p className="px-2 font-medium">20 AUG 2019</p>
            </div>
            <div className="m-auto py-4">
              <h5 className="text-center">NEW MOSQUE PROJECT</h5>
              <p className="text-center">Lorem ipsum dolor sit amet et delectus accommodare his consul.read more</p>

              <div className="flex justify-center items-center">
                <a href="/programs" className="bg-teal-500 shadow-md rounded text-gray-100 text-lg font-medium py-2 px-3 hover:text-gray-300 hover:bg-red-500 transition ease-in duration-150" style={styles.a}>Details</a>
              </div>
            </div>
          </div>

          <div className="w-1/4 bg-gray-100 shadow-md rounded mx-4">
            <img src={img2} alt="headerimg" className="w-full h-64 rounded-t " />
            <div className="flex mt-2 ml-2 items-center">
              <p><BiCalendarAlt className="text-xl text-teal-500" /></p>
              <p className="px-2 font-medium">20 AUG 2019</p>
            </div>
            <div className="m-auto py-4">
              <h5 className="text-center">FUND RAISER</h5>
              <p className="text-center">Lorem ipsum dolor sit amet et delectus accommodare his consul.read more</p>

              <div className="flex justify-center items-center">
                <a href="/programs" className="bg-teal-500 shadow-md rounded text-gray-100 text-lg font-medium py-2 px-3 hover:text-gray-300 hover:bg-red-500 transition ease-in duration-150" style={styles.a}>Details</a>
              </div>
            </div>
          </div>

          <div className="w-1/4 bg-gray-100 shadow-md rounded mx-4">
            <img src={img3} alt="headerimg" className="w-full h-64 rounded-t " />
            <div className="flex mt-2 ml-2 items-center">
              <p><BiCalendarAlt className="text-xl text-teal-500" /></p>
              <p className="px-2 font-medium">20 AUG 2019</p>
            </div>
            <div className="m-auto py-4">
              <h5 className="text-center">GRAVE YARD CLEANUP</h5>
              <p className="text-center">Lorem ipsum dolor sit amet et delectus accommodare his consul.read more</p>

              <div className="flex justify-center items-center">
                <a href="/programs" className="bg-teal-500 shadow-md rounded text-gray-100 text-lg font-medium py-2 px-3 hover:text-gray-300 hover:bg-red-500 transition ease-in duration-150" style={styles.a}>Details</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="mt-8 bg-gray-100 pb-32 ">
        <div>
          <div className="p-10">
            <h2 className="text-center mt-5 mb-3 text-gray-900 font-bold text-3xl">UPCOMING EVENTS</h2>
            <p className="text-center text-xl mx-32 text-gray-600">Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos</p>
          </div>
        </div>

        <div className="flex p-10">
          <div className="w-2/4 bg-white flex mx-4 shadow-md">
            <div className="flex-1 my-10 mx-4">
              <p className="px-2 font-medium ">20 AUG 2019</p>
              <h4 className="px-2 my-4">Learn Arabic Language</h4>
              <ul className="px-2">
                <li className="my-1 text-gray-600 flex"><p><BiTimeFive className="text-xl mr-1 text-teal-500" /></p>10:00 AM TO 12:00 PM</li>
                <li className="my-1 text-gray-600 flex"><p><BiMap className="text-xl mr-1 text-teal-500" /></p>BUEA MOSQUE</li>
              </ul>
              <p className="px-2">Lorem ipsum dolor sit amet et delectus accommodare his consul, ipsum dolor sit amet et delectus accommodare.</p>
              <div className="flex justify-left mx-2 items-center">
                <a href="/programs" className="bg-teal-500 shadow-md rounded text-teal-100 text-lg font-medium py-2 px-3 hover:text-teal-100 hover:bg-red-500 transition ease-in duration-150" style={styles.a}>JOIN US</a>
              </div>
            </div>

            <div className="flex-1 block">
              <img src={event} alt="evenimg" />
              <ul className="flex m-0">
                <li className="mr-1 py-2 px-3 bg-dark text-gray-100 text-center"><span className="font-bold text-2xl">02</span><p>Days</p></li>
                <li className="mr-1 py-2 px-2 bg-dark text-gray-100 text-center"><span className="font-bold text-2xl">01</span><p>Hourse</p></li>
                <li className="mr-1 py-2 px-2 bg-dark text-gray-100 text-center"><span className="font-bold text-2xl">40</span><p>Minutes</p></li>
                <li className="py-2 px-2 bg-dark text-gray-100 text-center"><span className="font-bold text-2xl">29</span><p>Seconds</p></li>
              </ul>
            </div>
          </div>

          <div className="w-2/4 bg-white flex mx-4 shadow-md">
            <div className="flex-1">
              <img src={event} alt="evenimg" className="" />
              <ul className="flex m-0">
                <li className="mr-1 py-2 px-3 bg-dark text-gray-100 text-center"><span className="font-bold text-2xl">02</span><p>Days</p></li>
                <li className="mr-1 py-2 px-2 bg-dark text-gray-100 text-center"><span className="font-bold text-2xl">01</span><p>Hourse</p></li>
                <li className="mr-1 py-2 px-2 bg-dark text-gray-100 text-center"><span className="font-bold text-2xl">40</span><p>Minutes</p></li>
                <li className="py-2 px-2 bg-dark text-gray-100 text-center"><span className="font-bold text-2xl">29</span><p>Seconds</p></li>
              </ul>
            </div>

            <div className="flex-1 my-10 mx-4">
              <p className="px-2 font-medium ">20 AUG 2019</p>
              <h4 className="px-2 my-4">Learn Arabic Language</h4>
              <ul className="px-2">
                <li className="my-1 text-gray-600 flex"><p><BiTimeFive className="text-xl mr-1 text-teal-500" /></p>10:00 AM TO 12:00 PM</li>
                <li className="my-1 text-gray-600 flex"><p><BiMap className="text-xl mr-1 text-teal-500" /></p>BUEA MOSQUE</li>
              </ul>
              <p className="px-2">Lorem ipsum dolor sit amet et delectus accommodare his consul, ipsum dolor sit amet et delectus.</p>
              <div className="flex justify-left mx-2 items-center">
                <a href="/programs" className="bg-teal-500 shadow-md rounded text-teal-100 text-lg font-medium py-2 px-3 hover:text-teal-300 hover:bg-red-500 transition ease-in duration-150" style={styles.a}>JOIN US</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-10">
        <div>
          <div className="pt-10">
            <h2 className="text-center mt-5 mb-3 text-gray-900 font-bold text-3xl">OUR SERVICES</h2>
            <p className="text-center text-xl mx-32 text-gray-600">Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos</p>
          </div>
        </div>

        <div className="flex mx-16">
          <div className="service-left">
            <ul className="px-2">
              <div>
                <li className="text-gray-800 flex justify-end items-center py-3">
                  <h4>Parent Education</h4>
                  <div className="bg-teal-500 ml-3 p-2 rounded-full hover:bg-red-500 transition ease-in duration-200">
                    <GiBookmark className="text-3xl text-teal-100" />
                  </div>
                </li>
                <p>ipsum dolor sit amet et delectus accommodare accommodare</p>
              </div>
              <div>
                <li className="text-gray-800 flex justify-end items-center py-3">
                  <h4>Find A Mosque</h4>
                  <div className="bg-teal-500 ml-3 p-2 rounded-full hover:bg-red-500 transition ease-in duration-200">
                    <FaMosque className="text-3xl text-teal-100" style={{padding: '4px'}}/>
                  </div>
                </li>
                <p>ipsum dolor sit amet et delectus accommodare accommodare</p>
              </div>
              <div>
                <li className="text-gray-800 flex justify-end items-center py-3">
                  <h4>Children Education</h4>
                  <div className="bg-teal-500 ml-3 p-2 rounded-full hover:bg-red-500 transition ease-in duration-200">
                    <GiBookCover className="text-3xl text-teal-100" />
                  </div>
                </li>
                <p>ipsum dolor sit amet et delectus accommodare accommodare</p>
              </div>
            </ul>
          </div>

          <div className="" style={{ flex: 1.5 }}>
            <img src={service} alt="services"/>
          </div>
          <div className="service-right">
            <ul className="px-2">
              <div>
                <li className="text-gray-800 flex justify-start items-center py-3">
                  <div className="bg-teal-500 mr-3 p-2 rounded-full hover:bg-red-500 transition ease-in duration-200">
                    <GiBookmarklet className="text-3xl text-teal-100 " />
                  </div>
                  <h4>Makaranta Education</h4>
                </li>
                <p>ipsum dolor sit amet et delectus accommodare accommodare</p>
              </div>
              <div>
                <li className="text-gray-800 flex justify-start items-center py-3">
                  <div className="bg-teal-500 mr-3 p-2 rounded-full hover:bg-red-500 transition ease-in duration-200">
                    <GiPayMoney className="text-3xl text-teal-100 " />
                  </div>
                  <h4>Charity & Donation</h4>
                </li>
                <p>ipsum dolor sit amet et delectus accommodare accommodare</p>
              </div>
              <div>
                <li className="text-gray-800 flex justify-start items-center py-3">
                  <div className="bg-teal-500 mr-3 p-2 rounded-full hover:bg-red-500 transition ease-in duration-200">
                    <GiNewspaper className="text-3xl text-teal-100" />
                  </div>
                  <h4>News & Events</h4>
                </li>
                <p>ipsum dolor sit amet et delectus accommodare accommodare</p>
              </div>
            </ul>
          </div>
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
    flex: 2.5,
    // margin: 'auto'
    backgroundColor: 'red',
    marginBottom: '25rem',
    marginTop: '2rem',
  },
  about: {
    flex: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sermons: {
    display: 'flex',
    justifyContent: 'center'
  },
  prayerTimes: {
    backgroundColor: '#cccccc25',
    padding: '0 0 .8rem 0',
    borderRadius: '5px',
    margin: '3rem 1rem'
  },
  prayerTimeTitle: {
    backgroundColor: '#cccccc35',
    padding: '1rem 3rem',
    borderRadius: '5px 5px 0px 0px',
  }
}

const Carousels = () => {
  const [carouselInfos] = useState([
    {
      img: dimg1,
      heading: 'ALLAH HELP THOSE WHO HELP THEMSELVES',
      subHeading: '',
    },
    {
      img: dimg2,
      heading: 'ALLAH HELP THOSE WHO HELP THEMSELVES',
      subHeading: '',
    },
    {
      img: dimg3,
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