//button 'edit' mouseover/mouseout/click
let edit = document.getElementsByClassName('edit');
edit[0].addEventListener('mouseover', function () {
    edit[0].style.backgroundColor = 'rgb(201, 204, 0)';
    edit[0].style.border = '2px solid orange';
})
edit[0].addEventListener('mouseout', function () {
    edit[0].style.backgroundColor = 'orange';
})

edit[0].addEventListener('click', function (click) {
    edit[0].style.backgroundColor = 'rgb(255, 102, 0)';
    edit[0].style.color = 'white';
    edit[0].style.border = 'rgb(255, 136, 0)';

    //create textarea inside div class = input
    let textArea = document.createElement('div');
    let text = document.createElement('textarea');
    text.style.width = '800px';
    text.style.height = '200px';
    text.style.marginTop = '20px';
    text.style.marginLeft = '50px';
    textArea.appendChild(text);
    document.getElementById('textEditor').appendChild(textArea);

    // creat button 'add' indide div class = input
    let butAdd = document.createElement('button');
    butAdd.style.width = '60px';
    butAdd.style.height = '30px';
    butAdd.style.backgroundColor = 'red';
    butAdd.style.border = 'none';
    butAdd.style.borderRadius = '5px';
    butAdd.style.marginLeft = '50px';
    butAdd.style.color = 'white';
    butAdd.textContent = 'add';
    document.getElementById('textEditor').appendChild(butAdd);

    // creat button 'save' indide div class = input
    let butSave = document.createElement('button');
    butSave.style.width = '60px';
    butSave.style.height = '30px';
    butSave.style.backgroundColor = 'green';
    butSave.style.border = 'none';
    butSave.style.borderRadius = '5px';
    butSave.style.marginLeft = '5px';
    butSave.style.color = 'white';
    butSave.textContent = 'save';
    document.getElementById('textEditor').appendChild(butSave);
})

edit[0].addEventListener('mouseout', function () {
    edit[0].style.backgroundColor = 'rgb(255, 102, 0)';
})

//button 'style' mouseover/mouseout/click