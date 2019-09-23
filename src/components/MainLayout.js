// @flow
import type {Node} from 'react';
import {StaticQuery, graphql} from 'gatsby';
import React from "react";
import {MDXProvider} from "@mdx-js/react"
import {Box, Flex, Fixed} from './Layout';
import {
    Button,
    Table,
    TableHeadCell,
    GlobalStyle,
    List,
    ListItem,
    Link,
    Label,
    Heading,
    SubHeading,
    Code,
    Quote,
    Text,
    Image
} from './Affordance';

type Props = {
    children: any,
    darkMode: boolean,
    setDarkMode: Function
};
export default function MainLayout(props: Props): Node {
    const {children, setDarkMode, darkMode} = props;
    const mdxComponents = {
        a: Link,
        blockquote: Quote,
        em: ({children}) => <Text as="em" textStyle="em" my={3}>{children}</Text>,
        h1: (props) => <Text as="h1" textStyle="h1" mb={3} {...props} />,
        h2: (props) => <Text as="h2" textStyle="h2" mt={4} mb={3} {...props} />,
        h3: (props) => <Text as="h3" textStyle="h3" mt={3} {...props} />,
        img: (props) => <Image maxWidth="100%" {...props} />,
        inlineCode: ({children}) => <Text as="code" textStyle="code" my={3}>{children}</Text>,
        code: ({children}) => <Text as="code">{children}</Text>,
        li: ListItem,
        p: ({children}) => <Text as="p" mb={3}>{children}</Text>,
        pre: Code,
        strong: ({children}) => <Text as="strong" textStyle="strong" my={3}>{children}</Text>,
        table: Table,
        th: TableHeadCell,
        ul: ({children}) => <List my={3}>{children}</List>,
        ol: ({children}) => <List as="ol" my={3}>{children}</List>
    };

    return <MDXProvider components={mdxComponents}>
        <Fixed top={2} left={2}>
            <Button onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'light' : 'dark'}</Button>
        </Fixed>
        <Flex display={['block', null, 'flex']} alignItems="start" pb={6}>
            <GlobalStyle />
            <Box width={[1, null, .6]} mr={[null, null, 3]} mb={3} flexShrink={0}>{children}</Box>
            <Box width={[1, null, .4]}><Sidebar/></Box>
        </Flex>
    </MDXProvider>;
}

function Sidebar(): Node {
    return <>
        <Heading mb={3}>Allan Hortle</Heading>
        <List>
            <HeadingItem to="/spoon">Spoon</HeadingItem>
            <HeadingItem to="/decimal-time">Decimal Time</HeadingItem>
            <HeadingItem to="/magnitude">Magnitude</HeadingItem>
        </List>

        <SubHeading my={3}>Repos</SubHeading>
        <List>
            <HeadingItem to="/repo/enty" label="Normalized state management">Enty</HeadingItem>
            <HeadingItem to="/repo/covcov" label="A TUI for coverage reports">covcov</HeadingItem>
            <HeadingItem to="/repo/fronads" label="Monads with beginner-friendly naming">Fronads</HeadingItem>
            <HeadingItem to="/repo/moose" label="Front-end Methodology">Moose</HeadingItem>
        </List>
        <SubHeading my={3}>Posts</SubHeading>
        <Posts/>
    </>;
}

function HeadingItem(props: {to?: string, href?: string, label?: string, children: any}): Node {
    const {to, href, label, children} = props;
    return <ListItem>
        <Flex flexDirection={['column', 'row']}>
            <Box flexGrow="1">
                <Link to={to} href={href}>{children}</Link>
            </Box>
            <Label>{label}</Label>
        </Flex>
    </ListItem>;
}

function Posts(): Node {
    return <StaticQuery
        query={graphql`
            query {
                allFile(filter: {sourceInstanceName: {eq: "posts"}}) {
                    edges {
                        node {
                            childMdx {
                                fields {slug}
                                frontmatter {
                                    title
                                    date(formatString: "YYYY-MM-DD")
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={({allFile}) => {
            return <List>
                {allFile.edges.map(({node}) => {
                    const {frontmatter, fields} = node.childMdx;
                    return <HeadingItem to={fields.slug} label={frontmatter.date}>{frontmatter.title}</HeadingItem>;
                })}
            </List>;
        }}
    />;
}


