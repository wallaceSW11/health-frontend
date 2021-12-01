import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Prompt, useHistory } from "react-router-dom";
import { HeaderPage } from "../components/header/HeaderPage";
import { Button } from "react-bootstrap";

import { InputLabel, CheckBox } from "../components/inputs/Input";

import { PacientsCardData } from "../components/cards/pacientscard/PacientsCardData";

export const PacienteDetalhe = () => {
  const history = useHistory();
  const [cpfPaciente, setCpfPaciente] = useState("");
  const [nomePaciente, setNomePaciente] = useState("");
  const { idPaciente } = useParams();

  useEffect(() => {

    var paciente = "";

    if (idPaciente)
    {
      // vai utilizar o serviço da API para buscar o cadastro do paciente
      paciente = PacientsCardData.find(pacient => pacient.id == idPaciente);

      if (paciente)
      {
        setCpfPaciente(paciente.cpf)
        setNomePaciente(paciente.name)
      }

    }
  },
  [idPaciente]);

  const handleSubmit = () => {

    if (!idPaciente)
    {
      PacientsCardData.push({
        id: 7,
        cpf: cpfPaciente,
        name: nomePaciente,
        age: 42,
        lastAppointment: "--/--/---- --:--",
        nextAppointment: "--/--/---- --:--" });
    }


    //alert("Salvo com sucesso.");


    history.push("/pacientes");
  };

  const handleCancel = () => {
    history.push("/pacientes");
  };

  const [inEditionMode, setinEditionMode] = useState(false);
  const textEditionMode =
    "Ao mudar de página, as alterações serão perdidas. Deseja continuar?";

  const sicks = ["Diabets", "hipertensão", "Outros"];

  return (
    <>
      <Prompt when={inEditionMode} message={textEditionMode} />
      <HeaderPage title="Dados do paciente" />

      <Actions>
        <Button variant="primary" onClick={handleSubmit}>
          Salvar
        </Button>
        <Button variant="secondary" onClick={handleCancel}>
          Cancelar
        </Button>
      </Actions>

      <MainForm>
        <Title title="Identificação" />
        <RowGroup>
          <InputLabel label="CPF:" width="180" widthFixed={true} value={cpfPaciente} onChange={(event => setCpfPaciente(event.target.value))}/>
          <InputLabel label="Nome:" value={nomePaciente} onChange={(event => setNomePaciente(event.target.value))}/>
        </RowGroup>

        <InputLabel label="Data de nascimento:" type="date" width="180" widthFixed={true} />

        <Title title="Endereço" />
        <RowGroup>
          <InputLabel label="CEP:" width="120" widthFixed={true}/>
          <InputLabel label="Logradouro:" />
          <InputLabel label="Numero:" width="100" widthFixed={true} />
        </RowGroup>
        <RowGroup>
          <InputLabel label="Bairro:" />
          <InputLabel label="Cidade:" />
          <InputLabel label="UF:" width="60" widthFixed={true} />
        </RowGroup>

        <Title title="Doenças" />
        {sicks.map((item, index) => {
          return (
            <CheckBox title={item} key={item}/>
          )
        })}
      </MainForm>
    </>
  );
};

const Actions = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 200px;
  float: right;
  clear: both;
`;

const MainForm = styled.div`
  display: flex;
  flex-direction: column;
  clear: both;
  padding: 15px;
  width: 100%;
`;

const RowGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const Title = ({ title }) => {
  return (
    <>
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <Bevel />
      </div>
    </>
  );
};

const Bevel = styled.div`
  border-bottom: 1px solid var(--primary-color);
  width: 100%;
`;
