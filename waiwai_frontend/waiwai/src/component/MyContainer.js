import React from 'react';
import { styled } from '@material-ui/styles';
import {Container} from '@material-ui/core/';

import HotelsContainer from '../container/HotelsContainer'
import Image from '../images/kisspng-hawaii-oahu-maui-map-island-hawaii-island-5ae1a9a6c2b2d3.3751889015247384707975.png'

const MyContainer = styled(Container)({
    height: 4000,
    backgroundImage: `url(${Image})`
});

export default function StyledComponents() {
  return <MyContainer></MyContainer>;
}