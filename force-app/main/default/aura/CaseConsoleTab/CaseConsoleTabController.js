({
    setFocusedTabLabel : function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
         
        workspaceAPI.getFocusedTabInfo().then(function(response) {
            var focusedTabId = response.tabId;
            var caseNumber = 'CS-'+ component.get("v.simpleRecord.CaseNumber");
            workspaceAPI.setTabLabel({
                tabId: focusedTabId,
                label: "poc: " + caseNumber
            });
        })
        .catch(function(error) {
            console.log(error);
        });
    }
})