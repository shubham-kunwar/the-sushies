import React from "react"
import { Link } from "react-router-dom"

import styled from 'styled-components';

import { WalletMultiButton, } from "@solana/wallet-adapter-react-ui";


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
 &:hover {
    background-color: #00ffa3;
background: #00ffa3;
  }
}
`;

export const Navbar = () => {


    return (
        <>
            <div class="preloader">
                <img src="assets/images/logo/2.png" alt="Apes land"/>
            </div>

            <header class="header-section">
                <div class="header-bottom">
                    <div class="container">
                        <div class="header-wrapper">
                            <div class="logo">
                                <a href="/">
                                    <h3 class="color--theme-color">The<span class="color--secondary-color"> Sushies</span></h3>
                                </a>
                            </div>
                            <div class="menu-area">
                                <ul class="menu">
                                    <li>
                                        <a href="/#home">Home</a>
                                    </li>
                                    <li>
                                        <a href="/#about">Story</a>
                                    </li>

                                    <li>
                                        <a href="https://the-sushies.gitbook.io/thesushies/" target="_blank">WhitePaper</a>
                                    </li>

                                    <li>
                                        <a href="/mint">Mint Info</a>
                                    </li>

                                    <li>
                                        <a href="/career">Careers</a>
                                    </li>
                                    <li><a href="/blogs">Blog</a></li>


                                </ul>
                                <div class="header-btn">
                                    <a href="https://discord.gg/vg7RYvGUSp" target="_blank" class="default-btn default-btn--secondary">
                                        <span>Join <i class="fa-brands fa-discord"></i></span>
                                    </a>
                                    <a class="default-btn" >
                                        <ConnectButton >Connect<i class="fa-solid fa-wallet"></i>
                                        </ConnectButton>
                                    </a>
                                </div>

                               
                                <div class="header-bar d-lg-none">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
           
            <div class="wallet-modal modal fade" id="wallet-option" tabIndex="-1" aria-labelledby="choose-wallet"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="choose-wallet">Connect Your Wallet</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Please select a wallet to connect for <br/> Start Minting your NFTs</p>
                                <ul class="wallet__list">
                                    <li class="wallet__list-item"><a href="#"> <span><img src="assets/images/wallet/metamask.jpg"
                                        alt="metamask"/>
                                </span> </a></li>
                                        <li class="wallet__list-item"><a href="#"> <span><img src="assets/images/wallet/coinbase.jpg"
                                            alt="coinbase"/>
                                </span> </a></li>
                                            <li class="wallet__list-item"><a href="#"> <span><img src="assets/images/wallet/bsc.jpg"
                                                alt="bsc"/>
                                </span></a></li>
                                                <li class="wallet__list-item"><a href="#"> <span><img src="assets/images/wallet/trust.jpg"
                                                    alt="Trust Wallet"/>
                                </span></a></li>
                    </ul>
                                                <p>By connecting your wallet, you agree to our Terms of Service and our Privacy Policy.</p>
                </div>
            </div>
        </div>
    </div>
                              
        </>
    )
}
