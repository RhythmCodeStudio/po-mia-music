"use server";

import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

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
  title: string,
  startDate: Date | string,
  endDate?: Date | string,
  startTime: string,
  endTime?: string,
  allDay?: boolean,
  locationName: string,
  locationStreetAddress: string,
  locationCity: string,
  locationState: string,
  locationZip: string,
  description?: string,
  image?: string
}) {
  await sql`
    INSERT INTO calendar_events (
      title,
      start_date,
      end_date,
      start_time,
      end_time,
      all_day,
      location_name,
      location_street_address,
      location_city,
      location_state,
      location_zip,
      description,
      image
    ) VALUES (
      ${event.title},
      ${event.startDate},
      ${event.endDate ?? null},
      ${event.startTime},
      ${event.endTime ?? null},
      ${event.allDay ?? false},
      ${event.locationName},
      ${event.locationStreetAddress},
      ${event.locationCity},
      ${event.locationState},
      ${event.locationZip},
      ${event.description ?? null},
      ${event.image ?? null}
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
  id: string,
  title: string,
  startDate: Date | string,
  endDate?: Date | string,
  startTime: string,
  endTime?: string,
  allDay?: boolean,
  locationName: string,
  locationStreetAddress: string,
  locationCity: string,
  locationState: string,
  locationZip: string,
  description?: string,
  image?: string
}) {
  await sql`
    UPDATE calendar_events
    SET
      title = ${event.title},
      start_date = ${event.startDate},
      end_date = ${event.endDate ?? null},
      start_time = ${event.startTime},
      end_time = ${event.endTime ?? null},
      all_day = ${event.allDay ?? false},
      location_name = ${event.locationName},
      location_street_address = ${event.locationStreetAddress},
      location_city = ${event.locationCity},
      location_state = ${event.locationState},
      location_zip = ${event.locationZip},
      description = ${event.description ?? null},
      image = ${event.image ?? null}
    WHERE id = ${event.id}
  `;
}