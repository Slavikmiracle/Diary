import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateMark from '../components/modals/createMark'

const Admin = () => {
    const [markVisible, setMarkVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setMarkVisible(true)}
            >
                Добавить оценку
            </Button>
           
            <CreateMark show={markVisible} onHide={() => setMarkVisible(false)}/>
        </Container>
    );
};

export default Admin;