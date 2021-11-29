import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

export const HeaderPage = ({title}) => {
    return (
        <Header>
            <Title> {title} </Title>
        </Header>
    )
}

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 40px;
  line-height: 40px;
  padding-left: 10px; 
`;

const Title = styled.h1`
  font-size: 28px;
  color: var(--primary-color);  
`;

HeaderPage.propTypes = {
    title: string
}