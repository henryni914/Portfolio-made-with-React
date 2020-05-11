import React from 'react';
import NavBar from '../components/NavBar'
import Jumbotron from '../components/Jumbotron'
import ProjectCarousel from '../components/ProjectCarousel'
import ProjectBanner from '../components/ProjectBanner'

export default function Home() {

    return (
        <>
            <NavBar />
            <Jumbotron />
            <ProjectBanner />
            {/* <h2 align='center'>Projects</h2> */}
            <ProjectCarousel />
        </>
    )
}