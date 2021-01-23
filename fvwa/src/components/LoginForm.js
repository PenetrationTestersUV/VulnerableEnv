import React, { useContext, useEffect, useState } from 'react'
import '../css/style.css'
import BackGround from '../img/bg.svg'
import Icon_Avatar from '../img/avatar.svg'
import BG_Wave from '../img/wave.png'
import mensaje from './mensaje';
import { UserConsumer, UserContext } from './UserProvider'
const axios = require('axios');

function LoginForm() {
    const [localUser, setLocalUser ] = useState({
        name:"",
        pass:""
    })

    let { LoginUser } = useContext(UserContext);

    const handleEvent = (e) => {
        setLocalUser({
            ...localUser,
            [e.target.name]: e.target.value
        })
    }

    console.log("Alto ahi, esta opcion es solo para desarrolladores, no se te ocurro ninguna cosa rara como el inyectar codigo, pierdes el tiempo buddy");
    
    const GetLogin = async() => {
        console.log(name, pass)
        let bodyReq =JSON.stringify({"username": name, "password": pass})
        let response = await fetch('http://192.168.50.4:3001/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: bodyReq
        })
        console.log(response);
        const datos = await response.json();
        if(datos.logged === true) {
            LoginUser(datos.logged)
        }      
    }

    let { name, pass} = localUser;
    return (
        <div>
            <img className="wave" src={BG_Wave} alt=""/>
            <div className="container">
                <div className="img">
                    <img src={BackGround} alt=""/>
                </div>
                <div className="login-content">
                    <form >
                        <img
                            src = {Icon_Avatar}
                            alt = ""
                        />
                        <h2 className="title">Bienvenido</h2>
                        <div className="input-div one">
                            <div className="i">
                                    <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                    <input
                                        type="text"
                                        name="name"
                                        className="input"
                                        placeholder="Usuario"
                                        value={name}
                                        onChange={handleEvent}
                                    />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                    <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                    <input
                                        type="password"
                                        name="pass"
                                        className="input"
                                        placeholder="Contrasenia"
                                        value={pass}
                                        onChange={handleEvent}
                                    />
                            </div>
                        </div>
                        <input type="button" className="btn" value="Login" onClick={() => GetLogin()}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
