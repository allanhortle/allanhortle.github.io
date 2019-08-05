// @flow
const {createFilePath} = require("gatsby-source-filesystem");
const {get} = require('axios');
const path = require('path');

exports.sourceNodes = async ({actions, createNodeId, createContentDigest}) => {
    const repos = [
        ['blueflag/enty', 'release/worthwhile-dinosaur'],
        ['blueflag/fronads'],
        ['blueflag/oose', 'master', 'packages/oose-documentation/docs/moose/moose-introduction.md']
    ];

    function fetchReadme(config) {
        const [repo, branch = 'master', file = 'README.md'] = config;
        const url = `https://raw.githubusercontent.com/${repo}/${branch}/${file}`;
        //console.log(url);
        return get(url);
    }

    return Promise
        .all(repos.map(fetchReadme))
        .then(items => items.forEach(response => {
            const {data, config} = response;

            actions.createNode({
                readme: data,
                url: config.url,
                id: createNodeId(config.url),
                path: response.request.path,
                parent: null,
                children: [],
                internal: {
                    type: 'readme',
                    mediaType: `text/markdown`,
                    content: data,
                    contentDigest: createContentDigest(data)
                }

            });
        }));
};


// Here we're adding extra stuff to the "node" (like the slug)
// so we can query later for all blogs and get their slug
exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === 'Mdx') {
        try {
            const value = createFilePath({node, getNode});
            createNodeField({
                // Individual MDX node
                node,
                // Name of the field you are adding
                name: 'slug',
                // Generated value based on filepath with "blog" prefix
                value: `/post${value}`
            });
        } catch(e) {
        }
    }
}
