import React from "react"
import { Link } from "react-router-dom"


export const PageNotFound = () => {
    return (
        <>



            <section class="error">
                <div class="error__inner">
                    <div class="error__content">
                        <img class="d-block mb-4" src="assets/images/error/404.png" alt="404 image"/>
                            <h3 class="color--gradient-y mb-3">Opps! This Page Not Found</h3>
                            <p>We are working hard to bring you new experience</p>
                            <div class="text-center mt-5">
                                <a href="/" class="default-btn">Go Back To Home</a>
                            </div>
            </div>
                   
                        </div>

    </section>
        </>
    )
}
