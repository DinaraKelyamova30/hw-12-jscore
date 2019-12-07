const outputArea = document.querySelector('.output');
const inputEdit = document.querySelector('.textarea');
const editBtn = document.querySelector('.editBtn');
const editBlock = document.querySelector('.editBlock');
const styleBlock = document.querySelector('.styleBlock');
const checked = document.querySelector('.checked');
const choose = document.querySelector('.choose');
const sel = document.getElementById('sel');
const checkBox = document.querySelector('.checkBox');
const palette = document.querySelector('.palette');
const paletteBg = document.querySelector('.paletteBg')
const box = document.querySelectorAll('.box');
const textColor = document.querySelector('.textColor');
const textBackground = document.querySelector('.textBackground');
const addS = document.querySelector('.addS');
const h = document.querySelector('.h');
let paletteBd = false;
const windowTb = document.querySelector('.windowTb')
const formAdd = document.querySelector('.formAdd');
const listAdd = document.querySelector('.listAdd');
const formList = document.querySelector('.formList');

// add edit/style-hide edit/style
function activeEdit() {
    editBlock.style.display = 'block';
    styleBlock.style.display = 'none';
    inputEdit.value = outputArea.innerHTML;
}

function save() {
    outputArea.innerHTML = inputEdit.value;
    editBlock.style.display = 'none';
}

function activeStyle() {
    styleBlock.style.display = 'block';
    editBlock.style.display = 'none';
}

// edit style
// fontSize
for (let i = 0; i < checked.length; i++) {
    checked[i].onclick = function () {
        outputArea.style.fontSize = this.value;
    }
}

// fontFamilly
sel.onchange = function () {
    outputArea.style.fontFamily = this.value;
}

// palette

textColor.onclick = function () {
    palette.style.display = 'block';
    paletteBd = false;
    change()
}

textBackground.onclick = function () {
    palette.style.display = 'block';
    paletteBd = true;
    change()
}

function paletteOff() {
    palette.style.display = 'none';
}

function change() {
    debugger
    for (let i = 0; i < box.length; i++) {
        box[i].onclick = function () {
            if (paletteBd) {
                console.log(getComputedStyle(this).backgroundColor);
                
                outputArea.style.backgroundColor = getComputedStyle(this).backgroundColor;
                paletteOff();
            } else {
                console.log(getComputedStyle(this).backgroundColor);
                outputArea.style.color = getComputedStyle(this).backgroundColor;
                paletteOff();
            }
        }
    }
}

// change style bold/cursive
checkBox.check.onchange = function () {
    if (checkBox.check.checked) {
        outputArea.style.fontWeight = 'bold';
    } else {
        outputArea.style.fontWeight = 'normal';
    }
}

checkBox.check1.onchange = function () {
    if (checkBox.check1.checked) {
        outputArea.style.fontStyle = 'italic';
    } else {
        outputArea.style.fontStyle = 'normal';
    }
}

// add
function add() {
    addS.style.display = 'block';
    h.style.display = 'none';
}

// create Table
function tableOpen() {
    windowTb.style.display = 'block';
    listAdd.style.display = 'none';
}

function createTable() {
    addS.style.display = 'none';
    h.style.display = 'block';
    inputEdit.value += '<table>';
    for (let i = 0; i < formAdd[0].value; i++) {
        inputEdit.value += '<tr>';
        for (let i = 0; i < formAdd[1].value; i++) {
            inputEdit.value += `<td style="width:${formAdd[2].value}px;height:${formAdd[3].value}px;border:${formAdd[4].value}px ${formAdd[5].value} ${formAdd[6].value};">TD</td>`;
        }
        inputEdit.value += '</tr>';
    }
    inputEdit.value += '</table>';
    windowTb.style.display = 'none';
}

// create list
function listOpen(){
    listAdd.style.display = 'block';
    windowTb.style.display = 'none';
}

function createList(){
    addS.style.display = 'none';
    h.style.display = 'block';
    inputEdit.value += `<ul style="list-style-type:${formList[1].value};">`;
    for (let i = 0; i < formList[0].value; i++) {
        inputEdit.value += '<li>item</li>';
    }
    inputEdit.value += '</ul>';
    listAdd.style.display = 'none';
}
