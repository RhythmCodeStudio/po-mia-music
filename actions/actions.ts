"use server";
import { neon } from "@neondatabase/serverless";
import { auth } from "@/auth/server";
import { redirect } from "next/navigation";

const sql = neon(`${process.env.DATABASE_URL}`);

export async function signUpForMailingList(email: string) {
  await sql`
    INSERT INTO mailing_list (email)
    VALUES (${email})
    ON CONFLICT (email) DO NOTHING
  `;
}

export async function getMailingList() {
  const entries = await sql`
    SELECT * FROM mailing_list
  `;
  return entries;
}

export async function removeFromMailingList(email: string) {
  await sql`
    DELETE FROM mailing_list
    WHERE email = ${email}
  `;
}

// create calendar event
export async function createCalendarEvent(event: {
  // title: string,
  // startDate: Date | string,
  // endDate?: Date | string,
  // startTime: string,
  // endTime?: string,
  // allDay?: boolean,
  // cost?: string,
  // locationName: string,
  // locationStreetAddress: string,
  // locationCity: string,
  // locationState: string,
  // locationZip: string,
  // description?: string,
  // image?: string
  // ticketLink?: string,
  // eventLink?: string,
  // venueLink?: string,
  // moreInfoLink?: string
  id: number;
  title: string;
  // startDate: Date;
  // endDate?: Date;
  date: Date;
  dayOfWeek: string;
  startTime: string;
  endTime?: string;
  // allDay?: boolean;
  cost?: string;
  venueName: string;
  venueStreetAddress: string;
  venueCity: string;
  venueState: string;
  venueZip: string;
  description?: string;
  image?: string;
  ticketLink?: string;
  eventLink?: string;
  venueLink?: string;
  moreInfoLink?: string;
}) {
  await sql`
    INSERT INTO calendar_events (
      title,
      date,
      day_of_week,
      start_time,
      end_time,
      cost,
      venue_name,
      venue_street_address,
      venue_city,
      venue_state,
      venue_zip,
      description,
      image,
      ticket_link,
      event_link,
      venue_link,
      more_info_link
    ) VALUES (
      ${event.title},
      ${event.date},
      ${event.dayOfWeek},
      ${event.startTime},
      ${event.endTime ?? null},
      ${event.cost ?? null},
      ${event.venueName},
      ${event.venueStreetAddress},
      ${event.venueCity},
      ${event.venueState},
      ${event.venueZip},
      ${event.description ?? null},
      ${event.image ?? null},
      ${event.ticketLink ?? null},
      ${event.eventLink ?? null},
      ${event.venueLink ?? null},
      ${event.moreInfoLink ?? null}
    )
  `;
}

// get all calendar events
export async function getCalendarEvents() {
  const events = await sql`
    SELECT * FROM calendar_events
    ORDER BY start_date, start_time
  `;
  return events;
}

// delete calendar event by id
export async function deleteCalendarEvent(id: string) {
  await sql`
    DELETE FROM calendar_events
    WHERE id = ${id}
  `;
}

// update calendar event by id
export async function updateCalendarEvent(event: {
  id: string;
  title: string;
  date: Date;
  // startDate: Date | string;
  // endDate?: Date | string;
  dayOfWeek: string;
  startTime: string;
  endTime?: string;
  allDay?: boolean;
  cost?: string;
  venueName: string;
  venueStreetAddress: string;
  venueCity: string;
  venueState: string;
  venueZip: string;
  description?: string;
  image?: string;
  ticketLink?: string;
  eventLink?: string;
  venueLink?: string;
  moreInfoLink?: string;
}) {
  await sql`
    UPDATE calendar_events
    SET
      title = ${event.title},
      date = ${event.date},
      day_of_week = ${event.dayOfWeek},
      start_time = ${event.startTime},
      end_time = ${event.endTime ?? null},
      all_day = ${event.allDay ?? false},
      cost = ${event.cost ?? null},
      venue_name = ${event.venueName},
      venue_street_address = ${event.venueStreetAddress},
      venue_city = ${event.venueCity},
      venue_state = ${event.venueState},
      venue_zip = ${event.venueZip},
      description = ${event.description ?? null},
      image = ${event.image ?? null},
      ticket_link = ${event.ticketLink ?? null},
      event_link = ${event.eventLink ?? null},
      venue_link = ${event.venueLink ?? null},
      more_info_link = ${event.moreInfoLink ?? null}
    WHERE id = ${event.id}
  `;
}

export async function getSession() {
  const session = await auth.getSession();
  return session;
}

export async function signOut() {
  await auth.signOut();
  // redirect to "/"
  redirect("/");
}
