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
import Header from "@/components/header"
const Signup = () => {
    const [fName, setFname] = useState('')
    const [lName, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPasssword2] = useState('')
    const [weight, setWeight] = useState('')
    const [bloodgroup, setBloodgroup] = useState('')
    const [genotype, setGenotype] = useState('')
    const [loadingPage, setpage] = useState<boolean>(false)
    const [loadingApi, setLoading] = useState<boolean>(false)
    const [passwordError, setPasswordError] = useState('')
    const [btnState, setBtn] = useState<boolean>(false)
    const router = useRouter()
    const SignUp = (first_name: string, last_name: string, email: string, password: string, weight: string, genotype: string, blood_group: string) => {
        setLoading(true)
        if (passwordError === '') {
        setBtn(false)
        axios.post('/api/auth/sign-up', {first_name, last_name, email, password, weight, genotype, blood_group})
        .then((response) => {
            router.push('/login')            
        })
        .catch((error) => {
            setLoading(false)
            setBtn(true)
            setPasswordError(error.response.data.message)
        })
        } else {
            setPasswordError('Retype your password')
            setLoading(false)
            setBtn(true)
        }
    }
    const [passwordVisible, setVisible] = useState<boolean>(false)
    const [passwordVisible2, setVisible2] = useState<boolean>(false)
    const showPassword = () => {
      setVisible(!passwordVisible)
    }
    const showPass = () => {
        setVisible2(!passwordVisible2)
    }
    const checkPassword = (value: string) => {
        if(password === value) {
            setPasswordError('')
            setBtn(false)
        } else {
            setPasswordError('Password does not match')
            setBtn(true)
        }
    }
    useEffect(() => {
        setpage(true)        
    }, [])
    return ( <><Header /><StyledLogin>
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
                    <Input type="email" placeholder="Email" onChange={(event) => (setEmail(event.target.value), passwordError !== '' ? (setBtn(false), setPasswordError('')): '')} value={email}/>
                </div>
                <div className="password-div flex__row">
                    <Icons type="lock" />
                    <Input type={passwordVisible ? 'text' : 'password'} placeholder="Create Password" onChange={(event) => (setPassword(event.target.value))} value={password} />
                    <span onClick={() => showPassword()}><Icons type="eyes" /></span>
                </div>
                <div className="password-div flex__row">
                    <Icons type="lock" />
                    <Input type={passwordVisible2 ? 'text' : 'password'} placeholder="Re-enter Password" value={password2} onChange={(event) => (setPasssword2(event.target.value), setTimeout(() => checkPassword(event.target.value), 2000))}/>
                    <span onClick={() => showPass()}><Icons type="eyes" /> </span>
                </div>
                <div className="password-div flex__row">
                <Icons type="genotype" />
                <select onChange={(event) => setGenotype(event.target.value)} value={genotype}>
                <option value="" disabled selected>
                        Select your genotype
                        </option>
                    <option value="AA">AA</option>
                    <option value=" AS"> AS</option>
                    <option value=" SS"> SS</option>
                    <option value=" AC"> AC</option>
                    <option value=" SC"> SC</option>
                </select>
                </div>
                <div className="password-div flex__row">
                <Icons type="blood-group" />
                  <select onChange={(event) => setBloodgroup(event.target.value)} value={bloodgroup}>
                        <option value="" disabled selected>
                        Select your blood group
                        </option>
                        <option value="A+">A+</option>
                        <option value=" A-"> A-</option>
                        <option value=" B+"> B+</option>
                        <option value=" B-"> B-</option>
                        <option value=" AB+"> AB+</option>
                        <option value=" AB-"> AB-</option>
                        <option value=" O+ "> O+ </option>
                        <option value="O-">O-</option>
                    </select>
                 </div>
                <div className="password-div flex__row">
                    <Icons type="weight" />
                    <Input type="number" placeholder="weight" onChange={(event) => setWeight(event.target.value)} value={weight} min={0}/>
                </div>
                <p style={{color: 'red'}}>{passwordError}</p>
                <button style={{backgroundColor: btnState ? '#08426b34' : '#08426B'}} disabled={btnState} onClick={(e) => (e.preventDefault(), SignUp(fName, lName, email, password, weight, genotype, bloodgroup))}>{loadingApi ? '...' :'SIGN UP'}</button>
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
        </StyledLogin></>
    )
}
export default Signup