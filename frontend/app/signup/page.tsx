"use client"
import Input from "@/components/shared/input"
import Image from "next/image"
import VectorBot from '../../public/img/vector-bot.png'
import Icons from "@/components/shared/icons"
import Link from "next/link"
import { StyledLogin } from "@/styles/StyledLogin"
import { useState, useRef, useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { Loading } from "@/components/shared/loading"
const Signup = () => {
    const [fName, setFname] = useState('')
    const [lName, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [weight, setWeight] = useState('')
    const [bloodgroup, setBloodgroup] = useState('')
    const [genotype, setGenotype] = useState('')
    const [loadingPage, setpage] = useState<boolean>(false)
    const [loadingApi, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const SignUp = (first_name: string, last_name: string, email: string, password: string, weight: string, genotype: string, blood_group: string) => {
        setLoading(true)
        axios.post('/api/auth/sign-up', {first_name, last_name, email, password, weight, genotype, blood_group})
        .then((response) => {
            router.push('/login')            
        })
        .catch((error) => {
            console.log(error)
        })
    }
    const inputRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const showPassword = () => {
        if (inputRef.current?.type === "password") {
            inputRef.current.type = "text";
          } else if (inputRef.current?.type === "text") {
            inputRef.current.type = "password"
          }
    }
    const showPass = () => {
        if (passwordRef.current?.type === "password") {
            passwordRef.current.type = "text";
          } else if (passwordRef.current?.type === "text") {
            passwordRef.current.type = "password"
          }
    }
    useEffect(() => {
        setpage(true)        
    }, [])
    return ( <StyledLogin>
        {loadingPage ? 
        <section className="flex__row login">
            <div className="content-div">
            <Link href='/'>
               <span className="close"><Icons type="close" /> </span> 
            </Link>
                <h1>Register an Account</h1>
                <p>We are glad to have you here! Please fill in your information,</p>
                <div className="name-div flex__row">
                    <Icons type="profile" />
                    <Input type="text" placeholder="First Name" onChange={(event) => setFname(event.target.value)} value={fName}/>
                </div>
                <div className="name-div flex__row">
                    <Icons type="profile" />
                    <Input type="text" placeholder="Last Name" onChange={(event) => setLname(event.target.value)} value={lName}/>
                </div>
                <div className="name-div flex__row">
                    <Icons type="email" />
                    <Input type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} value={email}/>
                </div>
                <div className="password-div flex__row">
                    <Icons type="lock" />
                    <Input type="password" placeholder="Create Password" onChange={(event) => setPassword(event.target.value)} value={password} refEl={inputRef}/>
                    <span onClick={() => showPassword()}><Icons type="eyes" /></span>
                </div>
                <div className="password-div flex__row">
                    <Icons type="lock" />
                    <Input type="password" placeholder="Re-enter Password" refEl={passwordRef}/>
                    <span onClick={() => showPass()}><Icons type="eyes" /> </span>
                </div>
                <div className="password-div flex__row">
                    <Icons type="genotype" />
                    <Input type="text" placeholder="Genotype" onChange={(event) => setGenotype(event.target.value)} value={genotype} />
                </div>
                <div className="password-div flex__row">
                    <Icons type="blood-group" />
                    <Input type="text" placeholder="Blood Group" onChange={(event) => setBloodgroup(event.target.value)} value={bloodgroup} />
                </div>
                <div className="password-div flex__row">
                    <Icons type="weight" />
                    <Input type="text" placeholder="weight" onChange={(event) => setWeight(event.target.value)} value={weight} />
                </div>
                <button onClick={(e) => (e.preventDefault(), SignUp(fName, lName, email, password, weight, genotype, bloodgroup))}>{loadingApi ? '...' :'SIGN UP'}</button>
                <Link href='/login'>
                     <p className="no-account">
                        Already have an account? <b>LOGIN</b>
                     </p>
                </Link>
            </div>
            <div className="img-div">
                <Image src={VectorBot} alt="ai bot" width={451} height={556}  className="bot-img"/>
            </div>
        </section> : <Loading />
        }
        </StyledLogin>
    )
}
export default Signup