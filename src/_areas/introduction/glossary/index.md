---
layout: documentation
title: Glossary
---
## Design terminology

Stay tuned, this page is actively being built.

## Developer terminology

### Fundamentals

#### HTML
HTML (HyperText Markup Language) is a markup language that represents how content is to be displayed to an end user. It is independent of any of the other "web languages", e.g. CSS and JavaScript, and has its own rules. It embraces a declarative model.

See also:
- <https://developer.mozilla.org/en-US/docs/Web/HTML>

#### DOM 
The DOM (and the DOM APIs) is the in-memory representation of the HTML markup being rendered to the end user. It additionally is a collection of JavaScript APIs that enable you, the developer, to modify the document programatically. It has all of the advanced power afforded by JavaScript, whereas HTML is intentionally quite simple.

See also:
- <https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction>

#### Attributes
Attributes are the HTML-based mechanism to pass state, variations, etc. to a given HTML element. 

Attributes come with some simple rules:
* The value of an attribute must be a string, e.g. `<my-element value="some text">`
  * For complex objects being bound via an attribute, some sort of string representation of your object must be provided (e.g. a JSON string).
* Boolean attributes are represented by their existence, not the value assigned to them. For example, `<my-element disabled="false">`, `<my-element disabled>`, and `<my-element disabled="bananas">` are all equivalent.

#### Properties
Properties are the DOM equivalent to attributes. They are the JavaScript-based mechanism that allows you to modify an HTML element programmatically.

The name of an attribute and the name of a property do not have to be the same! For example, the global attribute name for allowing an element's contents to be edited is [`contenteditable`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable), but the property name is [`contentEditable`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement./contentEditable).

#### Events
Events are a staple of web development. They enable best-practices in component-driven designs (e.g. parents can pass data down to children, and children can emit events for parents to observe and react to).

When it comes to web components, you'll likely encounter the [`CustomEvent`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) object. Most importantly, you'll need to utilize the [`detail`](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail) property of those events to extract payload information, if any. The `detail` property can have any shape depending on how a component is using it, so be sure to understand how data is communicated to you!

See also:
- <https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events>
- <https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent>
- <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener>
- <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener>

### Web Components

Web Components are a collection of native Web Platform APIs that allow web developers to produce custom HTML elements that can be used in any web-based system.
Notably, these are completely framework-agnostic and can be safely used anywhere HTML is the primary medium.

See also:
- <https://developer.mozilla.org/en-US/docs/Web/Web_Components>

#### Shadow DOM
Shadow DOM serves as an encapsulation layer, where web component authors can safely architect their own HTML and CSS without worrying about external styles.
Shadow DOM affords our component libraries a lot of freedom and safety.

See also: 
* <https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM>

##### ShadowRoot
Related to Shadow DOM, `ShadowRoot` is the mechanism through which Shadow DOM is distributed. On custom elements that use Shadow DOM, for example, you may see `element.shadowRoot` as a property.  

<docs-note>**Caution!** Do NOT interact with the shadowRoot of components out of your control. The internals are not considered a part of a components API and are assumed safe to change./docs-note>

See also: 
* <https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot>

##### Slots
Another feature related to Shadow DOM, slots are the tool used to allow your content to be rendered in particular locations inside a components Shadow DOM. 

You may see `<slot>` elements in our own code. These are the way for us to provide hooks for you to render your content in the best way. For you to do that, you'll either omit the `slot` attribute (which means content will render in the "default" or "unnamed" slot) or use the `slot` attribute, e.g. `<div slot="trigger">Show</div>`, to render the content in the right location.

<docs-note>**Note:** Only the immediate children of the wrapping component can be "slotted". Grandchildren are not able to be placed in arbitrary slots.</docs-note>

See also:
* <https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot>
* <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot>
* <https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots>

#### Custom CSS Properties
While not strictly a part of Web Components (you can use these for all sorts of purposes!), Custom CSS Properties are a great hook for you to be able to hook into a components Shadow DOM in a stable, supported way to provide your own styles.

Custom CSS Properties (sometimes refererred to as "CSS Variables") allow us to expose very explicit CSS properties to style (for example, say a button's `background-color`) and let you do so without being able to indiscriminately change other styles, say `border-radius`.

Custom CSS Properties all start with two dashes, e.g. `--my-css-prop`. And to extrapolate the calculated value of a Custom CSS Property in your own styles, you could "unwrap" it with the `var()` function, e.g. `display: var(--my-css-prop);`

See also:
* <https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties>
* <https://developer.mozilla.org/en-US/docs/Web/CSS/--*>

#### CSS Shadow Parts
CSS Shadow Parts are a way for component authors to expose more than just individual CSS properties to style, but rather an entire HTML element hidden within the Shadow DOM. It's easiest (and correct!) to think of these as custom pseudoelements, like `::before`.

For example, say a component had a "trigger" part. You could style this by doing something like the following:
```css
.my-trigger::part(trigger) {
  background-color: hotpink;
  color: white;
}
```

You can only target the immediate element. No diving deeper into the Shadow DOM. In other words, you can't do the following to reach a button element that is nested within the element decorated with the "trigger" part:
```css
.my-trigger::part(trigger) button {
  background-color: hotpink;
  color: white;
}
```

See also:
* <https://developer.mozilla.org/en-US/docs/Web/CSS/::part>

#### CSS Shadow States
<docs-note>Before we dive in, it's worth noting this feature is only implemented in Chromium-based browsers. Our components do support this, but the CSS won't apply in other browsers.</docs-note>

Just like CSS Shadow Parts were analagous to pseudoelements, CSS Shadow States are quite similar in practice to pseudoselectors, such as `:valid`. 

These CSS Shadow State hooks allow components to statefully expose hooks to you for your own CSS, without having to reflect that state to your DOM.

As a quick example, assume our trigger example has an "open" state:
```css
.my-trigger:--open {
  background-color: lavendar;
}
```

See also:
* <https://developer.mozilla.org/en-US/docs/Web/API/CustomStateSet>

#### Form Associated Custom Element
Often shorthanded as "FACE", Form Associated Custom Elements are exactly as they sound: a custom element that will natively associate itself with a form and participate in that as expected. Just to name a few behaviors:
- when the form is submitted, its value is included
- when the form is reset, its value is reset
- form validation hooks can be handled by the browser
- label association for free

See also:
* <https://web.dev/more-capable-form-controls/>

