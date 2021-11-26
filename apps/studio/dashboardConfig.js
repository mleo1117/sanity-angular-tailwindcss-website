export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'mleo1117/sanity-angular-tailwindcss-website'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61a120c72cf4d546c866ede6',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-tailwindcss-website-studio-xwebfc87',
                  apiId: '76d6eb2c-1eae-4913-8ceb-a0a2c818ec02'
                },
                {
                  buildHookId: '61a120c762b3365661f980db',
                  title: 'Website',
                  name: 'sanity-angular-tailwindcss-website-web-s1gxs6aq',
                  apiId: '8f34bf8f-df36-4d37-8f4d-0b6087e5f5c8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mleo1117/sanity-angular-tailwindcss-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-tailwindcss-website-web-s1gxs6aq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
