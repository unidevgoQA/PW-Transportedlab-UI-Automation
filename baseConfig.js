var date = new Date();
var vccd = date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + ("0" + date.getHours()).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2);
const testConfig =
{
      "Project": "Transported Labs UI Automation",
      "Env":"Main",
      "Language":"",
      "elementFinderURL":"https://colorlib.com/etc/regform/colorlib-regform-36/",
      //Mail COnfigurations
      "FromMailaddress": "udgo.sabbir@gmail.com",
      "FromAddressPassword": "jwqtedxspnbbdknu",
      "ToMailAddress": ["sabbir.of@gmail.com"],
      "TeamsWebhookURL": "https://transportedlabs.webhook.office.com/webhookb2/1af1ca62-123b-4948-9a2f-f84e4cb589e6@fee95589-ad46-417d-9636-8b4078359ad9/IncomingWebhook/dbccaaa1799743e38ed4d57ba2b562bc/a6b92662-3ec5-443a-8d4e-10db06594a3c",
      "MailServiceProvider": "Gmail",
      "MailNotification": "yes",
      "TeamsNotification": "yes",
      "Githubreportlink": "https://github.com/unidevgoQA/PW-Intagration-With-Teams"
}

module.exports = { testConfig }