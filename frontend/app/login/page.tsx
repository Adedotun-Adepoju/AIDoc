"use client"
import Input from "@/components/shared/input"
import Link from "next/link"
import Image from "next/image"
import VectorBot from '../../public/img/vector-bot.png'
import styled from "styled-components"
import Icons from "@/components/shared/icons"
import { useState, useRef } from "react"
import axios from "axios"

export const StyledLogin = styled.section`
    background-color: #fff;
    .login {
        justify-content: space-around;
        align-items: center;
        height: 100vh;
    }
    .content-div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
    .close {
        display: none;
    }
    h1 {
        font-size: 31px;
        font-weight: 700;
        color: var(--Blue-1, #08426B);
    }    
    p {
        width: 277px;
        font-size: 14px;
        font-weight: 600;
        color: #000;
    }
    .name-div, .password-div{
        svg {
            z-index: 999;
        }
        input {
            margin-right: -30px;
        }
    }
    input {
        width: 280px;
        background-color: #F9F9F9;
        border: 0.7px solid rgba(8, 66, 107, 0.30);
        border-radius: 5px;
        font-size: 13px;
        font-weight: 500;
        color: var(--Gray-1, #333);
        height: 40px;
        padding: 12px;
        padding-left: 30px;
        background-image: url('../../public/img/name.png');
        background-size: 16px;
        background-repeat: no-repeat;
        background-position-y: center;
        background-position-x: left;
        margin-left: -25px;
    }
    .forgot {
        color: var(--Blue-1, #08426B);
        font-size: 12px;
        font-weight: 700;
        width: 280px;
        text-align: right;
    }
    button {
        width: 85px;
        height: 38px;
        border-radius: 118px;
        background: var(--Blue-1, #08426B);
        color: #fff;
        font-size: 12px;
        font-weight: 700;
    }
    .no-account {
        font-size: 13px;
        font-weight: 500;
        color: #000;
        b {
            color: var(--Blue-1, #08426B);
            font-weight: 700;
        }
    }
    @media (max-width: 768px) {
        .login {
            display: flex;
            flex-direction: column;
        }
        .content-div {
            align-self: center;
            margin-top: 45px;
            margin-bottom: -120px;
        }
        h1 {
            margin-top: 30px;
        }
        .forgot {
            text-align: left;
        }
        input {
            width: 85vw;
            height: 44px;
        }
        .bot-img {
            width: 169px;
            height: 209px;
        }
        .img-div {
            margin-bottom: -100px;
            align-self: flex-end;
        }
        button {
            width: 85vw;
            height: 44px;
        }
        .close {
            display: flex;
           position: absolute;
           right: 0;
           margin-right: 25px;
        }
    }
`
const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const passwordRef = useRef<HTMLInputElement>(null)
    const showPass = () => {
        if (passwordRef.current?.type === "password") {
            passwordRef.current.type = "text";
          } else if (passwordRef.current?.type === "text") {
            passwordRef.current.type = "password"
          }
    }
    const Login = (email: string, password: string) => {
        axios.post('/api/auth/login', {email, password})
        .then((response) => {
            console.log(response)
        })
        .catch((error) =>{
            console.log(error)
        })
    }
    return ( <StyledLogin>
        <section className="flex-row login">
            <div className="content-div">
            <Link href='/'>
               <span className="close"><Icons type="close" /> </span> 
            </Link>
                <h1>Login to Account</h1>
                <p>Welcome back, Please enter your Email and Password to login</p>
                <div className="name-div flex-row">
                    <Icons type="profile" />
                    <Input type="email" placeholder="Email" onChange={(event) => (setName(event.target.value))} value={name}/>
                </div>
                <div className="password-div flex-row">
                    <Icons type="lock" />
                    <Input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} value={password} refEl={passwordRef}/>
                    <span onClick={() => showPass()}><Icons type="eyes" /> </span>
                </div>
                <Link href='/'>
                    <p className="forgot">Forgot Password</p>
                </Link>
                <button onClick={(e) => (e.preventDefault(), Login(name, password))}>Login</button>
                <Link href='/signup'>
                     <p className="no-account">
                        Don’t have an account? <b>SIGN UP</b>
                     </p>
                </Link>
            </div>
            <div className="img-div">
                <Image src={VectorBot} alt="ai bot" width={451} height={556} className="bot-img"/>
            </div>
        </section>
        </StyledLogin>
    )
}
export default Login