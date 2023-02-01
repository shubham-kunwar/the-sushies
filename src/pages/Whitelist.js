import { useEffect, useState } from "react";



export const Whitelist = () => {

   

    return (
        <>


            <section class="error" style={{ backgroundImage: `url(/assets/images/banner/congo.gif)`,  backgroundRepeat:" no-repeat;"}}>
                <div class="error__inner">
                    <div class="error__content" >
                        <div style={{ marginLeft: "auto", marginRight: "auto", width: "40%" }}>
                          
                        <img class="d-block mb-4"  src="assets/images/banner/solana.gif" alt=" image" />
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
