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