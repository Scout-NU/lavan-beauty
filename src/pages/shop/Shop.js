import React, { useState } from "react";
import "./Shop.css";
import cresent from "../../assets/shop/cresent.jpg"
import learnMore from "../../assets/shop/learnMore.jpg"
import moonProduct from "../../assets/shop/moonProduct.jpg"
import overlappedMoon from "../../assets/shop/overlapped-moon.jpg"
import rectangleIndivi from "../../assets/shop/Rectangle-indiv.jpg"
import rectangleSet from "../../assets/shop/Rectangle-set.jpg"
import Star from "../../assets/shop/Star.jpg"
import sunProduct from "../../assets/shop/sun-product.jpg"
import sun from "../../assets/shop/sun.jpg"
import viewProductIndiv from "../../assets/shop/view-product-image.jpg"
import viewProductSet from "../../assets/shop/view-product-set.jpg"


function Shop() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    function stars() {
        return ( 
        <div className="stars-container">
            <img className="star-image" src={Star} alt="star 1" />
            <img className="star-image" src={Star} alt="star 2" />
            <img className="star-image" src={Star} alt="star 3" />
            <img className="star-image" src={Star} alt="star 4" />
            <img className="star-image" src={Star} alt="star 5" />
        </div>);
       }
    function buttons() {
        return(<div className="indiv-size-buttons-container">
            <div className="button-ml">
                <img className="button-image-ml" src={} alt="circle button" />
                <div className="ml-text">
                    <p>30 ml</p>
                </div>
            </div>
            <div className="button-ml">
                <img className="button-image-ml" src={} alt="circle button" />
                <div className="ml-text">
                    <p>60 ml</p>
                </div>
            </div>
        </div>);
    }

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
                            <img className="MoonCresent-image" src={cresent} alt="moon cresent" />
                            <img className="MoonCircle-image" src={} alt="moon circle" />
                            <img className="MoonSquare-image" src={} alt="moon square" />
                        </div>
                    </div>
                
                </div>

                <div className="products-container">
                    {/* set section*/}
                    <div className="set-container">
                        <img className="set-image" src={} alt="set image" />
                        <div className="set-second-half">
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
                                    <stars/>
                                    <div className="set-reviews">
                                        <p>"50 Reviews"</p>
                                    </div>
                                </div>
                            </div>
                            <buttons/>
                            <button className="set-ViewProduct-button">View Product</button>
                            </div>
                    </div>

                    {/* individual product section*/}
                    <div className="individual-container">
                        <div className="individual-cream-container">
                            <img className="individual-cream-image" src={} alt="day cream image" />
                            <div className="individual-header-container">
                                <header className="header">
                                    <p>Day Cream</p>
                                </header>
                                <div className="individual-price-container">
                                    <p>"$55"</p>
                                </div>
                            </div>
                            <div className="individual-description">
                                <div className="individual-description-text">
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                                </div>
                                <div className="individual-reviews-container">
                                    <stars/>
                                    <div className="reviews">
                                        <p>"50 Reviews"</p>
                                    </div>
                                </div>
                            </div>
                        
                            <buttons/>
                            <button className="ViewProduct-button">View Product</button>
                        </div>
                        

                        <div className="individual-cream-container">
                            <img className="individual-cream-image" src={} alt="night cream image" />
                            <div className="individual-header-container">
                                <header className="header">
                                    <p>Night Cream</p>
                                </header>
                                <div className="individual-price-container">
                                    <p>"$55"</p>
                                </div>
                            </div>
                            <div className="individual-description">
                                <div className="individual-description-text">
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                                </div>
                                <div className="individual-reviews-container">
                                    <stars/>
                                    <div className="reviews">
                                        <p>"50 Reviews"</p>
                                    </div>
                                </div>
                            </div>
                        
                            <buttons/>
                            <button className="ViewProduct-button">View Product</button>
                        </div>
                    </div>
                </div>
            </div>
       
    )
    

}

export default Shop;
