const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter)
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    let li = document.createElement('li');
    li.textContent = item;
    let deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    
    console.log(`good job!`)
};

function setChapterList() {
    localStorage.setItem(`my favorite BOM List`, JSON.stringify(chaptersArray));
};

function getChapterList() {
   return JSON.parse(localStorage.getItem(`my favorite BOM List`));
};

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
};


