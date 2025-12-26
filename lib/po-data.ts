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
        length: "1:40",
        number: 1,
        bandcampUrl: "https://pomia.bandcamp.com/track/mouldy-peachez",
      },
      { 
        title: "(510) BST-RDMN", 
        length: "5:10",
        number: 2,
        bandcampUrl: "https://pomia.bandcamp.com/track/510-bst-rdmn",
      },
      { 
        title: "crazii", 
        length: "3:15",
        number: 3,
        bandcampUrl: "https://pomia.bandcamp.com/track/crazii",
      },
      { 
        title: "cyberchondria", 
        length: "4:32",
        number: 4,
        bandcampUrl: "https://pomia.bandcamp.com/track/cyberchondria",
      },
      { 
        title: "Ux4", 
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
        length: "3:46",
        number: 1,
        bandcampUrl: "https://pomia.bandcamp.com/track/golden-tongue",
      },
    ], 
  },
  {
    id: randomUUID(),
    title: "",
    coverImgSrc: "/images/.webp",
    releaseDate: "",
    description: "",
    links: [
      {
        name: "",
        label: "",
        url: "",
      },
    ],
    tracks: [
      { 
        title: "", 
        length: "",
        number: 1,
        bandcampUrl: "",
      },
      { 
        title: "", 
        length: "",
        number: 2,
        bandcampUrl: "",
      },
      { 
        title: "", 
        length: "",
        number: 3,
        bandcampUrl: "",
      },
      { 
        title: "", 
        length: "",
        number: 4,
        bandcampUrl: "",
      },
      { 
        title: "", 
        length: "",
        number: 5,
        bandcampUrl: "",
      },
    ], 
  },
  {
    id: randomUUID(),
    title: "",
    coverImgSrc: "/images/.webp",
    releaseDate: "",
    description: "",
    links: [
      {
        name: "",
        label: "",
        url: "",
      },
    ],
    tracks: [
      { 
        title: "", 
        length: "",
        number: 1,
        bandcampUrl: "",
      },
      { 
        title: "", 
        length: "",
        number: 2,
        bandcampUrl: "",
      },
      { 
        title: "", 
        length: "",
        number: 3,
        bandcampUrl: "",
      },
      { 
        title: "", 
        length: "",
        number: 4,
        bandcampUrl: "",
      },
      { 
        title: "", 
        length: "",
        number: 5,
        bandcampUrl: "",
      },
    ], 
  },
]