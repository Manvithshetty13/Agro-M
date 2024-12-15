import React from 'react';
import './Home.css';
import Img3 from "../assets/Fresh_Prod.jpg";
import Img4 from "../assets/Local_Business.webp";
import Img5 from "../assets/Easy_Shoping.jpg";

const Home = () => {


    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to the Farmer's Market</h1>
                <p>Your one-stop shop for fresh, locally grown produce!</p>
            </header>
            <section className="home-features">
                <div
                    className="feature"
                    style={{
                        backgroundImage:`url(${Img3})`
                    }}
                >
                    {/* <img src={Img3} alt="" > */}
                    {/* </img> */}
                    <h2>Fresh Produce</h2>
                    <p>Explore a variety of fresh fruits and vegetables directly from local farmers.</p>
                </div>
                <div
                    className="feature"
                    style={{
                        backgroundImage:`url(${Img4})`
                    }}
                >
                    <h2>Support Local</h2>
                    <p>Buying from us supports local farming communities and sustainable practices.</p>
                </div>
                <div
                    className="feature"
                    style={{
                        backgroundImage:`url(${Img5})`
                    }}
                >
                    <h2>Easy Shopping</h2>
                    <p>Shop online from the comfort of your home with secure payments and quick delivery.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
