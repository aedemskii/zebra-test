import React, { useRef } from 'react';
import {
  useAppContext,
  APP_STATE,
  APP_REDUCER_ACTION,
} from '../assets/hooks/useAppContext';
import {
  _WINDMILLS_PER_2021,
  N_WINDMILLS,
  INTRO_ANIMATION_TIME
} from '../assets/constants';
import './WindmillCounter.css';

export const WindmillCounter: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const counterRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!counterRef.current) {
      return;
    }
    if (state === APP_STATE.INTRO) {
      if (!counterRef.current) {
        return;
      }
      const awaitTimeout = setTimeout(
        () => {
          let counter = 0;
          const awaitInterval = setInterval(() => {
            if (counter >= N_WINDMILLS) {
              clearInterval(awaitInterval);
              dispatch({ type: APP_REDUCER_ACTION.AWAIT_USER });
              return;
            }
            if (N_WINDMILLS - counter < 5) {
              counter = N_WINDMILLS;
            } else {
              counter += Math.floor(Math.random() * 5);
            }
            if (counterRef.current) {
              counterRef.current.innerHTML = `${counter}`;
            }
          }, INTRO_ANIMATION_TIME / N_WINDMILLS);
        }, 1500);

      return () => {
        clearTimeout(awaitTimeout);
      };
    }
  }, [state]);

  return (
    <div className='windmill-counter'>
      <div
        className='windmill-counter__counter'
        ref={counterRef}
      >
        0
      </div>
      <div className='windmill-counter__text'>
        {_WINDMILLS_PER_2021.split('\n').map((text, index) => (
          <span key={index}>
            {index > 0 && <br />}
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};