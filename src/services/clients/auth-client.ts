import { AxiosInstance, AxiosResponse } from "axios"

export default class AuthClient {

    private client: AxiosInstance;

    constructor(client: AxiosInstance, baseURL?: string) {
        this.client = client;
        if (baseURL) {
            this.client.defaults.baseURL += baseURL;
        }
    }

    async login({ username, password }: { username: string, password: string }): Promise<AxiosResponse<{ token: string }>> {
        return await this.client.post(`/login`, { username, password });
    }
}