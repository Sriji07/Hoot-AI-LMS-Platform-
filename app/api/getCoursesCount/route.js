import { db } from "../../../configs/db";
import { STUDY_MATERIAL_TABLE } from "../../../configs/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const userEmail = req.headers.get("x-user-email");
        if (!userEmail) {
            return NextResponse.json({ count: 0 });
        }

        const courses = await db
            .select()
            .from(STUDY_MATERIAL_TABLE)
            .where(eq(STUDY_MATERIAL_TABLE.userEmail, userEmail));

        return NextResponse.json({ count: courses.length });
    } catch (error) {
        console.error("Error fetching courses count:", error);
        return NextResponse.json({ count: 0 }, { status: 500 });
    }
}
