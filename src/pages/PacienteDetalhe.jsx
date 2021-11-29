import React, { useState } from "react";
import styled from "styled-components";
import { useParams, Prompt, useHistory } from "react-router-dom";
import { HeaderPage } from "../components/header/HeaderPage";
import { Button } from "react-bootstrap";

import { InputLabel, CheckBox, MaskedLabel } from "../components/inputs/Input";

import { PacientsCardData } from "../components/cards/pacientscard/PacientsCardData";

export const PacienteDetalhe = () => {
  const history = useHistory();

  const { idPaciente } = useParams();
  let paciente = "";

  if (idPaciente) {
    paciente = PacientsCardData.find((p) => p.id == idPaciente);
  }

  const handleSubmit = () => {
    alert("Salvo com sucesso.");
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
          <InputLabel label="CPF:" width="250" value={paciente.id || ""} />
          <InputLabel label="Nome:" value={paciente.name || ""} />
        </RowGroup>
        
        <InputLabel label="Data de nascimento:" type="date" width="180" />

        <Title title="Endereço" />
        <RowGroup>
          <InputLabel label="CEP:" width="200" />
          <InputLabel label="Logradouro:" />
          <InputLabel label="Numero:" width="120" />
        </RowGroup>
        <RowGroup>
          <InputLabel label="Bairro:" />
          <InputLabel label="Cidade:" />
          <InputLabel label="UF:" width="100" />
        </RowGroup>

        <Title title="Doenças" />
        {sicks.map((item) => {
          return <CheckBox title={item} />;
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

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }

  /* background-color: black; */
`;

const RowGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* flex-wrap: wrap; */
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
