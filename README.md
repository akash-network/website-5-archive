# Akash Network Website

This repository contains the source code for the [Akash Network website](akash.network).

## Migrating from DatoCMS

### Import blog posts from DataCMS

**NOTE**: Before running the below command, ensure `DATO_API_TOKEN` is set in your environment. You can also set his in a `.env` file in the root of the project.

```sh
$ npm run migrate-blog
```

## Development

### Changelog

Changelog is automatically generated from commit messages. Please follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) when writing commit messages. See this [post](https://mokkapps.de/blog/how-to-automatically-generate-a-helpful-changelog-from-your-git-commit-messages/) for more information.

### Releasing

```sh
$ npm run release

# minor release
$ npm run release:minor

# patch release
$ npm run release:patch

# major release
$ npm run release:major
```

### Priorities

- **Homepage**
  - [ ] Write draft copy for benefits and features
  - [ ] Add "latest from the blog"
  - [ ] Add connect with community
  - [ ] (Stretch) Add Case studies preview
  - [ ] Link Get Started to Docs
  - [ ] Social Media Preview
- **Docs**
  - [ ] Replace tokenizer with text replace
  - [ ] Import all Docs
- **Blog**
  - [ ] Add By Year Filter for Blog
  - [ ] Fetch Author, Tags and Categories from DatoCMS
- **Community**
  - [ ] Design: Community Page
  - [ ] Design: Homepage
  - [ ] Add News Section
  - [ ] Add Contributors Section
- **Token**
  - [ ] Add Token Metrics (Build time) on Token Page
- **Misc**
  - [ ] (Stretch) Enable GoAT diagram support (migrate away from doks)
  - [ ] Enable Social Media preview
  - [ ] Conduct Performance Audit (Google Lighthouse) and implement recommendations
  - [ ] Conduct SEO Audit and implement recommendations
- **Ecosystem (Stretch)** 
  - [ ] Feature: Ecosystem Page
  - [ ] Add Case Studies
- Development Documentation
  - [ ] Add a "How to contribute" section to the README
  - [ ] Add a "How to run the website locally" section to the README

