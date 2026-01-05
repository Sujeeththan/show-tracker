const container = document.getElementById('details-container');

// Get ID from URL
const urlParams = new URLSearchParams(window.location.search);
const showId = parseInt(urlParams.get('id'));

const shows = JSON.parse(localStorage.getItem('shows')) || [];
const show = shows.find(s => s.id === showId);

if (show) {
    container.innerHTML = `
        <div class="detail-hero">
            <img src="${show.image}" alt="${show.title}" class="detail-poster">
            <div class="detail-info">
                <h1 class="detail-title">${show.title} <i class="bi bi-suit-heart-fill text-danger" style="font-size:1.5rem; cursor:pointer;"></i></h1>
                
                <div class="detail-meta">
                    <span class="meta-item"><i class="bi bi-calendar"></i> ${show.airTime}</span>
                    <span class="meta-item"><i class="bi bi-film"></i> ${show.genre}</span>
                    <span class="meta-item"><i class="bi bi-play-circle"></i> ${show.episodes} Episodes</span>
                </div>

                <p class="detail-desc">${show.description}</p>
                
                <div class="alert alert-info bg-dark text-info border-info">
                    <i class="bi bi-info-circle me-2"></i> ${show.nextEpisode}
                </div>
            </div>
        </div>

        <div class="episode-list">
            <div class="card bg-dark border-secondary">
                <div class="card-header border-secondary text-white">
                    <i class="bi bi-collection-play me-2"></i> RECENT EPISODES
                </div>
                <div class="card-body p-0">
                    <div class="episode-item bg-transparent border-0 border-bottom border-secondary mb-0 rounded-0">
                        <h5 class="text-white mb-1">Season Finale</h5>
                        <small class="text-muted">Aired recently</small>
                        <p class="text-secondary mt-2 mb-0">The dramatic conclusion to the arc.</p>
                    </div>
                     <div class="episode-item bg-transparent border-0 mb-0 rounded-0">
                        <h5 class="text-white mb-1">Behind the Scenes</h5>
                        <small class="text-muted">Special Feature</small>
                        <p class="text-secondary mt-2 mb-0">A look at how the show was made.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
} else {
    container.innerHTML = `
        <div class="text-center mt-5">
            <h3>Show not found</h3>
            <a href="./index.html" class="btn btn-primary mt-3">Back to Home</a>
        </div>
    `;
}
