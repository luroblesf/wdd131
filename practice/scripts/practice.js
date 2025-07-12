const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++) {
  if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
  } 
}

let i = 0;
while (i < studentReport.length) {
  if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
  }
  i++;
}

for each 
i < studentReport.forEach(function (score) {
  if (score < LIMIT) {
      console.log(score);
  }
});

//*// DOM Manipulation Example
  
const input = document.querySelector('#input');
const button = document.querySelector('button');
const list = document.querySelector('#list');


const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent = input.value;
deleteButton.textContent = 'X';
li.appendChild(deleteButton);
list.appendChild(li);

buttonElement.addEventListener('click', function () {
 if (input.value.trim() !== '') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value;
    deleteButton.textContent = 'X';
    li.appendChild(deleteButton);
   list.appendChild(li);
   
   deleteButton.addEventListener('click', function () {
     list.removeChild(li);
      input.focus();
   });

  } else {
   input.value = '';
   input.focus();
   return; 
  }
});
