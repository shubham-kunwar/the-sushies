import React from "react"
import { Link } from "react-router-dom"


export const Mint = () => {
    return (
        <>



            <section class="coming-soon">
                <div class="coming-soon__inner">
                    <div class="coming-soon__content">
                        <h2 class="color--gradient-y">Mint Will be Live soon ! </h2>
                        <p>We are working hard to bring you new experience of metaverse and NFT utilities</p>
                        <ul class="countdown" data-date="July 25, 2023 21:14:01" id="countdown">
                            <li class="countdown__item">
                                <h3 class="countdown__number color--theme-color countdown__number-days">99</h3>
                                <p class="countdown__text">Days</p>
                            </li>
                            <li class="countdown__item">
                                <h3 class="countdown__number color--theme-color countdown__number-hours">18</h3>
                                <p class="countdown__text">Hour</p>
                            </li>
                            <li class="countdown__item">
                                <h3 class="countdown__number color--theme-color countdown__number-minutes">44</h3>
                                <p class="countdown__text">Minu</p>
                            </li>
                            <li class="countdown__item">
                                <h3 class="countdown__number color--theme-color countdown__number-seconds">36</h3>
                                <p class="countdown__text">Seco</p>
                            </li>
                        </ul>
                        <div class="input-group mb-5">
                            <input type="text" class="form-control" placeholder="Enter You Solana Address to get whitelisted."
                                aria-label="Email Newsletter" aria-describedby="email-newsletter"/>
                                <button class="input-group-text" disabled id="email-newsletter">
                                    <i class="fa-solid fa-paper-plane"></i>
                                </button>
                </div>


                            <div class="header-btn padding-bottom">
                                <h3 class="color--secondary-color">Don''t have a Wallet? No worries. </h3>
                            <a href="https://phantom.app/" target="_blank" class="default-btn" >
                                    <span>Download Now <i class="fa-solid fa-wallet"></i></span>
                                </a>
                            </div>



                            <ul class="social justify-content-center">
                                <li class="social__item">
                                    <a href="#" class="social__link"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li class="social__item">
                                    <a href="#" class="social__link"><i class="fab fa-discord"></i></a>
                                </li>
                                <li class="social__item">
                                    <a href="#" class="social__link"><i class="fab fa-twitch"></i></a>
                                </li>
                                <li class="social__item">
                                    <a href="#" class="social__link"><i class="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div class="coming-soon__thumb">
                            <a href="index.html"><img src="assets/images/coming-soon/01.jpg" alt="NFT Image"/> </a>
            </div>
                        </div>

    </section>
        </>
    )
}