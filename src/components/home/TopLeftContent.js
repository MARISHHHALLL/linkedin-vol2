import React from 'react'
import styled from 'styled-components'
const TopLeftContent = () => {
  return (
    <MainConttent>
      <Background />
      <PhotoProfile />
      <UserInfo>
        <span>Welcome, There!</span>
        <div>add a photo</div>
      </UserInfo>
      <ConnectionWidget>
        <div>
          <span>Connections</span>
          <span>Grow your Network</span>
        </div>
        <img alt='' src='/images/images/widget-icon.svg' />
      </ConnectionWidget>
      <Items>
        <img aly='' src='/images/images/item-icon.svg' />
        <span>My items</span>
      </Items>
    </MainConttent>
  )
}

export default TopLeftContent
const MainConttent = styled.div`
  width: 100%;
  background: white;
  padding-bottom: 20px;
  border: none;
  outline: none;
  border-radius: 10px;
  box-shadow: 0 0 0 2px #e2e1e2;
  transition: all 250ms cubic-bezier(0.9, 0.4, 0.7, 0.2) 0s;
  display: flex;
  flex-direction: column;
  margin: 0 0 20px 0;
`
const Background = styled.div`
  background: url('/images/images/card-bg.svg');
  background-size: 452px;
  background-position: center;
  height: 54px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
const PhotoProfile = styled.div`
  background: url('/images/images/photo.svg');
  background-size: 60%;
  background-repeat: no-repeat;
  background-clip: content-box;
  background-position: center;
  background-color: white;
  box-sizing: border-box;
  height: 72px;
  /* border: 2px solid #000; */
  width: 72px;
  align-self: center;
  margin: -38px auto 12px;
  border-radius: 50%;
`
const UserInfo = styled.div`
  text-align: center;
  word-break: break-all;
  margin-bottom: 10px;
  span {
    font-weight: 600;
    font-size: 18px;
    line-height: 1.5;
  }
  div {
    color: #0a66c2;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
`
const ConnectionWidget = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-top: 2px solid #e2e1e2;
  border-bottom: 2px solid #e2e1e2;
  word-break: break-all;
  &:hover {
    background: rgba(250, 250, 250, 0.5);
  }
  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    span:first-child {
      font-size: 17px;
      color: rgba(0, 0, 0, 0.5);
      font-weight: 600;
    }
    span:nth-child(2) {
      font-weight: 600;
      font-size: 17px;
    }
  }
  img {
    height: 20px;
    object-fit: contain;
  }
`
const Items = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0 0 20px;
  gap: 5px;
  img {
    height: 20px;
  }
`
