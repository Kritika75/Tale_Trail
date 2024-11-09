    // Sample stories for demonstration (this would normally come from the backend)
    const stories = [
      {
          id: 1,
          title: "The Haunted Bridge",
          description: "A chilling tale of strange sightings on foggy nights.",
          lat: 51.5,
          lng: -0.09,
          comments: [
              "I’ve heard this one before – creepy!",
              "My grandma swears she saw a ghost there."
          ]
      },
      {
          id: 2,
          title: "Mysterious Lights",
          description: "Witnesses have reported eerie lights appearing over the hills.",
          lat: 51.51,
          lng: -0.1,
          comments: [
              "Saw it once. It was mesmerizing.",
              "Maybe it’s aliens?"
          ]
      }
  ];
  
  // Function to add markers with popups for each story
  stories.forEach(story => {
      const marker = L.marker([story.lat, story.lng]).addTo(map);
      const popupContent = `
          <div class="popup">
              <h3>${story.title}</h3>
              <p>${story.description}</p>
              <button onclick="showComments(${story.id})">Comments</button>
          </div>
      `;
      marker.bindPopup(popupContent);
  });
  
  // Function to display comments in an alert or modal
  function showComments(storyId) {
      const story = stories.find(s => s.id === storyId);
      const comments = story ? story.comments.join("\n") : "No comments yet!";
      alert("Comments:\n" + comments);
  }