const outputArea = document.querySelector('.output');
const inputEdit = document.querySelector('.textarea');
const editBtn = document.querySelector('.editBtn');
const editBlock = document.querySelector('.editBlock');
const styleBlock = document.querySelector('.styleBlock');
const radio = document.querySelector('.radio')


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

for (let i = 0; i < radio.select.length; i++) {
    radio.select[i].onclick = function () {
        outputArea.style.fontSize = event.target.value;
    }
}
