import React from 'react';
import Button from 'react-bootstrap/Button';

export default function AboutMe() {
    return (
        <section class='mt-5 mb-5'>
            <div class="row">
                <div class="col-md-6">
                    <h2>About Me</h2>
                    <p>
                        Hello, I am a full stack web developer with a background in JavaScript, React, Node.js, MongoDB, MySQL, Bootstrap, and more.
                    </p>
                    <p>
                        I enjoy the challenges of learning new technologies and languages in order to create modern and functional web applications.
                    </p>
                    <p>
                        Please see below for links to my resume, projects, and contact information.
                    </p>
                    <p>
                        <strong>Email:</strong> ni.henry914@gmail.com
                    </p>
                    <p>
                        <strong>Phone:</strong> (302) 358-1294
                    </p>
                    <p>
                        <Button variant="primary" className='mr-2 mt-2' href="https://github.com/henryni914" target="_blank">Github</Button>
                        <Button variant="primary" className='mr-2 mt-2' href="https://drive.google.com/file/d/16BnBU24hodbMOze6REZ7yxqTd4uyUEd5/view?usp=sharing" target="_blank">Resume</Button>
                        <Button variant="primary" className='mr-2 mt-2' href="https://www.linkedin.com/in/henry-ni-79b118102/" target="_blank">LinkedIn</Button>
                    </p>
                </div>
                <div class="col-md-6 ">
                    <img src="https://images.unsplash.com/photo-1473181488821-2d23949a045a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" class="img-fluid"></img>
                </div>
            </div>
        </section>
    )
}