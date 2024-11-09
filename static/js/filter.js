const searchInput = document.getElementById("search-bar");

searchInput.addEventListener("input", function() {
    const query = searchInput.value.toLowerCase();

    // Placeholder: Here you'd filter markers based on the search query
    // For example, filter markers by title, description, or theme
    console.log("Searching for:", query);

    // Display matching markers (example with hypothetical data)
    map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
            const markerContent = layer.getPopup().getContent().toLowerCase();
            if (markerContent.includes(query)) {
                layer.setOpacity(1);
            } else {
                layer.setOpacity(0);
            }
        }
    });
});
