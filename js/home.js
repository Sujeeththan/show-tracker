// Selectors
const showsGrid = document.getElementById('shows-grid');
const searchInput = document.getElementById('search-input');
const genreButtons = document.querySelectorAll('.genre-btn');
const alphabetLinks = document.querySelectorAll('.alphabet-filters a');
const noResultsMsg = document.getElementById('no-results');

let currentGenre = 'all';
let currentAlpha = 'all';
let currentSearch = '';

// Check if app data exists, if not wait for app.js or reload
if (!localStorage.getItem('shows')) {
    setTimeout(() => location.reload(), 500); 
}

function renderShows() {
    const shows = JSON.parse(localStorage.getItem('shows')) || [];
    
    // Filter
    const filteredShows = shows.filter(show => {
        // Genre
        const genreMatch = currentGenre === 'all' || show.genre.includes(currentGenre);
        
        // Alphabet
        let alphaMatch = true;
        if (currentAlpha !== 'all') {
            if (currentAlpha === '0-9') {
                alphaMatch = /^\d/.test(show.title);
            } else {
                alphaMatch = show.title.toUpperCase().startsWith(currentAlpha);
            }
        }

        // Search
        const searchMatch = show.title.toLowerCase().includes(currentSearch.toLowerCase());

        return genreMatch && alphaMatch && searchMatch;
    });

    // Render
    showsGrid.innerHTML = '';
    
    if (filteredShows.length === 0) {
        noResultsMsg.style.display = 'block';
    } else {
        noResultsMsg.style.display = 'none';
        filteredShows.forEach(show => {
            const card = document.createElement('a');
            card.href = `./details.html?id=${show.id}`;
            card.className = 'text-decoration-none text-white';
            card.innerHTML = `
                <div class="show-card">
                    <img src="${show.image}" alt="${show.title}" loading="lazy">
                    <div class="card-body">
                        <div class="show-title" title="${show.title}">${show.title}</div>
                        <div class="show-meta">
                            <span>${show.genre.split('/')[0]}</span>
                            <span>${show.episodes} Ep</span>
                        </div>
                    </div>
                </div>
            `;
            showsGrid.appendChild(card);
        });
    }
}

// Event Listeners

// Search
searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.trim();
    renderShows();
});

// Genre Filters
genreButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove active class from all
        genreButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        currentGenre = e.target.dataset.filter;
        renderShows();
    });
});

// Alphabet Filters
alphabetLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Remove active style (optional, maybe add a class if we want)
        alphabetLinks.forEach(l => l.style.color = '');
        e.target.style.color = 'var(--text-primary)';
        
        currentAlpha = e.target.dataset.filter;
        renderShows();
    });
});

// Initial Render
renderShows();

