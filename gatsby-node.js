// @flow
const {get} = require('axios');

exports.sourceNodes = async ({actions, createNodeId, createContentDigest}) => {
    const repos = [
        ['blueflag/enty'],
        ['blueflag/fronads'],
        ['blueflag/oose', 'master', 'packages/oose-documentation/docs/spruce/spruce-naming.md'],
        ['blueflag/oose', 'master', 'packages/oose-documentation/docs/moose/moose-introduction.md'],
        ['allanhortle/centurion']
    ];

    function fetchReadme(config) {
        const [repo, branch = 'master', file = 'README.md'] = config;
        const url = `https://raw.githubusercontent.com/${repo}/${branch}/${file}`;
        console.log(url);
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
