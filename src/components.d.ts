/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ConfirmationSummary {
        "contentData": any;
        "languageCode": string;
    }
    interface LkHoc {
        "languageCode": string;
        "selectedComponent": string;
    }
    interface MyDetails {
        "contentData": any;
        "languageCode": string;
    }
    interface PersonalDetails {
        "contentData": any;
        "languageCode": string;
    }
    interface ValidateCard {
        "contentData": any;
        "languageCode": string;
    }
}
declare global {
    interface HTMLConfirmationSummaryElement extends Components.ConfirmationSummary, HTMLStencilElement {
    }
    var HTMLConfirmationSummaryElement: {
        prototype: HTMLConfirmationSummaryElement;
        new (): HTMLConfirmationSummaryElement;
    };
    interface HTMLLkHocElement extends Components.LkHoc, HTMLStencilElement {
    }
    var HTMLLkHocElement: {
        prototype: HTMLLkHocElement;
        new (): HTMLLkHocElement;
    };
    interface HTMLMyDetailsElement extends Components.MyDetails, HTMLStencilElement {
    }
    var HTMLMyDetailsElement: {
        prototype: HTMLMyDetailsElement;
        new (): HTMLMyDetailsElement;
    };
    interface HTMLPersonalDetailsElement extends Components.PersonalDetails, HTMLStencilElement {
    }
    var HTMLPersonalDetailsElement: {
        prototype: HTMLPersonalDetailsElement;
        new (): HTMLPersonalDetailsElement;
    };
    interface HTMLValidateCardElement extends Components.ValidateCard, HTMLStencilElement {
    }
    var HTMLValidateCardElement: {
        prototype: HTMLValidateCardElement;
        new (): HTMLValidateCardElement;
    };
    interface HTMLElementTagNameMap {
        "confirmation-summary": HTMLConfirmationSummaryElement;
        "lk-hoc": HTMLLkHocElement;
        "my-details": HTMLMyDetailsElement;
        "personal-details": HTMLPersonalDetailsElement;
        "validate-card": HTMLValidateCardElement;
    }
}
declare namespace LocalJSX {
    interface ConfirmationSummary {
        "contentData"?: any;
        "languageCode"?: string;
    }
    interface LkHoc {
        "languageCode"?: string;
        "selectedComponent"?: string;
    }
    interface MyDetails {
        "contentData"?: any;
        "languageCode"?: string;
    }
    interface PersonalDetails {
        "contentData"?: any;
        "languageCode"?: string;
    }
    interface ValidateCard {
        "contentData"?: any;
        "languageCode"?: string;
    }
    interface IntrinsicElements {
        "confirmation-summary": ConfirmationSummary;
        "lk-hoc": LkHoc;
        "my-details": MyDetails;
        "personal-details": PersonalDetails;
        "validate-card": ValidateCard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "confirmation-summary": LocalJSX.ConfirmationSummary & JSXBase.HTMLAttributes<HTMLConfirmationSummaryElement>;
            "lk-hoc": LocalJSX.LkHoc & JSXBase.HTMLAttributes<HTMLLkHocElement>;
            "my-details": LocalJSX.MyDetails & JSXBase.HTMLAttributes<HTMLMyDetailsElement>;
            "personal-details": LocalJSX.PersonalDetails & JSXBase.HTMLAttributes<HTMLPersonalDetailsElement>;
            "validate-card": LocalJSX.ValidateCard & JSXBase.HTMLAttributes<HTMLValidateCardElement>;
        }
    }
}
