import React from 'react';
import {
  BUTTON_STATUS,
  BUTTON_WIDTH,
  BUTTON_HEIGHT,
  ARROW_PATH,
  RIGHT_PATH,
  LEFT_PATH,
  LIGHTNING_PATH,
} from '../assets/constants';
import { LaunchButtonProps } from '../assets/types';
import {
  useAppContext,
  APP_STATE,
  APP_REDUCER_ACTION,
} from '../assets/hooks/useAppContext';
import './LaunchButton.css';

export const LaunchButton: React.FC<LaunchButtonProps> = ({ text }) => {
  const [ buttonStatus, setStatus] = React.useState<string>(BUTTON_STATUS.HIDDEN);
  const { state, dispatch } = useAppContext();

  React.useEffect(() => {
    if (state === APP_STATE.INTRO) {
      setStatus(BUTTON_STATUS.HIDDEN);
    }
    else if (state === APP_STATE.WINDMILL_SPINNING) {
      setStatus(BUTTON_STATUS.DISABLED);
    } else if (state === APP_STATE.AWAITING_USER) {
      setStatus(BUTTON_STATUS.ACTIVE);
    }
  }, [state]);

  const handleClick = () => {
    if (buttonStatus === BUTTON_STATUS.DISABLED) {
      return;
    } else {
      dispatch({ type: APP_REDUCER_ACTION.SPIN_WINDMILL });
    }
  };

  return (
    <div
      className={`button ${
        buttonStatus === BUTTON_STATUS.ACTIVE ?
        'button--active' :
        buttonStatus === BUTTON_STATUS.DISABLED ? 
        'button--disabled' :
        'button--hidden'}`}
      style={{width: BUTTON_WIDTH, height: BUTTON_HEIGHT}}
      onClick={handleClick}
    >
      <div className='button__content__border' >{text}</div>
      <div className='button__content' >{text}</div>
      <div className='button__launch' >
        <svg viewBox={`0 0 ${BUTTON_WIDTH} ${BUTTON_HEIGHT}`}>
          <path className='svg__path__arrow' d={ARROW_PATH} />
          <path className='svg__path__stroke' d={LEFT_PATH} />
          <path className='svg__path__stroke'  d={RIGHT_PATH} />
          <path className='svg__path__lightning' d={LIGHTNING_PATH} />
        </svg>
      </div>
    </div>
  );
};