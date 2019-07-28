// @flow
import React from 'react';
import MainLayout from '../../components/MainLayout';
import {graphql} from 'gatsby';

type Props = {
    data: {
        readme: {childMarkdownRemark: {html: string}}
    }
};
export default function(props: Props) {
    return <MainLayout>
        <div dangerouslySetInnerHTML={{__html: props.data.readme.childMarkdownRemark.html}} />
    </MainLayout>;
};

export const pageQuery = graphql`query {
    readme(path:{eq:"/allanhortle/centurion/master/README.md"}) {
        childMarkdownRemark {
            html
        }
    }
}`;
