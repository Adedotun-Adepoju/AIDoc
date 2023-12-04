import styled from "styled-components"
export const StyledLogin = styled.section`
    background-color: #fff;
    .login {
        justify-content: space-around;
        align-items: center;
    }
    .content-div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
    .close {
        display: none;
    }
    h1 {
        font-size: 31px;
        font-weight: 700;
        color: var(--Blue-1, #08426B);
    }    
    p {
        width: 277px;
        font-size: 14px;
        font-weight: 600;
        color: #000;
    }
    .name-div, .password-div{
        svg {
            z-index: 999;
        }
        input {
            margin-right: -30px;
        }
    }
    input {
        width: 280px;
        background-color: #F9F9F9;
        border: 0.7px solid rgba(8, 66, 107, 0.30);
        border-radius: 5px;
        font-size: 13px;
        font-weight: 500;
        color: var(--Gray-1, #333);
        height: 40px;
        padding: 12px;
        padding-left: 30px;
        background-image: url('../../public/img/name.png');
        background-size: 16px;
        background-repeat: no-repeat;
        background-position-y: center;
        background-position-x: left;
        margin-left: -25px;
    }
    select {
        width: 280px;
        background-color: #F9F9F9;
        border: 0.7px solid rgba(8, 66, 107, 0.30);
        border-radius: 5px;
        font-size: 13px;
        font-weight: 500;
        color: var(--Gray-1, #333);
        height: 42px;
        padding: 12px;
        padding-left: 30px;
        background-image: url('../../public/img/name.png');
        background-size: 16px;
        background-repeat: no-repeat;
        background-position-y: center;
        background-position-x: left;
        margin-left: -25px;
    }
    .forgot {
        color: var(--Blue-1, #08426B);
        font-size: 12px;
        font-weight: 700;
        width: 280px;
        text-align: right;
    }
    button {
        width: 85px;
        height: 38px;
        border-radius: 118px;
        background: var(--Blue-1, #08426B);
        color: #fff;
        font-size: 12px;
        font-weight: 700;
    }
    .no-account {
        font-size: 13px;
        font-weight: 500;
        color: #000;
        b {
            color: var(--Blue-1, #08426B);
            font-weight: 700;
        }
    }
    @media (max-width: 768px) {
        .login {
            display: flex;
            flex-direction: column;
        }
        .content-div {
            align-self: center;
            margin-top: 45px;
            margin-bottom: -120px;
        }
        h1 {
            margin-top: 30px;
        }
        .forgot {
            text-align: left;
        }
        input {
            width: 85vw;
            height: 44px;
        }
        select {
            width: 85vw;
            height: 44px;
        }
        .bot-img {
            width: 169px;
            height: 209px;
        }
        .img-div {
            margin-top: 120px;
            align-self: flex-end;
        }
        button {
            width: 85vw;
            height: 44px;
        }
        .close {
            display: flex;
           position: absolute;
           right: 0;
           margin-right: 25px;
        }
    }
`