// @flow

module.exports = {
    plugins: [
        //`gatsby-plugin-styled-components`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-flow`,
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`
            }
        }
    ]
};
