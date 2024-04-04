import React from 'react';
import { ChildComponents } from '../assets/types';
import './BackgroundWrap.css';

export const BackgroundWrap: React.FC<ChildComponents> = ({ children }) => {
  return (
    <div className='background-wrap'>
      <div className='background-wrap__cloud-big' />
      <div className='background-wrap__cloud-small' />
      {children}
      <div className='background-wrap__wave' />
    </div>
  );
}