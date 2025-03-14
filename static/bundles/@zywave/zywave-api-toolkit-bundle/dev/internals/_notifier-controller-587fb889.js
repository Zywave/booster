class NotifierController {
  #root;
  #parentSelector;
  #notifiers;
  constructor(root, parentSelector = null) {
    this.#root = root;
    this.#parentSelector = parentSelector;
    this.#notifiers = [];
  }
  show(type, header, message, duration) {
    const notifier = document.createElement("zui-notifier");
    notifier.type = type;
    notifier.message = message;
    notifier.header = header;
    notifier.parentSelector = this.#parentSelector;
    if (!(duration === undefined || duration === null)) {
      notifier.duration = duration;
    }
    notifier.addEventListener("close", () => {
      this.#notifiers = this.#notifiers.filter(n => n !== notifier);
      this.#root.removeChild(notifier);
    });
    this.#root.appendChild(notifier);
    notifier.show();
    this.#notifiers.push(notifier);
  }
  resposition() {
    for (const notifier of this.#notifiers) {
      notifier.show();
    }
  }
}

export { NotifierController };
