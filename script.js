const panel = document.querySelectorAll('.panel');

function toggelOpen() {
    console.log("hey")
    this.classList.toggle('open');
}
function toggelActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }

}

panel.forEach(panel => panel.addEventListener('click', toggelOpen));

panel.forEach(panel => panel.addEventListener('transitionend', toggelActive));
