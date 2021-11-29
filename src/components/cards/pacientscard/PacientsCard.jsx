import React from "react";
import styled from "styled-components";
import ImgProfile from "../../../assets/profile.jpeg";
import { FiActivity, FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

export const PacientsCard = ({ id, name, age, lastAppointment, nextAppointment }) => {
  return (
    <Card>
      <Container>
        <ProfileImage />
        <ProfileInformation
          name={name}
          id={id}        
          age={age}
          lastAppointment={lastAppointment}
          nextAppointment={nextAppointment}
        />
      </Container>
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  height: 130px;
  width: 400px;
  border: 1px solid var(--primary-color);
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  flex-wrap: nowrap;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  min-width: 100%;
  min-height: 100%;
  padding: 5px;
`;

const Image = styled.img`
  width: 90px;
  height: 110px;
  object-fit: cover;
`;

const ProfileImage = () => {
  
  
  return <Image src={ImgProfile}/>;
};

const ProfileInformation = ({ id, name, age, lastAppointment, nextAppointment }) => {
  return (
    <Infomations>
      <Text title="Paciente:" description={name} />
      <Text title="Idade:" description={age} />
      <Text title="Última consulta:" description={lastAppointment} />
      <Text title="Próxima consulta:" description={nextAppointment ? nextAppointment : '--/--/-- --:--'} />      
      <Actions>
        <Link to={`/pacientes/detalhe/${id}`}>
          <FiEdit />
          <ToolTip>Editar paciente</ToolTip>
        </Link>

        <Link to={`/atendimento/${id}`}>
          <FiActivity />
          <ToolTip>Novo atendimento</ToolTip>
        </Link>
      </Actions>
    </Infomations>
  );
};

const Infomations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 5px;
  width: 100%;

  strong {
    font-weight: 600;
  }
`;

const ToolTip = styled.span`
  position: absolute;
  bottom: 35%;
  left: calc(100% - 150px);
  /* margin-left: calc(100% - 30px); */
  z-index: 99;
  background: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  white-space: nowrap;
  pointer-events: none;
  transition: 0s;
  color: var(--primary-color);
  font-size: 18px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 20px;

  a {
    padding: 5px;
  }

  a:hover {
    ${ToolTip} {
      opacity: 1;
      pointer-events: auto;
      transition: all 0.4s ease;
    }
  }
`;

const Text = ({title, description}) => {
  return (
    <div>
        <strong>{title}</strong>{` ${description}`}
      </div>
  )
}
