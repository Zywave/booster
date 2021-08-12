import { EventBus } from "../event-bus.js";
const css = `
    :host {
      display: inline-flex;
    }
    button {
      display: inline-flex;
      align-items: center;
      position: relative;
      cursor: pointer;
      border-radius: 50%;
      padding: 0;
      background: none;
      border: 0;
    }
    button:hover .svg-container,
    button.copied .svg-container {
      fill: var(--icon-fill-hover, #fff);
      background: var(--button-background-color-hover, var(--docs-green-color));
      border-color: var(--button-background-color-hover, var(--docs-green-color));
    }
    .svg-container {
      z-index: 10;
      display: flex;
      border-radius: 50%;
      padding: 0.3rem;
      background: var(--button-background-color, #fff);
      fill: var(--icon-fill, var(--zui-gray-300));
      border: 0.1rem solid var(--button-border-color, var(--zui-gray-200));
      transition: fill 0.3s ease-in, background 0.3s ease-in, border-color 0.3s ease-in;
    }
    svg {
      width: 0.7rem;
      pointer-events: none;
    }
    .message-container {
      pointer-events: none;
      position: absolute;
      font-size: .7rem;
      text-transform: uppercase;
      letter-spacing: 0.03rem;
      color: var(--message-text-color, inherit);
      border: 1px solid var(--message-border-color, var(--docs-green-color));
      opacity: 0;
    }
    .message-container.visible {
      transition: opacity 0.5s ease-in, transform 0.3s ease-in;
      opacity: 1;
    }
    .message-container.slide-right {
      border-top-right-radius: 0.7rem;
      border-bottom-right-radius: 0.7rem;
      padding: 0.3rem 0.5rem 0.3rem 1rem;
      left: -30%;
    }
    .message-container.slide-right.visible {
      transform: translateX(calc(50% - 1rem));
    }
    .message-container.slide-left { 
      padding: 0.3rem 1rem 0.3rem 0.5rem;
      right: -30%;
      border-top-left-radius: 0.7rem;
      border-bottom-left-radius: 0.7rem;
    }
    .message-container.slide-left.visible {
      transform: translateX(calc(-50% + 1rem));
    }
`;

export class ClipboardCopyIcon extends HTMLElement {
  clipboard: string | undefined = undefined;
  icon: ClipboardCopyIcons = undefined;
  position: ClipboardCopyIconPositions = undefined;
  showCopiedMessage: boolean = false;

  connectedCallback() {
    this.clipboard = this.getAttribute("clipboard");

    if (this.getAttribute("icon") === 'link') {
      this.icon = 'link';
    } else {
      this.icon = 'copy';
    }

    if (this.getAttribute("position") === 'left') {
      this.position = 'left';
    } else {
      this.position = 'right';
    }

    EventBus.instance.addEventListener(
      "markup-loaded",
      this.render.bind(this)
    );
  }

  handleClick() {
    if (!this.showCopiedMessage) {
      navigator.clipboard.writeText(this.clipboard);
      this.showCopiedMessage = true;
      this.render();

      // for transition to actually be seen, need to slow down 1 tick
      setTimeout(() => {
        this.shadowRoot.querySelector('.message-container')?.classList.add('visible');
      }, 1);

      // re-render to default template after 4 seconds
      setTimeout(() => {
        this.showCopiedMessage = false;
        this.render();
      }, 4000);
    }
  }

  determineSvg() {
    switch(this.icon) {
      case 'link':
        return `
          <svg id="zui-link" viewBox="0 0 16 16" aria-labelledby="zui-link-desc zui-link-title">
              <title id="zui-link-title">Link</title>
              <desc id="zui-link-desc">A chain link</desc>
              <path d="M6.56 10.52L11 6.08A.75.75 0 009.94 5L5.5 9.46a.75.75 0 001.06 1.06z"></path><path d="M1.19 10.27L3.36 8.1a3.25 3.25 0 013.51-.71L5.6 8.66a1.72 1.72 0 00-1.18.5l-2.17 2.17a1.73 1.73 0 102.44 2.44l2.17-2.17a1.7 1.7 0 00.5-1.18l1.27-1.27a3.25 3.25 0 01-.71 3.51l-2.17 2.17c-3.05 2.94-7.5-1.51-4.56-4.56zM10.51 7.27a1.68 1.68 0 001.18-.5l2.17-2.17a1.71 1.71 0 000-2.44 1.73 1.73 0 00-2.44 0L9.25 4.33a1.75 1.75 0 00-.5 1.18L7.49 6.77a3.23 3.23 0 01.7-3.5l2.17-2.17a3.22 3.22 0 114.56 4.56l-2.17 2.17a3.22 3.22 0 01-3.5.7z"></path><path fill="none" d="M16 16H0V0h16z"></path>
          </svg>
        `;

      case 'copy':
      default:
        return `
          <svg id="zui-copy" viewBox="0 0 16 16" aria-labelledby="zui-copy-desc zui-copy-title">
            <title id="zui-copy-title">Copy</title>
            <desc id="zui-copy-desc">Two overlapping rectangles to indicate a copy</desc>
            <path d="M16 15.24V4.76a.76.76 0 00-.76-.76H12V.76a.76.76 0 00-.76-.76H.76A.76.76 0 000 .76v10.48a.76.76 0 00.76.76H4v3.24a.76.76 0 00.76.76h10.48a.76.76 0 00.76-.76zM1.33 10.67V1.33h9.34V4H4v6.67zm4 4V5.33h9.34v9.34z"></path>
          </svg>
        `;
    }
  }

  render() {
    const template = document.createElement("template");
    const templateStr = `
          <style>${css}</style>
          <button
              ${this.showCopiedMessage ? `class="copied"` : ``}
          >
            <div class="svg-container">${this.determineSvg()}</div>
            <div class="message-container ${this.position === 'left' ? `slide-left` : `slide-right`}">copied</div>
        </button>
      `;

    template.innerHTML = templateStr;
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
    }
    this.shadowRoot.innerHTML = templateStr;
    this.shadowRoot.querySelector('button').addEventListener('click', this.handleClick.bind(this));
  }
}
customElements.define("clipboard-copy-icon", ClipboardCopyIcon);

type ClipboardCopyIcons = 'link' | 'copy' | null;
type ClipboardCopyIconPositions = 'right' | 'left' | null;
