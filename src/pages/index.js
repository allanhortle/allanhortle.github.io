import React from 'react';
import Link from 'gatsby-link';
import {Text} from 'goose-css';
import getIn from 'unmutable/lib/getIn';

export default (props) => {
    const posts = getIn(['data', 'allMarkdownRemark', 'edges'], [])(props);
    return <div className="Main">
        <h1>Allan Hortle</h1>
        <ul className="List">
            <li><Link to="/spoon">Spoon</Link></li>
            <li><Link to="/decimal-time">Decimal Time</Link></li>
            <li><a href="/magnitude/">Magnitude</a></li>
            <li><a href="https://bible.allanhortle.com">Bible Word Stats</a></li>
            <li><a href="http://pricey-government.surge.sh/">Schedule</a></li>
        </ul>

        <h2>Repos</h2>
        <ul className="List">
            <li>
                <a href="https://github.com/blueflag/enty">Enty</a>
                <Text modifier="muted">- Normalized state management</Text>
            </li>
            <li>
                <a href="https://github.com/blueflag/fronads">Fronads</a>
                <Text modifier="muted">- Monads with consistent and beginner-friendly naming conventions</Text>
            </li>
            <li>
                <a href="https://github.com/allanhortle/spruce">Spruce</a>
                <Text modifier="muted">- CSS naming conventions that prioritize clarity & low specificity</Text>
            </li>
            <li>
                <a href="https://github.com/allanhortle/goose">Goose</a>
                <Text modifier="muted">- UI spec built on Spruce</Text>

            </li>
            <li>
                <a href="https://github.com/allanhortle/bruce">Bruce</a>
                <Text modifier="muted">- Sass utility libray</Text>
            </li>
            <li>
                <a href="https://github.com/allanhortle/centurion">Centurion</a>
                <Text modifier="muted">- Sublime Text theme</Text>
            </li>
        </ul>

        {posts.length > 0 && <h2>Posts</h2>}
        <ul className="List">
            {posts.map(({node}) => <li key={node.id}>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                <Text modifier="muted"> {node.frontmatter.date}</Text>
            </li>)}
        </ul>
    </div>;
};

export const query = graphql`
    query PostsQuery {
        allMarkdownRemark(filter: {frontmatter: {draft: {ne:true}}}) {
            edges {
                node {
                    id
                    timeToRead
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "YYYY MMM DD")
                        title
                    }
                }
            }
        }
    }
`
