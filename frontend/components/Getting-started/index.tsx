"use client"
import styled from "styled-components"
import Link from "next/link"
import AiBot from '../../public/img/ai-bot.png'
import Image from "next/image"
const StyledStarted = styled.section`
    background: var(--Blue-1, #08426B);
    padding-top: 90px;
    .started {
        justify-content: center;
    }
    .content-div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }
    h1 {
        color: #fff;
        font-size: 39px;
        font-weight: 700;
        width: 383px;
    }
    p {
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        width: 455px;
        line-height: 16.8px;
    }
    button {
        width: 180px;
        height: 44px;
        border-radius: 118px;
        background: #1CA1FE;
        color: #fff;
        font-size: 12px;
        font-weight: 700;
    }
`
const GettingStarted = () => {
    return ( <StyledStarted>
        <section className="flex-row started">
            <div className="content-div">
            <h1> Getting Started with AI-DOC</h1>
                <p>
                    Making informed decisions about your health has never been easier. Join AI-DOC today and take control of your well-being.
                </p>
               <Link href='/register'>
                    <button>GET STARTED</button>
                </Link>
            </div>
            <div className="img-div">
                <Image src={AiBot} alt="ai banner" width={391} height={387} />
            </div>
        </section>
        </StyledStarted>
    )
}
export default GettingStarted