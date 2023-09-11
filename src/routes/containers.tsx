import * as routes from './';
import { IRoute } from '../types';
import { bindContainerToRoute } from '../utils';
import { HomeContainer, PrivacyPolicyContainer } from '../containers';

export const containers: IRoute[] = [
  bindContainerToRoute(routes.indexRoute, HomeContainer),

  bindContainerToRoute(routes.learningTogetherPrivacyPolicyRoute, props => (
    <PrivacyPolicyContainer withAdmob {...props} />
  )),
  bindContainerToRoute(routes.deckKeeperPrivacyPolicyRoute, props => <PrivacyPolicyContainer withAdmob {...props} />),
  bindContainerToRoute(routes.ABColorsPrivacyPolicyRoute, PrivacyPolicyContainer),
  bindContainerToRoute(routes.ABCNumbersPrivacyPolicyRoute, PrivacyPolicyContainer),
];
