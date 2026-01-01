export type CalendarEvent = {
  id: string;
  title: string;
  startDate: Date;
  endDate?: Date;
  startTime: string;
  endTime?: string;
  allDay?: boolean;
  locationName: string;
  locationStreetAddress: string;
  locationCity: string;
  locationState: string;
  locationZip: string;
  description?: string;
  image?: string;
};
