import axios from "axios";
import AppConfig from "@/configs/app-config";
import FfernFriendsClient from "@/services/clients/ffern-friends-client";
import MockFfernFriendsClient from "@/services/mock/clients/mock-ffern-friends-client";
import AuthClient from "@/services/clients/auth-client";

const baseURL = `${AppConfig.endpoint.protocol}://${AppConfig.endpoint.base}`;

const client = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const stage = AppConfig.stage as "local" | "dev" | "staging" | "production";

class ApiClient {
    static setAuthToken(props: { type: "Bearer", token: string | null } | {
        type: "Basic", username: string, password: string
    }) {
        if (props.type === "Bearer") {
            client.defaults.headers.common['Authorization'] = `Bearer ${props.token}`;
        } else if (props.type === "Basic") {
            client.defaults.headers.common['Authorization'] = `Basic ${(`${props.username}:${props.password}`)}`;
        }
    }

    static auth = new AuthClient(client, "/auth");

    static ffernFriends = stage === "local" ? new MockFfernFriendsClient(client, "/ffern-friends") : new FfernFriendsClient(client, "/api/ffern-friends");
}

export default ApiClient;