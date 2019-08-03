// @flow
import React from 'react';
import MainLayout from '../components/MainLayout';
import {Heading} from '../components/Affordance';

export default class Magnitude extends React.Component<{}> {
    render() {
        return <MainLayout>
            <Heading>Magnitude</Heading>
            <pre>{`
  x10^...
      -10 - The diameter of one hydrogen atom
       -4 - A pint in cubic meters
       -3 - Approximate volume of human blood
       -2 - Average volume of an adult human
       -1
        0
        1 - Volume of a large domestic freezer
        2
        3
        4
        5
        6
        7
        8
        9
       10
       11 - Stars in our galaxy
       12
       13
       14
       15
       16 - All the ants in the world
       17
       18 - Estimated storage size in bytes of Google, Amazon, Microsoft and Facebook.
       19 - Rubik’s cubes combinations
       20
       21
       21
       23 - Avogadro's number
       24 - Stars in the observable universe
       25 - Grains of sand that would fit in the grand canyon
       26
       27
       28
       29
       30
       31
       32
       33
       34
       35
       36
       40 - Number of sensible games of chess
       67 - Number of possible card games
      100 - A Googol
      113 - Physical size of the present universe in meters.
      120 - Shannon number (Number of possible games of chess)
      349 - 10 x 10 Rubik’s cubes combinations
        `}</pre></MainLayout>;
    }
}

