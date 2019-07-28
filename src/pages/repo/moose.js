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
        <h1>Moose</h1>
        <div dangerouslySetInnerHTML={{__html: props.data.readme.childMarkdownRemark.html}} />
    </MainLayout>;
};

export const pageQuery = graphql`query {
    readme(path:{eq:"/blueflag/oose/master/packages/oose-documentation/docs/moose/moose-introduction.md"}) {
        childMarkdownRemark {
            html
        }
    }
}`;
