import React, {useState, useContext}from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import {createMark} from "../../http/DataAPI";
import {Context} from "../../index"

const CreateMark = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const {user} = useContext(Context) 
    console.log(user)
    const addMark = () => {
        createMark({mark: value, userId:user._user}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить оценку
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите оценку"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addMark}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateMark;