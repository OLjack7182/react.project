import "../../../src/App.css";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function MyProfile() {
    return (
        <div className="MyProfile">
            <div className="Profile__header">
                <img className="Profile__img" src="./images/hasbik.jpg" alt="Profile"/>
                <div className="Profile__name">
                    <h1>Хасбулла Магомедов</h1>
                    <h3>род. 7 июля 2002, Махачкала</h3>
                    <h4>Видеоблогер, Амбассадор UFC</h4>
                </div>
            </div>

            <div className="Profile__Gallery">
                <marquee behavior="scroll" direction="left" scrollamount="3">
                    <img src="./images/hasbik2.jpg"></img>
                    <img src="./images/hasbik3.jpg"></img>
                    <img src="./images/hasbik4.jpg"></img>
                    <img src="./images/hasbik5.jpg"></img>
                    <img src="./images/hasbik6.jpg"></img>
                    <img src="./images/hasbik7.jpg"></img>
                    <img src="./images/hasbik8.jpg"></img>
                </marquee>
            </div>
            
            <div></div>
        </div>
    );
}

export default MyProfile;
