import React from 'react';

export default class PostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        return <div className="Main wrapper Typography">
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>;
    }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
