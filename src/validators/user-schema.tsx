import { z } from "zod";

export const userSchema = z.object({
    user_name: z.string().min(2, "Name is required"),
    email: z.string().email("Email is required"),
    password: z.string().min(1, "Password is required"),

});

export type UserSchema = z.infer<typeof userSchema>;