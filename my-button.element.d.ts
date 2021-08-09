/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
import './my-article.element.js';
import './my-footer.element.js';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MyButton extends LitElement {
    message: string;
    bool: boolean;
    array: String[];
    title: string;
    first: any;
    classes: {};
    styles: {};
    prop1: string;
    prop2: number;
    prop3: boolean;
    prop4: number[];
    prop5: {
        [key: string]: any;
    };
    theProp: String;
    otherProp: String;
    private _myProp;
    get myProp(): Number;
    set myProp(value: Number);
    noProp: string;
    change: Number;
    private _handleResize;
    private _handleTouchStart;
    prop: number;
    constructor();
    loadStuff(): void;
    clickHandler(e: Event): void;
    attributeChangedCallback(name: any, oldVal: any, newVal: any): void;
    changeAttributes(): void;
    changeProperties(): void;
    updated(changedProperties: any): void;
    changeAttributesTwo(): void;
    changePropertiesTwo(): void;
    changeAttributesThree(): void;
    getNewVal(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): Promise<void>;
    _handleClick(e: any): void;
    handleEvent(e: any): void;
    handleMyEvent(event: any): void;
    myFunc(data: any): Promise<string>;
    otherFunction(): Promise<void>;
    fire(): void;
    changeOne(): number;
    getMoreState(): Promise<void>;
    changeProp(): Promise<void>;
    _getUpdateComplete(): Promise<void>;
    simply(): void;
    static get styles(): import("lit").CSSResultGroup[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-button': MyButton;
    }
}
//# sourceMappingURL=my-button.element.d.ts.map