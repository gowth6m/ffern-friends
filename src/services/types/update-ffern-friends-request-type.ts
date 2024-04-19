import { z } from "zod";

export const UpdateFfernFriendsRequestSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    addressLineOne: z.string().min(1, "Address line 1 is required"),
    addressLineTwo: z.string().optional(),
    city: z.string().min(1, "City is required"),
    postcode: z.string().min(1, "Postcode is required"),
    stateOrCounty: z.string().min(1, "State/County is required"),
    country: z.string().min(1, "Country is required"),
});

export const UpdateFfernFriendsSuccessResponseSchema = z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    addressLineOne: z.string(),
    addressLineTwo: z.string().optional(),
    city: z.string(),
    postcode: z.string(),
    stateOrCounty: z.string(),
    country: z.enum(["US", "NL", "GB"]),
    createdAt: z.number(),
    updatedAt: z.number(),
    subscribedAt: z.number(),
});

export const UpdateFfernFriendsErrorResponseSchema = z.object({
    error: z.string(),
    message: z.string(),
});

export type UpdateFfernFriendsRequest = z.infer<typeof UpdateFfernFriendsRequestSchema>;
export type UpdateFfernFriendsSuccessResponse = z.infer<typeof UpdateFfernFriendsSuccessResponseSchema>;
export type UpdateFfernFriendsErrorResponse = z.infer<typeof UpdateFfernFriendsErrorResponseSchema>;
