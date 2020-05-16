import React from 'react';
import NavBar from '../components/NavBar'
import Jumbotron from '../components/Jumbotron'
import ProjectCarousel from '../components/ProjectCarousel'
import ProjectBanner from '../components/ProjectBanner'
import SkillBanner from '../components/SkillBanner'
import SkillContainer from '../components/SkillContainer'

export default function Home() {

    return (
        <>
            <NavBar />
            <Jumbotron />
            <SkillBanner />
            <SkillContainer />
            <ProjectBanner />
            <ProjectCarousel />
        </>
    )
}