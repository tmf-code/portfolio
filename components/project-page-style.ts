import css from 'styled-jsx/css';

export const style = css`
  .container {
    padding-left: 4%;
    padding-right: 4%;
    width: 100%;
    color: black;
    font-family: sans-serif;
    font-size: 20px;
    text-align: justify;
  }

  p {
    margin-bottom: 1em;
  }

  ::selection {
    background: inherit;
    color: turquoise;
  }

  h2 {
    font-style: bold;
  }

  .date,
  .exhibited {
    font-size: 22px;
    margin-bottom: 1em;
  }

  .exhibited {
    font-style: italic;
  }

  a {
    text-decoration: none;
    color: orange;
  }

  a:hover,
  a:hover::selection {
    color: pink;
  }

  a::selection {
    color: hotpink;
  }
`;
