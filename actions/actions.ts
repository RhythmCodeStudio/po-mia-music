"use server";
import { neon } from "@neondatabase/serverless";
import { auth } from "@/auth/server";
import { redirect } from "next/navigation";
import { CalendarEvent } from "@/defintions/definitions";
import { v4 as uuidv4 } from "uuid";

const sql = neon(`${process.env.DATABASE_URL}`);

// auth actions
export async function getSession() {
  const session = await auth.getSession();
  return session;
}

export async function signOut() {
  await auth.signOut();
  redirect("/");
}

// mailing list actions
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

// calendar event actions
export async function createCalendarEvent(event: {
  // id: string;
  // title: string;
  date: Date;
  dayOfWeek: string;
  time: string;
  cost?: string;
  venueName: string;
  venueStreetAddress: string;
  venueCity: string;
  venueState: string;
  venueZip: string;
  description?: string;
  image?: string;
  imagePublicId?: string;
  ticketLink?: string;
  eventLink?: string;
  venueLink?: string;
  moreInfoLink?: string;
}) {
  const createdAt = new Date();
  const id = uuidv4();
  await sql`
    INSERT INTO calendar_events (
      id,
      date,
      day_of_week,
      time,
      cost,
      venue_name,
      venue_street_address,
      venue_city,
      venue_state,
      venue_zip,
      description,
      image,
      image_public_id,
      ticket_link,
      event_link,
      venue_link,
      more_info_link,
      created_at
    ) VALUES (
      ${id},
      ${event.date},
      ${event.dayOfWeek},
      ${event.time},
      ${event.cost ?? null},
      ${event.venueName},
      ${event.venueStreetAddress},
      ${event.venueCity},
      ${event.venueState},
      ${event.venueZip},
      ${event.description ?? null},
      ${event.image ?? null},
      ${event.imagePublicId ?? null},
      ${event.ticketLink ?? null},
      ${event.eventLink ?? null},
      ${event.venueLink ?? null},
      ${event.moreInfoLink ?? null},
      ${createdAt}
    )
  `;
}

export async function getCalendarEventById(id: string) {
  const event = await sql`
    SELECT
      id,
      date,
      day_of_week          AS "dayOfWeek",
      time,
      cost,
      venue_name           AS "venueName",
      venue_street_address AS "venueStreetAddress",
      venue_city           AS "venueCity",
      venue_state          AS "venueState",
      venue_zip            AS "venueZip",
      description,
      image,
      image_public_id      AS "imagePublicId",
      ticket_link          AS "ticketLink",
      event_link           AS "eventLink",
      venue_link           AS "venueLink",
      more_info_link       AS "moreInfoLink",
      created_at           AS "createdAt"
    FROM calendar_events
    WHERE id = ${id}
  `;
  return event[0] as CalendarEvent | undefined;
}

// get all calendar events
export async function getCalendarEvents() {
  const events = await sql`
    SELECT * FROM calendar_events
    ORDER BY date, time
  `;
  return events;
}

// update calendar event by id
export async function updateCalendarEvent(event: {
  id: string;
  // title: string;
  date: Date;
  dayOfWeek: string;
  time: string;
  cost?: string;
  venueName: string;
  venueStreetAddress: string;
  venueCity: string;
  venueState: string;
  venueZip: string;
  description?: string;
  image?: string;
  imagePublicId?: string;
  ticketLink?: string;
  eventLink?: string;
  venueLink?: string;
  moreInfoLink?: string;
}) {
  await sql`
    UPDATE calendar_events
    SET
      date = ${event.date},
      day_of_week = ${event.dayOfWeek},
      time = ${event.time},
      cost = ${event.cost ?? null},
      venue_name = ${event.venueName},
      venue_street_address = ${event.venueStreetAddress},
      venue_city = ${event.venueCity},
      venue_state = ${event.venueState},
      venue_zip = ${event.venueZip},
      description = ${event.description ?? null},
      image = ${event.image ?? null},
      image_public_id = ${event.imagePublicId ?? null},
      ticket_link = ${event.ticketLink ?? null},
      event_link = ${event.eventLink ?? null},
      venue_link = ${event.venueLink ?? null},
      more_info_link = ${event.moreInfoLink ?? null}
    WHERE id = ${event.id}
  `;
}

// delete calendar event by id
export async function deleteCalendarEvent(id: string) {
  await sql`
    DELETE FROM calendar_events
    WHERE id = ${id}
  `;
}
