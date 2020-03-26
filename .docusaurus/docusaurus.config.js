export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "GECKO",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/geck0.png",
        "srcDark": "img/blue.png"
      },
      "links": [
        {
          "to": "docs/gs1",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "right"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "right"
        },
        {
          "to": "docs/api2",
          "label": "API",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Style Guide",
              "to": "docs/doc1"
            },
            {
              "label": "Second Doc",
              "to": "docs/doc2"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            }
          ]
        },
        {
          "title": "Social",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/facebook/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 My Project, Inc"
    }
  },
  "title": "GECKO Docs",
  "tagline": "",
  "url": "https://geckodocs.github.io",
  "baseUrl": "/docs/",
  "favicon": "img/geckoWhite.png",
  "organizationName": "GECKODocs",
  "projectName": "docs",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/aj/GECKO/DEV/geckodocs/GECKO/docs/sidebars.js"
        },
        "theme": {
          "customCss": "/Users/aj/GECKO/DEV/geckodocs/GECKO/docs/src/css/custom.css"
        }
      }
    ]
  ]
};