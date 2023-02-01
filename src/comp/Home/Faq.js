
export const Faq = () => {
    return (
        <>




            <section id="faq" class="faq padding-top padding-bottom" style={{ backgroundImage: `url(/assets/images/banner/bg.png)` }}>
                <div class="container">
                    <div class="section-header text-center">
                        <p class="subtitle">Questions & Answers</p>
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div class="faq__wrapper">
                        
                            <div class="col-lg-12">
                                <div class="accordion" id="faqAccordion1">
                                    <div class="row g-4">
                                        <div class="col-12">
                                            <div class="accordion__item" data-aos="fade-up" data-aos-duration="1000">
                                                <div class="accordion__header" id="faq1">
                                                    <button class="accordion__button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#faqBody1"
                                                        aria-expanded="false" aria-controls="faqBody1">
                                                        What is Sushies?<span class="plus-icon"></span>
                                                    </button>
                                                </div>
                                                <div id="faqBody1" class="accordion-collapse collapse" aria-labelledby="faq1"
                                                    data-bs-parent="#faqAccordion1">
                                                    <div class="accordion__body">
                                                         1222 Sushies on the #solana blockchain giving his members the access to exclusive content of japanese culture. 🍣
                                                     
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="accordion__item" data-aos="fade-up" data-aos-duration="1000">
                                                <div class="accordion__header" id="faq1-two">
                                                    <button class="accordion__button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#faqBody1-two"
                                                        aria-expanded="false" aria-controls="faqBody1-two">

                                                        When is the official launch? <span class="plus-icon"></span>
                                                    </button>
                                                </div>
                                                <div id="faqBody1-two" class="accordion-collapse collapse"
                                                    aria-labelledby="faq1-two" data-bs-parent="#faqAccordion2">
                                                    <div class="accordion__body">
                                                        👉 March 2023.Pre-sale & Public Date will be announced later in discord server.

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="accordion__item" data-aos="fade-up" data-aos-duration="1100">
                                                <div class="accordion__header" id="faq2-two">
                                                    <button class="accordion__button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#faqBody2-two"
                                                        aria-expanded="true" aria-controls="faqBody2-two">

                                                        What will the mint price be? <span class="plus-icon"></span>
                                                    </button>
                                                </div>
                                                <div id="faqBody2-two" class="accordion-collapse collapse"
                                                    aria-labelledby="faq2-two" data-bs-parent="#faqAccordion2">
                                                    <div class="accordion__body">
                                                        TBA~~~Based on DAO Voting

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                       
                    </div>
                </div>
            </section>


        </>
    )
}
