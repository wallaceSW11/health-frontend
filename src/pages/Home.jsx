import React from 'react'
import styled from 'styled-components'

export const Home = () => {
    return (
        <div>
            <h1>Dashboard</h1>

            <Container>
                <div>Total de consultas: 32</div>
                <div>Total de consultas para essa semana: 22</div>
            </Container>

        </div>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;