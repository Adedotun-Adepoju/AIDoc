"use client"
import Input from "@/components/shared/input"
import Image from "next/image"
import VectorBot from '../../public/img/vector-bot.png'
import Icons from "@/components/shared/icons"
import Link from "next/link"
import { StyledLogin } from "../login/page"
const Signup = () => {
    return ( <StyledLogin>
        <section className="flex-row login">
            <div className="content-div">
            <Link href='/'>
               <span className="close"><Icons type="close" /> </span> 
            </Link>
                <h1>Register an Account</h1>
                <p>We are glad to have you here! Please fill in your information,</p>
                <div className="name-div flex-row">
                    <Icons type="profile" />
                    <Input type="text" placeholder="Full Name" />
                </div>
                <div className="name-div flex-row">
                    <Icons type="email" />
                    <Input type="email" placeholder="Email" />
                </div>
                <div className="name-div flex-row">
                    <Icons type="phone" />
                    <Input type="text" placeholder="Phone Number" />
                </div>
                <div className="password-div flex-row">
                    <Icons type="lock" />
                    <Input type="password" placeholder="Create Password" />
                    <Icons type="eyes" />
                </div>
                <div className="password-div flex-row">
                    <Icons type="lock" />
                    <Input type="password" placeholder="Re-enter Password" />
                    <Icons type="eyes" />
                </div>
                <button>SIGN UP</button>
                <Link href='/login'>
                     <p className="no-account">
                        Already have an account? <b>LOGIN</b>
                     </p>
                </Link>
            </div>
            <div className="img-div">
                <Image src={VectorBot} alt="ai bot" width={451} height={556}  className="bot-img"/>
            </div>
        </section>
        </StyledLogin>
    )
}
export default Signup