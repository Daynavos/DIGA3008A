async function getRandomTrack() {
  try {
    const res = await fetch(
      "https://corsproxy.io/?https://api.deezer.com/chart"
    );
    const data = await res.json();

    const tracks = data.tracks.data;
    const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];

    // Set info on the page
    document.getElementById("title").innerText = randomTrack.title;
    document.getElementById("artist").innerText = randomTrack.artist.name;
    document.getElementById("player").src = randomTrack.preview;
  } catch (error) {
    console.error("Error fetching track:", error);
    document.getElementById("title").innerText = "Error loading song";
    document.getElementById("artist").innerText = "";
  }
}

// Initial load
getRandomTrack();
