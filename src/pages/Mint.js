import React from "react"
import { Link } from "react-router-dom"

import { WalletMultiButton, } from "@solana/wallet-adapter-react-ui";
import styled from 'styled-components';


const ConnectButton = styled(WalletMultiButton)`
   font-size: 0.875rem;
    text-decoration: none;
    font-family: "Bakbak One", cursive;
    color: #000000;
    padding: 0 0rem;
    line-height: 70px;
    transform-origin: right;
    transition: all 0.3s ease;
    background: #00ffa3;
    font-weight: bold;
    text-transform: uppercase;
    font-weight: 400;
height:56px;
}`

export const Mint = () => {
    return (
        <>



            <section class="coming-soon  ">
                <div class="coming-soon__inner">  
                    <div class="coming-soon__content">
                        <h2 class="color--gradient-y">Mint Will be Live soon ! </h2>
                        <p>We are working hard to bring you new experience of metaverse and NFT utilities</p>
                        <ul class="countdown" data-date="March  15, 2023 21:00:00" id="countdown">
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
                        <div class="input-group">

                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfWqiGkX-C4lqDqr5m24oTJMhxVt_gDw-RLUfxV1jHUXwPenA/viewform?embedded=true" width="640" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

                        </div>
                       

                        <div class="header-btn padding-bottom">
                                <h3 class="color--secondary-color">Don''t have a Wallet? No worries. </h3>
                            <a class="default-bt1" >
                                <WalletMultiButton />
                            </a>
                            </div>



                           
                        </div>
                    
                        </div>

    </section>
        </>
    )
}
