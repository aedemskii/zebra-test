import React from 'react';
import {
  useAppContext,
  APP_STATE,
  APP_REDUCER_ACTION
} from '../assets/hooks/useAppContext';
import './Windmill.css';

export const Windmill: React.FC = () => {
  const windmillRef = React.useRef<HTMLDivElement>(null);
  const { state, dispatch } = useAppContext();

  React.useEffect(() => {
    if (state === APP_STATE.WINDMILL_SPINNING) {
      const windmill = windmillRef.current;
      if (!windmill) {
        return;
      }

      windmill.classList.add('spinning');
      const interval = setInterval(() => {
        windmill.classList.remove('spinning');
        dispatch({ type: APP_REDUCER_ACTION.AWAIT_USER });
      }, 6000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [state]);

  return (
    <div
      className='windmill'
      ref={windmillRef}
      >
      <div className='windmill__leg' />
      <div className='windmill__blades' />
      <div className='windmill__cap' />
    </div>
  );
}