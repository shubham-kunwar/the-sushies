import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Components
import { WalletMultiButton, } from "@solana/wallet-adapter-react-ui";


import Sidebar from "./Sidebar";
import Backdrop from "./Backdrop";
// Assets

import BurgerIcon from "./BurgerIcon";
import "./Navbar.css"
const Navbar = () => {
    const [y, setY] = useState(window.scrollY);
    const [sidebarOpen, toggleSidebar] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => setY(window.scrollY));
        return () => {
            window.removeEventListener("scroll", () => setY(window.scrollY));
        };
    }, [y]);


    return (
        <>
            <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
            <Wrapper className=" animate header-bottom " style={{ height: "80px", backgroundColor:"rgb(7 19 36 / 1)" }}>
                <NavInner className="header-wrapper container">
                    <Link className="logo" to="/" smooth={true} style={{ marginLeft: "20px" }}>
                      
                            <h3 class="color--theme-color">The<span class="color--secondary-color"> Sushies</span></h3>
                      
                    </Link>
                    <BurderWrapper className="pointer" style={{ float: "right" }} onClick={() => toggleSidebar(!sidebarOpen)}>
                        <BurgerIcon />
                    </BurderWrapper>
                    <div class="menu-area">
                        <ul class="menu">
                            <li>
                                <a href="/">Home</a>
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
                            


                        </ul>
                        <div class="header-btn">
                            <a href="https://discord.gg/TKrPtVwhFJ" target="_blank" class="default-btn default-btn--secondary">
                                <span>Join <i class="fa-brands fa-discord"></i></span>
                            </a>



                            <WalletMultiButton />



                        </div>


                        
                    </div>
                   
                </NavInner>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;

export default Navbar;
