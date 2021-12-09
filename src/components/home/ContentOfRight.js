import React, { useState } from 'react'
import styled from 'styled-components'
import DataOfRight from './DataOfRight'
const ContentOfRight = () => {
  const [DataRight, setDataRight] = useState(DataOfRight)
  return (
    <MainContext>
      <TopOfHim>
        <FeedCon>
          <h5>Add to your feed</h5>
          <img src='/images/images/feed-icon.svg' />
        </FeedCon>
        <ContentLinks>
          {DataRight.map((data) => {
            const { id, name } = data
            return (
              <FirstLink key={id}>
                <img src='/images/hashtag.png' alt='' />
                <div>
                  <span>#{name}</span>
                  <button>Follow</button>
                </div>
              </FirstLink>
            )
          })}
        </ContentLinks>
        <Recommeded href='https://granth.info/linkedin-recommendation-template/#:~:text=A%20LinkedIn%20recommendation%20is%20shiny%20diamonds%20added%20to,highlighting%20his%20personality%2C%20skills%2C%20work%2C%20or%20projects%20combined.'>
          <span>View all recommendation</span>
          <img src='/images/images/right-icon.svg' alt='' />
        </Recommeded>
      </TopOfHim>
    </MainContext>
  )
}

export default ContentOfRight
const MainContext = styled.div`
  width: 100%;
`
const TopOfHim = styled.div`
  background: white;
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  box-shadow: 0 0 0 2px #e2e1e2;
  transition: all 250ms cubic-bezier(0.9, 0.4, 0.7, 0.2) 0s;
  display: flex;
  flex-direction: column;
`
const FeedCon = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.6);
  word-break: break-all;
  align-items: center;
  margin-bottom: 10px;
  h5 {
    font-weight: 900;
    line-height: 1.5;
    letter-spacing: 0.5px;
  }
  img {
    height: 18px;
  }
`
const ContentLinks = styled.div``
const FirstLink = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  text-align: left;
  margin: 10px 0;
  width: 100%;
  height: 100%;
  img {
    height: 30px;
    object-fit: contain;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    align-items: flex-start;
    button {
      background: transparent;
      cursor: pointer;
      color: #70b5f9;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
const Recommeded = styled.a`
  margin: 20px 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 5px;
  color: #0a66c2;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  img {
    transform: translateY(2px);
  }
`
