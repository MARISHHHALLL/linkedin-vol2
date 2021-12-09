import React, { useState } from 'react'
import styled from 'styled-components'
import { RiSettings4Fill } from 'react-icons/ri'
import { auth } from '../../firebase'
import { useDispatch } from 'react-redux'
import { logout } from '../../features/userSlice'
import { useHistory } from 'react-router'
const Header = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const SingOutMethod = () => {
    auth.signOut()
    dispatch(logout)
    history.push('/')
  }
  const [openUp, setOpenUp] = useState(false)
  return (
    <Container>
      <SearchBar>
        <img className='Logo__main' src='/images/logo-main.png' alt='' />
        <div>
          <img
            src='/images/search-container.svg'
            className='search__icon'
            alt=''
          />
          <input type='text' placeholder='Search' />
        </div>
      </SearchBar>
      <NavMenu>
        <SocialsMenu>
          <a className='active'>
            <img
              src='/images/images/nav-home.svg'
              className='soials__icons__first'
            />
            <span>Home</span>
          </a>
          <a>
            <img
              src='/images/images/nav-network.svg'
              className='soials__icons'
            />
          </a>
          <a>
            <img src='/images/images/nav-jobs.svg' className='soials__icons' />
          </a>
          <a>
            <img
              src='/images/images/nav-messaging.svg'
              className='soials__icons'
            />
          </a>
          <a>
            <img
              src='/images/images/nav-notifications.svg'
              className='soials__icons'
            />
          </a>
          <Person onClick={() => setOpenUp(!openUp)}>
            {!openUp ? (
              <RiSettings4Fill className='settings__menu' />
            ) : (
              <RiSettings4Fill className='settings__menu2' />
            )}

            {openUp && <SignOut onClick={SingOutMethod}>Sign out</SignOut>}
          </Person>
        </SocialsMenu>
        <WorkOut>
          <img src='/images/images/nav-work.svg' className='work__icons' />
          <span>Work</span>
        </WorkOut>
      </NavMenu>
    </Container>
  )
}

export default Header
const Container = styled.div`
  background: white;
  z-index: 10;
  position: fixed;
  width: 100%;
  min-height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 50px;
  @media (max-width: 768px) {
    justify-content: stretch;
    align-items: center;
  }
`
const SearchBar = styled.div`
  height: 100%;
  display: flex;
  width: 50%;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  .Logo__main {
    height: 45px;
    object-fit: cover;
  }
  div {
    background: #eef3f8;
    height: 45px;
    width: 250px;
    display: flex;
    align-items: center;
    img {
      margin: 0 7px;
      pointer-events: none;
      height: 25px;
    }
    input {
      background: transparent;
      line-height: 1.5;
      font-size: 17px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    div {
      width: 100%;
    }
  }
`
const NavMenu = styled.div`
  display: flex;
  width: 38%;
  flex-direction: row;
  align-items: center;
  transition: all 250ms;
  @media (min-width: 770px) and (max-width: 1600px) {
    width: 100%;
  }
`
const SocialsMenu = styled.div`
  display: flex;
  gap: 20px;
  background: white;
  width: 100%;
  height: 65px;
  padding: 0 36px;
  .active {
    border-bottom: 2px solid #000;
    color: black;
  }
  a {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    line-height: 1.5;
    .soials__icons {
      height: 30px;
    }
    .soials__icons__first {
      height: 25px;
    }
    span {
      font-size: 14px;
    }
  }
  a:hover,
  a:active {
    color: black;
    .soials__icons {
      color: black;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    gap: 20px;
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
    height: 65px;
    padding: 0 20px;
    a {
      .soials__icons {
        font-size: 24px;
      }
    }
  }
`
const SignOut = styled.div`
  position: absolute;
  bottom: -30px;
  border-radius: 4px;
  text-align: center;
  line-height: 1.5;
  height: 35px;
  width: 100px;
  background: white;
  transition: all 250ms cubic-bezier(0.67, 0.22, 0.18, 0.97) 0s;
  -webkit-box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    top: -30px;
    bottom: 0;
  }
`
const Person = styled.div`
  align-self: center;
  margin-left: 10px;
  display: flex;
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.67, 0.22, 0.18, 0.97) 0s;
  .settings__menu {
    font-size: 30px;
  }
  .settings__menu2 {
    font-size: 30px;
    transform: rotate(30deg);
    transition: all 250ms cubic-bezier(0.67, 0.22, 0.18, 0.97) 0s;
  }
`
const WorkOut = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rbga(0, 0, 0, 0.5);
  cursor: pointer;
  padding-left: 30px;
  border-left: 2px solid rgba(0, 0, 0, 0.06);
  span {
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
  }
  .work__icons {
    color: rgba(0, 0, 0, 0.5);
    font-size: 24px;
  }
`
