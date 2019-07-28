// @flow
import styled from 'styled-components';
import {space, color, layout, flexbox, flexGrow} from 'styled-system';


export const Box = styled.div({}, space, color, layout, flexGrow);

export const Flex = styled.div({display: 'flex'}, space, color, layout, flexbox);

