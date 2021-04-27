import React from 'react';
import Button from 'react-bootstrap/Button';

export default function AboutMe() {
    return (
        <section class='mt-5 mb-5'>
            <div class="row">
                <div class="col-md-6 about-info">
                    <h2>About Me</h2>
                    <p>
                        I graduated from the University of Delaware with a bachelor degree in Finance and I received a certificate from Rutgers University for completion of their Full Stack Web Development program.
                    </p>
                    <p>
                        My passion and interest in technology has grown since writing my first line of code.
                        Building functional and responsive web applications
                        pushes me to learn new languages, expand my problem solving skills,
                        and challenges me to be creative and to think outside the box.
                    </p>
                    <p>
                        <strong>Email:</strong> ni.henry914@gmail.com
                    </p>
                </div>
                <div class="col-md-6 about-img">
                    <img src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1311&q=80" class="img-fluid" alt="laptop on desk"></img>
                </div>
            </div>
            <div class="row about-btn d-flex justify-content-center mt-5 mb-5">
                <p>
                    <Button variant="primary" className='mr-2 mt-2' href="https://github.com/henryni914" target="_blank"><i class="bi bi-github"></i> Github</Button>
                    <Button variant="primary" className='mr-2 mt-2' href="https://drive.google.com/file/d/16BnBU24hodbMOze6REZ7yxqTd4uyUEd5/view?usp=sharing" target="_blank">Resume</Button>
                    <Button variant="primary" className='mr-2 mt-2' href="https://www.linkedin.com/in/henry-ni-79b118102/" target="_blank"><i class="bi bi-linkedin"></i> LinkedIn</Button>
                </p>
            </div>
        </section>
    )
}