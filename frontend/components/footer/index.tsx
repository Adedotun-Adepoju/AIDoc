"use client"
import Link from "next/link"
import Icons from "../shared/icons"
import styled from "styled-components"
import Input from "../shared/input"
const StyledFooter = styled.footer`
 display: flex;
 flex-direction: column;
 margin-top: 80px;
 .main {
    background-color: #fff;
    justify-content: space-around;
    width: 100vw;
    align-items: flex-start;
 }
 .long-text {
    color: var(--Black, #101010);
    font-size: 16px;
    font-weight: 600;
    width: 348px;
 }
 .follow {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    color: var(--Black, #101010);
    gap: 5px;
 }
 .socials {
    gap: 10px;
    margin-bottom: -15px;
 }
 .details {
    display: flex; 
    flex-direction: column;
    gap: 30px;
 }
 .key {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
        color: var(--Blue-1, #08426B);
        font-size: 39px;
        font-weight: 700;
        width: 256px;
    }
 }
 button {
        width: 180px;
        height: 44px;
        border-radius: 118px;
        background: var(--Blue-1, #08426B);
        color: #fff;
        font-size: 12px;
        font-weight: 700;
    }
 .contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 7px;
 }
 input,textarea {
    width: 400px;
    height: 53px;
    border: 0.7px solid rgba(8, 66, 107, 0.50);
    background-color: #F9F9F9;
    color: var(--Gray-1, #333);
    font-size: 14px;
    font-weight: 600;
    padding: 19px 20px;
    border-radius: 5px;
 }
 textarea {
    height: 99px;
 }
 .copyright {
    width: 100vw;
    height: 55px;
    padding-top: 20px;
    padding-top: 20px;
    color: #fff;
    background: var(--Blue-1, #08426B);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
 }
 @media (max-width: 768px) {
    .main {
        display: flex;
        flex-direction: column;
        padding-left: 17px;
        gap: 8px;
    }
    input, textarea {
        width: 90vw;
    }
    .key {
        p {
            font-size: 20px;
        }
        svg {
            width: 22px;
            height: 10px;
        }
    }
    .long-text {
        width: 90vw;
    }
    .copyright {
        font-size: 11px;
    }
 }
`
const Footer = () => {
    const socials = [
        {
            link: '',
            icon: 'twitter'
        },
        {
            link: '',
            icon: 'facebook'
        },
        {
            link: '',
            icon: 'instagram'
        },
    ]
    return ( <StyledFooter>
        <footer>
            <div className="flex__row main">
             <div className="details">
                <div className="key">
                    <p>Get in touch with us</p>
                    <Icons type="arrow" />
                </div>
                <p className="long-text">Get intouch with us if you have any suggestions or information to help this idea.</p>
                <p className="follow">Follow us <Icons type="stroke" /></p>
                <div className="socials flex-row">
                    {socials.map((item, index) => (
                        <Link href={item.link} key={index}>
                            <Icons type={item.icon} />
                        </Link>
                    ))}
                </div>
                <p className="follow"><Icons type='mail' /> support@ai-doc.com</p>
                </div>
             <div className="contact">
                <Input type="text" placeholder="Full Name" />
                <Input type="email" placeholder="Email" />
                <Input type="text" placeholder="Phone Number"  />
                <textarea placeholder="Message" /> 
                <button>SEND MESSAGE</button>        
             </div>
            </div>
            <div className="copyright">
                <p>Copyright of AI-DOC HACKATHON GROUP 215 - 2023</p>
            </div>
        </footer>
        </StyledFooter>
    )
}
export default Footer