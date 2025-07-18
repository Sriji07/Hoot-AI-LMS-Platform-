import { NextResponse } from "next/server";
import { db } from "../../../../configs/db";
import { STUDY_MATERIAL_TABLE } from "../../../../configs/schema";
import { eq } from "drizzle-orm";

export async function DELETE(req) {
    try {
        const { courseId } = await req.json();
        console.log("Delete API called with courseId:", courseId);

        if (!courseId) {
            return NextResponse.json(
                { message: "courseId is required" },
                { status: 400 }
            );
        }

        const deleted = await db
            .delete(STUDY_MATERIAL_TABLE)
            .where(eq(STUDY_MATERIAL_TABLE.courseId, courseId));

        return NextResponse.json({
            message: "Course deleted successfully",
            deletedRows: deleted, // Keep for debugging
        });
    } catch (error) {
        console.error("Error deleting course:", error);
        return NextResponse.json(
            { message: "Failed to delete course", error: error.message },
            { status: 500 }
        );
    }
}
