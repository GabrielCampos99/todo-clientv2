import {
  CalendarDays, Clock, Home, Plus, User2
} from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '../Typography';

const IconContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const IconContainerClx = className || '';
  return (
    <div className={`flex flex-col items-center ${IconContainerClx}`}>
      {children}
    </div>
  );
};

const BottomNav = () => {
  const a = '';
  return (
    <nav className="bg-gray-600 pb-6 pt-4 mt-7">
      <div className="flex gap-3 max-w-7xl m-auto justify-around relative">
        <NavLink
          to="/tarefas"
          className={({ isActive }) => `hover:bg-slate-700 hover:rounded pt-3 px-3  ${
            isActive ? 'border-b-2 text-white bg-slate-700 rounded' : ''
          }`}
        >
          <IconContainer>
            <Home size={24} />
            <Typography variant="h3">Home</Typography>
          </IconContainer>
        </NavLink>

        <NavLink
          to="/foco"
          className={({ isActive }) => `hover:bg-slate-700 hover:rounded pt-3 px-3  ${
            isActive ? 'border-b-2 text-white' : ''
          }`}
        >
          <IconContainer>
            <Clock size={24} color="white" />
            <Typography variant="h3" className="text-white">
              Foco
            </Typography>
          </IconContainer>
        </NavLink>

        <IconContainer className="ml-3 bg-purple-400 p-5 rounded-full -mt-9 h-16">
          <Plus size={24} color="white" />
        </IconContainer>

        <NavLink
          to="/perfil"
          className={({ isActive }) => `hover:bg-slate-700 hover:rounded pt-3 px-3  ${
            isActive ? 'border-b-2 text-white' : ''
          }`}
        >
          <IconContainer>
            <User2 size={24} color="white" />
            <Typography variant="h3" className="text-white">
              Perfil
            </Typography>
          </IconContainer>
        </NavLink>

        <NavLink
          to="/perfil"
          className={({ isActive }) => `hover:bg-slate-700 hover:rounded pt-3 px-3  ${
            isActive ? 'border-b-2 text-white' : ''
          }`}
        >
          <IconContainer>
            <CalendarDays size={24} color="white" />
            <Typography variant="h3" className="text-white">
              Calendário
            </Typography>
          </IconContainer>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
