import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Assets

import CloseIcon from "./CloseIcon";

import { WalletMultiButton, } from "@solana/wallet-adapter-react-ui";
export default function Sidebar({ sidebarOpen, toggleSidebar }) {
    return (
        <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
            <SidebarHeader className="flexSpaceCenter">
                <div className="flexNullCenter">
                   
                    <h1 className="whiteColor font20" style={{ marginLeft: "15px" }}>
                        The Sushie
                    </h1>
                </div>
                <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
                    <CloseIcon />
                </CloseBtn>
            </SidebarHeader>

            <UlStyle className="flexNullCenter flexColumn">
                <li className="semiBold font20 pointer">
                    <a
                        onClick={() => toggleSidebar(!sidebarOpen)}
                        activeClass="active"
                        className="whiteColor"
                        style={{ padding: "10px 15px" }}
                        href="/"
                        spy={true}
                        smooth={true}
                        offset={-60}
                    >
                        Home
                    </a>

                </li>
                <li className="semiBold font20 pointer">
                    <a
                        onClick={() => toggleSidebar(!sidebarOpen)}
                        activeClass="active"
                        className="whiteColor"
                        style={{ padding: "10px 15px" }}
                        href="/#about"
                        spy={true}
                        smooth={true}
                        offset={-60}
                    >
                        Story
                    </a>
                </li>

                <li className="semiBold font20 pointer">
                    <a
                        onClick={() => toggleSidebar(!sidebarOpen)}
                        activeClass="active"
                        className="whiteColor"
                        style={{ padding: "10px 15px" }}
                        href="https://the-sushies.gitbook.io/thesushies/" target="_blank"
                        spy={true}
                        smooth={true}
                        offset={-60}
                    >
                        Whitepaper
                    </a>
                </li>
                <li className="semiBold font20 pointer">
                    <a
                        onClick={() => toggleSidebar(!sidebarOpen)}
                        activeClass="active"
                        className="whiteColor"
                        style={{ padding: "10px 15px" }}
                        href="/mint"
                        spy={true}
                        smooth={true}
                        offset={-60}
                    >
                        Mint Info
                    </a>
                </li>


                <li className="semiBold font20 pointer">
                    <a
                        onClick={() => toggleSidebar(!sidebarOpen)}
                        activeClass="active"
                        className="whiteColor"
                        style={{ padding: "10px 15px" }}
                        href="/career"
                        spy={true}
                        smooth={true}
                        offset={-60}
                    >
                        Career
                    </a>
                </li>
            </UlStyle>
            <div className="flexSpaceCenter">
              
                    <a href="https://discord.gg/fas3m4VFA2" target="_blank" class="default-btn default-btn--secondary">
                        <span>Join <i class="fa-brands fa-discord"></i></span>
                    </a>
               
             
                        <WalletMultiButton  />
                    
                
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
