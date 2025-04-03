
function toggleAnimation() {
    let box = document.getElementById('animatedBox');
    box.classList.toggle('move');
}

function savePreference() {
    let isMoved = document.getElementById('animatedBox').classList.contains('move');
    localStorage.setItem('boxMoved', isMoved);
    alert('Preference Saved!');
}

function loadPreference() {
    let isMoved = localStorage.getItem('boxMoved') === 'true';
    let box = document.getElementById('animatedBox');
    if (isMoved) {
        box.classList.add('move');
    } else {
        box.classList.remove('move');
    }
    alert('Preference Loaded!');
}
