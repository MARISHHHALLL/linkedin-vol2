import { Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectUserName, selectUserPhoto } from '../../features/userSlice'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
const MidMain = () => {
  const selectName = useSelector(selectUserName)
  const selectPhoto = useSelector(selectUserPhoto)
  console.log(selectName)
  return (
    <MainCotent>
      <Sharing>
        <Clickable>
          <Avatar src={selectPhoto} sx={{ height: '50px', width: '50px' }} />
          <button>Start a post </button>
        </Clickable>
        <FuntionsClickers>
          <button>
            <img src='/images/add-photo.svg' alt='' />
            <span>Photo</span>
          </button>
          <button>
            <img src='/images/add-video.svg' alt='' />
            <span>Video</span>
          </button>
          <button>
            <img src='/images/add-event.svg' alt='' />
            <span>Event</span>
          </button>
          <button>
            <img src='/images/add-article.svg' alt='' />
            <span>Write article</span>
          </button>
        </FuntionsClickers>
      </Sharing>
      <Content>
        <UserIdentify>
          <span>
            <Avatar />
            <div>
              <p>Name</p>
              <span>time</span>
            </div>
          </span>
          <BiDotsHorizontalRounded className='Three__Dots' />
        </UserIdentify>
        <Creators>
          <img
            src='https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmlnaHQlMjBtb3VudGFpbnxlbnwwfHwwfHw%3D&w=1000&q=80'
            alt=''
          />
        </Creators>
        <Socials></Socials>
      </Content>
    </MainCotent>
  )
}

export default MidMain
const MainCotent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const Sharing = styled.div`
  gap: 20px;
  background: white;
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  box-shadow: 0 0 0 2px #e2e1e2;
  transition: all 250ms cubic-bezier(0.9, 0.4, 0.7, 0.2) 0s;
`
const Clickable = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  gap: 10px;
  button {
    width: 100%;

    text-align: left;
    border-radius: 5px;
    background-color: rgba(250, 250, 250, 0.5);
    border: 2px solid rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.5);
    padding: 0 10px;
    cursor: pointer;
    font-weight: 500px;
    &:hover {
      background-color: rgba(250, 250, 250, 0.9);
    }
  }
`
const FuntionsClickers = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0;
  button {
    font-size: 18.5px;
    background-color: transparent;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 5px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 600;
    border-radius: 5px;
    word-break: break-all;
    line-height: 1.5;
    img {
      height: 27px;
      color: rgba(0, 0, 0, 0.5);
      object-fit: contain;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      color: black;
    }
  }
  @media (max-width: 768px) {
    justify-content: space-around;
    button {
      font-size: 15px;
      img {
        height: 25px;
      }
    }
  }
`
const Content = styled(Sharing)``
const UserIdentify = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    display: flex;
    gap: 10px;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      line-height: 1;
      /* align-self: stretch; */
      p {
        font-size: 17px;
        font-weight: 500;
      }
      span {
        font-size: 13px;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 500;
      }
    }
  }
  .Three__Dots {
    font-size: 25px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.5);
  }
`
const Creators = styled.div`
  padding: 20px 0;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
const Socials = styled.div``
