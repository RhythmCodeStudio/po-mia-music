import { randomUUID } from "node:crypto"

export const poBio = `“po mia” is an eclectic, up-and-coming singer/songwriter based in St. Louis, MO. They are best known for their versatility of musical styles, colourful stylistic expression, as well as their ability to 
engage a crowd through their lyricism and captivating performances. Coming from a music therapy educational background, po mia's musical works often tackle themes of identity, love, fear, and navigating real life experiences.
`

export const paymentLinks = [
  {
    name: "Cashapp",
    label: "Cashapp",
    url: "https://cash.app/$skatingsongbird",
  },
  {
    name: "Venmo",
    label: "Venmo",
    url: "https://account.venmo.com/u/skatingsongbird",
  },
]

export const releases = [
  {
    id: randomUUID(),
    title: "po logue",
    coverImgSrc: "/images/po-logue-cover-art.webp",
    releaseDate: "February 22, 2022",
    type: "album",
    description: "a vulnerable, expressive, 5-song collection. this debut album covers topics that range from maintaining youthfulness to trouble in paradise, often simultaneously speaking out about more sensitive and stigmatized subjects.",
    links: [
      {
        name: "Bandcamp",
        label: "Bandcamp",
        url: "https://pomia.bandcamp.com/album/po-logue",
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
  {
    id: randomUUID(),
    title: "golden tongue",
    coverImgSrc: "/images/golden-tongue-cover-art.webp",
    releaseDate: "November 12, 2022",
    type: "single",
    description: "a remotely satirical, statement piece that explores and implores ideas of self determination, empowerment, as well as encouraging validation to stand up, speak out, and be heard.",
    links: [
      {
        name: "Bandcamp",
        label: "Bandcamp",
        url: "https://pomia.bandcamp.com/track/golden-tongue",
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
    id: randomUUID(),
    title: "REBIRTH",
    coverImgSrc: "/images/rebirth-cover.webp",
    releaseDate: "June 9, 2023",
    type: "ep",
    description: "this EP contains regenerative themes surrounding moving forward, cherishing loved ones, and learning to find enjoyment in the little things.",
    links: [
      {
        name: "Bandcamp",
        label: "Bandcamp",
        url: "https://pomia.bandcamp.com/album/rebirth",
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
    id: randomUUID(),
    title: "hope is plenty",
    type: "single",
    coverImgSrc: "/images/.webp",
    releaseDate: "July 31, 2024",
    description: "uplifting single in collaboration with producer e-GoS and rapper A\VOID",
    links: [
      {
        name: "Bandcamp",
        label: "Bandcamp",
        url: "https://pomia.bandcamp.com/track/hope-is-plenty",
      },
    ],
    tracks: [
      { 
        title: "hope is plenty", 
        by: "po mia, e-GoS, A\VOID",
        length: "3:01",
        number: 1,
        bandcampUrl: "https://pomia.bandcamp.com/track/hope-is-plenty",
      },
    ], 
  },
]