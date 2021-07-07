# 동탄 직업 리스트 프로젝트

## 1. State관리 방식
-- Recoil로 작업
## 2. 폴더구조

-- Component, Container, Moduels로 구분 
  - Component 역할은 View역할
  - Container 역할은 State,Props 전달 및 이벤트 헨들링

## 3. CSS적용

-- PostCss로 작업 할 예정 

이유 : React에서 Component별 Css관리가 나한테는 너무 편해서 ㅎㅎㅎ




function listUp(event) {
  const name = event.target.getAttribute('name');
  if (!document.querySelector(`#filter-${name}`)) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.append('X');
    li.append(name);
    li.append(button);
    li.setAttribute('id', `filter-${name}`);
    filterArea.append(li);
    filterSkills.push(name);
    console.log(filterSkills);
    filterData();
  }
}

function removeSkil(event) {
  if (event.target.tagName==='BUTTON') {
    event.target.parentNode.remove();
    filterSkills = filterSkills.filter((item) => {
      if (`filter-${item}` !== event.target.parentNode.getAttribute('id')) {
        return item
      }
    });
    filterData();
  }
}

function filterData() {
  let newData = data.filter(({ skills }) => {
    return filterSkills.every(skill => {
      return skills.includes(skill);
    });
  })
  return newData;
}