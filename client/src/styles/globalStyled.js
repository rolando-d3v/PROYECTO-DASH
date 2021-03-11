import styled, { css, createGlobalStyle } from "styled-components";

//STYLED GLOBALES
const GlobalStyle = createGlobalStyle`
* {
    font-family: "Poppins", sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;

}
 //funcion para remover el scroll del body
.removeScrollBody {
  overflow: hidden;
}
//quita el scroll de un div o box
.detscroll-hidden::-webkit-scrollbar {
  display: none;
}

`;
export default GlobalStyle;

//////////////////





// export const Container = styled.div`
//   z-index: 1;
//   width: 100%;
//   /* max-width: 1300px; */
//   max-width: 90%;
//   margin-right: auto;
//   margin-left: auto;
//   padding-right: 50px;
//   padding-left: 50px;

//   @media screen and (max-width: 991px) {
//     max-width: 98%;
//     padding-right: 20px;
//     padding-left: 20px;
//   }
// `;

// //button con props
// export const Buttonx = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0.5em 1em;
//   padding: 0.25em 1em;

//   ${(props) =>
//     props.primary &&
//     css`
//       background: palevioletred;
//       color: white;
//     `}
// `;
