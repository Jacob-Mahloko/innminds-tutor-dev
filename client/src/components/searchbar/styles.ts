import { createStyles,css } from "antd-style";

export const useStyles = createStyles(()=>({
    container:
    css`
       
    `,
    FormStyle:
    css(`
        width:100%;
        justify-content:center;
        margin-top:20px;

        @media(max-width:800px){
            
        }
    `),

    searchInput:
    css
    `
    width:500px;
        @media(max-width:800px){
            width:300px;
            margin-bottom:10px;
        }
    `
}));