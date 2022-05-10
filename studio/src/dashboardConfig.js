export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "627aa7d1f6435700af882c94",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-2r2is89w",
                  apiId: "cc0d317d-dec5-471f-8bb1-24c69c21d416",
                },
                {
                  buildHookId: "627aa7d14d31ab00b4eedfde",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-53885diu",
                  apiId: "f93d00cd-de95-4f59-a91e-0699f7025900",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/dmialexgervais/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-53885diu.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
