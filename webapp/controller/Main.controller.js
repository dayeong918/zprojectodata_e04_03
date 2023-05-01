sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter) {
        "use strict";

        return Controller.extend("nt.zprojectodatae0403.controller.Main", {
            formatter: {
                onSum : function(a, b) {
                    return a+b;
                },
                dateTime: function(oDate){
                    let oDateTimeInstance;
                    oDateTimeInstance = sap.ui.core.format.DateFormat.getDateTimeInstance({
                        pattern : 'yyyy-MM-dd hh:mm:ss'
                    });
                    return oDateTimeInstance.format(oDate); //pattern에 맞춰서 string으로 포맷이 된다. return 함.
                }
            },
            onInit: function () {

            },
            onSearch: function(){
                let oOrderDate = this.byId("idOrderDate").getDateValue();
                let sInputValue = Number(this.byId("idOrderID").getValue()); // input 값 가져옴.

                let oFilter = new Filter({ //Filter 객체 생성
                    filters: [
                        new Filter({ path: 'OrderID', operator:'EQ', value1: sInputValue}),
                        new Filter({ path: 'OrderDate', operator:'GE', value1: oOrderDate})
                    ], 
                    and : false // 필터 값들 (or) , and 조건이 true면 두 필터 조건(And) 적용됨.
                });

                this.byId("idProductsTable").getBinding("items").filter([oFilter]);

                // let oOrderDate = this.byId("idOrderDate");
                // let sInputValue = Number(this.byId("idOrderID").getValue()), // input 값 가져옴.
                //     oFilter = new sap.ui.model.Filter("OrderID", "EQ", sInputValue), //(경로, 조건, 값)
                //     aFilter = [];

                // let oFilter2 = new sap.ui.model.Filter('OrderDate', "GE", oOrderDate.getDateValue()); //날짜 객체로 검색

                //     aFilter.push(oFilter);
                //     aFilter.push(oFilter2);

                //     this.byId("idProductsTable").getBinding("items").filter(aFilter);
            
            }
        });
    });
