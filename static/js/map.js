document.addEventListener("DOMContentLoaded", () => {
    // Initialize the map and set the initial view
    const map = L.map('map').setView([51.505, -0.09], 3);  // Set the initial view to a broader zoom level to fit all markers

    // Set the tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Expanded stories with richer content
    const stories = [
        {
            title: "The Haunted Temple",
            content: "Deep in the mist-covered mountains of the Himalayas lies an ancient temple. For centuries, locals have whispered tales of strange occurrences — eerie voices echoing through the halls, flickering candle flames that seem to have a life of their own, and footsteps that echo even when no one is there. Many have ventured to explore its secrets, but few have returned. Some say the temple is guarded by spirits who protect an ancient treasure buried beneath its floors.",
            latitude: 25.276987,
            longitude: 55.296249
        },
        {
            title: "The Lost City",
            content: "Far beneath the scorching sun of the Sahara Desert, an ancient city has been buried for centuries. Legends speak of its grandeur—temples dedicated to forgotten gods, streets lined with gold, and treasures beyond imagination. Some say the city vanished overnight, swallowed by the sands as part of a mysterious curse. For years, explorers and archaeologists have tried to uncover its secrets, but only the bravest have ever ventured into the desert, hoping to stumble upon its ruins.",
            latitude: 24.4539,
            longitude: 54.3773
        },
        {
            title: "The Whispering Forest",
            content: "In the heart of an untamed forest lies a place where the trees are said to whisper ancient secrets. The Whispering Forest, as it's called, has intrigued adventurers and scholars for centuries. Legends say that those who listen closely can hear the voices of past wanderers, sharing their lost wisdom. The forest is a sanctuary for rare and endangered species, but it's also a place shrouded in mystery. Some claim the forest has the power to guide or mislead, depending on one's intentions.",
            latitude: 27.1751,
            longitude: 78.0421
        },
        {
            title: "The Golden River",
            content: "Flowing through the dense jungles of South America is a river unlike any other. Known as the Golden River, its waters are said to shimmer with a golden hue under the sunlight. According to legend, the river was once home to a lost civilization that was rumored to possess vast wealth in gold. While treasure hunters have searched for its source for years, no one has ever been able to trace the river to its origins. Some believe the river's golden glow is a reflection of the sun's power, while others think it's a mystical force meant to keep the river's secrets hidden forever.",
            latitude: 22.5726,
            longitude: 88.3639
        }
    ];

    // Loop through the stories array and add a marker for each story
    stories.forEach(story => {
        const marker = L.marker([story.latitude, story.longitude]).addTo(map)
            .bindPopup(`<b>${story.title}</b><br>${story.content}`);
    });
});

