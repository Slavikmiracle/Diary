import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const MarkBar = observer(() => {
    const {markStore} = useContext(Context)
    return (
        <ListGroup>
            {markStore.mark.map(mark1 =>
                <ListGroup.Item key={mark1.id}>
                    { mark1.mark}
                </ListGroup.Item>
            )}
        </ListGroup>
    //    <div>asd</div>
    );
});

export default MarkBar;