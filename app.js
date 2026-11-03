const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const result = document.getElementById('result');

async function searchSuperheroes() {
    const query = searchInput.value.trim();
    const url = 'superheroes.php?query=' + encodeURIComponent(query);

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Request failed');
        }

        result.innerHTML = await response.text();
    } catch (error) {
        result.textContent = 'Unable to load superheroes.';
    }
}

searchButton.addEventListener('click', searchSuperheroes);
searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        searchSuperheroes();
    }
});
