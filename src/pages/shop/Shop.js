import React, { useState } from "react";
import "./Shop.css";

function Shop() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = docuament.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    let counter = 1;
    const size = carouselImages[0].clientWidth;

    carouselSlide.Shop.transform = 'translateX(' + (-size * counter) + 'px)';

    nextBtn.addEventListener('click', ()=>{
        if (counter >= carouselImages.length -1) return;
        carouselSlide.Shop.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide.Shop.transform = 'translateX(' + (-size * counter) + 'px)';
    })

    prevBtn.addEventListener('click', ()=>{
        if (counter <= 0) return;
        carouselSlide.Shop.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.Shop.transform = 'translateX(' + (-size * counter) + 'px)';
    })

    carouselSlide.addEventListener('transitionend', () => {
        if (carouselImages[counter].id === 'lastClone') {
            carouselSlide.Shop.transition = "none";
            counter = carouselImages.length -2;
            carouselSlide.Shop.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        if (carouselImages[counter].id === 'firstClone') {
            carouselSlide.Shop.transition = "none";
            counter = carouselImages.length - counter;
            carouselSlide.Shop.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    })

    return (
        <div className="Shop">

            {/**carousel section */}
            <div className="carousel-container">
                <button className="nextBtn" id="nextBtn">
                    <img src="" alt=""></img>
                 </button>
                 <button className="prevBtn" id="prevBtn">
                    <img src="" alt=""></img>
                 </button>
                <div class="carousel-slide">
                    <img src="" id="lastClone" alt=""></img>
                    <img src="" alt=""></img>
                    <img src="" alt=""></img>
                    <img src="" alt=""></img>
                    <img src="" alt=""></img>
                    <img src="" alt=""></img>
                    <img src="" id="firstClone" alt=""></img>
                </div>
            </div>

            <div className="products-container">
                {/* signature collection section*/}
                <div className="signature-container">
                    <div className="signature-first-container">
                        <div className="signature-header-container">
                            <header className="signature-header">
                                <p>Signature Collection</p>
                            </header>
                            <div className="signature-description">
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit "</p>
                            </div>
                        </div>
                        <button className="learnMore-button">Learn More</button>
                    </div>
                    <div className="signature-second-container">
                        <div className="sun">
                            <img className="Sun-image" src={} alt="sun" />
                            <img className="SunSquare-image" src={} alt="sun square" />
                        </div>
                        <div className="moon">
                            <img className="MoonCresent-image" src={} alt="moon cresent" />
                            <img className="MoonCircle-image" src={} alt="moon circle" />
                            <img className="MoonSquare-image" src={} alt="moon square" />
                        </div>
                    </div>
                
                </div>

                <div className="products">
                    
                </div>

                {/* set section*/}
                <div className="set-container">
                    <img className="set-image" src={} alt="set image" />
                    <div className="set-header-container">
                        <header className="set-header">
                            <p>Day & Night Cream Set</p>
                        </header>
                        <div className="set-price-container">
                            <p>"$55"</p>
                        </div>
                    </div>
                    <div className="set-description">
                        <div className="set-description-text">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                        </div>
                        <div className="set-reviews-container">
                            <div className="set-reviews">
                               <p>"50 Reviews"</p>
                            </div>
                            <div className="set-stars-container">
                                <img className="star1-image" src={} alt="star 1" />
                                <img className="star2-image" src={} alt="star 2" />
                                <img className="star3-image" src={} alt="star 3" />
                                <img className="star4-image" src={} alt="star 4" />
                                <img className="star5-image" src={} alt="star 5" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="size-buttons-container">
                        <div className="30ml">
                            <button className="30ml-button">
                                <img className="circle-button-image" src={} alt="circle button" />
                            </button>
                            <p>30 ml</p>
                        </div>
                        <div className="60ml">
                            <button className="60ml-button">
                                <img className="circle-button-image" src={} alt="circle button" />
                            </button>
                            <p>60 ml</p>
                        </div>
                    </div>

                    <button className="ViewProduct-button">View Product</button>
                </div>

                {/* individual product section*/}
                <div className="individual-container">
                    <div className="day-cream-container">
                        <img className="day-cream-image" src={} alt="day cream image" />
                        <header className="day-cream-header">
                            <p>Day Cream</p>
                       </header>
                       <div className="day-cream-price-container">
                            <p>"$55"</p>
                        </div>
                        <div className="day-cream-reviews-container">
                            <p>"50 Reviews"</p>
                        </div>
                        <div className="day-cream-stars-container">
                            <img className="star1-image" src={} alt="star 1" />
                            <img className="star2-image" src={} alt="star 2" />
                            <img className="star3-image" src={} alt="star 3" />
                            <img className="star4-image" src={} alt="star 4" />
                            <img className="star5-image" src={} alt="star 5" />
                        </div>
                        <div className="day-cream-description-container">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                        </div>
                        <div className="size-buttons-container">
                        <div className="30ml">
                            <button className="30ml-button">
                                <img className="circle-button-image" src={} alt="circle button" />
                            </button>
                            <p>30 ml</p>
                        </div>
                        <div className="60ml">
                            <button className="60ml-button">
                                <img className="circle-button-image" src={} alt="circle button" />
                            </button>
                            <p>60 ml</p>
                        </div>
                    </div>
                        <button className="ViewProduct-button">View Product</button>
                    </div>
                    <div className="night-cream-container">
                    <img className="night-cream-image" src={} alt="night cream image" />
                        <header className="night-cream-header">
                            <p>Night Cream</p>
                        </header>
                        <div className="night-cream-price-container">
                            <p>"$55"</p>
                        </div>
                        <div className="night-cream-reviews-container">
                            <p>"50 Reviews"</p>
                        </div>
                        <div className="night-cream-stars-container">
                            <img className="star1-image" src={} alt="star 1" />
                            <img className="star2-image" src={} alt="star 2" />
                            <img className="star3-image" src={} alt="star 3" />
                            <img className="star4-image" src={} alt="star 4" />
                            <img className="star5-image" src={} alt="star 5" />
                        </div>
                        <div className="night-cream-description-container">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                        </div>
                        <div className="size-buttons-container">
                        <div className="30ml">
                            <button className="30ml-button">
                                <img className="circle-button-image" src={} alt="circle button" />
                            </button>
                            <p>30 ml</p>
                        </div>
                        <div className="60ml">
                            <button className="60ml-button">
                                <img className="circle-button-image" src={} alt="circle button" />
                            </button>
                            <p>60 ml</p>
                        </div>
                    </div>
                        <button className="ViewProduct-button">View Product</button>
                </div>
                
            </div>
            </div>
            
        </div>
       
    )
    

}

export default Shop;
