// @flow
import type {Node} from 'react';
import {StaticQuery, graphql} from 'gatsby';
import React from "react";
import {MDXProvider} from "@mdx-js/react"
import {Box, Flex} from './Layout';
import {
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
    setDarkMode: Function,
    darkMode: boolean
};

export default function MainLayout(props: Props): Node {
    const {children, setDarkMode, darkMode} = props;
    const mdxComponents = {
        a: Link,
        blockquote: Quote,
        em: ({children}) => <Text as="em" textStyle="em" my={3}>{children}</Text>,
        h1: (props) => <Heading position="sticky" top={0} as="h1" mb={3} {...props} />,
        h2: (props) => <SubHeading position="sticky" top="18px" as="h2" mt={4} mb={3} {...props} />,
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
        <Flex display={['block', null, 'flex']} height="100vh" ml={2} mr={2} pt={2}>
            <GlobalStyle />
            <Box flex="0 0 auto" mb={3} mr={[null, null, 3]}><Sidebar/></Box>
            <Box flex="0 1 auto" width="50rem" overflow="auto" pb={7}>{children}</Box>
        </Flex>
    </MDXProvider>;
}

function Sidebar(): Node {
    return <>
        <Heading mb={3} pl={3} textAlign="left">Allan Hortle</Heading>
        <List>
            <HeadingItem to="/spoon">Spoon</HeadingItem>
            <HeadingItem to="/decimal-time">Decimal Time</HeadingItem>
            <HeadingItem to="/magnitude">Magnitude</HeadingItem>
            <HeadingItem href="https://bible.allanhortle.com">Bible Word Stats</HeadingItem>
            <HeadingItem href="https://boardgameonepagers.com">Board Game One Pagers</HeadingItem>
        </List>

        <SubHeading my={3}>Repos</SubHeading>
        <List>
            <HeadingItem to="/repo/enty" label="Normalized state management">Enty</HeadingItem>
            <HeadingItem to="/repo/pnut" label="Flexible React Charting">Pnut</HeadingItem>
            <HeadingItem to="/repo/stringdate" label="Only Dates; only strings">Stringdate</HeadingItem>
            <HeadingItem to="/repo/jsx" label="Sublime Text - Syntax">JSX</HeadingItem>
            <HeadingItem to="/repo/centurion" label="Submite Text - Theme">Centurion</HeadingItem>
            <HeadingItem to="/repo/puffin" label="Dotfiles">Puffin</HeadingItem>
            <HeadingItem to="/repo/covcov" label="A TUI for coverage reports">covcov</HeadingItem>
            <HeadingItem to="/repo/hubgit" label="A TUI for github">hubgit</HeadingItem>
            <HeadingItem to="/repo/pipwerks-scorm-api" label="An wrapper for scorm">scorm-api-wrapper</HeadingItem>
            <HeadingItem to="/repo/fronads" label="beginner-friendly monads">Fronads</HeadingItem>
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
                    return <HeadingItem key={fields.slug} to={fields.slug} label={frontmatter.date}>{frontmatter.title}</HeadingItem>;
                })}
            </List>;
        }}
    />;
}


