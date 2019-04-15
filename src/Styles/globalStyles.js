import { injectGlobal } from "styled-components";
import reset from "styled-reset";
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Maven+Pro:400,500');
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
  ${reset};
  body{
    font-family: 'Spoqa Han Sans', 'Sans-serif';
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
