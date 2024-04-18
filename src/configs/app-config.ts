const AppConfig = {
    version: "0.0.1",
    stage: "local",
    metadata: {
        title: "Ffern Friends",
        description: "Ffern friends",
    },
    assets: {
        icons: [],
    },
    endpoint: {
        protocol: "https",
        base: "ffern-custodian.vercel.app/api",
    },
    localStorageKeys: {
        settings: "ffern-settings",
    },
}

export default AppConfig;