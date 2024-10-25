import React, { useState } from 'react';
import './header.css';
import Button from '/src/components/button/button.jsx';
import Background from '/src/images/hero-bg-light.png';
import Mode from '/src/images/light-mode-svgrepo-com.svg';
import BgImg1 from '/src/images/hero-dashboard-light.png';
import BgImg2 from '/src/images/hero-elements-light.png';
import Page1 from '../pages/page1/page1';

const Header = ({page1Style}) => {
    const [divUpp , setDivUpp] = useState(false);
    const [nahihai , setnahihai] = useState("none");


    const lightMode = ()=>{
        // setBgcolor("#fff");
        
    }
    const darkMode = ()=>{
        // setBgcolor("rgb(49, 45, 75)");
    }

    const toggleDiv = () => {
        if(divUpp === false){
            setnahihai("flex");
        }
        else{
            setnahihai("none");
        }
        setDivUpp(prev => !prev); // Toggle the state
        
    }


    return (
        <div className="header" style={{ backgroundColor: bgcolor }}>
            <img src={Background} alt="Background" />
            <div className="nav">
                <div className="logo">
                    <h2>UI.com</h2>
                </div>

                <div className="menu">
                    <a href=""><li>Home</li></a>
                    <a href=""><li>Features</li></a>
                    <a href=""><li>Team</li></a>
                    <a href=""><li>FAQ</li></a>
                    <a href=""><li>Contact Us</li></a>
                    <a href=""><li>Pages</li></a>
                    <a href=""><li>Admin</li></a>
                </div>

                <div className="mode">
                    <img onClick={toggleDiv} src={Mode} alt="Toggle Mode" />
                    
                        <div className="modemake" style={{display : nahihai,}}>
                            <a href="#" onClick={lightMode}><li>Light Mode</li></a>
                            <a href="#" onClick={darkMode}><li>Dark Mode</li></a>
                        </div>
                    

                </div>

                <div className="btns">
                    <Button btnName="Purchase Now" />
                </div>
            </div>

            <div className="title">
                <h1>All in one sass application for</h1>
                <h2>your business</h2>
            </div>
            <div className="title2">
                <h1>No coding required to make customizations. The live customizer has</h1>
                <h2>everything your marketing needs.</h2>
            </div>
            <div className="newbtn">
                <Button btnName="Get Early Access" />
            </div>
            <div className="bgpics">
                <div id="img1">
                    <img src={BgImg1} alt="Dashboard" />
                </div>
                <img id='img2' src={BgImg2} alt="Elements" />
            </div>
        </div>
    );
};

export default Header;
