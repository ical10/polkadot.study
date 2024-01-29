/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const sidebars = {
  // Create a sidebar for your tutorial at the end of this list
  substrateInBitsSidebar: [
    "substrate-in-bits/README",
    {
      type: "autogenerated",
      dirName: "substrate-in-bits/docs",
    },
  ],
  tokengatedSidebar: [
    "tokengated-polkadot-next-js/intro",
    "tokengated-polkadot-next-js/setup",
    "tokengated-polkadot-next-js/connecting-to-the-wallet-browser-extension",
    "tokengated-polkadot-next-js/authentication-with-next-auth",
    "tokengated-polkadot-next-js/conclusion",
  ],
  polkadotWalletSidebar: [
    "wallet-with-polkadot-js-and-react-with-typescript/intro",
    "wallet-with-polkadot-js-and-react-with-typescript/step1",
    "wallet-with-polkadot-js-and-react-with-typescript/step2",
    "wallet-with-polkadot-js-and-react-with-typescript/step3",
    "wallet-with-polkadot-js-and-react-with-typescript/step4",
    "wallet-with-polkadot-js-and-react-with-typescript/step5",
    "wallet-with-polkadot-js-and-react-with-typescript/conclusion",
  ],

  kittiesPart01Sidebar: [
    "kitties-part-01/intro",
    "kitties-part-01/step1",
    "kitties-part-01/step2",
    "kitties-part-01/step3",
    "kitties-part-01/step4",
    "kitties-part-01/step5",
    "kitties-part-01/step6",
    "kitties-part-01/step7",
    "kitties-part-01/step8",
    "kitties-part-01/conclusion",
  ],
  
  inherentsTutorialSidebar: [
    "substrate-inherents-tutorial/intro",
    "substrate-inherents-tutorial/setup",
    "substrate-inherents-tutorial/client",
    "substrate-inherents-tutorial/runtime",
    "substrate-inherents-tutorial/running-nodes",
    "substrate-inherents-tutorial/weather-oracle",
    "substrate-inherents-tutorial/conclusion",
  ],
  parachainVaultSidebar: [
    "parachain-to-polkadot-vault/intro",
    "parachain-to-polkadot-vault/step1",
    "parachain-to-polkadot-vault/step2",
    "parachain-to-polkadot-vault/step3",
    "parachain-to-polkadot-vault/step4",
    "parachain-to-polkadot-vault/step5",
    "parachain-to-polkadot-vault/conclusion",
  ],
  decentralizedExchangeInk: [
    "decentralized-exchange-ink/introduction",
    "decentralized-exchange-ink/implementation",
    "decentralized-exchange-ink/unit-testing",
    "decentralized-exchange-ink/conclusion",
  ],
  firstFullStackInkDapp: [
    "first-full-stack-ink-dapp/intro",
    "first-full-stack-ink-dapp/setup-and-launch",
    "first-full-stack-ink-dapp/deploy-contract-and-connect-frontend",
    "first-full-stack-ink-dapp/codebase-explanation",
    "first-full-stack-ink-dapp/adding-new-dapp-feature",
    "first-full-stack-ink-dapp/frontend-deployment-guide",
    "first-full-stack-ink-dapp/conclusion",
  ]
};

module.exports = sidebars;
