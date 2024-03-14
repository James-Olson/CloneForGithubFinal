const fileInput = document.getElementById('file');
const selectedFile = document.getElementById('selectedFile');
const RemoveButton = document.getElementById('removefile');

function ChooseFileNameDisplay() {

    if (fileInput.files.length > 0) {
        selectedFile.textContent = 'Added Attachment: ' + fileInput.files.name;
        selectedFile.style.opacity = 1;
        setTimeout(() => {
            selectedFile.textContent = '';
        }, 500);
    }
}

RemoveButton.addEventListener("click", clearAddedFile);
function clearAddedFile () {
    event.preventDefault();
    selectedFile.textContent = '';
    selectedFile.style.opacity = 0;
    setTimeout(() => {
        selectedFile.textContent = '';
    }, 500);
}


/*
function ChooseFileNameDisplayRemove () {
    const fileInput = document.getElementById('file');
    const selectedFile = document.getElementById('selectedFile');

    if (fileInput.files.length < 0){
        selectedFile.textContent = '';
        selectedFile.style.opacity = 0;
    }
}*/
