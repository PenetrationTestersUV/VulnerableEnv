import React from 'react'
import '../css/style.css'
import BackGround from '../img/bg.svg'
import Icon_Avatar from '../img/avatar.svg'
import BG_Wave from '../img/wave.png'

function LoginForm() {
    var dataUsers;
    function GetLogin() {
        console.log('que onda')
        fetch('https://reqres.in/api/users?page=2')
            .then(res => res.json())
            .then(res => SetDataUser(res.data))
            .then(res => fun(dataUsers));
    }

    const fun = (datos) => {
        for(let dato in datos){
            console.log(dato);
        }
    }
    function SetDataUser(dataObject){
        dataUsers = dataObject;
        console.log(dataUsers);
    }

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
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                        <div className="i">
                                <i className="fas fa-user"></i>
                        </div>
                        <div className="div">
                                <h5>Username</h5>
                                <input type="text" name="username" className="input"/>
                        </div>
                        </div>
                        <div className="input-div pass">
                        <div className="i"> 
                                <i className="fas fa-lock"></i>
                        </div>
                        <div className="div">
                                <h5>Password</h5>
                                <input type="password" name="password" className="input"/>
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
