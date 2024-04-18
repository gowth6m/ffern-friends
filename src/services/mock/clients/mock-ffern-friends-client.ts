import { AxiosInstance, AxiosResponse } from "axios"
import { mockGetFfernFriendResponse } from "@/services/mock/data/mockGetFfernFriendResponse";
import { GetFfernFriendResponse, UpdateFfernFriendsErrorResponse, UpdateFfernFriendsRequest, UpdateFfernFriendsSuccessResponse } from "@/services/response-types";
import { mockUpdateFfernFriendsErrorResponse, mockUpdateFfernFriendsSuccessResponse } from "@/services/mock/data/mockUpdateFfernFriendsResponse";

export default class MockFfernFriendsClient {

    private client: AxiosInstance;

    constructor(client: AxiosInstance, baseURL?: string) {
        this.client = client;
        if (baseURL) {
            this.client.defaults.baseURL += baseURL;
        }
    }

    // GET /api/ffern-friends/[ffern-friend-id]
    async getFriend({ ffernFriendId }: { ffernFriendId: string }): Promise<AxiosResponse<GetFfernFriendResponse>> {
        console.log('mock client called: ', ffernFriendId);
        return await new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    data: mockGetFfernFriendResponse,
                    status: 200,
                    statusText: "OK",
                    headers: {},
                    config: {},
                } as AxiosResponse<GetFfernFriendResponse>);
            }, 1000);
        });
    }

    // POST /api/ffern-friends/[ffern-friend-id]
    async updateFriend({ ffernFriendId, data, isSuccess = true }: { ffernFriendId: string, data: UpdateFfernFriendsRequest, isSuccess?: boolean }): Promise<AxiosResponse<UpdateFfernFriendsSuccessResponse | UpdateFfernFriendsErrorResponse>> {
        console.log('mock client called: ', ffernFriendId, data);
        return await new Promise((resolve) => {

            if (!isSuccess) {
                resolve({
                    data: mockUpdateFfernFriendsErrorResponse,
                    status: 500,
                    statusText: "Internal Server Error",
                    headers: {},
                    config: {},
                } as AxiosResponse<UpdateFfernFriendsErrorResponse>);
                return;
            }

            setTimeout(() => {
                resolve({
                    data: mockUpdateFfernFriendsSuccessResponse,
                    status: 200,
                    statusText: "OK",
                    headers: {},
                    config: {},
                } as AxiosResponse<UpdateFfernFriendsSuccessResponse>);
            }, 1000);
        });
    };
}
