export type CalendarEvent = {
  id: number;
  title: string;
  startDate: Date;
  endDate?: Date;
  startTime: string;
  endTime?: string;
  allDay?: boolean;
  cost?: string;
  locationName: string;
  locationStreetAddress: string;
  locationCity: string;
  locationState: string;
  locationZip: string;
  description?: string;
  image?: string;
  ticketLink?: string;
  eventLink?: string;
  venueLink?: string;
  moreInfoLink?: string;
};


export type Song = {
  id: string;
  title: string;
  artist: string;
  album: string;
  year: number;
  genre: string[];
  track_number: number;
  length: string;
  src: string;
  bandcamp_url: string;
  lyrics: string[];
};

export type Release = {
  id: string;
  title: string;
  artist: string;
  year: number;
  release_date: Date;
  genre: string[];
  cover_image: string;
  type: string;
  description: string;
  links: StreamingLink[];
  tracks: Song[];
};

export type StreamingLink = {
  name: string;
  label: string;
  url: string;
  icon: string;
};
