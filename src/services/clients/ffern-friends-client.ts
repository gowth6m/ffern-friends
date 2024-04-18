import { AxiosInstance, AxiosResponse } from "axios"
import { GetFfernFriendResponse, UpdateFfernFriendsErrorResponse, UpdateFfernFriendsRequest, UpdateFfernFriendsSuccessResponse } from "@/services/response-types";

export default class FfernFriendsClient {

    private client: AxiosInstance;

    constructor(client: AxiosInstance, baseURL?: string) {
        this.client = client;
        if (baseURL) {
            this.client.defaults.baseURL += baseURL;
        }
    }

    // GET /api/ffern-friends/[ffern-friend-id]
    async getFriend({ ffernFriendId }: { ffernFriendId: string }): Promise<AxiosResponse<GetFfernFriendResponse>> {
        return await this.client.get(`/${ffernFriendId}`);
    }

    // POST /api/ffern-friends/[ffern-friend-id]
    async updateFriend({ ffernFriendId, data }: { ffernFriendId: string, data: UpdateFfernFriendsRequest }): Promise<AxiosResponse<UpdateFfernFriendsSuccessResponse | UpdateFfernFriendsErrorResponse>> {
        return await this.client.put(`/${ffernFriendId}`, data);
    }
}