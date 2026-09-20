const songs = {
  Pop: [
    { title: "Watermelon Sugar High", artist: "Harry Styles", image: "HarryStyles.jpg" },
    { title: "Blank Space", artist: "Taylor Swift", image: "BlankSpace.png" },
    { title: "Yes, And?", artist: "Ariana Grande", image: "yesand.png" },
    { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", image: "uptownfunk.jpg" },
  ],
  Rock: [
    { title: "Not like us", artist: "Kendrick Lamar", image: "Kendrick.jpg" },
    { title: "Thunderstruck", artist: "AC/DC", image: "ACDC.png" },
    { title: "Back in Black", artist: "AC/DC", image: "backinblack.jpg" },
    { title: "Seven Nation Army", artist: "The White Stripes", image: "sevennationarmy.jpg" },
  ],
  Rap: [
    { title: "Lose Yourself", artist: "Eminem", image: "loseyourself.jpg" },
    { title: "Alright", artist: "Kendrick Lamar", image: "Kendrick.jpg" },
    { title: "Runaway", artist: "Kanye West", image: "runaway.jpg" },
    { title: "Still D.R.E", rap: "Dr.Dre, Snoop Dogg", image: "dre.jpg" },
  ],
  Electronic: [
    { title: "Get Lucky", artist: "Daft Punk", image: "daft.png" },
    { title: "Levels", artist: "Avicii", image: "avicii.jpg" },
    { title: "Titanium", artist: "David Guetta ft. Sia", image: "dg.jpg" },
    { title: "Bulletproof", artist: "La Roux", image: "bp.jpg" },
  ],
  Country: [
    { title: "Achy Breaky Heart", artist: "Billy Ray Cyrus", image: "Billy Ray Cyrus.jpg" },
    { title: "Jolene", artist: "Dolly Parton", image: "dollyparton.jpg" },
    { title: "Wayfarying Stranger", artist: "Johnny Cash", image: "cash.jpg" },
    { title: "House Of The Rising Sun", artist: "The White Buffalo", image: "twb.jpg" },
  ],
};

const genreLinks = document.querySelectorAll(".dropdown-menu .dropdown-item");
const songsContainer = document.getElementById("songs-container");

genreLinks.forEach((genreLink) => {
  genreLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior (navigation)

    const selectedGenre = genreLink.dataset.genre;

    if (selectedGenre) {
      // Clear the songs container before displaying new results
      songsContainer.innerHTML = "";

      const genreSongs = songs[selectedGenre]; // Get songs for the selected genre

      if (genreSongs) {
        genreSongs.forEach((song) => {
          // Create a song element for each song (same logic as before)
          const songItem = document.createElement("div");
          songItem.classList.add("song-item", "square-image");

          // Add image element with src from song data

          const songImage = document.createElement("img");
          songImage.src = song.image; // Set image source from song.image property
          songImage.alt = song.title; // Set alt text for accessibility
          songItem.appendChild(songImage);

          // Create elements for song title and artist
          const songTitle = document.createElement("p");
          songTitle.textContent = song.title;
          songItem.appendChild(songTitle);
          songTitle.classList.add("song-title");

          const songArtist = document.createElement("span");
          songArtist.textContent = `by ${song.artist}`;
          songItem.appendChild(songArtist);
          songArtist.classList.add("song-artist");

          songsContainer.appendChild(songItem);
        });
      } else {
        // Display a message if no songs are found for the genre
        songsContainer.innerHTML = `<p>No songs found for ${selectedGenre} genre.</p>`;
      }
    }
  });
});
const songList = document.querySelectorAll('.song-item img');
const audioPlayer = document.getElementById('audio-player');
////////////////////////////////////////
songList.forEach(image => {
  image.addEventListener('click', (event) => {
    const songSource = event.target.dataset.song;
    audioPlayer.src = songSource;
    audioPlayer.load(); 
    audioPlayer.play(); 
  });
});
