"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStickyNote, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';


import React from 'react';
import styled from 'styled-components';

const sidebarData = [
  { title: 'Home', path: '/', icon: faHome },
  { title: 'Notes',path: '/notes', icon: faStickyNote},
  { title: 'Profile', path: '/profile', icon: faUser },
  { title: 'About Us', path: '/aboutus', icon: faInfoCircle },
  
  
];

const SidebarContainer = styled.div`
  width: 250px;
  background-color: white;
  /* Add any other styling properties you want */
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  border-radius: 30px;

  &:hover {
    background: linear-gradient(to right, #6238F6, #9400d3); /* Purple gradient on hover */
    color: white;
  }
  span {
    font-weight: bold; /* Make the text bold */
  }
`;

const Icon = styled.i`
  margin-right: 10px;
  color:#9A96AB;

  
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      {sidebarData.map((item) => (
        <SidebarItem key={item.title}>
         <Icon>
            <FontAwesomeIcon icon={item.icon} />
        </Icon>
  <span>{item.title}</span>
        </SidebarItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
