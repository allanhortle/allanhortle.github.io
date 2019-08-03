// @flow
import type {Node} from 'react';
import React from "react";
import {ThemeProvider} from 'styled-components';
import {MDXProvider} from "@mdx-js/react"
import Theme from './Theme';
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
    children: any
};

export default function MainLayout(props: Props): Node {
    const {children} = props;
    const mdxComponents = {
        a: Link,
        blockquote: Quote,
        code: ({children}) => <Text as="code" textStyle="code" my={3}>{children}</Text>,
        em: ({children}) => <Text as="em" textStyle="em" my={3}>{children}</Text>,
        h1: (props) => <Text as="h1" textStyle="h1" mb={3} {...props} />,
        h2: (props) => <Text as="h2" textStyle="h2" mt={4} mb={3} {...props} />,
        h3: (props) => <Text as="h3" textStyle="h3" mt={3} {...props} />,
        img: (props) => <Image display="block" width="100%" {...props}/>,
        inlineCode: ({children}) => <Text as="code" textStyle="code" my={3}>{children}</Text>,
        li: ListItem,
        p: ({children}) => <Text as="p" mb={3}>{children}</Text>,
        pre: Code,
        strong: ({children}) => <Text as="strong" textStyle="strong" my={3}>{children}</Text>,
        table: Table,
        th: TableHeadCell,
        ul: ({children}) => <List my={3}>{children}</List>
    };

    return <ThemeProvider theme={Theme}>
        <MDXProvider components={mdxComponents}>
            <Flex display={['block', null, 'flex']} alignItems="start">
                <GlobalStyle />
                <Box width={[1, null, .4]}><Sidebar/></Box>
                <Box width={[1, null, .6]} ml={[null, null, 3]}>{children}</Box>
            </Flex>
        </MDXProvider>
    </ThemeProvider>;
}

function Sidebar(): Node {
    return <>
        <Heading mb={3}>Allan Hortle</Heading>
        <List>
            <ListItem><Link to="/spoon">Spoon</Link></ListItem>
            <ListItem><Link to="/decimal-time">Decimal Time</Link></ListItem>
            <ListItem><Link to="/magnitude">Magnitude</Link></ListItem>
            <ListItem><Link href="https://bible.allanhortle.com">Bible Word Stats</Link></ListItem>
            <ListItem><Link href="http://pricey-government.surge.sh/">Schedule</Link></ListItem>
        </List>

        <SubHeading my={3}>Repos</SubHeading>
        <List>
            <ListItem><Link to="/repo/enty">Enty</Link><Label> - Normalized state management</Label></ListItem>
            <ListItem><Link to="/repo/fronads">Fronads</Link><Label> - Monads with consistent and beginner-friendly naming conventions</Label></ListItem>
            <ListItem><Link to="/repo/moose">Moose</Link><Label> - Front-end Methodology</Label></ListItem>
            <ListItem><Link to="/repo/spruce">Spruce</Link><Label> - CSS naming conventions that prioritize clarity & low specificity</Label></ListItem>
            <ListItem><Link to="/repo/centurion">Centurion</Link><Label> - Sublime Text theme</Label></ListItem>
        </List>
        <SubHeading my={3}>Posts</SubHeading>
    </>;
}

