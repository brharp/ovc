

# Introduction

This repository contains the source code for the Ontario Veterinary College
website (https://ovc.uoguelph.ca).


# Getting Started

1. Install NPM
1. Install Git
1. Install the Gatsby CLI
1. Clone this repository
1. Start the Gatsby development server:
   ```shell
   cd ovc-main-web
   gatsby develop
   ```


# Build and Test

1. Build the site
   ```shell
   npm run build
   ```
1. Start the Gatsby server:
   ```shell
   gatsby serve
   ```


# Deployment

This project is built and deployed to Azure using Azure Pipelines.
See `azure-pipelines.yml` and `azuredeploy.json` for details.


# Site Structure

Phase 1 of the new OVC site consists of a home page, about a dozen landing
(or secondary) pages, a news section, and an events calendar.

Most of the landing pages are implemented as Gatsby pages (in the
`src/pages` directory.) Pages that require dynamic queries have (such as
the index or news page) have templates (under `src/templates`.) Pages and
templates define the page layout. Content is defined by components under
`src/components`.

```
.
|-- LICENSE
|-- README.md
|-- azure-pipelines.yml
|-- azuredeploy.json
|-- config
|-- content
|   `-- explore
|-- gatsby-browser.js
|-- gatsby-config.js
|-- gatsby-node.js
|-- src
|   |-- components         Components.
|   |-- data               YAML data for blocks.
|   |-- images             Image data.
|   |-- pages              Page definitions.
|   |-- styles             Stylesheets.
|   |-- templates          Template definitions.
|   `-- utils
`-- static
```


# Page Structure

The general structure of a page is to import required blocks from
`src/components/blocks` and organize the blocks using the Bootstrap grid
(containers, rows, and columns.)

Block content is in `src/data/block`. Content for
`src/components/blocks/example.js` can generally be found in
`src/data/block/example.yml`. Block components use static queries to
source data from the YAML files.


# Exceptions

Some pages use an older organizational structure. The original
implementation used a "portal" template for each landing page with
a corresponding YAML file in `src/data/portals`. Most of these pages
have been migrated to use the block structure, but a few remain. There
are also some examples of pages that define blocks (with their content)
inline within the page file. These are in the process of being converted
to define blocks in separate files under `src/components/blocks` with
data in YAML files under `src/data/block`.

