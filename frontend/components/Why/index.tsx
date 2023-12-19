"use client";
import styled from "styled-components";
import vector from "../../public/img/Vector.png";

const Styledwhy = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 92px;
  margin-bottom: 100px;
  h1 {
    color: var(--Blue-1, #08426b);
    font-size: 39px;
    font-weight: 700;
    margin-bottom: 43px;
  }
  .why {
    width: 323px;
    height: 248px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-repeat: no-repeat;
    background-position-x: left;
    background-position-y: bottom;
    padding: 51px 31px 30px 30px;
  }
  h3 {
    font-size: 31px;
    font-weight: 700;
    color: #fff;
    line-height: normal;
  }
  p {
    width: 262px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    h1 {
      text-align: center;
      font-size: 25px;
    }
    .why-divs {
      display: flex;
      flex-direction: column;
    }
    .why {
      width: 90vw;
      gap: 8px;
    }
    p {
      font-size: 14px;
    }
  }
`;
const Why = () => {
  const why = [
    {
      bgColor: "#08426B",
      bgImage: "../../public/img/Vector.png",
      heading: "Instant Access",
      text: "Get quick responses without the wait, allowing you to take timely action for your health.",
    },
    {
      bgColor: "#105E96",
      bgImage: "../../public/img/Frame.png",
      heading: "Confidential and Secure",
      text: "Your health information is encrypted and handled with the utmost privacy.",
    },
    {
      bgColor: "#333",
      bgImage: "../../public/img/setting.png",
      heading: "Continuous Improvement",
      text: "We continuously update our AI model to provide you with the latest and most accurate information.",
    },
  ];
  return (
    <Styledwhy>
      <section>
        <h1>Why Choose AI-DOC?</h1>
        <div className=" flex__row why-divs">
          {why.map((item, index) => (
            <div
              className="why"
              key={index}
              style={{
                backgroundColor: item.bgColor,
                backgroundImage: item.bgImage,
              }}
            >
              <h3>{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </Styledwhy>
  );
};
export default Why;
