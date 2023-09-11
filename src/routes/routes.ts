import { createRoute } from '../utils';

export const indexRoute = createRoute('/', {
  title: 'ZiBY Apps',
  pageTitle: 'ZiBY Apps',
});

export const learningTogetherPrivacyPolicyRoute = createRoute('/lt-privacy-policy', {
  title: 'Learning together',
  pageTitle: 'Learning together Privacy Policy',
});

export const deckKeeperPrivacyPolicyRoute = createRoute('/dk-privacy-policy', {
  title: 'DeckKeeper',
  pageTitle: 'DeckKeeper Privacy Policy',
});

export const ABColorsPrivacyPolicyRoute = createRoute('/colors-privacy-policy', {
  title: 'ABColors',
  pageTitle: 'ABColors Privacy Policy',
});

export const ABCNumbersPrivacyPolicyRoute = createRoute('/numbers-privacy-policy', {
  title: 'ABC Numbers',
  pageTitle: 'ABC Numbers Privacy Policy',
});
