import css from 'styled-jsx/css';

export const style = css`
  .container {
  }

  blockquote {
    display: block;
    border-width: 2px 0;
    border-style: solid;
    border-color: #eee;
    padding: 1.5em 0 0.5em;
    margin: 1.5em 0;
    position: relative;
    font-style: italic;
  }
  blockquote:before {
    position: absolute;
    top: 0em;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    width: 3rem;
    height: 2rem;
    font: 6em/1.08em 'PT Sans', sans-serif;
    color: #666;
    text-align: center;
  }
  blockquote:after {
    content: '\2013 \2003'attr(cite);
    display: block;
    text-align: right;
    font-size: 0.875em;
  }
`;
