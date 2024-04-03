import { BUTTON_STATUS } from './constants';

type ObjectValues<T> = T[keyof T];

export type ButtonStatus = ObjectValues<typeof BUTTON_STATUS>;

export type LaunchButtonProps = {
  text: string;
};