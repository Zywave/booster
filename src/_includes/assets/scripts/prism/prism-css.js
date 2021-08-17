export const css = `
  /* PrismJS 1.23.0
  https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+powershell+scss+smali+typescript&plugins=line-numbers */
  /**
   * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
   * Based on https://github.com/chriskempson/tomorrow-theme
   * @author Rose Pritchard
   */

  code[class*="language-"],
  pre[class*="language-"] {
    color: var(--code-basic-text, var(--zui-gray-200));
    background: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1rem;
    margin: 0;
    overflow: auto;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: var(--code-background, var(--docs-primary-color));
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: .1em;
    border-radius: .3em;
    white-space: normal;
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #999;
  }

  .token.punctuation {
    color: var(--code-brackets, var(--zui-blue-100));
  }

  .token.tag,
  .token.namespace,
  .token.deleted {
    color: var(--code-tag, var(--docs-yellow-color));
  }

  .token.attr-name {
    color: var(--code-attr-name, var(--docs-green-color));
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean,
  .token.number,
  .token.function {
    color: #f08d49;
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: var(--code-property, var(--docs-orange-color));
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: #cc99cd;
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: var(--code-attribute-value, var(--docs-orange-color));
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: #67cdcc;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
  }

  pre[class*="language-"].line-numbers {
    position: relative;
    padding-left: 3.2rem;
    counter-reset: linenumber;
  }

  pre[class*="language-"].line-numbers > code {
    position: relative;
    white-space: inherit;
  }

  .line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: -4em;
    width: 3em; /* works for line-numbers below 1000 lines */
    letter-spacing: -1px;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

      .line-numbers-rows > span {
        display: block;
        counter-increment: linenumber;
        opacity: 0.5;
      }

          .line-numbers-rows > span:before {
            content: counter(linenumber);
            color: #999;
            display: block;
            padding-right: 0.8em;
            text-align: right;
          }
`;
