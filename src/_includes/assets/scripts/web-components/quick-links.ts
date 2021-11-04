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

    nav {
      margin: 0 1rem 0 0.2rem;
    }

    nav ul {
      margin: 0;
      padding: 0;
      border-left: 1px solid var(--zui-gray-200);
    }

    nav ul ul {
      border: 0;
      padding: 0;
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

    nav ul ul a {
      padding-left: 2rem;
    }

    nav ul ul ul a {
      padding-left: 3rem;
    }

    nav ul ul ul ul a {
      padding-left: 4rem;
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
    context: QuickLinksTypes["context"] = '';
    headings: QuickLinksTypes["headings"] = '';
    #orderedList: HeaderTree[] = [];

    static get observedAttributes() {
      return ["context", "headings"];
    }

    connectedCallback() {
      this.context = this.getAttribute("context");
      this.headings = this.getAttribute("headings");
      this.#buildHeaderList();
      this.#render();
      EventBus.instance.addEventListener(
        "markup-loaded",
        () => {
          this.#buildHeaderList();
          this.#render();
        }
      );
    }

    attributeChangedCallback(name: string, oldVal: string, newVal: string) {
      if (oldVal !== newVal) {
        this[name as keyof QuickLinksTypes] = newVal;
      }
    }

    get #orderedHeadings() {
      return this.headings.replaceAll(' ', '').split(',').sort();
    }

    get #getHeadingsElements(): HTMLHeadingElement[] {
      const queryWithIdAttr = this.headings
        .split(',')
        .map(item => `${this.context} ${item}[id]`)
        .join(', ');
      return Array.from(document.querySelectorAll(queryWithIdAttr));
    }

    get #getUrlNoHash() {
      return window.location.href.includes("#") ? window.location.href.split("#")[0] : window.location.href;
    }

    #doesUrlHaveHash(hash: string) {
      return window.location.href.split('#')[1] === hash ?? false;
    }

    #buildHeaderList() {
      this.#orderedList = [];

      function getHeadingLevel(element: HTMLHeadingElement) {
          return Number(element.tagName.split("H")[1]);
      }

      function buildHeaderTree(currentHeader: HTMLHeadingElement, restHeaders: HTMLHeadingElement[]): HeaderTree {
        const result: HeaderTree = {
            element: currentHeader,
            children: []
        };

        const currentLevel = getHeadingLevel(currentHeader);

        for (let i = 0; i < restHeaders.length; i++) {
            const h = restHeaders[i];
            const hLevel = getHeadingLevel(h);
            if (hLevel <= currentLevel) { 
                break;
            } else if (hLevel === currentLevel + 1) {
                result.children.push(buildHeaderTree(h, restHeaders.slice(i + 1)));
            }
        }
        return result;
      }

      for (let i = 0; i < this.#getHeadingsElements.length; i++) {
        const h = this.#getHeadingsElements[i];

        if (getHeadingLevel(h) === Number(this.#orderedHeadings[0].split('h')[1])) {
            this.#orderedList.push(buildHeaderTree(h, this.#getHeadingsElements.slice(i + 1)));
        }
      }
    }

    #renderListItem(item: HeaderTree) {
      let result = `
        <li ${this.#doesUrlHaveHash(item.element.id)
          ? `aria-current="current"`
          : ``}
        >
          <a href="${this.#getUrlNoHash}#${item.element.id}">${item.element.innerText}</a>
        </li>
      `;

      if (item.children.length) {
        result += `<li>
          <ul>
            ${item.children.map(child => this.#renderListItem(child)).join('')}
          </ul>
        </li>`;
      }
      return result;
    }

    #updatedRender() {
      return setTimeout(() => {
        this.#render();
      }, 50);
    }

    #render() {
      if (this.#getHeadingsElements.length === 0) {
        return;
      }
      const template = document.createElement("template");
      const templateStr = `
        <style>${css}</style>
        <nav>
          <ul>
            ${this.#orderedList
              .map((item: HeaderTree) => this.#renderListItem(item))
              .join('')
            }
          </ul>
        </nav>
      `;
      template.innerHTML = templateStr;
      if (!this.shadowRoot) {
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
      } else {
        (this.shadowRoot as any).replaceChildren(template.content.cloneNode(true));
      }
      const anchors = this.shadowRoot.querySelectorAll("a");
      anchors.forEach((a) => a.addEventListener("click", this.#updatedRender.bind(this)));
    } 
  }
);

type HeaderTree = {
  element: HTMLHeadingElement,
  children: HeaderTree[];
}

interface QuickLinksTypes {
  context: string,
  headings: string,
}