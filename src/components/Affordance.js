// @flow
import styled from 'styled-components';
import {space, color, layout, flexbox, flexGrow} from 'styled-system';


export const List = styled.ul`
    margin: 1em 0;
    padding-left: 1.8em;
    position: relative;
`;
export const ListItem= styled.li`
    &:before {
        content: '*';
        position: absolute;
        left: .6em;
    }
`;

