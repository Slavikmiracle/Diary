import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import { fetchMarks } from '../http/DataAPI';
import MarkBar from '../components/MarkBar';
import MarkList from '../components/MarkList';

const Data = observer(() => {
    const {markStore} = useContext(Context)

    useEffect(() => {
        fetchMarks().then(data => {markStore.setMark(data)
        console.log(data)})
    }, [])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <MarkBar/>
                </Col>
                <Col md={9}>
                   
                <MarkList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Data;