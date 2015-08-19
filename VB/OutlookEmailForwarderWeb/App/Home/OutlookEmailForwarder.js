/// <reference path="../App.js" />


(function () {
    "use strict";

    // The Office initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            app.initialize();
            $('#fowardToGroups').click(function () { sendNow(); });
        });
    };

    // Variables that we'll use to communicate with EWS
    var item_id;
    var mailbox;

    // This function handles the click event of the sendNow button.
    // It retrieves the current mail item, so that we can get its itemId property.
    // It also retrieves the mailbox, so that we can make an EWS request
    // to get more properties of the item. In our case, we are interested in the ChangeKey
    // property, becuase we need that to forward a mail item.
    function sendNow() {
        var item = Office.context.mailbox.item;
        item_id = item.itemId;
        mailbox = Office.context.mailbox;

        // The following string is a valid SOAP envelope and request for getting the properties
        // of a mail item. Note that we use the item_id value (which we obtained above) to specify the item
        // we are interested in.
        var soapToGetItemData = '<?xml version="1.0" encoding="utf-8"?>' +
            '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"' +
            '               xmlns:m="http://schemas.microsoft.com/exchange/services/2006/messages"' +
            '               xmlns:xsd="http://www.w3.org/2001/XMLSchema"' +
            '               xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"' +
            '               xmlns:t="http://schemas.microsoft.com/exchange/services/2006/types">' +
            '  <soap:Header>' +
            '    <RequestServerVersion Version="Exchange2013" xmlns="http://schemas.microsoft.com/exchange/services/2006/types" soap:mustUnderstand="0" />' +
            '  </soap:Header>' +
            '  <soap:Body>' +
            '    <GetItem' +
            '                xmlns="http://schemas.microsoft.com/exchange/services/2006/messages"' +
            '                xmlns:t="http://schemas.microsoft.com/exchange/services/2006/types">' +
            '      <ItemShape>' +
            '        <t:BaseShape>IdOnly</t:BaseShape>' +
            '      </ItemShape>' +
            '      <ItemIds>' +
            '        <t:ItemId Id="' + item_id + '"/>' +
            '      </ItemIds>' +
            '    </GetItem>' +
            '  </soap:Body>' +
            '</soap:Envelope>';

        // The makeEwsRequestAsync method accepts a string of SOAP and a callback function
        mailbox.makeEwsRequestAsync(soapToGetItemData, soapToGetItemDataCallback);
    }

    // This function is the callback for the makeEwsRequestAsync method
    // In brief, it first checks for an error repsonse, but if all is OK
    // it then parses the XML repsonse to extract the ChangeKey attribute of the 
    // t:ItemId element.
    function soapToGetItemDataCallback(asyncResult) {
        var parser;
        var xmlDoc;

        if (asyncResult.error != null) {
            app.showNotification("EWS Status", asyncResult.error.message);            
        }
        else {
            var response = asyncResult.value;
            if (window.DOMParser) {
                var parser = new DOMParser();
                xmlDoc = parser.parseFromString(response, "text/xml");
            }
            else // Older Versions of Internet Explorer
            {
                xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                xmlDoc.async = false;
                xmlDoc.loadXML(response);
            }
            var changeKey = xmlDoc.getElementsByTagName("t:ItemId")[0].getAttribute("ChangeKey");

            // Now that we have a ChangeKey value, we can use EWS to forward the mail item.
            // The first thing we'll do is get an array of email addresses that the user
            // has typed into the To: text box.
            // We'll also get the comment that the user may have provided in the Comment: text box.
            var toAddresses = document.getElementById("groupEmails").value;
            var addresses = toAddresses.split(";");
            var addressesSoap = "";

            // The following loop build an XML fragment that we will insert into the SOAP message
            for (var address = 0; address < addresses.length; address++) {
                addressesSoap += "<t:Mailbox><t:EmailAddress>" + addresses[address] + "</t:EmailAddress></t:Mailbox>";
            }
            var comment = document.getElementById("groupComment").value;

            // The following string is a valid SOAP envelope and request for forwarding
            // a mail item. Note that we use the item_id value (which we obtained in the click event handler)
            // to specify the item we are interested in,
            // along with its ChangeKey value that we have just determined near the top of this function.
            // We also provide the XML fragment that we built in the loop above to specify the recipient addresses,
            // and the comment that the user may have provided in the Comment: text box
            var soapToForwardItem = '<?xml version="1.0" encoding="utf-8"?>' +
                '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"' +
                '               xmlns:m="http://schemas.microsoft.com/exchange/services/2006/messages"' +
                '               xmlns:xsd="http://www.w3.org/2001/XMLSchema"' +
                '               xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"' +
                '               xmlns:t="http://schemas.microsoft.com/exchange/services/2006/types">' +
                '  <soap:Header>' +
                '    <RequestServerVersion Version="Exchange2013" xmlns="http://schemas.microsoft.com/exchange/services/2006/types" soap:mustUnderstand="0" />' +
                '  </soap:Header>' +
                '  <soap:Body>' +
                '    <m:CreateItem MessageDisposition="SendAndSaveCopy">' +
                '      <m:Items>' +
                '        <t:ForwardItem>' +
                '          <t:ToRecipients>' + addressesSoap + '</t:ToRecipients>' +
                '          <t:ReferenceItemId Id="' + item_id + '" ChangeKey="' + changeKey + '" />' +
                '          <t:NewBodyContent BodyType="Text">' + comment + '</t:NewBodyContent>' +
                '        </t:ForwardItem>' +
                '      </m:Items>' +
                '    </m:CreateItem>' +
                '  </soap:Body>' +
                '</soap:Envelope>';

            // As before, the makeEwsRequestAsync method accepts a string of SOAP and a callback function.
            // The only difference this time is that the body of the SOAP message requests that the item
            // be forwarded (rather than retrieved as in the previous method call)
            mailbox.makeEwsRequestAsync(soapToForwardItem, soapToForwardItemCallback);
        }
    }

    // This function is the callback for the above makeEwsRequestAsync method
    // In brief, it first checks for an error repsonse, but if all is OK
    // it then parses the XML repsonse to extract the m:ResponseCode value.
    function soapToForwardItemCallback(asyncResult) {
        var parser;
        var xmlDoc;

        if (asyncResult.error != null) {
            app.showNotification("EWS Status", asyncResult.error.message);
        }
        else {
            var response = asyncResult.value;
            if (window.DOMParser) {
                parser = new DOMParser();
                xmlDoc = parser.parseFromString(response, "text/xml");
            }
            else // Older Versions of Internet Explorer
            {
                xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                xmlDoc.async = false;
                xmlDoc.loadXML(response);
            }

            // Get the required response, and if it's NoError then all has succeeded, so tell the user.
            // Otherwise, tell them what the problem was. (E.G. Recipient email addresses might have been
            // entered incorrectly --- try it and see for yourself what happens!!)
            var result = xmlDoc.getElementsByTagName("m:ResponseCode")[0].textContent;
            if (result == "NoError") {
                app.showNotification("EWS Status", "Success!");
            }
            else {
                app.showNotification("EWS Status", "The following error code was recieved: " + result);
            }
        }
    }

})();