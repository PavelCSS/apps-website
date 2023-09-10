import { bindContainerToRoute, IRoute } from "@toxic/navigation";

import * as routes from "./";
import { HomeContainer } from "../containers/HomeContainer";
import { PrivacyPolicyContainer } from "../containers/PrivacyPolicyContainer";

export const containers: IRoute[] = [
  bindContainerToRoute(routes.indexRoute, HomeContainer),

  bindContainerToRoute(
    routes.learningTogetherPrivacyPolicyRoute,
    PrivacyPolicyContainer
  ),
  bindContainerToRoute(
    routes.deckKeeperPrivacyPolicyRoute,
    PrivacyPolicyContainer
  ),
];
