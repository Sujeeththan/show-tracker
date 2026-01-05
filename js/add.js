const addForm = document.getElementById('addShowForm');

addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('showTitle').value;
    const image = document.getElementById('showImage').value;
    const genre = document.getElementById('showGenre').value;
    const episodes = document.getElementById('showEpisodes').value;
    const desc = document.getElementById('showDesc').value;

    const shows = JSON.parse(localStorage.getItem('shows')) || [];
    
    // Create new ID
    const newId = shows.length > 0 ? Math.max(...shows.map(s => s.id)) + 1 : 1;

    const newShow = {
        id: newId,
        title: title,
        image: image,
        episodes: episodes,
        genre: genre,
        description: desc,
        airTime: "TBA",
        nextEpisode: "TBA"
    };

    shows.unshift(newShow); // Add to beginning
    localStorage.setItem('shows', JSON.stringify(shows));

    alert('Show added successfully!');
    window.location.href = './index.html';
});
