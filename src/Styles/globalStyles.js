import { injectGlobal } from "styled-components";
import reset from "styled-reset";
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Maven+Pro:400,500');
  ${reset};
  body{
    font-family: 'Maven Pro', sans-serif;
    background-color: white;
  }
  a{
      color:inherit;
  }
  main {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
  }
`;
