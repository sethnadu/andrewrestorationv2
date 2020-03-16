import {keyframes} from 'styled-components';

export const keyFrameImage = keyframes `
    0% {width: 0 }
    45% {width: 0}
    100% {width: 100%}
`

export const keyFrameText = keyframes `
    from {opacity: 0 }
    to {opacity: 1}

`

export const keyFrameSubTitles = keyframes `
    0% {opacity: 0 }
    60% {opacity: 0}
    100% {opacity: 1}
`

export const keyFrameLink = keyframes `
    0% {opacity: 0 }
    40% {opacity: 0}
    70% {opacity: 1; font-size: 1.2rem}
    85% {font-size: 1.4rem}
    100% {font-size: 1.2rem}
`