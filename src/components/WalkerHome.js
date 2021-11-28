import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

const WalkerHome = () => {
    const [dogs, setDogs] = useState()

    useEffect(() => {
        const makeApiCall = async () => {
            const res = await fetch('https://localhost:4000/dog')
            const json = res.json()
            setDogs(json)
        }
        makeApiCall();
    }, [])
    return(
        <Container>
            <h1>Dog Walker Page</h1>

            {dogs && dogs.map(dog => {
                return (
                    <Col>name:{dog.name}</Col>
                )
            })}
        </Container>
    )
}

export default WalkerHome