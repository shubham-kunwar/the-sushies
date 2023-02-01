import React from "react"

export const Career = () => {
    return (
        <>

            <section class="page-header bg--cover" style={{ backgroundImage: `url(/assets/images/header/bg.jpg)` }}>
                <div class="container">
                    <div class="page-header__content text-center">
                        <h3 class="text-uppercase">Career In Metaverse</h3>
                        <nav  aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center mb-0">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item active" >Career</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>




            <div class="info padding-top padding-bottom">
                <div class="container">
                    <div class="info__wrapper justify-content-center">
                        <h3 class="text-center color--secondary-color" style={{marginBottom:"50px"}}>Open Positions</h3>
                        <div class="row justify-content-center g-4">
                           
                            <div class="col-lg-4 col-md-6">
                                <div class="info__item">
                                    <div class="info__item-inner">
                                        <div class="info__item-icon">
                                            <img src="assets/images/contact/01.png" alt="Location icon" />
                                        </div>
                                        <div class="info__item-content">
                                            <h6>Digital marketer</h6>
                                            <p>2</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="info__item">
                                    <div class="info__item-inner">
                                        <div class="info__item-icon">
                                            <img src="assets/images/contact/02.png" alt="Phone icon" />
                                        </div>
                                        <div class="info__item-content">
                                            <h6>Collab Manager</h6>
                                            <p >4</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="info__item">
                                    <div class="info__item-inner">
                                        <div class="info__item-icon">
                                            <img src="assets/images/contact/03.png" alt="Email icon" />
                                        </div>
                                        <div class="info__item-content">
                                            <h6>Junior Blockchain Developer</h6>
                                            <p>1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="contact padding-top padding-bottom">
                <div class="container">
                    <div class="section-header">
                        <div class="section-header__content">
                            <h3>Apply Now</h3>
                            <p>We're Always Happy to onboard New talent in the web3 Space!</p>
                        </div>
                    </div>
                    <div class="contact__wrapper">
                        <div class="row justify-content-center">
                            <div class="col-lg-10">
                                <form class="form" action="resume.web3" method="post" id="contact-form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <input type="text" placeholder="Your Name*" required />
                                        </div>
                                        <div class="col-md-6">
                                            <input type="email" placeholder="Your Email*" required />
                                        </div>
                                        <div class="col-md-6">
                                            <input type="tel" placeholder="Your No"  />
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" placeholder="Position*" required />
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" placeholder="Linkdin"  />
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" placeholder="Portfolio Url"  />
                                        </div>
                                        <div class="col-md-6">
                                            <p> Attach Resume  <input type="file" placeholder="Subject*" required /></p>

                                           
                                        </div>
                                        <div class="col-12">
                                            <textarea placeholder="Cover Letter"></textarea>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" class="default-btn"><span>Apply Now</span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <p class="form-message text-center mt-4"></p>
                    </div>
                </div>
            </section>

            <div class="map">
                <div class="container-fluid px-0">
                    <div class="map__wrapper">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799120522!2d-74.25987460306818!3d40.697670064076384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1647360575411!5m2!1sen!2sbd"
                            allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>

        </>
    )
}
