import { EventBus } from "../event-bus.js";

const css = `
    :host {
        order: 1;
        position: sticky;
        right: 0;
        top: 3rem;
        flex-shrink: 0;
        margin: 0 0 0 1.25rem; /* 20 / 16 */
        width: 200px;
        transition: margin 100ms ease-in-out;
    }

    @media screen and (min-width: 64em) {
      :host {
        margin: 0 0 0 1.875rem; /* 30 / 16 */
      }
    }
  
    @media screen and (min-width: 64em) {
      :host {
        margin: 0 0 0 2.5rem; /* 40 / 16 */
      }
    }
  
    @media screen and (min-width: 80em) {
      :host {
        margin: 0 0 0 3.125rem; /* 50 / 16 */
      }
    }

    nav ul {
        padding: 0.7rem 0;
        border-left: 1px solid var(--zui-gray-200);
    }

    nav li {
        margin: 0;
        list-style-type: none;
    }

    nav a {
        display: flex;
        align-items: center;
        margin-left: -0.15rem;
        padding: 0.5rem 0 0.5rem 1rem;
        line-height: 1.4;
        text-decoration: none;
        color: var(--zui-gray);
        border-left: 3px solid transparent;
        transition: color .3s ease-in-out border-color .3s ease-in-out;
    }

    nav a:hover {
        color: var(--zui-gray-300);
    }

    nav li[aria-current="current"] a {
        color: var(--docs-orange-color);
        font-weight: 600;
        border-color: var(--docs-orange-color);
    }

    nav li[aria-current="current"] a:hover {
        color: hsl(var(--docs-orange-color-h), var(--docs-orange-color-s), 65%);
        border-color: hsl(var(--docs-orange-color-h), var(--docs-orange-color-s), 65%);
    }
`;

customElements.define(
  "quick-links",
  class QuickLinks extends HTMLElement {
    query: QuickLinksTypes["query"] = null;
    hierarchical = false;

    static get observedAttributes() {
      return ["query", "hierarchical"];
    }

    connectedCallback() {
      this.query = this.getAttribute("query");
      this.hierarchical = this.getAttribute("hierarchical") ? true : false;
      this.render();
      EventBus.instance.addEventListener(
        "markup-loaded",
        this.render.bind(this)
      );
    }

    attributeChangedCallback(name: string, oldVal: string, newVal: string) {
      if (oldVal !== newVal) {
        this[name as keyof QuickLinksTypes] = newVal;
      }
    }

    getQueriedElements() {
      const queryWithIdAttr = this.query
        .split(',')
        .map(item => `${item}[id]`)
        .join(', ');
      return Array.from(document.querySelectorAll(queryWithIdAttr));
    }

    getUrlNoHash() {
      return window.location.href.includes("#") ? window.location.href.split("#")[0] : window.location.href;
    }

    doesUrlHaveHash(hash: string) {
      return window.location.href.split('#')[1]?.includes(hash) ?? false;
    }

    updatedRender() {
      return setTimeout(() => {
        this.render();
      }, 50);
    }

    renderListItem(element: Element) {
      return `<li ${this.doesUrlHaveHash(element.id) ? `aria-current="current"` : ``}>
        <a href="${this.getUrlNoHash()}#${element.id}">${element.childNodes[0].textContent}</a>
      </li>`;
    }

    render() {
      if (this.getQueriedElements().length === 0) {
        return;
      }

      const template = document.createElement("template");
      const templateStr = `
        <style>${css}</style>
        <nav>
          <ul>
            ${this.hierarchical ? (`<div>hierarchy</div>`) : ''}
            ${this.getQueriedElements().map(
              (element, index, array) =>
              {
                if (this.hierarchical) {
                  const currVal = element?.tagName.split('').pop();
                  const prevVal = array[index - 1]?.tagName.split('').pop();
                  // possible values: 1,2,3,4,5,6
                  // 2 - 3
                  console.log('ding');
                  console.log(currVal);
                  console.log(prevVal);
                  console.log(currVal < prevVal);
                  if (currVal === prevVal || !prevVal) {
                    return this.renderListItem(element);
                  } else if (currVal < prevVal) {
                    return `<li>
                      <ul>
                        ${this.renderListItem(element)}
                      </ul>
                    </li>`;
                  }
                }
                
                return this.renderListItem(element);
              }
            ).join('')}
            </ul>
          </nav>
        `;

      template.innerHTML = templateStr;
      if (!this.shadowRoot) {
        this.attachShadow({ mode: "open" });
      }
      this.shadowRoot.innerHTML = templateStr;
      const anchors = this.shadowRoot.querySelectorAll("a");
      anchors.forEach((a) => a.addEventListener("click", this.updatedRender.bind(this)));
    }
  }
);

interface QuickLinksTypes {
  query: string | null,
}