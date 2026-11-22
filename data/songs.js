// All tracks are by HoliznaCC0 on Free Music Archive, released under CC0 1.0
// (public domain), so no attribution is required.
const TRACKS_URL =
  "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks";
const COVERS_URL = "https://freemusicarchive.org/image/";

const LOFI_CHRISTMAS_COVER = `${COVERS_URL}?file=album_image%2FdqeE5Wy0pQhhjlxpNyyFRCOtQli50jt3pb1ET6kX.jpg&width=290&height=290&type=album`;
const WINTER_LOFI_COVER = `${COVERS_URL}?file=album_image%2F8fbwBtv07nezpm8y3hvW1RhligQSCsNyzKZePS7l.png&width=290&height=290&type=album`;

export default [
  {
    id: 1,
    title: "Silent Night (Lo-Fi)",
    url: `${TRACKS_URL}/9Yh88Nag95UZbOYDbq9iicFjK8OjPLqXfRMaDNGX.mp3`,
    previewImage: LOFI_CHRISTMAS_COVER,
  },
  {
    id: 2,
    title: "First Snow",
    url: `${TRACKS_URL}/aNMGi5zWqUxP0qP9De7WJSEV43p0mkZiFrJGuljD.mp3`,
    previewImage: WINTER_LOFI_COVER,
  },
  {
    id: 3,
    title: "Oh Holy Night (Lo-Fi)",
    url: `${TRACKS_URL}/3lD7yhbHYuYMoraKq7etTlkeCNJzl17OT1nVbLAG.mp3`,
    previewImage: LOFI_CHRISTMAS_COVER,
  },
  {
    id: 4,
    title: "Fire Place",
    url: `${TRACKS_URL}/qUQGTyL3bMTaIVqsuZ3dUS2u2ep2ZmVr86sWwZ0j.mp3`,
    previewImage: WINTER_LOFI_COVER,
  },
  {
    id: 5,
    title: "Auld Lang Syne (Lo-Fi)",
    url: `${TRACKS_URL}/ZuNhP7gYa1ipbopoB7e7JZu7nRO8mUgbKDNpAmti.mp3`,
    previewImage: LOFI_CHRISTMAS_COVER,
  },
];
