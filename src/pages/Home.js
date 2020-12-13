import React from 'react';
import NavBar from '../components/NavBar'
import Jumbotron from '../components/Jumbotron'
import ProjectCarousel from '../components/ProjectCarousel'
import ProjectBanner from '../components/ProjectBanner'
import Footer from '../components/Footer'
import About from '../components/AboutMe'

export default function Home() {

    return (
        <>
            <NavBar />
            <Jumbotron />
            <div class="container">
            <About />
            </div>
            <ProjectBanner />
            <ProjectCarousel /> 
            <Footer />
        </>
    )
}