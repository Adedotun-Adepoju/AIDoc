"use client"
import Link from "next/link"
import Icons from "../shared/icons"
import styled from "styled-components"

const StyledHeader = styled.header`
  header {
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  }
  padding: 39px 80px 39px 80px;
  font-size: 16px;
  font-weight: 600;
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
  return ( <StyledHeader>
    <header>
      <Link href='/'>
        <Icons type="logo" />    
      </Link>
      <nav>
        {navLinks.map((item, index) => (
          <Link href={item.link} key={index}>
            <span>{item.text}</span>
          </Link>
        ))}
      </nav>
      <div className="flex-row">
        <Link href='/login'>
           <p>Login</p>
        </Link>
        <Link href='/signup'>
           <p className="btn flex-row" style={{color: '#fff'}}>SIGN UP</p>
        </Link>
      </div>
    </header>
    </StyledHeader>
  )
}
export default Header