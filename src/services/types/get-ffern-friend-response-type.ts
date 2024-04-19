import { z } from 'zod';

export const GetFfernFriendResponseSchema = z.object({
    id: z.string(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    addressLineOne: z.string().optional(),
    addressLineTwo: z.string().optional(),
    city: z.string().optional(),
    postcode: z.string().optional(),
    stateOrCounty: z.string().optional(),
    country: z.enum(["US", "NL", "GB"]),
    subscribedAt: z.number().optional(),
    createdAt: z.number(),
    updatedAt: z.number().optional(),
});

export type GetFfernFriendResponse = z.infer<typeof GetFfernFriendResponseSchema>;