import { useEffect, useState } from "react";



export const Whitelist = () => {

   

    return (
        <>


            <section class="error" style={{ backgroundImage: `url(/assets/images/banner/wl.avif)`, backgroundSize: "cover", backgroundRepeat:" no-repeat;"}}>
                <div class="error__inner">
                    <div class="error__content" >
                        <div style={{ marginLeft: "auto", marginRight: "auto", width: "40%" }}>
                            <video controls width="500" autoplay muted>
                                <source src="forest.mp4" type="assets/images/banner/solana1.mp4"/>
                                 
                                        </video>
                        <img class="d-block mb-4"  src="assets/images/banner/04.png" alt=" image" />
                    </div>
                        <h3 class=" mb-3" style={{ color:"black" }}>Hurrah! Your Wallet is Submitted and you are whitelisted.</h3>
                       
                        <h3 style={{ color: "black" }}>Join Discord to keep Updated</h3>
                        <div class="text-center mt-5">
                            <a href="/" class="default-btn">Go Back To Home</a>
                            
                            <a href="https://discord.gg/vg7RYvGUSp" target="_blank" style={{marginLeft:"5px"} } class=" default-btn default-btn--secondary"><span><i class="fab fa-discord"></i> Join
                                Discord</span></a>
                        </div>
                    </div>
                    
                </div>

            </section>
               
            
        </>
    );
}
