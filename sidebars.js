/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    'intro',
    //add your tutorial here
    {
      type: 'category',
      label: 'Token Gated Website with polkadot.js',
      link: {
        type: 'generated-index',
      },
      items: [
        'tutorials/tokengated-polkadotjs/intro',
        'tutorials/tokengated-polkadotjs/frontend',
        'tutorials/tokengated-polkadotjs/backend'
      ],
    },
  ],

  authorsSidebar: [
    {
      type: 'category',
      label: 'How to Write a New Tutorial on Polkadot.study',
      link: {
        type: 'doc',
        id: 'authors/new-tutorial-on-polkadot-study/intro',
      },
      items: [ 
        'authors/new-tutorial-on-polkadot-study/structure-and-style',
        'authors/new-tutorial-on-polkadot-study/metadata',
        'authors/new-tutorial-on-polkadot-study/use-the-tutorial-template',
        'authors/new-tutorial-on-polkadot-study/local-dev-preview',
        'authors/new-tutorial-on-polkadot-study/submitting-the-tutorial',
        'authors/new-tutorial-on-polkadot-study/funding',
        'authors/new-tutorial-on-polkadot-study/further-reading'
      ]
    },    
    'authors/contribution-cheatsheet',
    'authors/components-cheatsheet',
  ],
};

module.exports = sidebars;
