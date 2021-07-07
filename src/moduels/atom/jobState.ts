import { atom } from 'recoil';

export const jobList = atom({
  key: 'jobList',
  default: {
    data: [],
    loading: false,
    error : false,
  }
})