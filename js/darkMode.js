document.getElementById('toggle').addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('darkMode');
        localStorage.setItem('darkMode', 'true'); // Guarda la configuración en localStorage
        console.log("si");
    } else {
        document.body.classList.remove('darkMode');
        localStorage.setItem('darkMode', 'false'); // Guarda la configuración en localStorage
        console.log("sinono");
    }
});

// Al cargar la página, verifica la configuración en localStorage
window.onload = function() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('darkMode');
        document.getElementById('toggle').checked = true; // Marca el toggle como activado
    }
};
