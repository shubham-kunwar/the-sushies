import { useEffect, useState } from "react";



export const Whitelist = () => {

   

    return (
        <>


            <section class="error" style={{ backgroundImage: `url(/assets/images/banner/solana.gif)`, opacity: "0.8", backgroundRepeat:" no-repeat;"}}>
                <div class="error__inner">
                    <div class="error__content" >
                        <div style={{ marginLeft: "auto", marginRight: "auto", width: "40%" }}>
                          
                        <img class="d-block "  src="assets/images/banner/congo.gif" alt=" image" />
                        </div>
                        

                        <div class="text-center " style={{ backgroundColor: "black", padding: "60px", borderRadius:"50px" }}>
                            <h3 class=" mb-3" >Hurrah! Your Wallet is Submitted and you are whitelisted.</h3>

                            <h3 style={{ marginBottom: "40px" }} >Join Discord to keep Updated</h3>
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
