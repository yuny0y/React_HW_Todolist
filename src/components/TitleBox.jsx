import React from 'react'
import styled from 'styled-components';

const TitleBox =() =>{
    return <Title>My Todo List</Title>
  };

  const Title = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: auto;
  color: brown;
  padding: 20px;
  margin: 12px auto 10px auto;
  box-shadow: 0px 0px 2px 0px gray;
`

export default TitleBox;