"use client"
import Input from "@/components/shared/input"
import Link from "next/link"
import Image from "next/image"
import VectorBot from '../../public/img/vector-bot.png'
import styled from "styled-components"
import Icons from "@/components/shared/icons"
import { useState, useRef, useEffect } from "react"
import axios from "axios"
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import { useRouter } from "next/navigation"
import { Loading } from "@/components/shared/loading"
import { StyledLogin } from "@/styles/StyledLogin"
import Header from "@/components/header"

const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const passwordRef = useRef<HTMLInputElement>(null)
    const [loadingPage, setpage] = useState<boolean>(false)
    const [loadingApi, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    const TOKEN_KEY = 'trial123'
    const router = useRouter()
    const showPass = () => {
        if (passwordRef.current?.type === "password") {
            passwordRef.current.type = "text";
          } else if (passwordRef.current?.type === "text") {
            passwordRef.current.type = "password"
          }
    }
    const Login = (email: string, password: string) => {
        setLoading(true)
        axios.post('/api/auth/login', {email, password})
        .then((response) => {
            const token = jwt.sign(response.data.status_code.user, TOKEN_KEY)
            Cookies.set(TOKEN_KEY, token);
            router.push('/')            
        })
        .catch((error) =>{
            console.log(error)
            setLoading(false)
            setError('check your email and password')
        })
    }
    useEffect(() => {
        setpage(true)        
    }, [])
    return ( <><Header /><StyledLogin>
        { loadingPage ?
        <section className="flex__row login">
            <div className="content-div">
            <Link href='/'>
               <span className="close"><Icons type="close" /> </span> 
            </Link>
                <h1>Login to Account</h1>
                <p>Welcome back, Please enter your Email and Password to login</p>
                <div className="name-div flex__row">
                    <Icons type="profile" />
                    <Input type="email" placeholder="Email" onChange={(event) => (setName(event.target.value))} value={name}/>
                </div>
                <div className="password-div flex__row">
                    <Icons type="lock" />
                    <Input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} value={password} refEl={passwordRef}/>
                    <span onClick={() => showPass()}><Icons type="eyes" /> </span>
                </div>
                <p style={{color: 'red'}}>{error}</p>
                <Link href='/'>
                    <p className="forgot">Forgot Password</p>
                </Link>
                <button onClick={(e) => (e.preventDefault(), Login(name, password))}>{loadingApi ? '...' : 'Login'}</button>
                <Link href='/signup'>
                     <p className="no-account">
                        Don’t have an account? <b>SIGN UP</b>
                     </p>
                </Link>
            </div>
            <div className="img-div">
                <Image src={VectorBot} alt="ai bot" width={451} height={556} className="bot-img"/>
            </div>
        </section> : <Loading />
        }
        </StyledLogin></>
    )
}
export default Login