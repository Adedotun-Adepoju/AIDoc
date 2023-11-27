"use client"
import styled from "styled-components"
import AI from '../../public/img/Ai-banner.png'
import Image from "next/image"

const StyledSubHeader = styled.section`
    gap: 22px;
    margin-top: 127px;
    .subhead {
        justify-content: center;
    }
    .content-div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }
    h1,h2 {
        color: var(--Blue-1, #08426B);
        font-size: 39px;
        font-weight: 700;
    }
    h2 {
        color: var(--Blue-2, #1CA1FE);
        width: 510px;
    }
    p {
        color: var(--Black, #101010);
        font-size: 14px;
        font-weight: 600;
        width: 455px;
        line-height: 16.8px;
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
    @media (max-width: 768px) {
        .subhead {
            display: flex;
            flex-direction: column;
        }
        h1 {
            font-size: 25px;
        }
        p {
            font-size: 13px;
            width: 90vw;
        }
        h2 {
            font-size: 31px;
            width: 90vw;
        }
        .img-bot {
            width: 276px;
            height: 274px;
            margin-top: 48px;
        }
    }
`
const SubHeader = () => {
    return ( <StyledSubHeader>
        <section className="flex-row subhead">
            <div className="content-div">
                <h1>Welcome to AI-DOC:</h1>
                <h2>
                    Your Intelligent Health Care Companion
                </h2>
                <p>
                    AI-DOC is an innovative web application that harnesses the power of artificial intelligence to provide personalized symptom analysis and preliminary medical advice. Our mission is to empower users to make informed decisions about their health, offering guidance that is quick, reliable, and accessible.
                </p>
                <button>GET STARTED</button>
            </div>
            <div className="img-div">
                <Image src={AI} alt="ai banner" width={391} height={387} className="img-bot"/>
            </div>
        </section>
        </StyledSubHeader>
    )
}
export default SubHeader