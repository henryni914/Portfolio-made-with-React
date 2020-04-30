import React from 'react';
import NavBar from '../components/NavBar'
import Jumbotron from '../components/Jumbotron'
import ProjectCarousel from '../components/ProjectCarousel'

export default function Home() {

    return (
        <>
            <NavBar />
            <Jumbotron />
            <ProjectCarousel />
        </>
    )
}