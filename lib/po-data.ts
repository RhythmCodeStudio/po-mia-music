// import { randomUUID } from "node:crypto"
import { IconBase } from "react-icons";
import { SiApplemusic } from "react-icons/si";
import { SiSpotify } from "react-icons/si";
import { SiYoutube } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiAmazonmusic } from "react-icons/si";
import { SiBandcamp } from "react-icons/si";
import { SiCashapp } from "react-icons/si";
import { SiVenmo } from "react-icons/si";
// import { BiLogoVenmo } from "react-icons/bi";

export const poBio = `“po mia” is an eclectic, up-and-coming singer/songwriter based in St. Louis, MO. They are best known for their versatility of musical styles, colourful stylistic expression, as well as their ability to 
engage a crowd through their lyricism and captivating performances. Coming from a music therapy educational background, po mia's musical works often tackle themes of identity, love, fear, and navigating real life experiences.
`;

export const paymentLinks = [
  {
    name: "Cashapp",
    label: "Cashapp",
    url: "https://cash.app/$skatingsongbird",
    icon: SiCashapp,
  },
  {
    name: "Venmo",
    label: "Venmo",
    url: "https://account.venmo.com/u/skatingsongbird",
    icon: SiVenmo,
  },
];

export const releases = [
  {
    id: "hope-is-plenty",
    title: "hope is plenty",
    type: "single",
    coverImgSrc: "/images/release-cover-images/hope-is-plenty-cover.webp",
    releaseDate: "July 31, 2024",
    description:
      "uplifting single in collaboration with producer e-GoS and rapper AVOID",
    links: [
      {
        name: "Amazon Music",
        label: "Listen to 'hope is plenty' on Amazon Music",
        url: "https://www.amazon.com/music/player/albums/B0D8NH2B7B",
        icon: SiAmazonmusic,
      },
      {
        name: "Apple Music",
        label: "Listen to 'hope is plenty' on Apple Music",
        url: "https://music.apple.com/us/album/hope-is-plenty-single/1758370619",
        icon: SiApplemusic,
      },
      {
        name: "Bandcamp",
        label: "Listen to 'hope is plenty' on Bandcamp",
        url: "https://pomia.bandcamp.com/track/hope-is-plenty",
        icon: SiBandcamp,
      },
      {
        name: "Spotify",
        label: "Listen to 'hope is plenty' on Spotify",
        url: "https://open.spotify.com/album/1lpZTVvvQ5RgL7Vn7ixcL8",
        icon: SiSpotify,
      },
      {
        name: "YouTube",
        label: "Listen to 'hope is plenty' on YouTube",
        url: "https://youtu.be/B1yublwYhzc?si=i-yFH3iOKKFvU0Eg",
        icon: SiYoutube,
      },
      {
        name: "YouTube Music",
        label: "Listen to 'hope is plenty' on YouTube Music",
        url: "https://music.youtube.com/watch?v=B1yublwYhzc&si=IheLG159H1mfg49l",
        icon: SiYoutubemusic,
      },
    ],
    tracks: [
      {
        title: "hope is plenty",
        by: "po mia, e-GoS, AVOID",
        length: "3:01",
        number: 1,
        bandcampUrl: "https://pomia.bandcamp.com/track/hope-is-plenty",
      },
    ],
  },
  {
    id: "rebirth",
    title: "REBIRTH",
    coverImgSrc: "/images/release-cover-images/rebirth-cover.webp",
    releaseDate: "June 9, 2023",
    type: "ep",
    description:
      "this EP contains regenerative themes surrounding moving forward, cherishing loved ones, and learning to find enjoyment in the little things.",
    links: [
      {
        name: "Amazon Music",
        label: "Listen to 'REBIRTH' on Amazon Music",
        url: "https://www.amazon.com/music/player/albums/B0C5G76FT2",
        icon: SiAmazonmusic,
      },
      {
        name: "Apple Music",
        label: "Listen to 'REBIRTH' on Apple Music",
        url: "https://music.apple.com/us/album/rebirth-single/1688287207",
        icon: SiApplemusic,
      },
      {
        name: "Bandcamp",
        label: "Listen to 'REBIRTH' on Bandcamp",
        url: "https://pomia.bandcamp.com/album/rebirth",
        icon: SiBandcamp,
      },
      {
        name: "Spotify",
        label: "Listen to 'REBIRTH' on Spotify",
        url: "https://open.spotify.com/album/3QeQh5IfEDY70c3BgEMQyK",
        icon: SiSpotify,
      },
      {
        name: "YouTube",
        label: "Listen to 'REBIRTH' on YouTube",
        url: "https://www.youtube.com/watch?v=QY4K0pTxoeA&list=OLAK5uy_lz6foRD4JNHLYvBExrIGz0DWE52KPsPwc",
        icon: SiYoutube,
      },
      {
        name: "YouTube Music",
        label: "Listen to 'REBIRTH' on YouTube Music",
        url: "https://music.youtube.com/playlist?list=OLAK5uy_ncwLdHR6Sa3yBIwUbdAnT4EZLPk886RDs",
        icon: SiYoutubemusic,
      },
    ],
    tracks: [
      {
        title: "exposé",
        by: "po mia",
        length: "3:42",
        number: 1,
        bandcampUrl: "https://pomia.bandcamp.com/track/expos",
      },
      {
        title: "no longer neighbors",
        by: "po mia",
        length: "3:21",
        number: 2,
        bandcampUrl: "https://pomia.bandcamp.com/track/no-longer-neighbors",
      },
      {
        title: "season the day",
        by: "po mia",
        length: "4:36",
        number: 3,
        bandcampUrl: "https://pomia.bandcamp.com/track/season-the-day",
      },
    ],
  },
  {
    id: "golden-tongue",
    title: "golden tongue",
    coverImgSrc: "/images/release-cover-images/golden-tongue-cover.webp",
    releaseDate: "November 12, 2022",
    type: "single",
    description:
      "a remotely satirical, statement piece that explores and implores ideas of self determination, empowerment, as well as encouraging validation to stand up, speak out, and be heard.",
    links: [
      {
        name: "Amazon Music",
        label: "Listen to 'golden tongue' on Amazon Music",
        url: "https://www.amazon.com/music/player/albums/B0BJJL17MW",
        icon: SiAmazonmusic,
      },
      {
        name: "Apple Music",
        label: "Listen to 'golden tongue' on Apple Music",
        url: "https://music.apple.com/us/album/golden-tongue-single/1650322813",
        icon: SiApplemusic,
      },
      {
        name: "Bandcamp",
        label: "Listen to 'golden tongue' on Bandcamp",
        url: "https://pomia.bandcamp.com/track/golden-tongue",
        icon: SiBandcamp,
      },
      {
        name: "Spotify",
        label: "Listen to 'golden tongue' on Spotify",
        url: "https://open.spotify.com/album/3hnlpq3Rc5cCTZHoDeri2X",
        icon: SiSpotify,
      },
      {
        name: "YouTube",
        label: "Listen to 'golden tongue' on YouTube",
        url: "https://www.youtube.com/watch?v=SRPic8-Si94&list=OLAK5uy_no2j_eaD2WQq_5o8rM-TJfvIWZae7164k",
        icon: SiYoutube,
      },
      {
        name: "YouTube Music",
        label: "Listen to 'golden tongue' on YouTube Music",
        url: "https://music.youtube.com/playlist?list=OLAK5uy_nx8OqTWX_plCYNDpUqDP0HwaBo6S9ZzUg",
        icon: SiYoutubemusic,
      },
    ],
    tracks: [
      {
        title: "golden tongue",
        by: "po mia",
        length: "3:46",
        number: 1,
        bandcampUrl: "https://pomia.bandcamp.com/track/golden-tongue",
      },
    ],
  },
  {
    id: "po-logue",
    title: "po logue",
    coverImgSrc: "/images/release-cover-images/po-logue-cover.webp",
    releaseDate: "February 22, 2022",
    type: "album",
    description:
      "a vulnerable, expressive, 5-song collection. this debut album covers topics that range from maintaining youthfulness to trouble in paradise, often simultaneously speaking out about more sensitive and stigmatized subjects.",
    links: [
      {
        name: "Amazon Music",
        label: "Listen to 'po logue' on Amazon Music",
        url: "https://www.amazon.com/music/player/albums/B09SVXBRGZ",
        icon: SiAmazonmusic,
      },
      {
        name: "Apple Music",
        label: "Listen to 'po logue' on Apple Music",
        url: "https://music.apple.com/us/album/po-logue-ep/1610821422",
        icon: SiApplemusic,
      },
      {
        name: "Bandcamp",
        label: "Listen to 'po logue' on Bandcamp",
        url: "https://pomia.bandcamp.com/album/po-logue",
        icon: SiBandcamp,
      },
      {
        name: "Spotify",
        label: "Listen to 'po logue' on Spotify",
        url: "https://open.spotify.com/album/6dn0pBQ85089ddx7zZ8VH1",
        icon: SiSpotify,
      },
      {
        name: "YouTube",
        label: "Listen to 'po logue' on YouTube",
        url: "https://www.youtube.com/watch?v=m30aFtK8zmk&list=OLAK5uy_n2PALtNQnow8MJ8s7i-1XB3elHy7ndYzo",
        icon: SiYoutube,
      },
      {
        name: "YouTube Music",
        label: "Listen to 'po logue' on YouTube Music",
        url: "https://music.youtube.com/playlist?list=OLAK5uy_k-XKMENOXvSjkKMwHaArMJ0WGLJ1wSBmA",
        icon: SiYoutubemusic,
      },
    ],
    tracks: [
      {
        title: "mouldy peachez",
        by: "po mia",
        length: "1:40",
        number: 1,
        bandcampUrl: "https://pomia.bandcamp.com/track/mouldy-peachez",
      },
      {
        title: "(510) BST-RDMN",
        by: "po mia",
        length: "5:10",
        number: 2,
        bandcampUrl: "https://pomia.bandcamp.com/track/510-bst-rdmn",
      },
      {
        title: "crazii",
        by: "po mia",
        length: "3:15",
        number: 3,
        bandcampUrl: "https://pomia.bandcamp.com/track/crazii",
      },
      {
        title: "cyberchondria",
        by: "po mia",
        length: "4:32",
        number: 4,
        bandcampUrl: "https://pomia.bandcamp.com/track/cyberchondria",
      },
      {
        title: "Ux4",
        by: "po mia",
        length: "4:55",
        number: 5,
        bandcampUrl: "https://pomia.bandcamp.com/track/ux4",
      },
    ],
  },
];
