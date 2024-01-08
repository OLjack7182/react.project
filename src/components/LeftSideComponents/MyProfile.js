
import 'swiper/css';

import "../../../src/App.css";
import React from 'react';


function MyProfile(props) {
    return (
        <div className="MyProfile">
            {
                props.usersPage.users.map((users)=>(
                    <div className="Profile__header" key={users.id}>
                        <img className="Profile__img" src="./images/hasbik.jpg" alt="Profile"/>
                        <div className="Profile__name">
                            <h1>{users.name}{users.surname}</h1>
                            <h3>{users.born}</h3>
                            <h4>Видеоблогер, Амбассадор UFC</h4>
                        </div>
                </div>
                ))
            }
            <div className="Profile__Gallery">
                <button>←</button>
                    <img src="./images/hasbik2.jpg"></img>
                    <img src="./images/hasbik3.jpg"></img>
                    <img src="./images/hasbik4.jpg"></img>
                    <img src="./images/hasbik5.jpg"></img>
                    <img src="./images/hasbik6.jpg"></img>
                    <img src="./images/hasbik7.jpg"></img>
                    <img src="./images/hasbik8.jpg"></img>
                <button>→</button>
            </div>
            <div></div>
        </div>
    );
}

export default MyProfile;
