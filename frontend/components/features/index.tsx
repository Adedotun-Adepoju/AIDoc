"use client"
import Icons from "../shared/icons"
import styled from "styled-components"

const StyledFeatures = styled.section`
 .features {
    justify-content: space-around;
    align-items: flex-start;
 }
 margin-top: 105px;
 .key {
    display: flex;
    flex-direction: column;
    p {
        color: var(--Blue-1, #08426B);
        width: 166px;
        font-size: 39px;
        font-weight: 700;
    }
 }
 .content-div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
 }
 .each {
    width: 475px;
    height: 200px;
    border-left: 4px solid #1CA1FE;
    padding-left: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    p {
        width: 455px;
        color: var(--Black, #101010);
        font-size: 16px;
        font-weight: 600;
    }
 }
 h6 {
    font-size: 31px;
    font-weight: 700;
    color: var(--Blue-1, #08426B);
 }
 @media (max-width: 768px) {
    margin-top: 50px;
    padding-left: 20px;
    .features {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    .key {
        gap: 5px;
        p {
        font-size: 25px;
    }
    svg {
        width: 22px;
        height: 10px;
    }
    }
    .content-div {

    }
    h6 {
        font-size: 25px;
    }
    .each {
        width: 90vw;
        p {
            width: 85vw;
            font-size: 14px;
        }
    }
 }
`
const Features = () => {
    const features = [
        {
            icons: 'bot',
            heading: 'Smart Symptoms Analysis',
            text: 'Our AI understands your symptoms and provides accurate and personalized responses.'
        },
        {
            icons: 'brain',
            heading: 'Decision Support',
            text: 'Receive guidance on the urgency of seeking in-person medical care based on the severity of your symptoms.'
        },
        {
            icons: 'chat',
            heading: 'User Friendly Interface',
            text: 'Easily navigate through the system with a chatbot interface designed for simplicity and convenience.'
        },
        {
            icons: 'innovate',
            heading: 'Innovative Contents',
            text: 'Access a wealth of medical information to better understand common conditions, treatments, and preventive measures.'
        },
    ]
    return ( <StyledFeatures>
        <section className="flex__row features">
            <div className="key">
                <p>Key Features</p>
                <Icons type="arrow" />
            </div>
            <div className="content-div">
                {features.map((item, index) => (
                    <div className="each" key={index}>
                        <Icons type={item.icons} />
                        <h6>{item.heading}</h6>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
        </StyledFeatures>
    )
}
export default Features