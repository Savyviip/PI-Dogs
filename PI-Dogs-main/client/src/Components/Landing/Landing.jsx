import React from "react";
import image from "../Images/image-background2.jpg";
import CustomButton from "./Buttons/CustomButton";

export default function Landing() {
    return (
        <div className="customImage">
            <CustomButton></CustomButton>
            <img src={image} alt="ImageLanding" />
        </div>
    );
}