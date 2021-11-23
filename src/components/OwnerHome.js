import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Dog from './Dog'
import Walker from './Walker'

const OwnerHome = () => {
    {/* Right now the Dog component is a placeholder for eventually whnen we list out the owners current dogs
    We will eventually use a State and Use Effect for getting the array of dogs to map out and list here
    So that the Dog component will be returning multiple Columns/Bootstrap 
    Same idea with the list of Dog Walkers */}


    return(
        <Container>
            <h1>Owner homepage</h1>
            <Container>
                <h2>My Dogs</h2>
                <Row>
                    <Dog />
                </Row>
            </Container>
            <Container>
                <h2>Dog Walkers</h2>
                <Row>
                    <Walker />
                </Row>
            </Container>
        </Container>
    )
}

export default OwnerHome