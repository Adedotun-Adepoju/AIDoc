"use client"
import styled from "styled-components"

const StyledHow = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #08426B;
    padding: 100px 164px;
    margin-top: 42px;
    h1 {
        color: #fff;
        text-align: center;
        font-size: 39px;
        font-weight: 700;
        margin-bottom: 47px;
    }
    .container {
     gap: 42px;
    }
    .each-div {
        width: 289px;
        height: 225px;
        border-radius: 20px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 31px 8px 13px 26px;
    }
    span {
        color: var(--Blue-2, #1CA1FE);
        font-size: 31px;
        font-weight: 700;
    }
    h6 {
        font-size: 20px;
        font-weight: 700;
        color: var(--Blue-1, #08426B);
    }
    p {
        font-size: 14px;
        font-weight: 600;
        color: var(--Black, #101010);
        width: 238px;
        line-height: 15.4px;
    }
    @media (max-width: 768px) {
        h1 {
            font-size: 20px;
        }
        .container {
            display: flex;
            flex-direction: column;
        }
        .each-div {
            width: 85vw;
        }
        p {
            width: 75vw;
        }
    }
`

const How = () => {
    const contents = [
        {
            id: 1,
            head: 'Describe the Symptoms',
            description: 'Utilize our intuitive chat-like interface to describe your symptoms in plain language.'
        },
        {
            id: 2,
            head: 'AI-Powered Analysis',
            description: 'Our advanced Natural Language Processing (NLP) algorithms analyze your symptoms to generate preliminary medical advice.'
        },
        {
            id: 3,
            head: 'Instant Guidance',
            description: 'Receive clear and concise responses tailored to your symptoms, guiding you on whether to seek immediate medical attention, schedule an appointment, or manage symptoms at home.'
        }
    ]
    return ( <StyledHow>
        <section className="how">
            <h1>
                How AI-DOC Works
            </h1>
            <div className="flex__row container">
                {contents.map((item, index) => (
                <div className="each-div" key={index}>
                    <span>{item.id}</span>
                    <h6>{item.head}</h6>
                    <p>{item.description}</p>
                </div>
                ))}
            </div>
        </section>
        </StyledHow>
    )
}
export default How