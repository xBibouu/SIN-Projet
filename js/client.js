document.getElementById('OUVRIR').addEventListener('click', async () => {
    try {
        const response = await fetch('http://127.0.0.1:3000/update-ouvrir', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ moteurouvrir: 1 })
        });
        const data = await response.json();
        console.log('Réponse du serveur:', data);
    } catch (error) {
        console.error('Erreur lors de l\'envoi de la requête:', error);
    }
});

document.getElementById('FERMER').addEventListener('click', async () => {
    try {
        const response = await fetch('http://127.0.0.1:3000/update-fermer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ moteurfermer: 1 })
        });
        const data = await response.json();
        console.log('Réponse du serveur:', data);
    } catch (error) {
        console.error('Erreur lors de l\'envoi de la requête:', error);
    }
});

document.getElementById('LANCER').addEventListener('click', async () => {
    try {
        const response = await fetch('http://127.0.0.1:3000/update-lancer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ moteurlancer: 1 })
        });
        const data = await response.json();
        console.log('Réponse du serveur:', data);
    } catch (error) {
        console.error('Erreur lors de l\'envoi de la requête:', error);
    }
});

document.getElementById('Gauche').addEventListener('click', async () => {
    try {
        const response = await fetch('http://127.0.0.1:3000/update-direction', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ direction: 'gauche' })
        });
        const data = await response.json();
        console.log('Réponse du serveur:', data);
    } catch (error) {
        console.error('Erreur lors de l\'envoi de la requête:', error);
    }
});

document.getElementById('Droite').addEventListener('click', async () => {
    try {
        const response = await fetch('http://127.0.0.1:3000/update-direction', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ direction: 'droite' })
        });
        const data = await response.json();
        console.log('Réponse du serveur:', data);
    } catch (error) {
        console.error('Erreur lors de l\'envoi de la requête:', error);
    }
});

document.getElementById('Haut').addEventListener('click', async () => {
    try {
        const response = await fetch('http://127.0.0.1:3000/update-direction', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ direction: 'haut' })
        });
        const data = await response.json();
        console.log('Réponse du serveur:', data);
    } catch (error) {
        console.error('Erreur lors de l\'envoi de la requête:', error);
    }
});

document.getElementById('Bas').addEventListener('click', async () => {
    try {
        const response = await fetch('http://127.0.0.1:3000/update-direction', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ direction: 'bas' })
        });
        const data = await response.json();
        console.log('Réponse du serveur:', data);
    } catch (error) {
        console.error('Erreur lors de l\'envoi de la requête:', error);
    }
});
