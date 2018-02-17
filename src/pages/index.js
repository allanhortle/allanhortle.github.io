import React from 'react';
import Link from "gatsby-link";

export default (props) => <div className="Main">
    <h1>Allan Hortle</h1>
    <ul className="List">
        <li><Link to="/spoon">Spoon</Link></li>
        <li><Link to="/decimal-time">Decimal Time</Link></li>
        <li><a href="/magnitude/">Magnitude</a></li>
        {/*<li><a href="/chord/">Chords</a></li>*/}
        <li><a href="https://bible.allanhortle.com">Bible Word Stats</a></li>
        {/*<li><a href="/posdnuos">Posdnuos</a></li>*/}
    </ul>
</div>
