// @flow
import type {Node} from 'react';
import React, {Children} from "react";
import Link from 'gatsby-link';
import Label from 'react-goose/lib/Label';
import Grid from 'react-goose/lib/position/Grid';
import GridItem from 'react-goose/lib/position/GridItem';
import {ThemeProvider} from 'styled-components';
import Theme from './Theme';
import {Box, Flex} from './Layout';
import {List, ListItem} from './Affordance';

type Props = {
    children: any
};

export default function MainLayout(props: Props): Node {
    const {children} = props;

    return <ThemeProvider theme={Theme}>
        <Flex display={['block', 'flex']} alignItems="start">
            <Box width={[1, .4]}><Sidebar/></Box>
            <Box width={[1, .6]} ml={[,3]}>{children}</Box>
        </Flex>
    </ThemeProvider>;
}

function Sidebar(): Node {
    return <>
        <h1>Allan Hortle</h1>
        <List>
            <ListItem><Link to="/spoon">Spoon</Link></ListItem>
            <ListItem><Link to="/decimal-time">Decimal Time</Link></ListItem>
            <ListItem><Link to="/magnitude">Magnitude</Link></ListItem>
            <ListItem><a href="https://bible.allanhortle.com">Bible Word Stats</a></ListItem>
            <ListItem><a href="http://pricey-government.surge.sh/">Schedule</a></ListItem>
        </List>

        <h2>Repos</h2>
        <List>
            <ListItem><Link to="/repo/enty">Enty</Link><Label>- Normalized state management</Label></ListItem>
            <ListItem><Link to="/repo/fronads">Fronads</Link><Label>- Monads with consistent and beginner-friendly naming conventions</Label></ListItem>
            <ListItem><Link to="/repo/moose">Moose</Link><Label>- Front-end Methodology</Label></ListItem>
            <ListItem><Link to="/repo/spruce">Spruce</Link><Label>- CSS naming conventions that prioritize clarity & low specificity</Label></ListItem>
            <ListItem><Link to="/repo/centurion">Centurion</Link><Label>- Sublime Text theme</Label></ListItem>
        </List>
        <h2>Posts</h2>
    </>;
}

