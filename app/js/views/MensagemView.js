System.register(["./Index"], function (exports_1, context_1) {
    "use strict";
    var Index_1, MensagemView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Index_1_1) {
                Index_1 = Index_1_1;
            }
        ],
        execute: function () {
            MensagemView = class MensagemView extends Index_1.View {
                template(model) {
                    return `
                <p class="alert alert-info">${model}</p>
                `;
                }
            };
            exports_1("MensagemView", MensagemView);
        }
    };
});
