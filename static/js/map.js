document.addEventListener("DOMContentLoaded", () => {
    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Sample marker for demonstration
    const sampleMarker = L.marker([51.5, -0.09]).addTo(map);
    sampleMarker.bindPopup("<b>Sample Story</b><br>Click to read more.").openPopup();
});
