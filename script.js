async function getIndieTrack() {
  try {
    // 1. Fetch a random obscure release (e.g. with tag)
    const mbRes = await fetch(
      "https://musicbrainz.org/ws/2/recording/?query=tag:indie&fmt=json&limit=10"
    );
    const mbData = await mbRes.json();
    const recordings = mbData.recordings;

    const random = recordings[Math.floor(Math.random() * recordings.length)];
    const title = random.title;
    const artist = random["artist-credit"][0].name;
    const releaseId = random.releases?.[0]?.id;

    document.getElementById("title").innerText = title;
    document.getElementById("artist").innerText = artist;

    // 2. Get album art from Cover Art Archive
    if (releaseId) {
      const coverUrl = `https://coverartarchive.org/release/${releaseId}/front`;
      document.getElementById("cover").src = coverUrl;
    } else {
      document.getElementById("cover").src = "";
    }

    // 3. Search Deezer for preview
    const deezerSearchRes = await fetch(
      `https://corsproxy.io/?https://api.deezer.com/search?q=${encodeURIComponent(
        title + " " + artist
      )}`
    );
    const deezerData = await deezerSearchRes.json();
    const previewTrack = deezerData.data?.[0];

    if (previewTrack?.preview) {
      document.getElementById("player").src = previewTrack.preview;
    } else {
      document.getElementById("player").src = "";
      console.log("No preview available on Deezer for this track.");
    }
  } catch (err) {
    console.error("Error getting indie track:", err);
    document.getElementById("title").innerText = "Error loading song";
    document.getElementById("artist").innerText = "";
    document.getElementById("cover").src = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("indieButton");
  btn.addEventListener("click", getIndieTrack);
});
