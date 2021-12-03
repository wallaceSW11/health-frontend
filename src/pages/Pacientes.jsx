import React from 'react'
import styled from 'styled-components'
import { InputGroup, FormControl } from 'react-bootstrap'

import { PacientsCard } from '../components/cards/pacientscard'
import { PacientsCardData } from '../components/cards/pacientscard/PacientsCardData'
import { HeaderPage } from '../components/header/HeaderPage'
import { LinkToPrimary } from '../components/button/Button'

export const Pacientes = () => {
    return (
        <>
        <Container>
            <HeaderPage title="Pacientes"/>
            <Header>
              <InputGroup className="mb">
                <FormControl placeholder="Pesquise pelo o nome do paciente..." />
              </InputGroup>
                <Registration>
                  <LinkToPrimary text="Novo" path="/pacientes/detalhe" />
                </Registration>

            </Header>
            <ListaPacientes>
                    {PacientsCardData.map(item => {
                        return (
                                <PacientsCard
                                  key={item.id}
                                  id={item.id}
                                  name={item.name}
                                  age={item.age}
                                  lastAppointment={item.lastAppointment}
                                  nextAppointment={item.nextAppointment}/>
                        )
                        })}


            </ListaPacientes>
        </Container>
        </>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

const Registration = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
`;

const ListaPacientes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;