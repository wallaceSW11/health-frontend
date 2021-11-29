import React from 'react'
import { useParams } from 'react-router-dom'
import { HeaderPage } from '../components/header/HeaderPage'

import { PacientsCardData } from '../components/cards/pacientscard/PacientsCardData';

export const Atendimento = () => {
  let { id } = useParams();
  let paciente = PacientsCardData.find(p => p.id == id);



    return (
        <div>
            <HeaderPage title="Atendimento" />
            <h2>Atendimento: {id}</h2>
            <span>Paciente: {paciente ? paciente.name : '' }</span>
           
            
        </div>
    )
}