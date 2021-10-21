# Eleventy Documentation Site Builder

## Website link
[https://booster.zywave.dev](http://booster.zywave.dev)

## What is it?

A static site builder to produce a combined documentation site for [ZUI](https://gitlab.zywave.com/devkit/zui/zui) and [ZAPI](https://gitlab.zywave.com/devkit/zui/zywave-api-toolkit) projects. It was conceived to separate documentation from the toolkit projects to keep things lean and organized. 

The main tooling behind the static site generator is Eleventy, sometimes written as 11ty. 11ty takes in templates, data (.json, .md, .html etc.) and assets, then outputs lightweight performant static HTML pages. For more info see [Eleventy](https://www.11ty.io/).

## Setup

### 1. Clone this repository:

```
git clone https://gitlab.zywave.com/devkit/zui/docs.git docs
```

### 2. Navigate to the directory

```
cd docs
```

### 3. Install dependencies

```
yarn install
```

### 4. Running and other commands

Launch site locally and watch for changes:
```
yarn run watch
```
<br/>

Build or re-build site, `_site` folder is where output is placed:
```
yarn run build
```
<br/>

Run 11ty in debug mode, one command for windows and one for *nix:
```
yarn run debug:windows
yarn run debug:nix
```

## Troubleshooting

- Static HTML files are output to a `_site` folder, whether you're building for production or running the project locally the site will be served from this directory. **Files in the `_site` folder will persist until removed**; if you delete files in `src` it may still be accessible in the `_site` folder and therefore in your site,  be careful to delete `_site` and re-build if necessary.

## Helpful information

### Nunjucks .njk files

Templating syntax:
```
{{ variableName }}
``` 

Expression syntax:
```
{% if thing %}
    {{ thing and thing }}
{% endif %}
```

Nunjucks is a templating engine that allows for variable content, expression like behavior, parent child template extension, etc. for finer control of the outputted HTML. It's sort of a meld of HTML, JS and a simplified front end framework.

For additional info see [nunjuck's docs](https://mozilla.github.io/nunjucks/).
### Frontmatter
Frontmatter is added to the top of .njk, .md, and several other supported files. It is written in YAML, it's essentially key value pairs, starts and ends with `---` and looks as such:
```
---
title: "I am a title"
subTitle: Quote marks around values are optional
avoid: Camel case good, kebab case or hyphens in keys bad
---
```

Certain keywords in frontmatter are specific to 11ty.

### Data in 11ty
1. Using `_data` folder
   - Add `trolls.json` to the `_data` folder and it will be globally accessible in your .njk as:
 
 ```
 {{ trolls.favorites.names }}
 ```
2. Frontmatter as data
   - Frontmatter values are accessible as data in .njk files too:
  
  ```
  ---
  ninjaTurtle: leonardo
  ---

  {{ ninjaTurtle }}
  ```

### Pagination to generate pages
Pagination is an 11ty concept to automatically generate pages by looping through a piece of data. For instance if we make `template.njk` and feed it data via `_data/componentRegistry.json`, we can output different pages using pagination and link to them using their permalink frontmatter value. The `alias` references the current item in the loop:

```
---
pagination:
    data: componentRegistry.components
    size: 1
    alias: component
permalink: {{ component.commonName | slug }}
---

<h1>{{ component.commonName }}</h1>
```
