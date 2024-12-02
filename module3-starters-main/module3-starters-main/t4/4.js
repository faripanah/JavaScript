'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const target = document.querySelector('#target');
for(let student of students){
  const option= document.createElement('option');
  option.value =student.id;
  option.textContent = student.name;
  target.appendChild(option);
  

}




for (const student of students){
  const html = `<option value = "${student.id}">${student.name}</option>`;
  select.innerHTML += html;
}
