import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import MarkItem from "./MarkItem";

const MarkList = observer(() => {
    const {markStore} = useContext(Context)

    return (
        <Row className="d-flex">
            {markStore.mark.map(mark1 =>
                <MarkItem key={mark1.id} mark={mark1}/>
            )}
        </Row>
    );
});

export default MarkList;