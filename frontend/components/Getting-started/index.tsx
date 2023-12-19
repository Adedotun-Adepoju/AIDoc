"use client";
import styled from "styled-components";
import Link from "next/link";
import AiBot from "../../public/img/ai-bot.png";
import Image from "next/image";
const StyledStarted = styled.section`
  background: var(--Blue-1, #08426b);
  padding-top: 30px;
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
    line-height: normal;
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
    background: #1ca1fe;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
  }
  @media (max-width: 768px) {
    .started {
      display: flex;
      flex-direction: column;
      padding-left: 15px;
    }
    h1 {
      font-size: 25px;
      width: 90vw;
    }
    p {
      width: 85vw;
      font-size: 14px;
    }
    .ai-banner {
      width: 90vw;
    }
  }
`;
const GettingStarted = () => {
  return (
    <StyledStarted>
      <section className="flex__row started">
        <div className="content-div">
          <h1> Getting Started with AI-DOC</h1>
          <p>
            Making informed decisions about your health has never been easier.
            Join AI-DOC today and take control of your well-being.
          </p>
          <Link href="/signup">
            <button>GET STARTED</button>
          </Link>
        </div>
        <div className="img-div">
          <Image
            src={AiBot}
            alt="ai banner"
            className="ai-banner"
            width={391}
            height={387}
          />
        </div>
      </section>
    </StyledStarted>
  );
};
export default GettingStarted;
