import styled,{css} from 'styled-components';

export const Button=styled.button`
color: white;
border:none;
cursor: pointer;
${props => props.primary && css`
    background: blue;
      `
}
${
    props=>props.sortByName&&css`
    background-color:grey;
    `
}

${
    props=>props.sortByPopularity&&css`
    background-color:aqua;
    `
}
${
    props=>props.delete&&css`
    background-color:red;
    `
}
`