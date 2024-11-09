import { db } from './firebaseConfig.js';  // Import Firestore
import { getDocs, collection } from 'firebase/firestore';  // Firestore methods
import L from 'leaflet';  // Ensure Leaflet is imported

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Leaflet map
    const map = L.map('map').setView([25.276987, 55.296249], 5); // Default center (Dubai)

    // Add OpenStreetMap tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Load stories from Firestore and add them to the map
    loadStoriesOnMap(map);
});

// Function to load stories and add them as markers on the map
async function loadStoriesOnMap(map) {
    try {
        // Get stories from Firestore
        const querySnapshot = await getDocs(collection(db, "stories"));

        querySnapshot.forEach((doc) => {
            const story = doc.data();
            const { title, content, latitude, longitude } = story;

            // Add a marker for each story
            const marker = L.marker([latitude, longitude]).addTo(map)
                .bindPopup(`<b>${title}</b><p>${content}</p>`);
        });
    } catch (error) {
        console.error("Error fetching stories:", error);
    }
}
