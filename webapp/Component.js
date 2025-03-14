sap.ui.define([
    "sap/ui/core/UIComponent",
    "student/com/sap/training/advancedsapui5/repository/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("student.com.sap.training.advancedsapui5.repository.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
});