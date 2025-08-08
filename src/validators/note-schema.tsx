import { z } from "zod";

export const noteSchema = z.object({
    note_title: z.string().min(2, "Title is required"),
    note_content: z.string().optional()

});

export type NoteSchema = z.infer<typeof noteSchema>;