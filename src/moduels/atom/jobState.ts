import { atom } from 'recoil';


export const selectedSkillList = atom({
  key: 'selectedSkillList',
  default: {
    data: []
  }
})

export const jobListState = atom({
  key: 'jobListState',
  default: []
});

