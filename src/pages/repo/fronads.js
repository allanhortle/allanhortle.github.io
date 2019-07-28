// @flow
import type {Node} from 'react';
import React from 'react';
import MainLayout from '../../components/MainLayout';
import {graphql} from 'gatsby';

type Props = {
    data: {
        readme: {childMarkdownRemark: {html: string}}
    }
};

export default function(props: Props): Node {
    return <MainLayout>
        <div dangerouslySetInnerHTML={{__html: props.data.readme.childMarkdownRemark.html}} />
    </MainLayout>;
};

export const pageQuery = graphql`
query fronads {
    readme(path:{eq:"/blueflag/fronads/master/README.md"}) {
      childMarkdownRemark {
          html
      }
    }
}
`;
