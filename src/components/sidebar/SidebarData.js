import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Pacientes',
    path: '/pacientes',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Atendimento',
    path: '/atendimento',
    icon: <IoIcons.IoMdPulse />
  },
  {
    title: 'Agenda',
    path: '/agenda',
    icon: <IoIcons.IoMdCalendar />
  },
  {
    title: 'Relatórios',
    path: '/relatorio',
    icon: <FaIcons.FaChartBar/>
  },
  {
    title: 'Configuração',
    path: '/configuracao',
    icon: <FaIcons.FaTools />
  },
  {
    title: 'Ajuda',
    path: '/ajuda',
    icon: <IoIcons.IoMdHelpCircle /> 
  },
  {
    title: 'teste',
    path: '/pacientes/detalhe/',
    icon: <IoIcons.IoMdHelpCircle /> 
  }

  
];
