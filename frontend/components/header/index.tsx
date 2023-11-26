"use client"
import Link from "next/link"
import Icons from "../shared/icons"
import styled from "styled-components"
import { useRef } from "react"

const StyledHeader = styled.header`
  header {
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  }
  padding: 39px 80px 39px 80px;
  font-size: 16px;
  font-weight: 600;
  .nav-bar {
    span {
      display: none;
    }
  }
  .nav-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 75vw;
    padding-left: 350px;
    .cancel {
      display: none;
    }
  }
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
  div {
     gap: 20px;
  }
  p:nth-of-type(1) {
    color: var(--Gray-1, #333);
  }
  .btn {
    background-color: #08426B;
    width: 95px;
    height: 38px;
    text-align: center;
    padding: 7px 24px;
    border-radius: 118px;
    font-size: 12px;
    font-weight: 700;
  }
  @media (max-width: 768px) {
    padding: 16px;
    header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    margin-bottom: -50px;
    .nav-bar {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 90vw;
      justify-content: space-between;
      span {
      display: flex;
    }
    }
    .btns {
      display: flex;
      flex-direction: column;
      gap: 18px;
      p:nth-of-type(1) {
        text-align: center;
        align-self: center;
      }
    }
    nav {
      display: flex;
      flex-direction: column;
      gap: 28px;
      span {
        border-bottom: 0.7px solid #BDBDBD;
        text-align: center;
        align-self: center;
        padding-bottom: 18px;
      }
    }
    .nav-links {
      display: none;
      flex-direction: column;
      align-self: center;
      background-color: #fff;
      width: 95vw;
      padding: 23px;
      position: absolute;
      top: 15;
      .cancel {
        align-self: flex-end;
        display: flex;
      }
    }
  }
`

const Header = () => {
  const navLinks = [
    {
      text: 'About us',
      link: '/about'
    },
    {
      text: 'Contact us',
      link: 'contact'
    }
  ]
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleMenu = () => {
    if(menuRef.current?.style.display === '') {
      menuRef.current.style.display = 'flex'
    } else if(menuRef.current?.style.display === 'flex') {
      menuRef.current.style.display = 'none'
    } else if(menuRef.current?.style.display === 'none') {
      menuRef.current.style.display = 'flex'
    }
  }
  return ( <StyledHeader>
    <header>
      <div className="nav-bar">
      <Link href='/'>
        <Icons type="logo" />    
      </Link>
      <span onClick={toggleMenu}>
          <Icons type="menu" />
      </span>
      </div>
    <div className="nav-links" ref={menuRef}>
      <span onClick={toggleMenu} className="cancel">
          <Icons type="cancel" />
      </span>
      <nav>
        {navLinks.map((item, index) => (
          <Link href={item.link} key={index}>
            <span className="link">{item.text}</span>
          </Link>
        ))}
      </nav>
      <div className="flex-row btns">
        <Link href='/login'>
           <p>Login</p>
        </Link>
        <Link href='/signup'>
           <p className="btn flex-row" style={{color: '#fff'}}>SIGN UP</p>
        </Link>
      </div>
      </div>
    </header>
    </StyledHeader>
  )
}
export default Header