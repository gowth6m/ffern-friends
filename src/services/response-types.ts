export type GetFfernFriendResponse = {
    id: string;
    firstName?: string;
    lastName?: string;
    addressLineOne?: string;
    addressLineTwo?: string;
    city?: string;
    postcode?: string;
    stateOrCounty?: string;
    country?: "US" | "NL" | "GB";
    subscribedAt?: number; // UNIX timestamp
    createdAt: number; // UNIX timestamp
    updatedAt?: number; // UNIX timestamp
}

export type UpdateFfernFriendsRequest = {
    firstName: string;
    lastName: string;
    addressLineOne: string;
    addressLineTwo?: string;
    city: string;
    postcode: string;
    stateOrCounty: string;
    country: "US" | "NL" | "GB";
}

export type UpdateFfernFriendsSuccessResponse = {
    id: string;
    firstName: string;
    lastName: string;
    addressLineOne: string;
    addressLineTwo?: string;
    city: string;
    postcode: string;
    stateOrCounty: string;
    country: "US" | "NL" | "GB";
    createdAt: number; // UNIX timestamp
    updatedAt: number; // UNIX timestamp 
    subscribedAt: number; // UNIX timestamp 
}

export type UpdateFfernFriendsErrorResponse = {
    error: string;
    message: string;
}