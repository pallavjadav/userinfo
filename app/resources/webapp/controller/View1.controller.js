sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("info.user.controller.View1", {
            onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel();
                var that = this;
                // Make AJAX request to retrieve the current user
                $.ajax({
                    url: "/user-api/currentUser",
                    method: "GET",
                    dataType: "json",
                    success: function (data) {
                        // User data retrieved successfully
                        oModel.setData(data);
                        that.getView().byId("codeeditor").setValue(JSON.stringify(data))
                    },
                    error: function () {
                        // Error occurred while retrieving user data
                        // Handle the error accordingly
                    }
                });
            },

            getcurrentuser: function(){
                sap.m.MessageToast.show(JSON.stringify(this.getOwnerComponent().getModel("userModel").getData()))
            }
        });
    });
