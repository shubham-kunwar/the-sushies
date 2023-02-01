import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Hero = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div style={{ backgroundImage: `url(/assets/images/banner/bg.png)` }}>

            <section id="home" class="banner"  >
                <div class="container">
                    <div class="banner__wrapper">
                        <div class="row g-5 align-items-center">
                            <div class="col-lg-6">
                                <div class="banner__content" data-aos="fade-right" data-aos-duration="2000">
                                    <h3>On A Mission<span class="color--secondary-color">  To the Moon🚀 </span></h3>
                                    <h1>The <span class="color--theme-color">Sushies <br /> NFT</span> Collection</h1>
                                    <p>
                                        1,222  Unique Sushies served with avatars, Starting Minting from
                                        March of 2023.
                                    </p>
                                    <div class="btn-group">
                                        <a href="/mint" class="default-btn default-btn--secondary">Mint Soon</a>
                                        <a href="/mint" class="default-btn">Whitelist Now</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="banner__thumb d-flex justify-content-center" data-aos="fade-left"
                                    data-aos-duration="2000">


                                    <div>



                                        <section class="banner__thumb headcontainer">

                                            <section class="headwrapper">


                                                <div class="homeshowdiv one6"></div>
                                                <div class="homeshowdiv one7"></div>
                                                <div class="homeshowdiv one8"></div>
                                                <div class="homeshowdiv one9"></div>
                                                <div class="homeshowdiv one10"></div>
                                                <div class="homeshowdiv one11"></div>
                                                <div class="homeshowdiv one12"></div>
                                                <div class="homeshowdiv one13"></div>
                                                <div class="homeshowdiv one14"></div>
                                                <div class="homeshowdiv one15"></div>
                                                <div class="homeshowdiv one16"></div>
                                                <div class="homeshowdiv one17"></div>
                                                <div class="homeshowdiv one18"></div>
                                                <div class="homeshowdiv one19"></div>
                                                <div class="homeshowdiv one20"></div>
                                                <div class="homeshowdiv one21"></div>
                                                <div class="homeshowdiv one22"></div>
                                                <div class="homeshowdiv one23"></div>
                                                <div class="homeshowdiv one24"></div>
                                                <div class="homeshowdiv one25"></div>
                                                <div class="homeshowdiv one26"></div>
                                                <div class="homeshowdiv one28"></div>
                                                <div class="homeshowdiv one29"></div>
                                                <div class="homeshowdiv one30"></div>
                                                <div class="homeshowdiv one31"></div>
                                                <div class="homeshowdiv one32"></div>
                                                <div class="homeshowdiv one33"></div>
                                                <div class="homeshowdiv one34"></div>
                                                <div class="homeshowdiv one35"></div>
                                                <div class="homeshowdiv one36"></div>
                                                <div class="homeshowdiv one37"></div>
                                                <div class="homeshowdiv one38"></div>
                                                <div class="homeshowdiv one39"></div>
                                                <div class="homeshowdiv one40"></div>
                                                <div class="homeshowdiv one41"></div>
                                                <div class="homeshowdiv one42"></div>


                                            </section>
                                           
                                             
                                               
                                            

                                        </section>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="counter counter--uplifted padding-top">
                <div class="container">
                    <div class="counter__wrapper">
                        <div class="row g-1">
                            <div class="col-lg-3 col-sm-6">
                                <div class="counter__item">
                                    <div class="counter__item-content">
                                        <h2><span class="purecounter" data-purecounter-start="0"
                                            data-purecounter-end="1222">1222</span> </h2>
                                        <p>Total items</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="counter__item">
                                    <div class="counter__item-content">
                                        <h2 class="color--secondary-color">
                                                <span class="purecounter" data-purecounter-start="1" data-purecounter-end="12">15</span> March
                                        </h2>
                                        <p >
                                            Pre-Sale </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="counter__item">
                                    <div class="counter__item-content">
                                        <h2>
                                            <span class="purecounter" data-purecounter-start="1" data-purecounter-end="110">
                                               13</span></h2>
                                        <p>WL Users</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="counter__item">
                                    <div class="counter__item-content">
                                        <h2 class="color--secondary-color">
                                                <span class="purecounter" data-purecounter-start="0" data-purecounter-end="30">30</span> March
                                        </h2>
                                        <p>
                                            Public-Sale 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            </div>
            <section class="about padding-top padding-bottom" id="about">
                <div class="container">
                    <div class="about__wrapper">
                        <div class="row g-5">
                            <div class="col-lg-6">

                                <div class="banner__thumb d-flex justify-content-center align-items-center" data-aos="fade-left"
                                    data-aos-duration="2000">
                                    <div class="swiper banner__thumb-slider-1">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <div class="banner__thumb-item">
                                                    <img src="assets/images/banner/04.png" alt="NFT Image"/>
                                            </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="banner__thumb-item">
                                                        <img src="assets/images/banner/07.png" alt="NFT Image"/>
                                            </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper banner__thumb-slider-2">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <div class="banner__thumb-item">
                                                            <img src="assets/images/banner/06.png" alt="NFT Image"/>
                                            </div>
                                                        </div>
                                                        <div class="swiper-slide">
                                                            <div class="banner__thumb-item">
                                                                <img src="assets/images/banner/05.png" alt="NFT Image"/>
                                            </div>
                                                            </div>
                                                            <div class="swiper-slide">
                                                                <div class="banner__thumb-item">
                                                                    <img src="assets/images/banner/06.png" alt="NFT Image"/>
                                            </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="swiper banner__thumb-slider-3">
                                                            <div class="swiper-wrapper">

                                                                <div class="swiper-slide">
                                                                    <div class="banner__thumb-item">
                                                                        <img src="assets/images/banner/01.png" alt="NFT Image"/>
                                            </div>
                                                                    </div>
                                                                    <div class="swiper-slide">
                                                                        <div class="banner__thumb-item">
                                                                            <img src="assets/images/banner/07.png" alt="NFT Image"/>
                                            </div>
                                                                        </div>
                                                                    </div>
                                    </div>
                                   
                                    </div>
                                    


                                                        </div>
                            <div class="col-lg-6">
                                <div class="about__content" data-aos="fade-up" data-aos-duration="2000">
                                    <h3 class="subtitle">
                                        The story of The Sushies:
                                    </h3>
                                   
                                    <p>
                                        One often heard of a <strong>Japanese chef </strong> who had honed his cooking skills to such an extent that he created sushi morsels that were as divine as you know.
                                    </p><p>
                                        But these were just legends no one really knew whether this cook really existed or was just a classic urban legend.
                                    </p>
                                    <p>
                                        But there came a day when a boy returning home saw a Sushi Roll running in the middle of the street. At first he was incredulous at what he was seeing, but suddenly he realised that this was real. The Sushi Roll was alive!
                                    </p><p>
                                        That living piece of sushi had come from the hands of the Japanese cook whose name no one knew. The real problem arose when hundreds of pieces of sushi began to escape from the legendary chef's restaurant and that is how our help was requested.
                                    </p><p>
                                        Our task is to recover the 1222 Sushies that escaped from the hands of the cook and bring them safely back to their home.
                                    </p>
                                  

                                </div>
                                <div class="mint-step">
                                    <p class="subtitle color--secondary-color">Easy Steps</p>
                                    <h3>How to Mint</h3>

                                    <ul class="mint-step__list">
                                        <li class="mint-step__list-item">
                                            <span class="color--secondary-color">1.</span>
                                            connect Your Wallet
                                        </li>
                                        <li class="mint-step__list-item">
                                            <span class="color--secondary-color">2.</span>
                                            Select Your Quantity
                                        </li>
                                        <li class="mint-step__list-item">
                                            <span class="color--theme-color">3.</span>
                                            Confirm the transition
                                        </li>
                                        <li class="mint-step__list-item">
                                            <span class="color--theme-color">4.</span>
                                            Receive Your NFTs
                                        </li>
                                    </ul>
                                    <div class="btn-group">
                                        <a href="/mint" class="default-btn default-btn--secondary">Mint Soon</a>
                                        <a href="/mint" class="default-btn">Whitelist Now</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section class="roadmap roadmap--style2 padding-bottom" id="roadmap" style={{ backgroundImage: `url(/assets/images/banner/bg.png)` }}
               >
                <div class="container">
                    <div class="section-header text-center">
                        <p class="subtitle">Roadmap</p>
                        <h2>How it all started</h2>
                    </div>
                    <div class="roadmap__wrapper">
                        <div class="row gy-4 gy-md-0 gx-5">
                            <div class="col-md-6 offset-md-6">
                                <div class=" roadmap__item ms-md-4 aos-init" data-aos="fade-left" data-aos-duration="800">
                                    <div class="roadmap__item-inner">
                                        <div class="roadmap__item-content">
                                            <div class="roadmap__item-header">
                                                <h4 >
                                                    Idea Generation (Q2 2022)
                                                </h4>
                                                <p>10%</p>
                                            </div>
                                            <p>
                                                1.Building something with Culture, Food & Technology.
                                            </p>
                                            <p>
                                                2.Kickoff & Concept Creation with The Sushies.
                                            </p>
                                            <p>

                                                3.Getting Idea from own Restaurent.

                                            </p>
                                            <p>
                                                4. Onboarding Co-Founders and Investors.
                                            </p>
                                        </div>
                                    </div>
                                    <span class="svg-shape"><svg xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink" width="210px" height="10px">
                                        <path fill-rule="evenodd" fill-opacity="0.102" d=" M5.000,-0.001 L30.000,-0.001 L25.000,9.999 L-0.000,9.999 L5.000,-0.001
                                        Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.302" d=" M35.000,-0.001 L60.000,-0.001 L55.000,9.999 L30.000,9.999 L35.000,-0.001
                                        Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.502" d=" M65.000,-0.001 L90.000,-0.001 L85.000,9.999 L60.000,9.999 L65.000,-0.001
                                        Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.702" d=" M95.000,-0.001 L120.000,-0.001 L115.000,9.999 L90.000,9.999 L95.000,-0.001
                                        Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.8" d=" M125.000,-0.001 L150.000,-0.001 L145.000,9.999 L120.000,9.999
                                        L125.000,-0.001 Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.902" d=" M155.000,-0.001 L180.000,-0.001 L175.000,9.999 L150.000,9.999
                                        L155.000,-0.001 Z" />
                                        <path fill-rule="evenodd" d=" M185.000,-0.001 L210.000,-0.001 L210.000,9.999 L180.000,9.999
                                        L185.000,-0.001 Z" />
                                    </svg></span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class=" roadmap__item ms-auto me-md-4 aos-init" data-aos="fade-right"
                                    data-aos-duration="800">
                                    <div class="roadmap__item-inner">
                                        <div class="roadmap__item-content">
                                            <div class="roadmap__item-header">
                                                <h4 >

                                                    Design & Development (Q1 2023)
                                                </h4>
                                                <p>20%</p>
                                            </div>
                                            <p>
                                                1.  Grow Community and Team.

                                            </p>
                                            <p>

                                                2. Sneak Peek of Art.

                                            </p>
                                            <p>

                                                3.  Release Website and Logo.

                                            </p>
                                            <p>

                                                4. Social Media Setup.
                                            </p>
                                        </div>
                                    </div>
                                    <span class="svg-shape"><svg xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink" width="210px" height="10px">
                                        <path fill-rule="evenodd" fill-opacity="0.102" d=" M5.000,-0.001 L30.000,-0.001 L25.000,9.999 L-0.000,9.999 L5.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.302" d=" M35.000,-0.001 L60.000,-0.001 L55.000,9.999 L30.000,9.999 L35.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.502" d=" M65.000,-0.001 L90.000,-0.001 L85.000,9.999 L60.000,9.999 L65.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.702" d=" M95.000,-0.001 L120.000,-0.001 L115.000,9.999 L90.000,9.999 L95.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.8" d=" M125.000,-0.001 L150.000,-0.001 L145.000,9.999 L120.000,9.999
                                                                L125.000,-0.001 Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.902" d=" M155.000,-0.001 L180.000,-0.001 L175.000,9.999 L150.000,9.999
                                                                L155.000,-0.001 Z" />
                                        <path fill-rule="evenodd" d=" M185.000,-0.001 L210.000,-0.001 L210.000,9.999 L180.000,9.999
                                                                L185.000,-0.001 Z" />
                                    </svg></span>
                                </div>
                            </div>
                            <div class="col-md-6 offset-md-6">
                                <div class="roadmap__item ms-md-4  aos-init" data-aos="fade-left" data-aos-duration="800">
                                    <div class="roadmap__item-inner">
                                        <div class="roadmap__item-content">
                                            <div class="roadmap__item-header">
                                                <h4 >
                                                    Initial Release (Q2 2023)
                                                </h4>
                                                <p>40%</p>
                                            </div>
                                            <p>
                                                1.  Pre_sale for WL Users.
                                            </p>
                                            <p>
                                                2. Introduce $SUSHI ,our Utility Token.
                                            </p>
                                            <p>
                                                3.  Launching Staking Dashboard of NFT's.
                                            </p>
                                            <p>
                                                4.  Open Live Mint for Public.
                                            </p>
                                        </div>
                                    </div>
                                    <span class="svg-shape"><svg xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink" width="210px" height="10px">
                                        <path fill-rule="evenodd" fill-opacity="0.102" d=" M5.000,-0.001 L30.000,-0.001 L25.000,9.999 L-0.000,9.999 L5.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.302" d=" M35.000,-0.001 L60.000,-0.001 L55.000,9.999 L30.000,9.999 L35.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.502" d=" M65.000,-0.001 L90.000,-0.001 L85.000,9.999 L60.000,9.999 L65.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.702" d=" M95.000,-0.001 L120.000,-0.001 L115.000,9.999 L90.000,9.999 L95.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.8" d=" M125.000,-0.001 L150.000,-0.001 L145.000,9.999 L120.000,9.999
                                                                L125.000,-0.001 Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.902" d=" M155.000,-0.001 L180.000,-0.001 L175.000,9.999 L150.000,9.999
                                                                L155.000,-0.001 Z" />
                                        <path fill-rule="evenodd" d=" M185.000,-0.001 L210.000,-0.001 L210.000,9.999 L180.000,9.999
                                                                L185.000,-0.001 Z" />
                                    </svg></span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="roadmap__item ms-auto me-md-4  aos-init" data-aos="fade-right"
                                    data-aos-duration="800">
                                    <div class="roadmap__item-inner">
                                        <div class="roadmap__item-content">
                                            <div class="roadmap__item-header">
                                                <h4 >  Marketing (Q3 2023)  </h4>
                                                <p>60%</p>
                                            </div>
                                            <p>
                                                1. Providing Weekly Free Food to Holders
                                            </p>
                                            <p>
                                                2. Opening of Shoping website to shop via earned $SUSHI.
                                            </p>
                                            <p>
                                                3.  Start ICO sale of $SUSHI.
                                            </p>
                                            <p>
                                                4. Buying/Selling $SUSHI on exchanges.
                                            </p>
                                        </div>

                                        <span class="svg-shape"><svg xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink" width="210px" height="10px">
                                            <path fill-rule="evenodd" fill-opacity="0.102" d=" M5.000,-0.001 L30.000,-0.001 L25.000,9.999 L-0.000,9.999 L5.000,-0.001
                                                                Z" />
                                            <path fill-rule="evenodd" fill-opacity="0.302" d=" M35.000,-0.001 L60.000,-0.001 L55.000,9.999 L30.000,9.999 L35.000,-0.001
                                                                Z" />
                                            <path fill-rule="evenodd" fill-opacity="0.502" d=" M65.000,-0.001 L90.000,-0.001 L85.000,9.999 L60.000,9.999 L65.000,-0.001
                                                                Z" />
                                            <path fill-rule="evenodd" fill-opacity="0.702" d=" M95.000,-0.001 L120.000,-0.001 L115.000,9.999 L90.000,9.999 L95.000,-0.001
                                                                Z" />
                                            <path fill-rule="evenodd" fill-opacity="0.8" d=" M125.000,-0.001 L150.000,-0.001 L145.000,9.999 L120.000,9.999
                                                                L125.000,-0.001 Z" />
                                            <path fill-rule="evenodd" fill-opacity="0.902" d=" M155.000,-0.001 L180.000,-0.001 L175.000,9.999 L150.000,9.999
                                                                L155.000,-0.001 Z" />
                                            <path fill-rule="evenodd" d=" M185.000,-0.001 L210.000,-0.001 L210.000,9.999 L180.000,9.999
                                                                L185.000,-0.001 Z" />
                                        </svg></span>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 offset-md-6">
                                <div class="roadmap__item ms-md-4  aos-init" data-aos="fade-left" data-aos-duration="800">
                                    <div class="roadmap__item-inner">
                                        <div class="roadmap__item-content">
                                            <div class="roadmap__item-header">
                                                <h4 >Launching Metaverse  (Q4 2023) </h4>
                                                <p>80%</p>
                                            </div>
                                            <p>1. First Experience for holder in The Sushie Metaverse.</p>
                                            <p>2. Going out for direct public Sale for metaverse land.</p>
                                            <p>3. Airdrop of Metaverse land to lucky 122 NFT's hodlers.</p>
                                            <p>4. Launching Own Nft Marketplace.</p>

                                        </div>

                                        <span class="svg-shape"><svg xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink" width="210px" height="10px">
                                            <path fill-rule="evenodd" fill-opacity="0.102" d=" M5.000,-0.001 L30.000,-0.001 L25.000,9.999 L-0.000,9.999 L5.000,-0.001
                                                                Z" />
                                            <path fill-rule="evenodd" fill-opacity="0.302" d=" M35.000,-0.001 L60.000,-0.001 L55.000,9.999 L30.000,9.999 L35.000,-0.001
                                                                Z" />
                                            <path fill-rule="evenodd" fill-opacity="0.502" d=" M65.000,-0.001 L90.000,-0.001 L85.000,9.999 L60.000,9.999 L65.000,-0.001
                                                                Z" />
                                            <path fill-rule="evenodd" fill-opacity="0.702" d=" M95.000,-0.001 L120.000,-0.001 L115.000,9.999 L90.000,9.999 L95.000,-0.001
                                                                Z" />
                                            <path fill-rule="evenodd" fill-opacity="0.8" d=" M125.000,-0.001 L150.000,-0.001 L145.000,9.999 L120.000,9.999
                                                                L125.000,-0.001 Z" />
                                            <path fill-rule="evenodd" fill-opacity="0.902" d=" M155.000,-0.001 L180.000,-0.001 L175.000,9.999 L150.000,9.999
                                                                L155.000,-0.001 Z" />
                                            <path fill-rule="evenodd" d=" M185.000,-0.001 L210.000,-0.001 L210.000,9.999 L180.000,9.999
                                                                L185.000,-0.001 Z" />
                                        </svg></span>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-6">
                                <div class="roadmap__item ms-auto me-md-4  aos-init" data-aos="fade-right"
                                    data-aos-duration="800">
                                    <div class="roadmap__item-inner">
                                        <div class="roadmap__item-content">
                                            <div class="roadmap__item-header">
                                                <h4 class="">Booming web3 Space (2024)   </h4>
                                                <p>100%</p>
                                            </div>
                                            <p>1. Launching Own Nft Marketplace..</p>
                                            <p>2. Launching our p2e game for the world.</p>
                                            <p>3. Airdrop of profits from p2e to The Sushie Holders.</p>
                                            <p> </p>
                                        </div>
                                    </div>
                                    <span class="svg-shape"><svg xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink" width="210px" height="10px">
                                        <path fill-rule="evenodd" fill-opacity="0.102" d=" M5.000,-0.001 L30.000,-0.001 L25.000,9.999 L-0.000,9.999 L5.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.302" d=" M35.000,-0.001 L60.000,-0.001 L55.000,9.999 L30.000,9.999 L35.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.502" d=" M65.000,-0.001 L90.000,-0.001 L85.000,9.999 L60.000,9.999 L65.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.702" d=" M95.000,-0.001 L120.000,-0.001 L115.000,9.999 L90.000,9.999 L95.000,-0.001
                                                                Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.8" d=" M125.000,-0.001 L150.000,-0.001 L145.000,9.999 L120.000,9.999
                                                                L125.000,-0.001 Z" />
                                        <path fill-rule="evenodd" fill-opacity="0.902" d=" M155.000,-0.001 L180.000,-0.001 L175.000,9.999 L150.000,9.999
                                                                L155.000,-0.001 Z" />
                                        <path fill-rule="evenodd" d=" M185.000,-0.001 L210.000,-0.001 L210.000,9.999 L180.000,9.999
                                                                L185.000,-0.001 Z" />
                                    </svg></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>


        </>
    )
}


