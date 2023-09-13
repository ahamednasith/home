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
            <body class="text-[#fff] bg-[#000000]">
                <header className="flex h-[107px] justify-between items-center z-[100] fixed w-full py-5 px-12 bg-[#00000069] backdrop-filter backdrop-blur-[25px]">
                    <img src={logo} alt="logo"className="lg:w-[170px] lg:my-[15px] lg:mx-[0px] sm:w-[130px] sm:my-[15px] sm:mx-[10px] w-[100px]"/>
                    <div className="ham-burger gap-[35px] lg:my-[25px] lg:mx-[0px] hidden lg:flex">
                        <li class="list-none self-center"><a class="text-[#fff] no-underline transition-[linear_0.2s] hover:text-[#C5f602] " href="#a">Home</a></li>
                        <li class="list-none self-center"><a class="text-[#fff] no-underline transition-[linear_0.2s] hover:text-[#C5f602]" href="#a">Grab your deals</a></li>
                        <li class="list-none self-center"><a class="text-[#fff] no-underline transition-[linear_0.2s] hover:text-[#C5f602]" href="#a">Business Growth</a></li>
                        <li class="list-none self-center"><a href="#a" class="flex justify-center items-center no-underline transition-[linear_0.2s] bg-[#C5F602] text-[#000000] min-w-[125px] min-h-[50px] rounded-[35px] hover:bg-[#fff] hover:transition-[linear_0.2s]">Sign Up</a></li>
                    </div>
                    <div className="navabr block cursor-pointer absolute top-[10px] right-[40px] z-[2] m-0 lg:m-[10px]  lg:hidden ">
                        <div class={`bar ${isOpen ? 'change' : ''} transition duration-[0.2s] mx-[10px] my-[15px] lg:m-[25px] `} onClick={toggleNavbar}>
                            <span class="bar-1 block w-[25px] border-solid border-top-[2px] border-[#C5f602] pt-[5px] trasition duration-[0.4s] cursor-pointer"></span>
                            <span class="bar-2 block w-[20px] border-top-[2px] border-solid border-[#C5f602] pt-[5px] trasition duration-[0.4s]"></span>
                            <span class="bar-3 block w-[14px] border-top-[2px] border-solid border-[#C5f602] pt-[5px] trasition duration-[0.4s]"></span>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="ham-burger w-[100%] bg-[#000000] z-[1] text-left top-[80px] right-0 left-0 absolute m-0 bt-[1px] boder-solid border-[#292929] pl-[55px] rounded-br-[35px] rounded-bl-[35px] pt-[30px] lg:hidden block">
                            <li class="pt-[16px] pb-[16px] pl-[10px] no-underline list-none"><a href="#a" class="pt-[16px] text-[#fff] no-underline transition-[linear_0.2s] hover:text-[#C5f602]">Home</a></li>
                            <li class="pt-[16px] pb-[16px] pl-[10px] no-underline list-none"><a href="#a" class="pt-[16px] text-[#fff] no-underline transition-[linear_0.2s] hover:text-[#C5f602]">Grab your deals</a></li>
                            <li class="pt-[16px] pb-[16px] pl-[10px] no-underline list-none"><a href="#a" class="pt-[16px] text-[#fff] no-underline transition-[linear_0.2s] hover:text-[#C5f602]">Business Growth</a></li>
                            <li class="list-none self-center"><a href="#a" class="flex justify-center items-center no-underline transition-[linear_0.2s] mb-[25px] pt-0 bg-[#C5F602] text-[#000000] w-[125px] h-[50px] rounded-[35px] hover:bg-[#fff] hover:transition-[linear_0.2s]">Sign Up</a></li>
                        </div>
                    )}
                </header>
                <section class="boxed first-section flex justify-center items-center sm:h-[570px] md:h-[640px] lg:h-[700px] xl:h-[860px] 2xl:h-[996px] pt-[175px] relative" id="first-section">
                    <div class="flex justify-start items-center tag-one h-[100px] rotate-[10deg] rounded-tl-[15px] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[15px] rounded-r-none min-w-[350px] p-[15px] min-h-[100px] absolute z-[5] sm:scale-[0.5] sm:top-[220px] sm:-left-[80px] md:scale-[0.7] md:top-[240px] md:-left-[40px] lg:left-[60px] lg:scale-[0.8] lg:top-[230px] xl:left-[100px] xl:top-[260px] xl:scale-[1] 2xl:left-[130px] 2xl:top-[300px]">
                        <div class="producting w-[80px] h-[80px] overflow-hidden rounded-[15px]">
                            <img src={saree} alt="Product" draggable="false" class="w-[100%] relative z-[6]"/>
                        </div>
                        <div class="contenting ml-[15px]">
                            <div class="flex justify-start items-center  locate pt-[10px]">
                                <img src={location} alt="Location" draggable="false" class="w-[10px] mr-[5px] pb-[6px]" />
                                <p class="my-[3px] mx-0 text-[15px]">Sowcarpet</p>
                            </div>
                            <p class="pro-name text-[20px]">Kanjivaram Saree</p>
                            <p class="cost my-[5px] mx-[0px] text-[20px] pb-[10px] text-[#C5f602]"><span class="mr-[3px] text-[#fff]">₹</span><span class="line-through decoration-[#E80A0A] mr-[10px] text-[#fff]">900</span>800</p>
                        </div>
                    </div>
                    <div class="flex justify-start items-center tag-two h-[86px] -rotate-[13deg] rounded-l-none rounded-tl-[4px] rounded-br-[15px] rounded-tr-[15px] rounded-bl-[4px] min-w-[350px] p-[15px] min-h-[100px] absolute z-[5] sm:scale-[0.5] sm:top-[192px] sm:-right-[80px] md:scale-[0.7] md:top-[100px] md:-right-[40px] md:top-[195px] lg:right-[45px] lg:scale-[0.8] lg:top-[210px] lg:-rotate-[10deg] xl:right-[55px] xl:top-[250px] xl:-rotate-[8deg] xl:scale-[1] 2xl:right-[150px] 2xl:-rotate-[13deg] 2xl:top-[255px]">
                        <div class="producting w-[80px] h-[80px] overflow-hidden rounded-[15px]">
                            <img src={saree} alt="Product" draggable="false" class="w-[100%] relative z-[6]" />
                        </div>
                        <div class="contenting ml-[15px]">
                            <div class="flex justify-start items-center locate pt-[10px]">
                                <img src={location} alt="Location" draggable="false" class="w-[10px] mr-[5px] pb-[6px]"/>
                                <p class="my-[3px] mx-0 text-[15px]">Madipaakam</p>
                            </div>
                            <p class="pro-name text-[20px]">Denim Blue Shirt</p>
                            <p class="cost my-[5px] mx-[0px] text-[20px] pb-[10px] text-[#C5f602]"><span class="mr-[3px] text-[#fff]">₹</span><span class="line-through decoration-[#E80A0A] mr-[10px] text-[#fff]">500</span>350</p>
                        </div>
                    </div>
                    <div class="flex justify-start items-center tag-three h-[86px] -rotate-[4deg] rounded-r-none rounded-tl-[15px] rounded-br-[4px] rounded-tr-[4px] rounded-bl-[15px] min-w-[350px] p-[15px] min-h-[100px] absolute z-[5] sm:scale-[0.3] sm:-left-[105px] sm:top-[360px] md:scale-[0.5] md:top-[410px] md:-left-[80px] lg:scale-[0.7] lg:-left-[15px] lg:top-[430px] xl:-left-[16px] xl:scale-[0.9] xl:top-[520px] 2xl:scale[1] 2xl:left-[40px] 2xl:top-[588px] ">
                        <div class="producting w-[80px] h-[80px] overflow-hidden rounded-[15px]">
                            <img src={saree} alt="Product" draggable="false" class="w-[100%] relative z-[6]" />
                        </div>
                        <div class="contenting ml-[15px]">
                            <div class="flex justify-start items-center locate pt-[10px]">
                                <img src={location} alt="Location" draggable="false" class="w-[10px] mr-[5px] pb-[6px]" />
                                <p class="my-[3px] mx-0 text-[15px]">Medavakkam</p>
                            </div>
                            <p class="pro-name text-[20px]">Hair Spa Treatment</p>
                            <p class="cost my-[5px] mx-[0px] text-[20px] pb-[10px] text-[#C5f602]"><span class="mr-[3px] text-[#fff]">₹</span><span class="line-through decoration-[#E80A0A] mr-[10px] text-[#fff]">900</span>800</p>
                        </div>
                    </div>
                    <div class="flex justify-start items-center tag-four h-[86px] rotate-[5deg] rounded-l-none rounded-tl-[4px] rounded-br-[15px] rounded-tr-[15px] rounded-bl-[4px] min-w-[350px] p-[15px] min-h-[100px] absolute z-[5] sm:scale-[0.3] sm:-right-[100px] sm:top-[325px] md:scale-[0.5] md:top-[355px] md:-right-[75px] lg:scale-[0.7] lg:-right-[10px] lg:top-[360px] xl:scale-[0.9] xl:-right-[10px] xl:top-[430px] 2xl:scale-[1] 2xl:right-[5px] 2xl:top-[490px]">
                        <div class="producting w-[80px] h-[80px] overflow-hidden rounded-[15px]">
                            <img src={saree} alt="Product" draggable="false" class="w-[100%] relative z-[6]" />
                        </div>
                        <div class="contenting ml-[15px]">
                            <div class="flex justify-start items-center locate pt-[10px]">
                                <img src={location} alt="Location" draggable="false" class="w-[10px] mr-[5px] pb-[6px]" />
                                <p class="my-[3px] mx-0 text-[15px]">Thoraipakkam</p>
                            </div>
                            <p class="pro-name text-[20px]">Traditional ecklace Set</p>
                            <p class="cost my-[5px] mx-[0px] text-[20px] pb-[10px] text-[#C5f602]"><span class="mr-[3px] text-[#fff]">₹</span><span class="line-through decoration-[#E80A0A] mr-[10px] text-[#fff]">1200</span>1012</p>
                        </div>
                    </div>
                    <img src={Group} alt="Man holding the phone excited" class="main-man  sm:w-[80%] md:w-[70%] lg:w-[55%] xl:w-[60%] " draggable="false" />
                    <span class="gradientino-and absolute top-[200px] left-[40px] w-[400px] rounded-[100%] -z-[1]"></span>
                    <span class="gradientino-another absolute top-[630px] -right-[300px] w-[600px] rounded-[100%] -z-[1]"></span>
                    <span class="darken absolute bottom-0 left-0 right-0 w-[100%] h-[0px] sm:h-[100px] md:h-[60px] "></span>
                </section>
                <section class="section-two boxed">
                    <h1 class="h1 text-center m-[auto] sm:text-[30px] md:text-[35px] md:w-[75%] lg:text-[40px]  lg:w-[60%] xl:w-[52%] xl:text-[45px]">Get The Most Attractive <span class="justify-center items-center inline-flex min-w-[150px] w-fit bg-[#C5F602] text-[#000000] rounded-[15px] pt-[13px] pb-[10px] pl-[0px] pr-[0px]">Deal</span> from shops near me</h1>
                    <p className="para text-[25px] text-[#C5f602] text-center">Buy products at never before price</p>
                </section>
                <section class="section-three boxed">
                    <div class="maps-control relative">
                        <img src={google} alt="Google Maps" draggable="false" class="mappu w-[100%] h-[100%] inline-flex align-baseline" />
                        <img src={layout} alt="Layout" draggable="false" class="layout absolute top-0 left-0 bottom-0 right-0 w-[100%] mix-blend-hue h-[100%]" />
                        <img src={radial} alt="Radial BG" draggable="false" class="radioactive absolute -top-[1px] bottom-0 right-0 w-[100%] h-[100%]" />
                        <div class="pulse-one flex justify-center items-center absolute m-auto rounded-[100px] bottom-0 right-0 p-[5px] bg-[#fff] z-[0] animate-pulse -top-[150px] w-[50px] h-[50px] left-[100px] lg:w-[60px] lg:h-[60px] lg:-top-[210px] lg:left-[100px]  xl:w-[70px] xl:h-[70px] xl:-top-[250px] xl:left-[150px] 
                        after:content-[''] after:bg-[#fff] after:absolute after:bottom-[0px] after:rounded-[10px] after:rotate-[45deg] after:-z-[1] after:w-[35px] after:h-[35px] after:left-[7px] lg:after:left-[10px] lg:after:w-[40px] lg:after:h-[40px] xl:after:h-[50px] xl:after:w-[50px]">
                            <img src={user} alt="user" draggable="false" class="rounded-[100px] w-[40px] h-40px lg:w-[50px] lg:h-[50px]  xl:w-[60px] xl:h-[60px]" />
                        </div>
                        <div class="pulse-two flex justify-center items-center absolute m-[auto] w-[fit] h-[fit] rounded-[100px] bg-[#fff] z-[0] cursor-pointer p-[5px] w-[50px] top-[32px] left-[170px] md:top-[63px] md:left-[235px] lg:w-[60px] lg:h-[60px] lg:top-[93px] lg:left-[315px] xl:w-[70px] xl:h-[70px] xl:top-[110px] xl:left-[370px] 2xl:top-[140px] 2xl:left-[436px]
                        after:content-[''] after:bg-[#fff] after:absolute after:bottom-[0px] after:rotate-[45deg] after:rounded-[10px] after:-z-[1] after:w-[35px] after:h-[35px] after:left-[7px] lg:after:left-[10px] lg:after:h-[40px] lg:after:w-[40px] xl:after:h-[50px] xl:after:w-[50px]">
                            <img src={place} alt="Some Place" draggable="false" class="rounded-[100px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px]"/>
                            <div class="video-display top-[70px] left-[50px] absolute scale-[0] opacity-[0] transition-[linear] duration-[0.2s]">
                                <div class="video-controller w-[0px] h-[0px] overflow-hidden rounded-[15px] transition-[linear] duration-[0.2s]">
                                    <video class="w-[100%] rounded-[15px]" src="chumma-video.mp4" muted autoplay loop></video>
                                </div>
                                <div class="flex justify-center items-center the-whole-product bg-[#ffffff69] backdrop-blur-[10px] rounded-[10px] absolute min-w-[200px] min-h-[90px] bottom-[25px] left-[25px]">
                                    <div>
                                        <img src={user} alt="Product" draggable="false" class="w-[60px] h-[60px] rounded-[100px]"/>
                                    </div>
                                    <div class="product-information ml-[10px]">
                                        <p class="my-[3px] mx-0 text-[#000000] text-[20px]">Curate.in <span><img src={tick} alt="Verified" draggable="false" class="w-[12px] h-[12px]"/></span></p>
                                        <p class="my-[3px] mx-0 text-[#000000] text-[13px] text-[#000000]">Shopping</p>
                                        <p class="my-[3px] mx-0 text-[#000000] text-[15px]">₹<span class="text-[#393939] my-[0px] mx-[5px] line-through decoration-[#E80A0A]">499</span>300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pulse-three flex justify-center items-center absolute m-[auto] w-[fit] h-[fit] rounded-[100px] bg-[#fff] z-[0] cursor-pointer p-[5px] bottom-[130px] left-[85px] md:bottom-[170px] md:left-[120px] lg:w-[60px] lg:h-[60px] lg:bottom-[225px] lg:left-[160px] xl:w-[70px] xl:h-[70px] xl:bottom-[260px] xl:left-[200px] 2xl:bottom-[300px] 2xl:left-[240px]
                        after:content-[''] after:bg-[#fff] after:absolute after:bottom-[0px] after:rotate-[45deg] after:rounded-[10px] after:-z-[1] after:w-[35px] after:h-[35px] after:left-[7px] lg:after:left-[10px] lg:after:h-[40px] lg:after:w-[40px] xl:after:h-[50px] xl:after:w-[50px]">
                            <img src={place} alt="Some Place" draggable="false" class="rounded-[100px] w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]  xl:w-[60px] xl:h-[60px] "/>
                            <div class="video-display-two bottom-[20px] left-[50px] absolute scale-[0] opacity-[0] transition-[linear] duration-[0.2s]">
                                <div class="video-controller w-[0px] h-[0px] overflow-hidden rounded-[15px] transition-[linear] duration-[0.2s]">
                                    <video class="w-[100%] rounded-[15px]" src="chumma-video.mp4" muted autoplay loop></video>
                                </div>
                                <div class="flex justify-center items-center the-whole-product bg-[#ffffff69] backdrop-blur-[10px] rounded-[10px] absolute min-w-[200px] min-h-[90px] bottom-[25px] left-[25px]">
                                    <div>
                                        <img src={user} alt="Product" draggable="false" class="w-[60px] h-[60px] rounded-[100px]"/>
                                    </div>
                                    <div class="product-information ml-[10px]">
                                        <p class="my-[3px] mx-0 text-[#000000] text-[20px]">Curate.in <span><img src={tick} alt="Verified" draggable="false" class="w-[12px] h-[12px]"/></span></p>
                                        <p class="my-[3px] mx-0 text-[#000000] text-[13px] text-[#000000]">Shopping</p>
                                        <p class="my-[3px] mx-0 text-[#000000] text-[15px]">₹<span class="text-[#393939] my-[0px] mx-[5px] line-through decoration-[#E80A0A]">499</span>300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pulse-four flex justify-center items-center absolute m-[auto] w-[fit] h-[fit] rounded-[100px] bg-[#fff] z-[0] cursor-pointer p-[5px] bottom-[152px] right-[130px] md:bottom-[195px] md:right-[180px] lg:w-[60px] lg:h-[60px] lg:bottom-[260px] lg:right-[245px] xl:w-[70px] xl:h-[70px] xl:bottom-[303px] xl:right-[295px] 2xl:bottom-[350px] 2xl:right-[350px]
                        after:content-[''] after:bg-[#fff] after:absolute after:bottom-[0px] after:rotate-[45deg] after:rounded-[10px] after:-z-[1] after:w-[35px] after:h-[35px] after:left-[7px] lg:after:left-[10px] lg:after:h-[40px] lg:after:w-[40px] xl:after:h-[50px] xl:after:w-[50px]">
                            <img src={place} alt="Some Place" draggable="false" class="rounded-[100px] w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px]"/>
                            <div class="video-display-three bottom-[20px] right-[50px] absolute scale-[0] opacity-[0] transition-[linear] duration-[0.2s]">
                                <div class="video-controller w-[0px] h-[0px] overflow-hidden rounded-[15px] transition-[linear] duration-[0.2s]">
                                    <video class="w-[100%] rounded-[15px]" src="chumma-video.mp4" muted autoplay loop></video>
                                </div>
                                <div class="flex justify-center items-center the-whole-product bg-[#ffffff69] backdrop-blur-[10px] rounded-[10px] absolute min-w-[200px] min-h-[90px] bottom-[25px] left-[25px]">
                                    <div>
                                        <img src={user} alt="Product" draggable="false" class="w-[60px] h-[60px] rounded-[100px]"/>
                                    </div>
                                    <div class="product-information ml-[10px]">
                                        <p class="my-[3px] mx-0 text-[#000000] text-[20px]">Curate.in <span><img src={tick} alt="Verified" draggable="false" class="w-[12px] h-[12px]"/></span></p>
                                        <p class="my-[3px] mx-0 text-[#000000] text-[13px] text-[#000000]">Shopping</p>
                                        <p class="my-[3px] mx-0 text-[#000000] text-[15px]">₹<span class="text-[#393939] my-[0px] mx-[5px] line-through decoration-[#E80A0A]">499</span>300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pulse-five flex justify-center items-center absolute m-[auto] w-[fit] h-[fit] rounded-[100px] bg-[#fff] z-[0] cursor-pointer p-[5px] top-[60px] right-[70px] md:top-[100px] md:right-[105px] lg:w-[60px] lg:h-[60px] lg:top-[140px] lg:right-[140px] xl:top-[168px] xl:w-[70px] xl:h-[70px] xl:right-[170px] 2xl:top-[207px] 2xl:right-[200px]
                        after:content-['']  after:bg-[#fff] after:absolute after:bottom-[0px] after:rotate-[45deg] after:rounded-[10px] after:-z-[1] after:w-[35px] after:h-[35px] after:left-[7px] lg:after:left-[10px] lg:after:h-[40px] lg:after:w-[40px] xl:after:h-[50px] xl:after:w-[50px]">
                            <img src={place} alt="Some Place" draggable="false" class="rounded-[100px] w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px]"/>
                            <div class="video-display-four top-[75px] right-[45px] absolute scale-[0] opacity-[0] transition-[linear] duration-[0.2s]">
                                <div class="video-controller w-[0px] h-[0px] overflow-hidden rounded-[15px] transition-[linear] duration-[0.2s]">
                                    <video class="w-[100%] rounded-[15px]" src="chumma-video.mp4" muted autoplay loop></video>
                                </div>
                                <div class="flex justify-center items-center the-whole-product bg-[#ffffff69] backdrop-blur-[10px] rounded-[10px] absolute min-w-[200px] min-h-[90px] bottom-[25px] left-[25px]">
                                    <div>
                                        <img src={user} alt="Product" draggable="false" class="w-[60px] h-[60px] rounded-[100px]"/>
                                    </div>
                                    <div class="product-information ml-[10px]">
                                        <p class="my-[3px] mx-0 text-[#000000] text-[20px]">Curate.in <span><img src={tick} alt="Verified" draggable="false" class="w-[12px] h-[12px]"/></span></p>
                                        <p class="my-[3px] mx-0 text-[#000000] text-[13px] text-[#000000]">Shopping</p>
                                        <p class="my-[3px] mx-0 text-[#000000] text-[15px]">₹<span class="text-[#393939] my-[0px] mx-[5px] line-through decoration-[#E80A0A]">499</span>300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pulse-six flex justify-center items-center absolute m-[auto] w-[fit] h-[fit] rounded-[100px] bg-[#fff] z-[0] cursor-pointer p-[5px] top-[8px] right-[185px] md:top-[30px] md:right-[260px] lg:w-[60px] lg:h-[60px] lg:top-[45px] lg:right-[347px] xl:w-[70px] xl:h-[70px] xl:top-[60px] xl:right-[415px] 2xl:top-[78px] 2xl:right-[480px]
                        after:content-[''] after:bg-[#fff] after:absolute after:bottom-[0px] after:rotate-[45deg] after:rounded-[10px] after:-z-[1] after:w-[35px] after:h-[35px] after:left-[7px] lg:after:left-[10px] lg:after:h-[40px] lg:after:w-[40px] xl:after:h-[50px] xl:after:w-[50px]">
                            <img src={place} alt="Some Place" draggable="false" class="rounded-[100px] w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px]"/>
                            <div class="video-display-five top-[75px] right-[45px] absolute scale-[0] opacity-[0] transition-[linear] duration-[0.2s]">
                                <div class="video-controller w-[0px] h-[0px] overflow-hidden rounded-[15px] transition-[linear] duration-[0.2s]">
                                    <video class="w-[100%] rounded-[15px]" src="chumma-video.mp4" muted autoplay loop></video>
                                </div>
                                <div class="flex justify-center items-center the-whole-product bg-[#ffffff69] backdrop-blur-[10px] rounded-[10px] absolute min-w-[200px] min-h-[90px] bottom-[25px] left-[25px]">
                                    <div>
                                        <img src={user} alt="Product" draggable="false" class="w-[60px] h-[60px] rounded-[100px]"/>
                                    </div>
                                    <div class="product-information ml-[10px]">
                                        <p class="my-[3px] mx-0 text-[#000000] text-[20px]">Curate.in <span><img src={tick} alt="Verified" draggable="false" class="w-[12px] h-[12px]"/></span></p>
                                        <p class="my-[3px] mx-0 text-[#000000] text-[13px] text-[#000000]">Shopping</p>
                                        <p class="my-[3px] mx-0 text-[#000000] text-[15px]">₹<span class="text-[#393939] my-[0px] mx-[5px] line-through decoration-[#E80A0A]">499</span>300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pulse-seven flex justify-center items-center absolute m-[auto] w-[fit] h-[fit] rounded-[100px] bg-[#fff] z-[0] cursor-pointer p-[5px] top-[38px] left-[60px] md:top-[70px] md:left-[90px] lg:w-[60px] lg:h-[60px] lg:top-[100px] lg:left-[120px] xl:w-[70px] xl:h-[70px] xl:top-[120px] xl:left-[145px] 2xl:top-[150px] 2xl:left-[173px]
                        after:content-[''] after:bg-[#fff] after:absolute after:bottom-[0px] after:rotate-[45deg] after:rounded-[10px] after:-z-[1] after:w-[35px] after:h-[35px] after:left-[7px] lg:after:left-[10px] lg:after:h-[40px] lg:after:w-[40px] xl:after:h-[50px] xl:after:w-[50px]">
                            <img src={place} alt="Some Place" draggable="false" class="rounded-[100px] w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px]"/>
                            <div class="video-display-six top-[75px] left-[45px] absolute scale-[0] opacity-[0] transition-[linear] duration-[0.2s]">
                                <div class="video-controller w-[0px] h-[0px] overflow-hidden rounded-[15px] transition-[linear] duration-[0.2s]">
                                    <video class="w-[100%] rounded-[15px]" src="chumma-video.mp4" muted autoplay loop></video>
                                </div>
                                <div class="flex justify-center items-center the-whole-product bg-[#ffffff69] backdrop-blur-[10px] rounded-[10px] absolute min-w-[200px] min-h-[90px] bottom-[25px] left-[25px]">
                                    <div>
                                        <img src={user} alt="Product" draggable="false" class="w-[60px] h-[60px] rounded-[100px]"/>
                                    </div>
                                    <div class="product-information ml-[10px]">
                                        <p class="my-[3px] mx-0 text-[#000000] text-[20px]">Curate.in <span><img src={tick} alt="Verified" draggable="false" class="w-[12px] h-[12px]"/></span></p>
                                        <p class="my-[3px] mx-0 text-[#000000] text-[13px] text-[#000000]">Shopping</p>
                                        <p class="my-[3px] mx-0 text-[#000000] text-[15px]">₹<span class="text-[#393939] my-[0px] mx-[5px] line-through decoration-[#E80A0A]">499</span>300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="stores before-text">
                        <p class="text-[10px] md:text-[15px] lg:text-[28px] w-[47%] text-center mt-[100px] mx-[auto] mb-[25px]">Enjoy personalized, location-based shopping with exclusive offers and discounts just for you.</p>
                        <div class="flex justify-center items-center boxed store"> 
                            <a href="#a" class="w-[50%] m-[10px] no-underline text-[#fff] transition-linear duration-[0.2s] hover:scale-[1.035]"><img src={appStore} alt="App Store" draggable="false" class="w-[50%]"/></a>
                            <a href="#a" class="w-[50%] m-[10px] no-underline text-left text-[#fff] transition-linear duration-[0.2s] hover:scale-[1.035]"><img src={playStore} alt="Play Store" draggable="false" class='w-[50%]'/></a>
                        </div>
                    </div>
                </section>
                <section class="section-four boxed">
                    <h2 class="h2 mt-[100px] mx-[auto] mb-[50px] text-center leading-[1.3] text-[38px] md:text-[48px]">Grow your business with <span class="block text-[#C5f602]">Shop Near Me</span></h2>
                    <div class="flex justify-center items-center whole-fill w-[100%] rounded-[35px] relative my-[100px] mx-[0px] sm:min-h-[180px] md:min-h-[260px] lg:min-h-[350px] xl:min-h-[400px] 2xl:min-h-[500px]">
                        <div class="lappart w-[50%]">
                            <img src={laptop} alt="Handshakes from Laptop" draggable="false" class="w-[50%] absolute sm:-top-[80px] md:-top-[110px] lg:-top-[145px]" />
                        </div>
                        <div class="lap-content  w-[50%]">
                            <p class="my-[20px] mx-[0px] w-[90%] leading-[1.2] sm:text-[14px] md:text-[20px] lg:text-[30px] xl:text-[36px]">Unleash the Power of Innovation and Collaboration</p>
                            <p class="my-[20px] text-[#CBD0AD] sm:text-[10px] md:text-[15px] lg:text-[20px]">Let us assist you in unlocking your business’s full potential.</p>
                            <a href="#a" class="flex justify-center items-center no-underline w-fit rounded-[35px] bg-[#C5F602] text-[#000000] transition-linear duration-[0.2s] sm:min-w-[100px] sm:min-h-[30px] sm:text-[15px] md:text-[20px] md:min-w-[150px] md:min-h-[50px] hover:bg-[#fff] hover:opacity-[0.7] hover:transition-linear duration-[0.2s]">Sign Up</a>
                        </div>
                    </div>
                    <div class="flex justify-center items-center dual-role my-[100px] mx-[0px]">
                        <div class="thunder-man flex justify-center items-center flex-col w-[50%] m-[10px] rounded-[35px] relative sm:min-h-[400px] md:min-h-[530px] lg:min-h-[650px] xl:min-h-[700px]">
                            <div class="one-sided">
                                <img src={arrow} alt="Arrow Man" draggable="false" class="absolute left-0 right-0 w-[100%] -top-[100px]" />
                            </div>
                            <div class="double-sided mt-[auto] p-[25px]">
                                <p class="my-[20px] mx-[0px] w-[80%] leading-[1.3] sm:text-[20px] md:text-[25px] lg:text-[36px]">Grow your business with Shops</p>
                                <p class="w-[90%] leading-[1.5] my-[20px] mx-[0px] text-[#CBD0AD] sm:text-[10px] md:text-[20px] ">Partner with us for exponential growth and success.</p>
                                <a href="#a" class="flex justify-center items-center no-underline w-fit rounded-[35px] my-[20px] mx-[0px] bg-[#C5F602] text-[#000000] transition-linear duration-[0.2s] hover:bg-[#fff] hover:opacity-[0.7] sm:min-w-[100px] sm:min-h-[30px] sm:text-[15px] md:text-[20px] md:min-w-[150px] md:min-h-[50px] hover:transition-linear duration-[0.2s]">Sign Up</a>
                            </div>
                        </div>
                        <div class="puzzle-side flex justify-center items-center flex-col w-[50%] m-[10px] rounded-[35px] relative sm:min-h-[400px] md:min-h-[530px] lg:min-h-[650px] xl:min-h-[700px] ">
                            <div class="one-sided">
                                <img src={puzzle} alt="Puzzle Hands" draggable="false" class="absolute left-0 right-0 w-[100%] overflow-hidden top-[30px] lg:top-[50px]"/>
                            </div>
                            <div class="double-sided mt-[auto] p-[25px]">
                                <p class="my-[20px] mx-[0px] w-[80%] leading-[1.3] sm:text-[20px] md:text-[25px] lg:text-[36px]">Together, we can shape the future of your business</p>
                                <p class="w-[90%] leading-[1.5] my-[20px] mx-[0px] text-[#CBD0AD] sm:text-[10px] md:text-[20px]">Let's work together towards  thedirection of your business.</p>
                                <a href="#a" class="flex justify-center items-center no-underline w-fit rounded-[35px]  my-[20px] mx-[0px] bg-[#C5F602] text-[#000000] transition-linear duration-[0.2s] sm:min-w-[100px] sm:min-h-[30px] sm:text-[15px] md:text-[20px] md:min-w-[150px] md:min-h-[50px] hover:bg-[#fff] hover:opacity-[0.7] hover:transition-linear duration-[0.2s]">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section-five">
                    <div class="section-five-logo">
                        <img src={logo} alt="Logo" draggable="false" class="sm:w-[100px] lg:w-[150px]" />
                    </div>
                    <div class="mobile-screens mt-[25px] mx-[0px] mb-[0px] relative">
                        <img src={screen} alt="Mobile Screens" draggable="false" class="w-[100%] -mb-[200px]"/>
                        <span class="linear-black-color w-[100%] absolute bottom-0 left-0 right-0 min-h-[450px] lg:min-h-[650px]"></span>
                    </div>
                </section>
                <footer class="relative overflow-hidden bg-[#101010]">
                    <span class="footer-top-gradient w-[400px] absolute right-0 top-[50px] rounded-[100%] z-[0]"></span>
                    <div class="boxed content-footer pt-[100px] pb-[25px] px-[0px]">
                        <div class="footer-logo">
                            <a href="#a" class="logoin-it no-underline text-[#6A6F4F]"><img src={logo} alt="Footer Logo" draggable="false" class="w-[100px] md:w-[150px] pt-[0px] pb-[15px] px-[0px]" /></a>
                        </div>
                        <p class="know-em text-center text-[#6A6F4F] text-[15px] md:text-[20px]">Get the best deals. Find the best Deals for the product you Love.</p>
                        <div class="flex justify-center items-center boxed footer-stores">
                            <a href="#a" class="w-[50%] m-[10px] no-underline text-[#fff] transiton-linear duration-[0.2s] hover:scale-[1.035]"><img src={appStore} alt="App Store" draggable="false" class="w-[50%]"/></a>
                            <a href="#a" class="w-[50%] m-[10px] no-underline text-[#fff] transiton-linear duration-[0.2s] text-left hover:scale-[1.035]"><img src={playStore} alt="Play Store" draggable="false" class="w-[50%]"/></a>
                        </div>
                        <a href="#first-section" class="up-arrow flex justify-center items-center absolute p-[5px] rounded-[100px] bg-[#5C6522] right-[100px] bottom-[120px] md:bottom-[150px] md:right-[120px] lg:right-[160px] tarnsition-linear duration-[0.2s] hover:opacity-[0.9] transition-linear duration-[0.2s]"><img src={upArrow} alt="Up Arrow" draggable="false" class="w-[30px] lg:w-[50px]"/></a>
                    </div>
                    <div class="flex justify-between items-center boxed copyDopy bt-1px border-[#FFFFFF14] border-solid">
                        <p class="Copyright text-[#A1A1AA] text-[10px] md:text-[15px]">© Copyright 2023 All Rights Reserved by Pepul tech private  limited</p>
                        <div class="flex justify-center items-center social-media py-[25px] px-[0px]">
                            <a href="#a" class="flex justify-center items-center no-underline m-[10px] p-[10px] rounded-[100px] text-[#A1A1AA] bg-[#1D1D1D] w-[40px] h-[40px] md:w-[50px] md:h-[50px] transition-linear duration-[0.2s] hover:bg-[#C5F602]"><img src={twitter} alt="Twitter" draggable="false" class="w-[15px] md:w-[20px] hover:invert-[1] "  /></a>
                            <a href="#a" class="flex justify-center items-center no-underline m-[10px] p-[10px] rounded-[100px] text-[#A1A1AA] bg-[#1D1D1D] w-[40px] h-[40px] md:w-[50px] md:h-[50px] transition-linear duration-[0.2s] hover:bg-[#C5F602]"><img src={facebook} alt="Facebook" draggable="false" class="w-[12px] invert-[100%] sepia-[0%] saturate-[0%] hue-rotate-[207deg] brightness-[109%] contrast-[101%] hover:invert-[0]"  /></a>
                            <a href="#a" class="flex justify-center items-center no-underline m-[10px] p-[10px] rounded-[100px] text-[#A1A1AA] bg-[#1D1D1D] w-[40px] h-[40px] md:w-[50px] md:h-[50px] transition-linear duration-[0.2s] hover:bg-[#C5F602]"><img src={instragram} alt="Instagram" draggable="false" class="w-[20px] hover:invert-[1]" /></a>
                        </div>
                    </div>
                    <span class="footer-bottom-gradient w-[400px] absolute left-0 bottom-[50px] rounded-[100%] z-[0]"></span>
                </footer>
                <script src="https://cdn.tailwindcss.com"></script>
            </body>
        </div>
    )
}