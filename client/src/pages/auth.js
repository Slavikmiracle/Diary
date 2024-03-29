import React, {useContext, useState}  from "react";
import {Card, Container, Form, Button, Col} from 'react-bootstrap'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import Row from 'react-bootstrap/Row'
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { login, registration } from "../http/userAPI";
import {observer} from "mobx-react-lite";
import { DATA_ROUTE } from "../utils/consts";
import {Context} from "../index"




const Auth = observer(() => {
    const {user} = useContext(Context)
     const navigate =useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [userLogin, setLogin] = useState('')
    const [password,setPassword] = useState('')
    const click = async () =>{
        try{
            let response;
        if (isLogin){
             response = await login(userLogin, password)
            console.log(response)}
        else{  
             response = await registration(userLogin, password)
            console.log(response)
    }
    user.setUser(response.id)
    console.log(user)
    user.setIsAuth(true)
    navigate(DATA_ROUTE)} 
    catch(e){
        alert("Введены неверные данные")
    }

    }
    return (
        <Container
        className = 'd-flex justify-content-center align-items-center '
        style = {{height: window.innerHeight - 54}}>
        <Card style={{width: 600}} className="p-5 bg-dark">
            <h2 className="m-auto" style={{color:'white'}}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            <Form className="d-flex flex-column">
                <Form.Control
                className="mt-3"
                placeholder = "Введите логин"
                value = {userLogin}
                onChange = { e => setLogin(e.target.value)}/>
                 <Form.Control 
                 className="mt-3"
                 placeholder = "Введите пароль"
                 value = {password}
                onChange = { e => setPassword(e.target.value)}
                type="password"
                 />

                 <Row >
                    <Col className="d-flex justify-content-between mt-3 pl-3 pr-3">
                {isLogin? 
                <div>  <NavLink to={REGISTRATION_ROUTE}> Регистрация </NavLink> </div>
                :
                <div> <NavLink to={LOGIN_ROUTE}> Войти </NavLink> </div>}
                 <Button
                 variant={"outline-success"}
                            onClick={click}>
                       {isLogin ? 'Войти' : 'Регистрация'} 
                 </Button>
                 </Col>
                 </Row>
                 
            </Form>
        </Card>
        </Container>
    );
});

export default Auth;
