import React, {Children} from "react";
import Link from 'gatsby-link';
import Label from 'react-goose/lib/Label';
import Box from 'react-goose/lib/position/Box';
import Grid from 'react-goose/lib/position/Grid';
import GridItem from 'react-goose/lib/position/GridItem';

export default function MainLayout(props) {
    const {children} = props;
    return <div className="Main">
        <Grid>
            <GridItem>
                <Box>
                    <h1>Allan Hortle</h1>
                    <ul className="List">
                        <li><Link to="/spoon">Spoon</Link></li>
                        <li><Link to="/decimal-time">Decimal Time</Link></li>
                        <li><Link to="/magnitude">Magnitude</Link></li>
                        <li><a href="https://bible.allanhortle.com">Bible Word Stats</a></li>
                        <li><a href="http://pricey-government.surge.sh/">Schedule</a></li>
                    </ul>

                    <h2>Repos</h2>
                    <ul className="List">
                        <li>
                            <Link to="/repo/enty">Enty</Link>
                            <Label>- Normalized state management</Label>
                        </li>
                        <li>
                            <Link to="/repo/fronads">Fronads</Link>
                            <Label>- Monads with consistent and beginner-friendly naming conventions</Label>
                        </li>
                        <li>
                            <Link to="/repo/oose">Oose</Link>
                            <Label>- Normalized state management</Label>
                        </li>
                        <li>
                            <a href="https://github.com/allanhortle/spruce">Spruce</a>
                            <Label>- CSS naming conventions that prioritize clarity & low specificity</Label>
                        </li>
                        <li>
                            <a href="https://github.com/allanhortle/goose">Goose</a>
                            <Label>- UI spec built on Spruce</Label>

                        </li>
                        <li>
                            <a href="https://github.com/allanhortle/bruce">Bruce</a>
                            <Label>- Sass utility libray</Label>
                        </li>
                        <li>
                            <a href="https://github.com/allanhortle/centurion">Centurion</a>
                            <Label>- Sublime Text theme</Label>
                        </li>
                    </ul>
                    <h2>Posts</h2>
                </Box>
            </GridItem>
            <GridItem modifier="2">
                {Children.count(children) > 0 && <Box>{children}</Box>}
            </GridItem>
        </Grid>
    </div>;
}

