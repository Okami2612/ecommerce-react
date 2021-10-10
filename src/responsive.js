import {css} from 'styled-components'

export const mobile = (porps)=>{
    return css`
        @media only screen and (max-width: 450px){
            ${porps}
        }
    `;
}

export const tablet = (porps)=>{
    return css`
        @media only screen and (max-width: 880px){
            ${porps}
        }
    `;
}