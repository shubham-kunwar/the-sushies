import React from "react"


export const Footer = () => {
    return (
        <>
            
            <section class="community padding-top padding-bottom" >
                <div class="container">
                    <div class="comminity__wrapper">
                        <div class="section-header text-center">
                            <p class="subtitle">Our Community</p>
                            <h2>Join Our Cumminity and get early access</h2>
                        </div>
                        <div class="btn-group justify-content-center">
                            <a href="https://discord.gg/vg7RYvGUSp" target="_blank" class="default-btn default-btn--secondary"><span><i class="fab fa-discord"></i> Join
                                Discord</span></a>
                            <a href="https://twitter.com/SushiesThe" target="_blank" class="default-btn"> <span><i class="fab fa-twitter"></i> Join Twitter</span> </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="footer" style={{ backgroundImage: `url(/assets/images/footer/bg.png)` }} >
                <div class="footer__wrapper  padding-bottom">
                    <div class="container">
                        <div class="footer__content text-center">
                            <div class="logo">
                                <a href="/">
                                    <h3 class="color--theme-color">The<span class="color--secondary-color"> Sushies</span></h3>
                                </a>
                            </div>
                            <ul class="social justify-content-center">
                                <li class="social__item">
                                    <a href="https://twitter.com/SushiesThe" target="_blank" class="social__link"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li class="social__item">
                                    <a href="https://discord.gg/vg7RYvGUSp" target="_blank" class="social__link"><i class="fab fa-discord"></i></a>
                                </li>
                               
                                <li class="social__item">
                                    <a href="#" target="_blank" class="social__link"><i class="fab fa-instagram"></i></a>
                                </li>
                                <li class="social__item">
                                    <a href="#" target="_blank" class="social__link"><i class="fab fa-linkedin-in"></i></a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer__copyright">
                    <div class="container">
                        <div class="text-center py-4">
                            <p class=" mb-0">© 2023 | All Rights Reserved </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
