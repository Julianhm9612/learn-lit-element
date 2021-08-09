/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property, query, eventOptions } from 'lit/decorators.js';
import { until } from 'lit-html/directives/until.js';
const content = fetch('./content.txt').then(r => r.text());
import './my-article.element.js';
import './my-footer.element.js';
import { buttonStyles } from './button-styles.js';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';
function headerTemplate(title) {
    return html `<header>${title}</header>`;
}
const mainColor = css `red`;
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let MyButton = class MyButton extends LitElement {
    constructor() {
        super();
        this.message = '';
        this.bool = false;
        this.array = [];
        // @property({ type: String })
        // prop1 = '';
        // @property({ type: String })
        // prop2 = '';
        // @property({ type: Boolean })
        // prop3 = false;
        // @property({ type: String })
        // prop4 = '';
        this.title = '';
        this.classes = {};
        this.styles = {};
        // @internalProperty()
        // protected active = false;
        this.prop1 = '';
        this.prop2 = 0;
        this.prop3 = false;
        this.prop4 = [];
        // set prop(val) {
        //   let oldVal = this._prop;
        //   this._prop = Math.floor(val);
        //   this.requestUpdate('prop', oldVal);
        // }
        // get prop() { return this._prop; }
        this._myProp = 0;
        this.noProp = '';
        this._handleResize = () => { };
        // static get properties() { 
        //   return { prop: { type: Number } };
        // }
        // set prop(val) {
        //   let oldVal = this._prop;
        //   this._prop = Math.floor(val);
        //   this.requestUpdate('prop', oldVal);
        // }
        // get prop() { return this._prop; }
        this.prop = 0;
        this.message = 'Loading';
        this.bool = true;
        this.array = ['an', 'array', 'of', 'test', 'data'];
        // this.prop1 = 'text binding';
        // this.prop2 = 'mydiv';
        // this.prop3 = true;
        // this.prop4 = 'pie';
        this.title = 'Hello!';
        this.prop1 = '';
        this.prop2 = 0;
        this.prop3 = false;
        this.prop4 = [];
        this.prop5 = {};
        // this.myProp = 'myProp';
        this.theProp = 'theProp';
        // this.myProp = 'myProp';
        this.theProp = 'theProp';
        this.otherProp = 'otherProp';
        // this._prop = 0;
        this.change = 1;
        this.classes = { mydiv: true, someclass: true };
        this.styles = { color: 'green', fontFamily: 'Roboto' };
        this.addEventListener('stuff-loaded', (e) => { this.message = e.detail; });
        this.loadStuff();
        // this.boundResizeHandler = this.handleResize.bind(this);
        // window.addEventListener('resize', this.boundResizeHandler);
        window.addEventListener('resize', this._handleResize);
        // someElement.addEventListener('touchstart', this._handleTouchStart, {passive: true});
        // Request an update in response to an event
        this.addEventListener('load-complete', async (e) => {
            console.log(e.detail.message);
            console.log(await this.requestUpdate());
        });
        // this._prop = 0;
    }
    get myProp() {
        return this._myProp;
    }
    set myProp(value) {
        const oldValue = this._myProp;
        this._myProp = value;
        this.requestUpdate('myProp', oldValue);
    }
    _handleTouchStart() { }
    ;
    loadStuff() {
        setInterval(() => {
            let loaded = new CustomEvent('stuff-loaded', {
                detail: 'Loading complete.'
            });
            this.dispatchEvent(loaded);
        }, 3000);
    }
    clickHandler(e) {
        console.log(e.target);
    }
    // handleSlotchange(e) {
    //   const childNodes = e.target.assignedNodes({flatten: true});
    //   // ... do something with childNodes ...
    //   this.allText = Array.prototype.map.call(childNodes, (node) => {
    //     return node.textContent ? node.textContent : ''
    //   }).join('');
    // }
    // <slot @slotchange=${this.handleSlotchange}></slot>
    attributeChangedCallback(name, oldVal, newVal) {
        console.log('attribute change: ', name, newVal);
        super.attributeChangedCallback(name, oldVal, newVal);
    }
    changeAttributes() {
        let randy = Math.floor(Math.random() * 10);
        let myBool = this.getAttribute('prop3');
        this.setAttribute('prop1', randy.toString());
        this.setAttribute('prop2', randy.toString());
        this.setAttribute('prop3', myBool ? '' : null);
        this.setAttribute('prop4', JSON.stringify([...this.prop4, randy]));
        this.setAttribute('prop5', JSON.stringify(Object.assign({}, this.prop5, { [randy]: randy })));
        this.requestUpdate();
    }
    changeProperties() {
        let randy = Math.floor(Math.random() * 10);
        let myBool = this.prop3;
        this.prop1 = randy.toString();
        this.prop2 = randy;
        this.prop3 = !myBool;
        this.prop4 = [...this.prop4, randy];
        this.prop5 = Object.assign({}, this.prop5, { [randy]: randy });
    }
    updated(changedProperties) {
        changedProperties.forEach((oldValue, propName) => {
            console.log(`${propName} changed. oldValue: ${oldValue}`);
        });
        let click = new Event('click');
        this.dispatchEvent(click);
        // console.log(changedProps.get('prop1'));
    }
    changeAttributesTwo() {
        let randomString = Math.floor(Math.random() * 100).toString();
        this.setAttribute('myprop', 'myprop ' + randomString);
        this.setAttribute('theprop', 'theprop ' + randomString);
        this.requestUpdate();
    }
    changePropertiesTwo() {
        let randomString = Math.floor(Math.random() * 100).toString();
        // this.myProp='myProp ' + randomString;
        this.theProp = 'theProp ' + randomString;
    }
    changeAttributesThree() {
        let randomString = Math.floor(Math.random() * 100).toString();
        this.setAttribute('myprop', 'myprop ' + randomString);
        this.setAttribute('theprop', 'theprop ' + randomString);
        this.setAttribute('other-prop', 'other-prop ' + randomString);
        this.requestUpdate();
    }
    getNewVal() {
        let newVal = Math.floor(Math.random() * 10);
        this.change = newVal;
    }
    connectedCallback() {
        super.connectedCallback();
        console.log('connected');
        window.addEventListener('resize', this._handleResize);
    }
    disconnectedCallback() {
        window.removeEventListener('resize', this._handleResize);
        super.disconnectedCallback();
    }
    async firstUpdated() {
        // Give the browser a chance to paint
        await new Promise((r) => setTimeout(r, 0));
        this.addEventListener('click', this._handleClick);
        let event = new CustomEvent('my-event', {
            detail: {
                message: 'Something important happened'
            }
        });
        this.dispatchEvent(event);
        let myEvent = new CustomEvent('my-event', {
            detail: { message: 'my-event happened.' },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(myEvent);
        // console.log(changedProps.get('prop1'));
    }
    _handleClick(e) {
        console.log(this.prop1, e);
    }
    handleEvent(e) {
        console.log(e.bubbles);
    }
    handleMyEvent(event) {
        console.log('Origin: ', event.composedPath()[0]);
    }
    // `async` makes the function return a Promise & lets you use `await`
    async myFunc(data) {
        // Set a property, triggering an update
        this.myProp = data;
        // Wait for the updateComplete promise to resolve
        await this.updateComplete;
        // ...do stuff...
        return 'done';
    }
    async otherFunction() {
        let result = await this.myFunc('stuff');
        console.log(result);
        // `result` is resolved! You can do something with it
    }
    // Manually start an update
    // this.requestUpdate();
    // Call from within a custom property setter
    // this.requestUpdate(propertyName, oldValue);
    fire() {
        let newMessage = new CustomEvent('load-complete', {
            detail: { message: 'hello. a load-complete happened.' }
        });
        this.dispatchEvent(newMessage);
    }
    async performUpdate() {
        await new Promise((resolve) => requestAnimationFrame(() => resolve()));
        super.performUpdate();
    }
    changeOne() {
        return Math.floor(Math.random() * 10);
    }
    /**
     * Only update element if prop1 changed.
     */
    shouldUpdate(changedProperties) {
        changedProperties.forEach((oldValue, propName) => {
            console.log(`${propName} changed. oldValue: ${oldValue}`);
        });
        return changedProperties.has('prop1');
    }
    async getMoreState() {
        return;
    }
    async changeProp() {
        this.prop1 = Math.random();
        await Promise.all([this.updateComplete, this.getMoreState()]);
        console.log('Update complete. Other state completed.');
    }
    async _getUpdateComplete() {
        await super._getUpdateComplete();
        await this._myChild.updateComplete;
    }
    async performUpdate() {
        await new Promise((resolve) => requestAnimationFrame(() => resolve()));
        super.performUpdate();
    }
    shouldUpdate(changedProps) {
        return changedProps.has('prop1');
    }
    simply() {
        // Option 1: Rewrite whole object, triggering an update
        this.prop1 = Object.assign({}, this.prop1, { subProp: 'data' });
        // Option 2: Mutate a subproperty, then call requestUpdate
        this.prop1.subProp = 'data';
        this.requestUpdate();
        // Request an update in response to an event
        this.addEventListener('load-complete', async (e) => {
            console.log(e.detail.message);
            console.log(await this.requestUpdate());
        });
        this.requestUpdate();
        let oldValue = this.prop1;
        this.prop1 = 'new value';
        this.requestUpdate('prop1', oldValue);
        await this.updateComplete;
        // do stuff
        this.updateComplete.then(() => {
            // do stuff
        });
        // let done = await updateComplete;
        // updateComplete.then(() => {
        //   // finished updating
        // });
    }
    static get styles() {
        return [
            buttonStyles,
            css `
        div { color: ${mainColor} }
        :host {
          display: block;
          border: 1px solid black;
        }

        * { color: red; }
        p { font-family: sans-serif; }
        .myclass { margin: 100px; }
        #main { padding: 30px; }
        h1 { font-size: 4em; }

        /* Selects the host element if it is hidden */
        :host([hidden]) { 
          display: none; 
        }

        /* Selects the host element if it has class "blue" */
        :host(.blue) { 
          /* background-color: aliceblue; */
          background-color: var(--themeColor, yellow);
          color: blue;
        }

        ::slotted(*) { font-family: Roboto; }
        ::slotted(p) { color: blue; }
        div ::slotted(*) { color: red; }

      `
        ];
    }
    render() {
        return html `
      <slot name="one"></slot>

      <button>Press here!</button>

      <p>${this.message}</p>

      <ul>
        ${this.array.map((i) => html `<li>${i}</li>`)}
      </ul>

      ${this.bool ?
            html `<p>Render some HTML if myBool is true</p>` :
            html `<p>Render some other HTML if myBool is false</p>`}
      
        <!-- text binding -->
      <div>${this.prop1}</div>

      <!-- attribute binding -->
      <div id="${this.prop2}">attribute binding</div>

      <!-- boolean attribute binding -->
      <div>
        boolean attribute binding
        <input type="text" ?disabled="${this.prop3}"/>
      </div>

      <!-- property binding -->
      <div>
        property binding
        <input type="text" .value="${this.prop4}"/>
      </div>

      <!-- event handler binding -->
      <div>event handler binding
        <button @click="${this.clickHandler}">click</button>
      </div>

      <slot name="two"></slot>

      ${headerTemplate(this.title)}

      <my-article></my-article>

      <my-footer></my-footer>

      ${until(content, html `<span>Loading...</span>`)}

      <div id="first"First</div>
      <div id="second">Second</div>

      <p>Hello World</p>
      <p class="myclass">Hello World</p>
      <p id="main">Hello World</p>
      <h1>Hello World</h1>

      <slot></slot>
      <div><slot name="hi"></slot></div>

      <style>
        /* updated per instance */
      </style>

      <link rel="stylesheet" href="./app-styles.css">

      <hr>

      <div class=${classMap(this.classes)} style=${styleMap(this.styles)}>
        Some content
      </div>

      <p>prop1 ${this.prop1}</p>
      <p>prop2 ${this.prop2}</p>
      <p>prop3 ${this.prop3}</p>

      <p>prop4: ${this.prop4.map((item, index) => html `<span>[${index}]:${item}&nbsp;</span>`)}
      </p>

      <p>prop5:
        ${Object.keys(this.prop5).map(item => html `<span>${item}: ${this.prop5[item]}&nbsp;</span>`)}
      </p>

      <button @click="${this.changeProperties}">change properties</button>
      <button @click="${this.changeAttributes}">change attributes</button>
  
      <hr>

      <p>myProp ${this.myProp}</p>
      <p>theProp ${this.theProp}</p>

      <button @click="${this.changePropertiesTwo}">change properties</button>
      <button @click="${this.changeAttributesTwo}">change attributes</button>

      <p>myProp ${this.myProp}</p>
      <p>theProp ${this.theProp}</p>
      <p>otherProp ${this.otherProp}</p>

      <button @click="${this.changeAttributesThree}">change attributes</button>

      <p>prop: ${this.myProp}</p>
      <button @click="${() => { this.myProp = Math.random() * 10; }}">
        change prop
      </button>

      <p>${this.change}</p>
      <button @click="${this.getNewVal}">get new value</button>

      <button @click="${this._handleClick}">click</button>

      <div @touchstart=${this._handleTouchStart}><div>

      <button id="mybutton" @click="${(e) => console.log(e.target)}">
        click me
      </button>

      <button @click="${this.fire}">Fire a "load-complete" event</button>

      <p>prop: ${this.prop}</p>
      <button @click="${() => { this.prop = Math.random() * 10; }}">
        change prop
      </button>

      <p>prop1: ${this.prop1}</p>
      <p>prop2: ${this.prop2}</p>
      <button @click="${() => this.prop1 = this.changeOne()}">Change prop1</button>
      <button @click="${() => this.prop2 = this.changeOne()}">Change prop2</button>

      <p>prop1: ${this.prop1}</p>
      <button @click="${this.changeProp}">prop1</button>

    `;
    }
};
__decorate([
    property()
], MyButton.prototype, "message", void 0);
__decorate([
    property({ type: Boolean })
], MyButton.prototype, "bool", void 0);
__decorate([
    property({ type: Array })
], MyButton.prototype, "array", void 0);
__decorate([
    property({ type: String })
], MyButton.prototype, "title", void 0);
__decorate([
    query('#first')
], MyButton.prototype, "first", void 0);
__decorate([
    property()
], MyButton.prototype, "classes", void 0);
__decorate([
    property()
], MyButton.prototype, "styles", void 0);
__decorate([
    property({ type: String, reflect: true })
], MyButton.prototype, "prop1", void 0);
__decorate([
    property({ type: Number, reflect: true })
], MyButton.prototype, "prop2", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], MyButton.prototype, "prop3", void 0);
__decorate([
    property({ type: Array, reflect: true })
], MyButton.prototype, "prop4", void 0);
__decorate([
    property({ type: Object, reflect: true })
], MyButton.prototype, "prop5", void 0);
__decorate([
    property({ attribute: false })
], MyButton.prototype, "theProp", void 0);
__decorate([
    property({ attribute: 'other-prop' })
], MyButton.prototype, "otherProp", void 0);
__decorate([
    property({ type: Number })
], MyButton.prototype, "myProp", null);
__decorate([
    property({ noAccessor: true })
], MyButton.prototype, "noProp", void 0);
__decorate([
    property({
        type: Number,
        hasChanged(newVal, oldVal) {
            if (newVal > oldVal) {
                console.log(`${newVal} > ${oldVal}. hasChanged: true.`);
                return true;
            }
            else {
                console.log(`${newVal} <= ${oldVal}. hasChanged: false.`);
                return false;
            }
        }
    })
], MyButton.prototype, "change", void 0);
__decorate([
    eventOptions({ passive: true })
], MyButton.prototype, "_handleTouchStart", null);
__decorate([
    property()
], MyButton.prototype, "prop", void 0);
MyButton = __decorate([
    customElement('my-button')
], MyButton);
export { MyButton };
// class MyElement extends SuperElement {
//   static get styles() {
//     return [
//       super.styles,
//       css`...`
//     ];
//   }
// }
//# sourceMappingURL=my-button.element.js.map