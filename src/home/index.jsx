import React, { useState } from "react";
import { Helmet } from "react-helmet";
import logo from "../images/logo.webp";
import saree from "../images/saree.webp";
import location from "../images/location.webp";
import Group from "../images/Group 2609131.png";
import google from "../images/google-maps.webp";
import layout from "../images/layout.webp";
import radial from "../images/radial-bg.webp";
import user from "../images/user.webp";
import place from "../images/some-place-one.webp";
import tick from "../images/Tick.webp";
import appStore from "../images/app-store.webp";
import playStore from "../images/play-store.webp";
import laptop from "../images/laptop-exchange.webp";
import arrow from "../images/arrow-man.webp";
import puzzle from "../images/puzzles.webp";
import screen from "../images/mobile-screens.webp";
import upArrow from "../images/up-arrow.webp";
import twitter from "../images/twitter.webp";
import facebook from "../images/facebook.webp";
import instragram from "../images/instagram.webp";
import "./index.css"

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Shops Near Me</title>
                <meta name="theme-color" content="#000" />
                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
            </Helmet>
            <body>
                <header className="flex h-[107px] justify-between items-center z-[100] fixed w-full py-5 px-12">
                    <img src={logo} alt="logo"className="w-[150px] my-[15px] mx-[0px]"/>
                    <div className="ham-burger gap-[35px] my-[25px] mx-[0px] hidden lg:flex">
                        <li><a href="#a">Home</a></li>
                        <li><a href="#a">Grab your deals</a></li>
                        <li><a href="#a">Business Growth</a></li>
                        <li><a href="#a" class="flex justify-center items-center">Sign Up</a></li>
                    </div>
                    <div className="navabr lg:hidden">
                        <div class={`bar ${isOpen ? 'change' : ''}`} onClick={toggleNavbar}>
                            <span class="bar-1"></span>
                            <span class="bar-2"></span>
                            <span class="bar-3"></span>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="ham-burger lg:hidden block">
                            <li><a href="#a">Home</a></li>
                            <li><a href="#a">Grab your deals</a></li>
                            <li><a href="#a">Business Growth</a></li>
                            <li><a href="#a" class="flex justify-center items-center">Sign Up</a></li>
                        </div>
                    )}
                </header>
                <section class="boxed first-section flex justify-center items-center h-[996px] pt-[175px] relative " id="first-section">
                    <div class="flex justify-start items-center tag-one h-[86px] left-[130px] top-[320px] rotate-[10deg] rounded-tl-[15px] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[15px] rounded-r-none">
                        <div class="producting w-[80px] h-[80px] overflow-hidden rounded-[15px]">
                            <img src={saree} alt="Product" draggable="false" class="w-[100%] relative z-[6]"/>
                        </div>
                        <div class="contenting ml-[15px]">
                            <div class="flex justify-start items-center  locate pt-[10px]">
                                <img src={location} alt="Location" draggable="false" class="w-[10px] mr-[5px] pb-[6px]" />
                                <p class="my-[3px] mx-0 text-[15px]">Sowcarpet</p>
                            </div>
                            <p class="pro-name text-[20px]">Kanjivaram Saree</p>
                            <p class="cost my-[5px] mx-[0px] text-[20px] pb-[10px]"><span>₹</span><span>900</span>800</p>
                        </div>
                    </div>
                    <div class="flex justify-start items-center tag-two h-[86px] right-[150px] top-[255px] -rotate-[13deg] rounded-l-none rounded-tl-[4px] rounded-br-[15px] rounded-tr-[15px] rounded-bl-[4px]">
                        <div class="producting w-[80px] h-[80px] overflow-hidden rounded-[15px]">
                            <img src={saree} alt="Product" draggable="false" class="w-[100%] relative z-[6]" />
                        </div>
                        <div class="contenting ml-[15px]">
                            <div class="flex justify-start items-center locate pt-[10px]">
                                <img src={location} alt="Location" draggable="false" class="w-[10px] mr-[5px] pb-[6px]"/>
                                <p class="my-[3px] mx-0 text-[15px]">Sowcarpet</p>
                            </div>
                            <p class="pro-name text-[20px]">Kanjivaram Saree</p>
                            <p class="cost my-[5px] mx-[0px] text-[20px] pb-[10px]"><span>₹</span><span>900</span>800</p>
                        </div>
                    </div>
                    <div class="flex justify-start items-center tag-three h-[86px] left-[25px] top-[588px] -rotate-[4deg] rounded-r-none rounded-tl-[15px] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[15px] ">
                        <div class="producting w-[80px] h-[80px] overflow-hidden rounded-[15px]">
                            <img src={saree} alt="Product" draggable="false" class="w-[100%] relative z-[6]" />
                        </div>
                        <div class="contenting ml-[15px]">
                            <div class="flex justify-start items-center locate pt-[10px]">
                                <img src={location} alt="Location" draggable="false" class="w-[10px] mr-[5px] pb-[6px]" />
                                <p class="my-[3px] mx-0 text-[15px]">Sowcarpet</p>
                            </div>
                            <p class="pro-name text-[20px]">Kanjivaram Saree</p>
                            <p class="cost my-[5px] mx-[0px] text-[20px] pb-[10px]"><span>₹</span><span>900</span>800</p>
                        </div>
                    </div>
                    <div class="flex justify-start items-center tag-four h-[86px] right-[5px] top-[490px] rotate-[5deg] rounded-l-none rounded-tl-[4px] rounded-br-[15px] rounded-tr-[15px] rounded-bl-[4px] ">
                        <div class="producting w-[80px] h-[80px] overflow-hidden rounded-[15px]">
                            <img src={saree} alt="Product" draggable="false" class="w-[100%] relative z-[6]" />
                        </div>
                        <div class="contenting ml-[15px]">
                            <div class="flex justify-start items-center locate pt-[10px]">
                                <img src={location} alt="Location" draggable="false" class="w-[10px] mr-[5px] pb-[6px]" />
                                <p class="my-[3px] mx-0 text-[15px]">Sowcarpet</p>
                            </div>
                            <p class="pro-name text-[20px]">Kanjivaram Saree</p>
                            <p class="cost my-[5px] mx-[0px] text-[20px] pb-[10px]"><span>₹</span><span>900</span>800</p>
                        </div>
                    </div>
                    <img src={Group} alt="Man holding the phone excited" class="main-man w-[60%]" draggable="false" />
                    <span class="gradientino-and absolute top-[200px] left-[40px] w-[400px]"></span>
                    <span class="gradientino-another absolute top-[630px] -right-[300px] w-[600px]"></span>
                    <span class="darken absolute bottom-0 left-0 right-0 w-[100%] h-[130px]"></span>
                </section>
                <section class="section-two boxed">
                    <h1 class="h1 text-[45px] text-center w-[52%] m-auto">Get The Most Attractive <span class="justify-center items-center inline-flex min-w-[150px] rounded-[15px] pt-[13px] pb-[10px] pl-[0px] pr-[0px]">Deal</span> from shops near me</h1>
                    <p className="para text-[25px] text-center">Buy products at never before price</p>
                </section>
                <section class="section-three boxed">
                    <div class="maps-control relative">
                        <img src={google} alt="Google Maps" draggable="false" class="mappu w-[100%] h-[100%] inline-flex align-baseline" />
                        <img src={layout} alt="Layout" draggable="false" class="layout absolute top-0 left-0 bottom-0 right-0 w-[100%] mix-blend-hue h-[100%]" />
                        <img src={radial} alt="Radial BG" draggable="false" class="radioactive absolute -top-[1px] bottom-0 right-0 w-[100%] h-[100%]" />
                        <div class="pulse-one flex justify-center items-center absolute m-auto rounded-[100px] -top-[250px] left-[150px] bottom-0 right-0 animate-[pulse_3s_infinite] p-[5px] w-[70px] h-[70px] z-[0]">
                            <img src={user} alt="user" draggable="false" />
                        </div>
                        <div class="pulse-two flex justify-center items-center top-[140px] left-[436px]">
                            <img src={place} alt="Some Place" draggable="false" />
                            <div class="video-display">
                                <div class="video-controller">
                                    <video src="chumma-video.mp4" muted autoplay loop></video>
                                </div>
                                <div class="flex justify-center items-center the-whole-product">
                                    <div>
                                        <img src={user} alt="Product" draggable="false" />
                                    </div>
                                    <div class="product-information">
                                        <p>Curate.in <span><img src={tick} alt="Verified" draggable="false" /></span></p>
                                        <p>Shopping</p>
                                        <p>₹<span>499</span>300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pulse-three flex justify-center items-center bottom-[300px] left-[240px]">
                            <img src={place} alt="Some Place" draggable="false" />
                            <div class="video-display-two">
                                <div class="video-controller">
                                    <video src="chumma-video.mp4" muted autoplay loop></video>
                                </div>
                                <div class="flex justify-center items-center the-whole-product">
                                    <div>
                                        <img src={user} alt="Product" draggable="false" />
                                    </div>
                                    <div class="product-information">
                                        <p>Curate.in <span><img src={tick} alt="Verified" draggable="false" /></span></p>
                                        <p>Shopping</p>
                                        <p>₹<span>499</span>300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pulse-four flex justify-center items-center bottom-[350px] right-[350px]">
                            <img src={place} alt="Some Place" draggable="false" />
                            <div class="video-display-three">
                                <div class="video-controller">
                                    <video src="chumma-video.mp4" muted autoplay loop></video>
                                </div>
                                <div class="flex justify-center items-center the-whole-product">
                                    <div>
                                        <img src={user} alt="Product" draggable="false" />
                                    </div>
                                    <div class="product-information">
                                        <p>Curate.in <span><img src={tick} alt="Verified" draggable="false" /></span></p>
                                        <p>Shopping</p>
                                        <p>₹<span>499</span>300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pulse-five flex justify-center items-center top-[207px] right-[200px]">
                            <img src={place} alt="Some Place" draggable="false" />
                            <div class="video-display-four">
                                <div class="video-controller">
                                    <video src="chumma-video.mp4" muted autoplay loop></video>
                                </div>
                                <div class="flex justify-center items-center the-whole-product">
                                    <div>
                                        <img src={user} alt="Product" draggable="false" />
                                    </div>
                                    <div class="product-information">
                                        <p>Curate.in <span><img src={tick} alt="Verified" draggable="false" /></span></p>
                                        <p>Shopping</p>
                                        <p>₹<span>499</span>300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pulse-six flex justify-center items-center top-[78px] right-[480px]">
                            <img src={place} alt="Some Place" draggable="false" />
                            <div class="video-display-five">
                                <div class="video-controller">
                                    <video src="chumma-video.mp4" muted autoplay loop></video>
                                </div>
                                <div class="flex justify-center items-center the-whole-product">
                                    <div>
                                        <img src={user} alt="Product" draggable="false" />
                                    </div>
                                    <div class="product-information">
                                        <p>Curate.in <span><img src={tick} alt="Verified" draggable="false" /></span></p>
                                        <p>Shopping</p>
                                        <p>₹<span>499</span>300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pulse-seven flex justify-center items-center top-[150px] left-[173px]">
                            <img src={place} alt="Some Place" draggable="false" />
                            <div class="video-display-six">
                                <div class="video-controller">
                                    <video src="chumma-video.mp4" muted autoplay loop></video>
                                </div>
                                <div class="flex justify-center items-center the-whole-product">
                                    <div>
                                        <img src={user} alt="Product" draggable="false" />
                                    </div>
                                    <div class="product-information">
                                        <p>Curate.in <span><img src={tick} alt="Verified" draggable="false" /></span></p>
                                        <p>Shopping</p>
                                        <p>₹<span>499</span>300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="stores-before-text">
                        <p class="text-[28px] w-[47%] text-center">Enjoy personalized, location-based shopping with exclusive offers and discounts just for you.</p>
                        <div class="flex justify-center items-center boxed store">
                            <a href="#a"><img src={appStore} alt="App Store" draggable="false" /></a>
                            <a href="#a"><img src={playStore} alt="Play Store" draggable="false" /></a>
                        </div>
                    </div>
                </section>
                <section class="section-four boxed">
                    <h2 class="h2 text-[48px] mt-[100px] mx-[auto] mb-[50px] text-center leading-[1.3]">Grow your business with <span>Shop Near Me</span></h2>
                    <div class="flex justify-center items-center whole-fill w-[100%] rounded-[35px] relative min-h-[500px] my-[100px] mx-[0px]">
                        <div class="lappart w-[50%]">
                            <img src={laptop} alt="Handshakes from Laptop" draggable="false" class="w-[50%] absolute -top-[175px]" />
                        </div>
                        <div class="lap-content  w-[50%]">
                            <p class="text-[36px] my-[20px] mx-[0px] w-[90%] leading-[1.2]">Unleash the Power of Innovation and Collaboration</p>
                            <p class="text-[20px] my-[20px]">Let us assist you in unlocking your business’s full potential.</p>
                            <a href="#a" class="flex justify-center items-center no-underline w-fit min-w-[150px] min-h-[50px] rounded-[35px] text-[20px]">Sign Up</a>
                        </div>
                    </div>
                    <div class="flex justify-center items-center dual-role my-[100px] mx-[0px]">
                        <div class="thunder-man flex justify-center items-center flex-col w-[50%] m-[10px] rounded-[35px] relative min-h-[700px]">
                            <div class="one-sided">
                                <img src={arrow} alt="Arrow Man" draggable="false" class="absolute -top-[100px] left-0 right-0 w-[100%]" />
                            </div>
                            <div class="double-sided mt-[auto] p-[25px]">
                                <p class="text-[36px] my-[20px] mx-[0px] w-[80%] leading-[1.3]">Grow your business with Shops</p>
                                <p class="text-[20px] w-[90%] leading-[1.5] my-[20px] mx-[0px]">Partner with us for exponential growth and success.</p>
                                <a href="#a" class="flex justify-center items-center no-underline w-fit min-w-[150px] min-h-[50px] rounded-[35px] text-[20px] my-[20px] mx-[0px]">Sign Up</a>
                            </div>
                        </div>
                        <div class="puzzle-side flex justify-center items-center flex-col w-[50%] m-[10px] rounded-[35px] relative min-h-[700px]">
                            <div class="one-sided">
                                <img src={puzzle} alt="Puzzle Hands" draggable="false" class="absolute top-[50px] left-0 right-0 w-[100%] overflow-hidden"/>
                            </div>
                            <div class="double-sided mt-[auto] p-[25px]">
                                <p class="text-[36px] my-[20px] mx-[0px] w-[80%] leading-[1.3]">Together, we can shape the future of your business</p>
                                <p class="text-[20px] w-[90%] leading-[1.5] my-[20px] mx-[0px]">Let's work together towards  thedirection of your business.</p>
                                <a href="#a" class="flex justify-center items-center no-underline w-fit min-w-[150px] min-h-[50px] rounded-[35px] text-[20px] my-[20px] mx-[0px]">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section-five">
                    <div class="section-five-logo">
                        <img src={logo} alt="Logo" draggable="false" class="w-[150px]" />
                    </div>
                    <div class="mobile-screens mt-[25px] mx-[0px] mb-[0px] relative">
                        <img src={screen} alt="Mobile Screens" draggable="false" class="w-[100%] -mb-[200px]"/>
                        <span class="linear-black-color w-[100%] absolute bottom-0 left-0 right-0 min-h-[650px]"></span>
                    </div>
                </section>
                <footer class="relative overflow-hidden">
                    <span class="footer-top-gradient w-[400px] absolute right-0 top-[50px] rounded-[100%] z-[0]"></span>
                    <div class="boxed content-footer pt-[100px] pb-[25px] px-[0px]">
                        <div class="footer-logo">
                            <a href="#a" class="logoin-it no-underline"><img src={logo} alt="Footer Logo" draggable="false" class="w-[150px] pt-[0px] pb-[15px] px-[0px]" /></a>
                        </div>
                        <p class="know-em text-center text-[20px]">Get the best deals. Find the best Deals for the product you Love.</p>
                        <div class="flex justify-center items-center boxed footer-stores">
                            <a href="#a"><img src={appStore} alt="App Store" draggable="false" /></a>
                            <a href="#a"><img src={playStore} alt="Play Store" draggable="false" /></a>
                        </div>
                        <a href="#first-section" class="up-arrow flex justify-center items-center absolute bottom-[150px] right-[160px] p-[5px] rounded-[100px]"><img src={upArrow} alt="Up Arrow" draggable="false"/></a>
                    </div>
                    <div class="flex justify-between items-center boxed copyDopy">
                        <p class="Copyright text-[15px]">© Copyright 2023 All Rights Reserved by Pepul tech private  limited</p>
                        <div class="flex justify-center items-center social-media py-[25px] px-[0px]">
                            <a href="#a" class="flex justify-center items-center no-underline m-[10px] p-[10px] w-[50px] h-[50px] rounded-[100px]"><img src={twitter} alt="Twitter" draggable="false" class="w-[20px]"  /></a>
                            <a href="#a" class="flex justify-center items-center no-underline m-[10px] p-[10px] w-[50px] h-[50px] rounded-[100px]"><img src={facebook} alt="Facebook" draggable="false" class="w-[12px]"  /></a>
                            <a href="#a" class="flex justify-center items-center no-underline m-[10px] p-[10px] w-[50px] h-[50px] rounded-[100px]"><img src={instragram} alt="Instagram" draggable="false" class="w-[20px]" /></a>
                        </div>
                    </div>
                    <span class="footer-bottom-gradient w-[400px] absolute left-0 bottom-[50px] rounded-[100%] z-[0]"></span>
                </footer>
                <script src="https://cdn.tailwindcss.com"></script>
            </body>
        </div>
    )
}