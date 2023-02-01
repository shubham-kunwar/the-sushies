import React from "react"
import { Link } from "react-router-dom"
import { Hero} from "../comp/Home/Home"
import { Team } from "../comp/Home/Team"
import { Faq } from "../comp/Home/Faq"

export const Home = () => {
    return (
        <>

            <Hero />
            
            <Team/>
            <Faq/>

        </>
    )
}