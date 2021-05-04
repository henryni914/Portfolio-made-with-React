import React from 'react';
import NavBar from '../components/NavBar';
import Jumbotron from '../components/Jumbotron';
import ProjectCarousel from '../components/ProjectCarousel';
import ProjectSection from '../components/ProjectSection';
import SkillsBanner from '../components/SkillsBanner';
import ProjectBanner from '../components/ProjectBanner';
import Footer from '../components/Footer';
import About from '../components/AboutMe';
import Skills from '../components/Skills';

export default function Home() {

    return (
        <>
            <NavBar />
            <Jumbotron />
            <div class="container">
                <About />
            </div>
            <SkillsBanner />
            <Skills />
            <ProjectBanner />
            <ProjectSection />
            {/* <ProjectCarousel />  */}
            <Footer />
        </>
    )
}