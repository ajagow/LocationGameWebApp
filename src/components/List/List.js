import styled from "styled-components";
import React from 'react';

import { darkBlue, cream } from '../base_components/colors';


export const ListStyle = styled.div`
    width: 100%;
    height: 100px;
    padding: 8px;
    background: ${darkBlue};
    color: ${cream};
    border-radius: 8px;
    position: relative;
    margin-bottom: 12px;

`;

export const ListTextContainerStyle = styled.div`
    position: absolute;
    bottom: 0;  
`;




