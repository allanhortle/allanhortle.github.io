// @flow

module.exports = {
    plugins: [
        //`gatsby-plugin-styled-components`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-flow`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`
            }
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                defaultLayouts: {
                    pages: require.resolve('./src/components/MainLayout')
                }
            }
        }
    ]
};
