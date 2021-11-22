import React from 'react'
import styled from 'styled-components'
import TopLeftContent from './TopLeftContent'
const Main = () => {
  return (
    <ContainerHome>
      <TextHeader>
        <h5>Develop new skills -</h5>
        <span>
          Millions of members use LinkedIn Learning. Unlock your free access
          today.
        </span>
      </TextHeader>
      <MainContent>
        <LeftContent>
          <TopLeftContent />
          <BottomLeftContent />
        </LeftContent>
        <MidContent>main</MidContent>
        <RightContent>right</RightContent>
      </MainContent>
    </ContainerHome>
  )
}

export default Main
const ContainerHome = styled.div`
  padding: 80px 0;
  width: 100%;
  height: calc(100vh - 65px);
`
const TextHeader = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: underline;
  gap: 5px;
  font-size: 18px;
  text-align: center;
  h5 {
    color: #0a66c2;
  }
  span {
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const MainContent = styled.div`
  padding: 10px 105px;
  display: grid;
  grid-template-areas: 'left mid right';
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    align-items: center;
    gap: 25px;
  }
  @media (min-width: 780px) and (max-width: 1600px) {
    padding: 10px 50px;
    grid-template-columns: minmax(0, 7fr) minmax(0, 12fr) minmax(300px, 10fr);
  }
`
const LeftContent = styled.div`
  grid-area: left;
  width: 100%;
`

const MidContent = styled.div``
const RightContent = styled.div``
