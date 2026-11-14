// The only place the product name and tagline live. Server, page, and logs read this object.
export const PRODUCT = Object.freeze({
  name: 'DryRun',
  tagline: 'See the field before the only submission that counts.',
  url: process.env.DRYRUN_PUBLIC_URL || 'https://dryrun-pfgy.onrender.com',
  repo: 'https://github.com/themastermind5253/dryrun-near',
  disclaimer: 'Speculative reading of the published rules against public repositories. Not an official result and not affiliated with the organizers.',
});
