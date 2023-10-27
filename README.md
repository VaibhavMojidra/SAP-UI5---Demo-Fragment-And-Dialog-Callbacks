# SAP UI5 Demo Fragment And Dialog Callbacks

Fragments are reusable UI elements that can be embedded into views, and dialogs are pop-up windows that display additional information or allow user interaction. You can use callbacks in SAPUI5 fragments and dialogs to handle user interactions and pass data between the fragment/dialog and the calling view.

### Code Explaination

Refer to [/webapp/view/HelloDialog.fragment.xml](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Fragment-And-Dialog-Callbacks/blob/master/webapp/view/HelloDialog.fragment.xml "HelloDialog.fragment.xml")

In the fragment definition, we add a button to the beginButton aggregation of the dialog. The press handler refers to an event handler called .onCloseDialog. By using the loadFragment function to create the fragment content, the method will be invoked there when the button is pressed. The dialog has an aggregation named beginButton as well as endButton. Placing buttons in both of these aggregations makes sure that the beginButton is placed before the endButton on the UI.

Refer to [/webapp/controller/App.controller.js](https://github.com/VaibhavMojidra/SAP-UI5---Demo-Fragment-And-Dialog-Callbacks/blob/master/webapp/controller/App.controller.js "App.controller.js")

The event handler function is put into the same controller file, and it closes the dialog by using the byId function to get the dialog instance and the close function to close the dialog.

---

[![Vaibhav Mojidra - 1.jpeg](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Fragment-And-Dialog-Callbacks/master/screenshots/1.jpeg "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)

[![Vaibhav Mojidra - 2.jpeg](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Fragment-And-Dialog-Callbacks/master/screenshots/2.jpeg "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)

[![Vaibhav Mojidra - 3.gif](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Fragment-And-Dialog-Callbacks/master/screenshots/3.gif "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)