import { createStyles,css } from "antd-style";

export const useStyles = createStyles(()=>({
    container:
    css`
      height:500px;

      @media (max-width: 768px){
        height:300px;
      }
    `
}));