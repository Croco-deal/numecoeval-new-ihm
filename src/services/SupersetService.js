import { embedDashboard } from "@superset-ui/embedded-sdk";

const token = await fetchGuestTokenFromBackend(config);

embedDashboard({
    id: "3922de50-b26e-4946-b4a4-602d8e74993a",  // given by the Superset embedding UI
    supersetDomain: "https://localhost:8090",
    mountPoint: document.getElementById("superset-container"), // html element in which iframe render
    fetchGuestToken: () => token,
    dashboardUiConfig: { hideTitle: true }
});