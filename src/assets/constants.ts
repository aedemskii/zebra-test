export const BUTTON_LAUNCH_TEXT = 'Запустить';
export const DYNAMIC_TITLE_TITLE = 'Развитие\nветроэнергетики\nв России';
export const _WINDMILLS_PER_2021 = 'ветряка\nза 2021 год';
export const N_WINDMILLS = 1162;
export const INTRO_ANIMATION_TIME = 6000;

export const BUTTON_STATUS = {
  ACTIVE: 'ACTIVE',
  DISABLED: 'DISABLED',
  HIDDEN: 'HIDDEN',
} as const;

export const BUTTON_WIDTH = 260;
export const BUTTON_HEIGHT = 98;

const w = BUTTON_WIDTH;
const h = BUTTON_HEIGHT;
export const ARROW_PATH = `M${w/2-15},${h/2} L${w/2+15},${h/2} M${w/2+2},${h/2-12} L${w/2+15},${h/2} L${w/2+2},${h/2+12}`;
const o = 2; // offset = stroke width / 2
const bX = 35; // bezier offset X
const bY = 16; // bezier offset Y
const c = BUTTON_HEIGHT / 2; // curve start
export const RIGHT_PATH = `M${w/2},${h-o} L${w-c},${h-o} C${w-c+bX},${h-o} ${w-o},${h/2+bY} ${w-o},${h/2} C${w-o},${h/2-bY} ${w-c+bX},${o} ${w-c},${o} L${w/2},${o}`;
export const LEFT_PATH = `M${w/2},${h-o} L${c},${h-o} C${c-bX},${h-o} ${o},${h/2+bY} ${o},${h/2} C${o},${h/2-bY} ${c-bX},${o} ${c},${o} L${w/2},${o}`;
const x = w/2 - 10; // approximate X stroke start
const y = h/2 - 23; // approximate Y stroke start
export const LIGHTNING_PATH = `M${x+7.48395} ${y+2} L${x+2},${y+29.4705} H${x+9.83421} L${x+8.26737} ${y+47.784} L${x+20.8021} ${y+20.3137} H${x+12.9679} L${x+17.6684} ${y+2} H${x+7.3} Z`;
