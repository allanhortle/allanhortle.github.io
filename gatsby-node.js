const path = require('path');
const {createFilePath} = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const {createNodeField} = boundActionCreators
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({node, getNode, basePath: `pages`});
        createNodeField({
            node,
            name: `slug`,
            value: `/post${slug}`,
        });
    }
};


exports.createPages = ({graphql, boundActionCreators}) => {
    const {createPage} = boundActionCreators
    return new Promise((resolve, reject) => {
        graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            draft
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
        `).then(result => {
            result.data.allMarkdownRemark.edges.forEach(({node}) => {
                if(node.frontmatter.draft) return;
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/PostTemplate.js`),
                    context: {
                        slug: node.fields.slug,
                    },
                })
            })
            resolve()
        })
    })
};
