import React from 'react';
import NavBar from '../components/NavBar'
import Jumbotron from '../components/Jumbotron'
import ProjectCarousel from '../components/ProjectCarousel'

export default function Home() {

    return (
        <>
            <NavBar />
            <Jumbotron />
            <h2 align='center'>Projects</h2>
            <ProjectCarousel />
        </>
    )
}