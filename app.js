const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', async function () {
    try {
        const response = await fetch('superheroes.php');
        if (!response.ok) {
            throw new Error('Request failed');
        }
        const superheroes = await response.text();
        alert(superheroes);
    } catch (error) {
        alert('Unable to load superheroes.');
    }
});
