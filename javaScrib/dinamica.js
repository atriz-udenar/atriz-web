document.getElementById('toggle-roberta').addEventListener('click', function () {
    const publicationsList = document.getElementById('guiasRoberta-list');
    if (publicationsList.style.display === 'none') {
        publicationsList.style.display = 'block';
        this.textContent = 'Ocultar guías OpenLab Roberta';
    } else {
        publicationsList.style.display = 'none';
        this.textContent = 'Mostrar guías OpenLab Roberta';
    }
});

document.getElementById('toggle-sphero').addEventListener('click', function () {
    const publicationsList = document.getElementById('guiasSphero-list');
    if (publicationsList.style.display === 'none') {
        publicationsList.style.display = 'block';
        this.textContent = 'Ocultar guías SpheroRVR';
    } else {
        publicationsList.style.display = 'none';
        this.textContent = 'Mostrar guías SpheroRVR';
    }
});

function openMailClient() {
    var confirmation = confirm("Contactanos");
    if (confirmation) {
        window.location.href = "mailto:gabrielpachajoa@udenar.edu.co";
    }
}