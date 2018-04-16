var path = require('path');

module.exports = {
    plugins: [
      	{
            resolve: `gatsby-plugin-postcss-sass`,
            options: {
            	postCssPlugins: [],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: path.join(__dirname, 'src', 'posts')
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-prismjs`
                ]
            }
        }
    ]
};
