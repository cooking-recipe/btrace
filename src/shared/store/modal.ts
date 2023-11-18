import { atom } from 'recoil';

export const onCurrentModalCloseAtom = atom<(() => void) | null>({
  key: 'onCurrentModalCloseAtom',
  default: null
});