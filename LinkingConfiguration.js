/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';
function renderLinkingPrefix() {
  try {
    return Linking.createURL('/');
  } catch (e) {
    return 'draftbit://';
  }
}

const prefix = renderLinkingPrefix();
const linking = {
  prefixes: [prefix],
  config: {
    screens: {
      AuthStack: {
        screens: {},
      },
      MainTabs: {
        screens: {},
      },
      ScreenStack: {
        screens: {},
      },
    },
  },
};

export default linking;
