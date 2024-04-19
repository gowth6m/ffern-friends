import { z } from "zod";

export const UpdateFfernFriendsRequestSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    addressLineOne: z.string(),
    addressLineTwo: z.string().optional(),
    city: z.string(),
    postcode: z.string(),
    stateOrCounty: z.string(),
    country: z.enum(["US", "NL", "GB"]),
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
