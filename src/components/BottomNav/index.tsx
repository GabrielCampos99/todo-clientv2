import {
  CalendarDays, Clock, Home, Plus, User2
} from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '../Typography';

type CustomNavLinkProps = {
  children: React.ReactNode;
  className?: string;
  to?: string;
} & React.HTMLAttributes<HTMLDivElement> &
React.RefAttributes<HTMLAnchorElement>;

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

const CustomNavLink = (props: CustomNavLinkProps) => {
  const { to, className, children } = props;
  const CustomNavLinkClx = className || '';
  const link = !!to;

  return link ? (
    <NavLink
      to={to}
      className={({ isActive }) => `cursor-pointer transition-all hover:bg-slate-700 hover:rounded pt-3 px-3  ${
        isActive ? 'border-b-2 text-white bg-slate-700 rounded' : ''
      } ${CustomNavLinkClx}`}
      {...(props as React.RefAttributes<HTMLAnchorElement>)}
    >
      {children}
    </NavLink>
  ) : (
    <div
      className={`cursor-pointer transition-all hover:bg-slate-700 hover:rounded pt-3 px-3 ${CustomNavLinkClx}`}
      {...(props as React.HTMLAttributes<HTMLDivElement>)}
    >
      {children}
    </div>
  );
};

const BottomNav = () => (
  <nav className="bg-gray-600 pb-6 pt-4 rounded-t-lg">
    <div className="flex lg:gap-3 max-w-7xl m-auto justify-around relative">
      <CustomNavLink to="/tarefas">
        <IconContainer>
          <Home size={24} />
          <Typography variant="h3" className="text-xs md:text-xl ">
            Home
          </Typography>
        </IconContainer>
      </CustomNavLink>

      <CustomNavLink>
        <IconContainer>
          <Clock size={24} color="white" />
          <Typography variant="h3" className="text-xs md:text-xl text-white">
            Foco
          </Typography>
        </IconContainer>
      </CustomNavLink>

      <IconContainer className="ml-3 cursor-pointer bg-purple-400 hover:bg-purple-500 transition p-5 rounded-full -mt-9 h-16">
        <Plus size={24} color="white" />
      </IconContainer>

      <CustomNavLink>
        <IconContainer>
          <User2 size={24} color="white" />
          <Typography variant="h3" className="text-xs md:text-xl text-white">
            Perfil
          </Typography>
        </IconContainer>
      </CustomNavLink>

      <CustomNavLink>
        <IconContainer>
          <CalendarDays size={24} color="white" />
          <Typography variant="h3" className="text-xs md:text-xl text-white">
            Calendário
          </Typography>
        </IconContainer>
      </CustomNavLink>
    </div>
  </nav>
);

export default BottomNav;
