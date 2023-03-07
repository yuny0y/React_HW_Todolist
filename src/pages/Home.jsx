import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addList, changeList, deleteList } from '../redux/modules/todolist';
import { Link } from 'react-router-dom';
import TitleBox from '../components/TitleBox';
import Layout from '../components/Layout';
import GlobalStyle from '../GlobalStyle';
import styled from 'styled-components';

function Home() {
    const todolist = useSelector((state)=> state.todolist);
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const dispatch = useDispatch();

    const titleChangeHandler =(e) => {
        setTitle(e.target.value);
    }

    const contentsChangeHandler =(e) => {
        setContents(e.target.value);
    }

  return (
    <>
        <Layout>
        <GlobalStyle />
        <TitleBox/>
        <InputBox>
            title &nbsp;
            <Contents value={title} onChange={titleChangeHandler}/>
            &nbsp; contents &nbsp;
            <Contents value={contents} onChange={contentsChangeHandler}/>
            <Btn onClick={() => {
                dispatch(addList({
                    id : todolist.length,
                    title,
                    contents,
                    isDone :false,
                }))
            }}>추가하기</Btn>
        </InputBox>
        <ListTitle>Working..</ListTitle>
        <AppStyle>
            {todolist.filter(item => item.isDone ===false).map((item)=>{
                    return(
                        <ComponentSytle key={item.id}>
                            <Link to={`/Home/${item.id}`}>상세보기</Link>
                            <h4>{item.title}</h4>
                            <p>{item.contents}</p>
                            <ActionBtn style={{borderColor :'crimson'}} onClick={()=>{dispatch(
                                deleteList(item.id)
                            )}}>삭제</ActionBtn>
                            <ActionBtn  style={{borderColor :'green'}} onClick={()=> {dispatch(
                                changeList(item.id)
                            )}}>완료</ActionBtn>
                        </ComponentSytle>
                    )
                })
            }
        </AppStyle>
        <ListTitle>Done..</ListTitle>
        <AppStyle>
            {todolist.filter(item => item.isDone ===true).map((item)=>{
                    return(
                        <ComponentSytle key={item.id}>
                            <Link to={`/Home/${item.id}`}>상세보기</Link>
                            <h4>{item.title}</h4>
                            <p>{item.contents}</p>
                            <ActionBtn style={{borderColor :'crimson'}} onClick={()=>{dispatch(
                                deleteList(item.id)
                            )}}>삭제</ActionBtn>
                            <ActionBtn style={{borderColor :'blue'}} onClick={()=> {dispatch(
                                changeList(item.id)
                            )}}>취소</ActionBtn>
                        </ComponentSytle>
                    )
                })
            }
        </AppStyle>
        </Layout>
    </> 
  );
};

const InputBox = styled.div`
  background-color: indianred;
  height: 50px;
  border-radius: 10px;
  position: relative;
  padding: 20px;
`
const Btn= styled.button`
    width: 100px;
    height: 30px;
    background-color :darkred;
    border-radius: 10px;
    border: 1px solid;
    color:  white;
    position: absolute;
    top: 30px;
    right: 20px;
    padding: 5px;
    text-align: center;
    &:hover {
    border : 2px solid white;
  }
`
const Contents =styled.input`
  width: 200px;
  height: 20px;
  border-radius: 10px;
  border: 3px solid white;

  display: inline-block;
  vertical-align: middle;
  margin: 0.7rem;
  padding: 0;
`
const ListTitle = styled.div`
  font-size: 35px;
  margin-top: 20px;
  padding: 10px;
`

const AppStyle = styled.div`
  padding: 10px;
  display: flex;
  gap: 12px;
  flex-wrap : wrap;
`
const ComponentSytle = styled.div`
  width: 230px;
  height: 120px;
  border: 3px solid lightpink;
  border-radius: 10px;
  display: relative;
  justify-content : center;
  padding: 20px 10px 45px 20px;
`
const ActionBtn =styled.button`
    width: 100px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding : 5px;
    margin-left: 5px;
    border-radius: 10px;
    background-color: transparent;
    &:hover {
      border : 2px solid yellow;
    }
`

export default Home;