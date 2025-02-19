document.getElementById('LogoHD').addEventListener('click', function() {
    const splashScreen = document.getElementById('splash-screen');
    const logo = document.getElementById('LogoHD');
    const mainContent = document.getElementById('main-content');

    // Aggiungi l'animazione di movimento verso destra
    logo.style.animation = 'moveRight 1s forwards';

    // Nascondi lo splash screen e rivelare il contenuto principale
    setTimeout(function() {
        // Nascondi lo splash screen
        splashScreen.style.opacity = '0';
        
        // Rimuovi lo splash screen dal flusso del layout
        splashScreen.style.display = 'none';

        // Rendi visibile il contenuto principale con un effetto fade-in
        mainContent.classList.remove('hidden');
        mainContent.style.opacity = '1';
        mainContent.style.visibility = 'visible';
    }, 1000); // Tempo dell'animazione in millisecondi (dopo 1 secondo)
});
