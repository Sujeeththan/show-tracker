/**
 * Show Tracker - Shared Logic
 */

// Default Data for initial load
const defaultShows = [
    {
        id: 1,
        title: "Game of Thrones",
        image: "./assets/images/Game of Thrones.jpg",
        episodes: 84,
        genre: "Action",
        description: "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north.",
        airTime: "Sunday 9:00 PM on HBO",
        nextEpisode: "The next episode starts 2 months."
    },
    {
        id: 2,
        title: "Breaking Bad",
        image: "./assets/images/breaking bad.jpg",
        episodes: 62,
        genre: "Crime",
        description: "A high school chemistry teacher turned methamphetamine manufacturer teams up with a former student.",
        airTime: "Completed",
        nextEpisode: "Series Completed"
    },
    {
        id: 3,
        title: "Dexter",
        image: "./assets/images/Dexter.jpg",
        episodes: 96,
        genre: "Crime",
        description: "He's smart, he's good looking, and he's got a great sense of humor. He's Dexter Morgan, everyone's favorite serial killer.",
        airTime: "Completed",
        nextEpisode: "Series Completed"
    },
    {
        id: 4,
        title: "How I Met Your Mother",
        image: "./assets/images/how i met your mother.jpg",
        episodes: 208,
        genre: "Comedy",
        description: "A father recounts to his children - through a series of flashbacks - the journey he and his four best friends took leading up to him meeting their mother.",
        airTime: "Completed",
        nextEpisode: "Series Completed"
    },
    {
        id: 5,
        title: "Varisu",
        image: "./assets/images/Varisu.jpg",
        episodes: 1,
        genre: "Action",
        description: "Vijay Rajendran, a happy-go-lucky man, finds his life changing after his foster father dies.",
        airTime: "Movie",
        nextEpisode: "N/A"
    },
    {
        id: 6,
        title: "Game Changer",
        image: "./assets/images/game changer.jpg",
        episodes: 1,
        genre: "Thriller",
        description: "An honest IAS officer battles a corrupt political system to bring about fair elections.",
        airTime: "Coming Soon",
        nextEpisode: "TBA"
    },
    {
        id: 7,
        title: "KGF",
        image: "./assets/images/kgf.jpg",
        episodes: 2,
        genre: "Action",
        description: "Rocky, a young man, seeks power and wealth in order to fulfil a promise to his dying mother.",
        airTime: "Movie",
        nextEpisode: "N/A"
    },
    {
        id: 8,
        title: "Dragon",
        image: "./assets/images/Dragon.jpg",
        episodes: 1,
        genre: "Drama",
        description: "A student's life takes a turn when he falls in love.",
        airTime: "Movie",
        nextEpisode: "N/A"
    },
    {
        id: 9,
        title: "Retro",
        image: "./assets/images/retro.webp",
        episodes: 1,
        genre: "Thriller",
        description: "A retro-themed thriller.",
        airTime: "Coming Soon",
        nextEpisode: "TBA"
    },
    {
        id: 10,
        title: "Sita Ramam",
        image: "./assets/images/sita ramam.jpg",
        episodes: 1,
        genre: "Romance",
        description: "An orphan soldier, Lieutenant Ram, creates a bond with Sita Mahalakshmi after receiving a letter from her.",
        airTime: "Movie",
        nextEpisode: "N/A"
    },
    {
        id: 11,
        title: "The Family Star",
        image: "./assets/images/the family star.jpg",
        episodes: 1,
        genre: "Family",
        description: "The highs and lows of family life in a middle-class Indian household.",
        airTime: "Movie",
        nextEpisode: "N/A"
    },
    {
        id: 12,
        title: "Titanic",
        image: "./assets/images/titanic.webp",
        episodes: 1,
        genre: "Romance",
        description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        airTime: "Movie",
        nextEpisode: "N/A"
    }
];

// Initialize Data
function initApp() {
    if (!localStorage.getItem('shows')) {
        localStorage.setItem('shows', JSON.stringify(defaultShows));
        console.log('Default shows initialized.');
    }
    
    updateAuthUI();
}

// Auth State Management
function getCurrentUser() {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = './index.html';
}

function updateAuthUI() {
    const user = getCurrentUser();
    const loginLink = document.getElementById('log-in');
    const signupLink = document.getElementById('sign-up');
    const navContainer = document.querySelector('.navbar-collapse div:last-child'); // The div containing login/signup

    if (user && navContainer) {
        // Clear existing buttons
        navContainer.innerHTML = '';
        
        const welcomeMsg = document.createElement('span');
        welcomeMsg.className = 'nav-link text-white me-3';
        welcomeMsg.textContent = `Hi, ${user.name}`;
        
        const logoutBtn = document.createElement('a');
        logoutBtn.href = '#';
        logoutBtn.className = 'btn btn-outline-danger btn-sm';
        logoutBtn.textContent = 'Logout';
        logoutBtn.onclick = (e) => {
            e.preventDefault();
            logout();
        };

        navContainer.appendChild(welcomeMsg);
        navContainer.appendChild(logoutBtn);
    }
}

// Run init on load
document.addEventListener('DOMContentLoaded', initApp);
