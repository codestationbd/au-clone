import React from "react";

import CallToAction from "./Sections/CallToAction/CallToAction";
import Navigation from "./Sections/Navigation/Navigation";
import BlueTiles from "./Sections/BlueTiles/BlueTiles";
import Latest from "./Sections/Latest/Latest";
import Hero from "./Sections/Hero/Hero";
import ProgramsOffered from "./Sections/ProgramsOffered/ProgramsOffered";
import Footer from "./Sections/Footer/Footer";
import Welcome from "./Sections/Welcome/Welcome";
import Watch from "./Sections/Watch/Watch";
import Counters from "./Sections/Counters/Counters";
import Addmission from "./Sections/Addmission/Admission";

export default function Homepage() {
    return (
        <div>
            <CallToAction />
            <Navigation />
            <Hero />
            <BlueTiles />
            <Welcome />
            <ProgramsOffered />
            <Watch />
            <Latest />
            <Counters />
            <Addmission />
            <Footer />
        </div>
    );
}
