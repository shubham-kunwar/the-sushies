import React, { useState } from 'react';
import axios from 'axios';

import { WalletMultiButton, } from "@solana/wallet-adapter-react-ui";
import styled from 'styled-components';




export const Mint = () => {




    return (
        <>

            <section class="coming-soon  margin-bottom">
                <div class="coming-soon__inner">  
                    <div class="coming-soon__content">
                        <h2 class="color--gradient-y">Mint Will be Live soon ! </h2>
                        <p style={{ marginBottom: "50px" }}>We are working hard to bring you new experience of metaverse and NFT utilities</p>
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
                        <div class="input-group1 mb-5">

                            <form style={{ display: "flex" }} action="https://public.herotofu.com/v1/e5228560-a258-11ed-a31e-753411848f80" method="post">
                                

                                    <input class="form-control" placeholder="Submit Your Address to get whitelisted now." name="Name" id="name" type="text" required />
                                    <button class="input-group-text" id="email-newsletter" type="submit"> <i class="fa-solid fa-paper-plane"></i></button>

                               

                               
                            </form>

                           
                                
                        </div>
                      
                       



                        <div  class="header-btn padding-bottom2">
                                <h3 class="color--secondary-color">Don''t have a Wallet? No worries. </h3>
                            <a style={{ marginTop: "30px" }} class="default-bt1" >
                                <WalletMultiButton >Download Now</WalletMultiButton >
                            </a>
                            </div>



                           
                        </div>
                    
                        </div>

    </section>
        </>
    )
}
