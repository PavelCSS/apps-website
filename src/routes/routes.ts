import { createRoute } from "../utils";

export const indexRoute = createRoute("/", {
  title: "ZiBY Apps",
  pageTitle: "ZiBY Apps",
});

export const learningTogetherPrivacyPolicyRoute = createRoute(
  "/lt-privacy-policy",
  {
    title: "Learning together",
    pageTitle: "Learning together Privacy Policy",
  }
);

export const deckKeeperPrivacyPolicyRoute = createRoute("/dk-privacy-policy", {
  title: "DeckKeeper",
  pageTitle: "DeckKeeper Privacy Policy",
});
