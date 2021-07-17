import { atom } from 'recoil';


type SelectedListType = Array<string>
type JobListType<T> = Array<T>;

export const selectedSkillList = atom<SelectedListType>({
  key: 'selectedSkillList',
  default: []
})

export const jobListState = atom<JobListType<string>>({
  key: 'jobListState',
  default: []
});

