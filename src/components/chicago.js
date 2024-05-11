import React from "react";
import { useNavigate } from 'react-router-dom';
import 'App.css';
import LLrimg from 'assets/LL-r-img.jpg';
import Button from 'components/Button/button';

function Chicago() {
    const navigate = useNavigate();

    const navigateToBookingPage = () => {
        navigate('/booking');
    }
    return (
        <div className="hero-background">
            <div className="hero">
            <div style={{display: "grid", rowGap: "5px", alignSelf: "start"}}>
                <p style={{ width: "200", fontWeight:"medium", fontSize:"40px", color: "#F4CE14"}}>Little Lemon</p>
                <p style={{fontSize:"30px"}}>Chicago</p>
                <p>Nestled in the heart of bustling Chicago, Little Lemon is where modern flair meets cozy nostalgia. Our diverse,
                    artisanal menu, featuring delectable bruschettas, succulent burgers, and refreshing Greek salads,
                    is a testament to our belief that food is an art</p>
                <Button style={{width: "150px"}} onClick={navigateToBookingPage}> Reserve Table </Button>
            </div>
            <img className="image" src={LLrimg} alt="chef-image" />
            </div>
        </div>
    )
}

export default Chicago;