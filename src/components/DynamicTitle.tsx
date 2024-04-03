import React, { useEffect, useRef } from 'react';
import { DynamicTitleProps } from '../assets/types';
import {
  useAppContext,
  APP_STATE,
} from '../assets/hooks/useAppContext';
import './DynamicTitle.css';

export const DynamicTitle: React.FC<DynamicTitleProps> = ({ title }) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const { state } = useAppContext();

  useEffect(() => {
    if (state === APP_STATE.INTRO) {
      if (!titleRef.current) {
        return;
      }
      titleRef.current.innerHTML = '';
      const titleLines = title.split('\n');
      let counter = 0;
      let charPos = 0;
      let lineNum = 0;

      const addChar = () => {
        const title = titleRef.current;
        if (!title) {
          return;
        }
        if (lineNum >= titleLines.length) {
          return;
        }
        if (titleLines[lineNum][charPos] === ' ') {
          title.innerHTML += '&nbsp;';
        } else {
          title.innerHTML += titleLines[lineNum][charPos];
        }
        if (charPos + 1 < titleLines[lineNum].length) {
          charPos += 1;
        } else {
          charPos = 0;
          lineNum += 1;
          title.innerHTML += '<br>';
        }
      };

      const totalLength = titleLines.reduce((acc, line) => acc + line.length, 0);

      const animationInterval = setInterval(() => {
        addChar();
        counter += 1;
        if (counter >= totalLength) {
          clearInterval(animationInterval);
        }
      }, 120);

    return () => {
      clearInterval(animationInterval);
    };
    }
  }, [title]);

  return (
    <div
      className="dynamic-title"
      ref={titleRef}
    />
  );
};
