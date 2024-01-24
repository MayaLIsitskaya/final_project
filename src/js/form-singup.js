let nameInput = document.querySelector('#name');
nameInput.addEventListener('keyup', function(item) {
    let parent = this.parentNode;
    let paths = parent.getElementsByTagName('path');
    console.log(this.value);
    if (this.value.length > 0) {
        parent.style.border = '1px solid #6C5FBC';
        for (let i = 0; i < paths.length; i++) {
            let path = paths[i];
            path.style.fill = "#6C5FBC";
        }
    } else{
        parent.style.border = 'none';
        for (let i = 0; i < paths.length; i++) {
            let path = paths[i];
            path.style.fill = "silver";
        }
    }
});


let emailInput = document.querySelector('#email');
emailInput.addEventListener('keyup', function(item) {
    let parent = this.parentNode;
    let paths = parent.getElementsByTagName('path');
    console.log(this.value);
    if (this.value.length > 0) {
        parent.style.border = '1px solid #6C5FBC';
        for (let i = 0; i < paths.length; i++) {
            let path = paths[i];
            path.style.fill = "#6C5FBC";
        }
    } else{
        parent.style.border = 'none';
        for (let i = 0; i < paths.length; i++) {
            let path = paths[i];
            path.style.fill = "silver";
        }
    }
})

let passwordInput = document.querySelector('#password');
passwordInput.addEventListener('keyup', function(item) {
    let parent = this.parentNode;
    let paths = parent.getElementsByTagName('path');
    console.log(this.value);
    if (this.value.length > 0) {
        parent.style.border = '1px solid #6C5FBC';
        for (let i = 0; i < paths.length; i++) {
            let path = paths[i];
            path.style.fill = "#6C5FBC";
        }
    } else {
        parent.style.border = 'none';
        for (let i = 0; i < paths.length; i++) {
            let path = paths[i];
            path.style.fill = "silver";
        }
    }
})