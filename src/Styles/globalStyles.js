import { injectGlobal } from "styled-components";
import reset from "styled-reset";
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Maven+Pro:400,500');
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
  ${reset};
  body{
<<<<<<< HEAD
    font-family: 'Maven Pro', sans-serif;
=======
    font-family: 'Spoqa Han Sans', 'Sans-serif';
>>>>>>> 555ee6a4ebdbcefd68aaced9d25e7f32ead07d67
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
