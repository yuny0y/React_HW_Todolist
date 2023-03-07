import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Modal() {
    const todolist =useSelector((state) => state.todolist);
    const navigate = useNavigate();
    const param =useParams();
    const foundData = todolist.find((item) => {
        return item.id === parseInt(param.id);
    })
  return (
    <ModalPage>
       <ModalStyle>
         <IdForm>
            ID : {foundData.id}
            <ModalBtn onClick={()=>{navigate('/');
            }}>이전으로</ModalBtn>
        </IdForm>
        <TitleList>{foundData.title}</TitleList>  
        <ContentsList>{foundData.contents}</ContentsList>
      </ModalStyle>
    </ModalPage>
   
  )
}

const ModalPage =styled.div`
  border: 2px solid rgb(238, 238, 238);
  width: 100%;
  height: 100vh;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`

const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 400px;
  border: 1px solid rgb(214, 127, 127);
  box-shadow: 0px 0px 3px 0px gray;
  padding: 20px
`

const IdForm = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0px 24px;
  align-items: center;
`
const ModalBtn = styled.button`
  border: 1px solid rgb(138, 47, 47);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
`

const TitleList =styled.div`
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    padding: 0px 24px;
`

const ContentsList =styled.div`
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding: 0px 24px;
`
export default Modal;

