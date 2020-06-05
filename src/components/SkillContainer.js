import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import charityPage from '../images/CharityPage.png'

export default function SkillContainer() {
    return (
        <Container>
            <CardDeck className="text-center">
                <Card className="mt-1 mb-1">
                    <Card.Img variant="top" src={charityPage} />
                    <Card.Body>
                        <Card.Title>NodeJS</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="mt-1 mb-1">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>MongoDB</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="mt-1 mb-1">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>JavaScript</Card.Title>
                    </Card.Body>
                    {/* <Card.Footer>
                    </Card.Footer> */}
                </Card>
                <Card className="mt-1 mb-1">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>NodeJS</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="mt-1 mb-1">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>JavaScript</Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>

             <CardDeck className="text-center">
                <Card className="mt-1 mb-1">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>NodeJS</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="mt-1 mb-1">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>MongoDB</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="mt-1 mb-1">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>JavaScript</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="mt-1 mb-1">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>NodeJS</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="mt-1 mb-1">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>JavaScript</Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>

            {/* Second Row */}

            {/* <CardDeck className="text-center">
                <Card className="mt-1 mb-1">
                    <Card.Img variant="bottom" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>NodeJS</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="mt-1 mb-1">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>MongoDB</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="mt-1 mb-1">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>JavaScript</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="mt-1 mb-1">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>NodeJS</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="mt-1 mb-1">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>JavaScript</Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck> */}
        </Container>
    )
}