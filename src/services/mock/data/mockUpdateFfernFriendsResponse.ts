import { UpdateFfernFriendsErrorResponse, UpdateFfernFriendsSuccessResponse } from "@/services/response-types";

export const mockUpdateFfernFriendsSuccessResponse: UpdateFfernFriendsSuccessResponse = {
    id: "987654321",
    firstName: "Jane",
    lastName: "Smith",
    addressLineOne: "456 Oak Street",
    addressLineTwo: "Apartment 9",
    city: "Metropolis",
    postcode: "12345",
    stateOrCounty: "Metro County",
    country: "GB",
    createdAt: 1657894321,
    updatedAt: 1667894321,
    subscribedAt: 1647894321,
};

export const mockUpdateFfernFriendsErrorResponse: UpdateFfernFriendsErrorResponse = {
    error: "UpdateFailed",
    message: "Failed to update the friend details due to missing required fields.",
};