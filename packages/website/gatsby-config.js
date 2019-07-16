module.exports = {
    plugins: [
        {
            resolve: "gatsby-source-gh-readme",
            options: {
                name: `markdown-pages`,
                gitHubToken: `${process.env.GITHUB_TOKEN}`
            }
        },
        `gatsby-transformer-remark`
    ]
}
