import React from 'react'
import './page4.css'
import Titlecard from '../../components/title-card/titlecard'
import person1 from '/src/images/person1.png'
import person2 from '/src/images/person 2.png'
import person3 from '/src/images/person 3.png'
import person4 from '/src/images/person 4.png'
const Page4 = () => {
  return (
    <div className="page4">
             <div className="one">
            <p>REAL CUSTOMERS REVIEWS</p>
        </div>

        <div className="two">
            <h2>Success stories 
            <span> from clients</span></h2>
        </div>

        <div className="three">
            <p>See what our customers have to say about their experience.</p>
        </div>

        <div className="cards">
            <Titlecard personImg={person1} name="Riya Malhotra" job="Project Manager" ColorOne="rgb(227, 215, 255)" ColorTwo="rgb(255, 255, 255)" />
            <Titlecard personImg={person2} name="Rahul Malhotra" job="Development Lead" ColorOne="rgb(255, 212, 213)" ColorTwo="rgb(255, 255, 255)" />
            <Titlecard personImg={person3} name="Vadika" job="Marketing Manager" ColorOne="rgb(215, 242, 194)" ColorTwo="rgb(255, 255, 255)" />
            <Titlecard personImg={person4} name="Ritik Kumar" job="UI Designer" ColorOne="rgb(199, 236, 255)" ColorTwo="rgb(255, 255, 255)" />
        </div>
    </div>
  )
}

export default Page4