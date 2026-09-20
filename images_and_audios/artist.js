const artistLinks = document.querySelectorAll('.album-grid .album a');

artistLinks.forEach(artistLink => {
  artistLink.addEventListener('click', (event) => {
    event.preventDefault();

    const artistName = artistLink.textContent.trim(); // Extract artist name from link text
    const artistPageURL = `artistPage.html?id=${artistName}`; // Update URL with query parameter

    window.location.href = artistPageURL;
  });
});


  // Replace with your actual artist data source (API or local storage)
const artistData = {
    // Key: Artist ID (lowercase)
    // Value: Artist data object (similar to Kendrick Lamar example)
    kendrick: {
    name: "Kendrick Lamar",
    image: "KenDamn.jpg", // Replace with the actual image path
    discography: [
      { title: "Mr. Morale & the Big Steppers", image: "KendrickBigSteppers.jpg" },
      { title: "good kid, m.A.A.d city", image: "KenGoodKid.jpg" },
      { title: "favorite kendrick songs", creator: "FanOfKendrick", image: "KendrickButterfly.jpg" },
      { title: "Kendrick Forever", creator: "kendrickLamarLover", image: "KenDamn.jpg" },
      
    ],
    playlists: [
      { title: "Kendrick Lovers <3", creator: "kendrickfan", image: "KendrickBigSteppers.jpg" },
      { title: "kendrick best songs", creator: "Brsy", image: "KenGoodKid.jpg" },
      { title: "favorite kendrick songs", creator: "FanOfKendrick", image: "KendrickButterfly.jpg" },
      { title: "Kendrick Forever", creator: "kendrickLamarLover", image: "KenDamn.jpg" },
    ],
    bio: "Kendrick Lamar, a Compton-born rapper revered for his lyrical prowess, paints vivid portraits of life in his music. He isn't afraid to tackle complex social issues and weave them into his narratives, earning him critical acclaim and the prestigious Pulitzer Prize. Whether exploring personal struggles or systemic challenges, Lamar's powerful voice commands attention."
    ,footerCopyright:"2024 Kendrick"
    },
    // ... add data for other artists following the same structure
    taylor: {
      name: "Taylor Swift",
      image: "Taylor Swift.png", // Replace with the actual image path
  
      discography: [
        { title: "fearless", image: "taylor swift fearless.jpg" },
        { title: "migdnights", image: "taylor swift midnights.jpg" },
        { title: "reputation", image: "Taylor Swift reputation.jpg "},
        { title: "1989", image: "taylor swift 1989.jpg" },
        // ... add more albums
      ],
      playlists: [
        { title: "Taylor Lovers", creator: "TaylorLover", image: "taylor swift midnights.jpg" },
        { title: "Fav Taylor <3", creator: "Molly", image: "taylor swift fearless.jpg" },
        { title: "cute Taylor", creator: "FanOfTaylor", image: "Taylor Swift reputation.jpg " },
        { title: "Kendrick Forever", creator: "TaylorFan", image: "taylor swift 1989.jpg" },
      ],
      bio: "Kendrick Lamar, a Compton-born rapper revered for his lyrical prowess, paints vivid portraits of life in his music. He isn't afraid to tackle complex social issues and weave them into his narratives, earning him critical acclaim and the prestigious Pulitzer Prize. Whether exploring personal struggles or systemic challenges, Lamar's powerful voice commands attention."
    
  }  ,
  amrdiab: {
      name: "Amr Diab",
      image: "amr diab 10.jpg", // Replace with the actual image path
  
      discography: [
        { title: "El Leila", image: "amr diab el leila.jpg" },
        { title: "El Lelady", image: "amr diab el lelady.jpg" },
        { title: "Maady El Nas", image: "amr diab me3dy el nas.jpg "},
        { title: "Y Ana Ya Laa", image: "amr diab ya ana ya la2.jpg" },
        // ... add more albums
      ],
      playlists: [
        { title: "Amora Lovers", creator: "maria", image: "amr diab el leila.jpg" },
        { title: "Amr Diab Lovers", creator: "ranna", image: "amr diab el lelady.jpg" },
        { title: "Best Of Amr Diab", creator: "bigfan", image: "amr diab me3dy el nas.jpg" },
        { title: "Fan Of Amora", creator: "amroura", image: "amr diab ya ana ya la2.jpg" },
      ],
      bio: "Amr Diab is an icon of Egyptian and Arabic music, inspiring generations with his captivating voice and innovative style."
  }  ,
  cairokee: {
      name: "Cairokee",
      image: "cairokee2.jpg", // Replace with the actual image path
  
      discography: [
        { title: "the ugly duckling", image: "cairokee abna2 el bata el sawda2.jpg" },
        { title: "noata beida", image: "cairokee no2ta beida.jpg" },
        { title: "nas w nas", image: "cairokee nas w nas.jpg" },
        { title: "roma", image: "cairokee roma.jpg" },
        // ... add more albums
      ],
      playlists: [
        { title: "Empire Fan", creator: "amireidfan", image: "cairokee nas w nas.jpg" },
        { title: "Cairokee Lovers", creator: "malouka", image: "cairokee roma.jpg" },
        { title: "Amir Eid Lover", creator: "mohamed salah", image: "cairokee abna2 el bata el sawda2.jpg" },
        { title: "Best Cairokee Empire", creator: "carride", image: "cairokee no2ta beida.jpg" },
      ],
      bio: "Cairokee isn't just about protest songs. Their music is a rich tapestry of rock, infused with Egyptian influences.  They continue to evolve, but their core message remains - a band singing for and alongside Cairo, capturing the city's heartbeat."
    
  }  
  };
  

// Check for artist ID in URL (replace with your logic)
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const artistId = urlParams.get('id');

if (artistId) {
  // Check if artist data exists for the ID
  const artistInfo = artistData[artistId.toLowerCase()]; // Ensure lowercase match

  if (artistInfo) {
    document.querySelector('.artist-heading').textContent = artistInfo.name;
    document.querySelector('#artistImage').src = artistInfo.image;
    document.querySelector('#artistBio').textContent = artistInfo.bio;

    // Populate playlists
    const playlistList = document.querySelector('.playlistlist');
    playlistList.innerHTML = '';
    artistInfo.playlists.forEach(playlist => {
      const playlistItem = document.createElement('li');
      playlistItem.classList.add('song-item');

      // ... (your existing HTML for playlist items)
      playlistItem.innerHTML = `
        <div class="playlist-item">
          <img src="${playlist.image}" alt="Playlist Image">
          <div class="song-info">
            <p>${playlist.title}</p>
            <span> created by ${playlist.creator}</span>
          </div>
        </div>
      `;

      // ... (your event listeners for playlists)

      playlistList.appendChild(playlistItem);
    });

    // Populate discography
    const discographyGrid = document.querySelector('.album-grid');
    discographyGrid.innerHTML = '';
    artistInfo.discography.forEach(album => {
      const albumItem = document.createElement('div');
      albumItem.classList.add('album');

      // ... (your existing HTML for albums)
      albumItem.innerHTML = `
        <img src="${album.image}" alt="Album Image">
        <p class="album-title">${album.title}</p>
        <a href="#">Play Album</a>
      `;

      // ... (your event listeners for albums)

      discographyGrid.appendChild(albumItem);
    });
  } else {
    console.log(`Artist with ID "${artistId}" not found.`);
  }
}