import React from 'react';
import {Card, Col} from "react-bootstrap";
import {Navigate} from "react-router-dom"
import {MARK} from "../utils/consts";

const MarkItem = ({mark}) => {

    return (
        <Col md={3} className={"mt-3"}>
            <Card style={{width: 150, cursor: 'pointer' }} border={"light"}>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Оценка</div>
                    <div className="d-flex align-items-center">
                        <div>{mark.mark}</div>
                    </div>
                </div>
                <div>{mark.updatedAt}</div>
            </Card>
        </Col>
    );
};

export default MarkItem;