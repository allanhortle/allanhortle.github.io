import React from 'react';
import MainLayout from '../../components/MainLayout';
import {graphql} from 'gatsby';

export default function(props) {
    return <MainLayout>
        <div dangerouslySetInnerHTML={{__html: props.data.githubReadme.childMarkdownRemark.html}} />
    </MainLayout>;
};

export const pageQuery = graphql`
query oose {
    githubReadme(title: { eq: "oose" }) {
        childMarkdownRemark {
            timeToRead
            html
            headings {
                value
                depth
            }
        }
    }
}
`;
