const endpoint = "/zotero-obsidian-plugin/get-selected-items";


export function register() {
  const myEndpoint = (Zotero.Server.Endpoints[endpoint] = function () {});
  myEndpoint.prototype = {
    supportedMethods: ["GET"],

    /**
     * Sends a fixed webpage
     * @param {String} data POST data or GET query string
     * @param {Function} sendResponseCallback function to send HTTP response
     */
    init: async function (postData: any, sendResponseCallback: any) {
      const selectedItems =
        Zotero.getActiveZoteroPane().getSelectedItems(false);

      sendResponseCallback(
        200,
        "application/json",
        `${JSON.stringify(selectedItems)}`,
      );
    },
  };
}

export function unregister() {
  delete Zotero.Server.Endpoints[endpoint];
}
