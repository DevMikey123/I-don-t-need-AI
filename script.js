document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('search-box').value;
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&udm=14`;
});

document.getElementById('google-search').addEventListener('click', function() {
    const query = document.getElementById('search-box').value;
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&udm=14`;
});

document.getElementById('feeling-lucky').addEventListener('click', function() {
    const query = document.getElementById('search-box').value;
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=I&udm=14`;
});

document.getElementById('image-search').addEventListener('click', function() {
    const query = document.getElementById('search-box').value;
    window.location.href = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const toggleIcon = document.getElementById('dark-mode-icon');
    if (document.body.classList.contains('dark-mode')) {
        toggleIcon.textContent = "brightness_7"; // Sun icon for light mode
    } else {
        toggleIcon.textContent = "brightness_4"; // Moon icon for dark mode
    }
}

function toggleApps() {
    const appsMenu = document.getElementById('apps-menu');
    appsMenu.style.display = appsMenu.style.display === 'block' ? 'none' : 'block';
}

// Speech to Text functionality (if available)
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.onresult = (event) => {
    document.getElementById('search-box').value = event.results[0][0].transcript;
};

document.getElementById('voice-search').addEventListener('click', function() {
    recognition.start();
});
