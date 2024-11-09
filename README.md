

# Tale Trail 🌍📖

**Tale Trail** is a web application that allows users to explore and discover captivating stories connected to specific locations around the world. The app highlights legendary tales, mysteries, and myths, offering users a journey into the heart of folklore from various cultures.

### Features ✨:
- **Interactive Map**: An engaging map powered by Leaflet.js to explore different stories at specific locations 🌍.
- **Story Markers**: Each marker on the map represents a unique story with rich content related to a particular location 📍.
- **Responsive Design**: Optimized for both desktop and mobile viewing 📱💻.
- **Searchable Stories**: Users can search for specific stories and view them on the map 🔍.

### Examples of Featured Stories 📜:
1. **The Haunted Temple**: Deep in the Himalayas lies a temple that is said to be haunted by spirits protecting an ancient treasure 🏯👻.
2. **The Lost City**: A forgotten city beneath the sands of the Sahara, rumored to be filled with untold treasures 🏜️💎.
3. **The Whispering Forest**: A mystical forest where the trees are said to whisper ancient secrets to those who dare listen 🌳🌬️.
4. **The Golden River**: A river in South America where a lost civilization is believed to have hidden treasures of gold 🏞️💰.

## Technologies Used 💻:
- **Frontend**:
  - HTML, CSS, JavaScript
  - **Leaflet.js** for interactive maps 🗺️
- **Backend**:
  - **Django** for managing the server-side logic and database 🐍
  - **Firebase** (optional) for authentication or data storage 🔥
- **Database**:
  - SQLite (local development database) 🗃️
- **Version Control**:
  - **Git** for tracking changes and collaboration 🛠️
  - **GitHub** for hosting the repository 🚀

## Installation 🛠️

### Prerequisites:
- Python 3.x 🐍
- Django (for backend development) ⚙️
- Firebase account (optional) 🔑

### Steps to Run the Application Locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Kritika75/Tale_Trail.git
   cd Tale_Trail

2. Set up a Python virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use venv\Scripts\activate

3. Install Python dependencies:
   ```bash
   pip install -r requirements.txt

4. Set up environment variables:

Create a .env file in the root of the project with your Firebase and Auth0 credentials (if you’re using them).

Example .env file:

    ```makefile
    SECRET_KEY=your-django-secret-key
    AUTH0_CLIENT_ID=your-auth0-client-id
    AUTH0_CLIENT_SECRET=your-auth0-client-secret

5. Apply database migrations:

   ```bash
   python manage.py migrate

6. Run the development server:

   ```bash
   python manage.py runserver

## Hackathon Submission 🎉
This project is part of a Hack This Fall hackathon submission. The objective of this hackathon is to create an interactive, map-based storytelling platform that connects real-world locations to captivating legends and folklore from around the globe.

Feel free to explore the application and contribute your stories, feedback, or features!

![images](https://github.com/user-attachments/assets/3faa92d2-eb45-41e0-ac02-cd29c06ff326)

## Contributing 🤝

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository 🍴
2. Create a new branch (git checkout -b feature-name)
3. Commit your changes (git commit -am 'Add new feature')
4. Push to the branch (git push origin feature-name)
5. Create a new Pull Request 🔄

## License 📜

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements 🙏

1. Leaflet.js for providing the interactive map functionality.
2. Firebase for optional authentication and real-time database.
3. Django for the powerful backend framework.
4. Auth0 for managing authentication.
5. OpenStreetMap for providing the map tiles.






>>>>>>> f0ebb6acec0883884a19b8e78175fe4976b4e18c
