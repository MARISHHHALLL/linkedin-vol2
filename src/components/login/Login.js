import React, { useEffect } from 'react'
import styled from 'styled-components'
import { auth, provider } from '../../firebase'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import { useHistory } from 'react-router-dom'
const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          login({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        )
        history.push('/home')
      } else {
        history.push('/')
      }
    })
  }, [])
  const SignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((temp) => {
        let user = temp.user
        dispatch(
          login({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        )
        history.push('/home')
      })

      .catch((error) => error)
  }
  return (
    <MainContainer>
      <FrPhoto>
        <img alt='' src='/images/undraw-first-option.svg' />
      </FrPhoto>
      <SecPhoto>
        <img src='/images/undraw-sec-option.svg' alt='' />
      </SecPhoto>
      <HeaderSection>
        <img src='/images/linkedin-logo-login.svg' alt='' />
      </HeaderSection>
      <LoginSection>
        <GoogleSec onClick={SignIn}>
          <img src='/images/google-favicon-logo.png' alt='' />
          <span>Sign in with Google</span>
        </GoogleSec>
        <FacebookSec>
          <img alt='' src='/images/facebook-icon.png' />
          <span>Sign in with Facebook</span>
        </FacebookSec>
      </LoginSection>
    </MainContainer>
  )
}

export default Login
const MainContainer = styled.div`
  overflow-x: hidden;
  /* background: white; */
  position: relative;
  height: 100vh;
  width: 100%;
`
const FrPhoto = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -10;
  img {
    height: 600px;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    img {
      opacity: 0;
      visibility: hidden;
      display: none;
    }
  }
  @media (min-width: 780px) and (max-width: 1600px) {
    img {
      height: 400px;
      object-fit: cover;
    }
  }
`
const SecPhoto = styled.div`
  position: absolute;
  bottom: 0px;
  right: 50%;
  left: 50%;
  transform: translateX(-50%);
  max-width: 50%;
  z-index: -9;
  img {
    height: 350px;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    img {
      opacity: 0;
      visibility: hidden;
      display: none;
    }
  }
  @media (min-width: 1600px) {
    max-width: 100%;
    width: 100%;
    img {
      height: 500px;
      object-fit: cover;
    }
  }
  @media (min-width: 780px) and (max-width: 1600px) {
    max-width: 100%;
    right: 0%;
    left: 0%;
    transform: translateX(50%);
    img {
      height: 350px;
      object-fit: cover;
    }
  }
`
const HeaderSection = styled.div`
  /* border: 2px solid #000; */
  max-height: 100px;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 60px;
  transition: all 250ms;
  img {
    height: 200px;
    object-fit: contain;
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
  @media (min-width: 1600px) {
    img {
      height: 300px;
      object-fit: cover;
    }
  }
`
const LoginSection = styled.div`
  /* border: 2px solid #000; */
  height: 50vh;
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  padding: 0 100px;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`
const GoogleSec = styled.div`
  /* border: 2px solid #000; */
  height: 65px;
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  cursor: pointer;
  border-radius: 4px;
  gap: 10px;
  font-size: 17px;
  transition: all 250ms cubic-bezier(0.67, 0.22, 0.18, 0.97) 0s;
  img {
    height: 40px;
    object-fit: contain;
  }
`
const FacebookSec = styled(GoogleSec)`
  img {
    height: 45px;
  }
`
