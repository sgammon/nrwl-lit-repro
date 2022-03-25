import * as React from 'react';
import { LitElement, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import {createComponent} from '@lit-labs/react';


@customElement("test-element")
export class TestElement extends LitElement {
    override render(): TemplateResult {
        return html`<b>hello lit</b>`;
    }
}

export const MyElementComponent = createComponent(
    React,
    'test-element',
    TestElement,
    {
        onactivate: 'activate',
        onchange: 'change',
    }
);
