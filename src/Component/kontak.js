import React from 'react';
import { ListGroup } from 'react-bootstrap';

class Kontak extends React.Component {
    render() {
        return (
            <div>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default Kontak;