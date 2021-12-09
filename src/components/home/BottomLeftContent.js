import React from 'react'
import styled from 'styled-components'
const BottomLeftContent = () => {
  return (
    <MainContent>
      <ContextTalk>
        <div>
          <span>Groups</span>
          <span>Events</span>
          <span>Follows Hashtags</span>
        </div>
        <img src='/images/images/plus-icon.svg' />
      </ContextTalk>
      <DiscovredMode>Discover more</DiscovredMode>
    </MainContent>
  )
}

export default BottomLeftContent
const MainContent = styled.div`
  background: white;
  padding-bottom: 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  box-shadow: 0 0 0 2px #e2e1e2;
  transition: all 250ms cubic-bezier(0.9, 0.4, 0.7, 0.2) 0s;
  display: flex;
  flex-direction: column;
`
const ContextTalk = styled.div`
  display: flex;
  padding: 20px 20px 10px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #e2e1e2;
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: 700;
  }
  img {
    height: 18px;
  }
`
const DiscovredMode = styled.div`
  padding: 10px 20px 0;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);
`
