import { useEffect, useState } from "react";



export const Whitelist = () => {

   

    return (
        <>


            <section class="error padding-top" style={{ backgroundImage: `url(/assets/images/banner/bg.png)`, opacity: "0.8", backgroundRepeat:" no-repeat;"}}>
                <div class="error__inner">
                    <div class="error__content" >
                        
                        

                        <div class="text-center " style={{ backgroundColor: "rgb(7, 19, 36)", padding: "60px", borderRadius:"50px" }}>
                            <h3 class=" mb-3" >🎉Hurrah🎉 Your Wallet is Submitted and you are whitelisted.</h3>

                            <h4 style={{ marginBottom: "40px" }} >Join Discord to keep Updated</h4>
                            <a href="/" class="default-btn">Go Back To Home</a>
                            
                            <a href="https://discord.gg/TKrPtVwhFJ" target="_blank" style={{marginLeft:"5px"} } class=" default-btn default-btn--secondary"><span><i class="fab fa-discord"></i> Join
                                Discord</span></a>
                        </div>
                    </div>
                    
                </div>

            </section>
               
            
        </>
    );
}
