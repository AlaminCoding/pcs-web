$(document).ready(function () {
  //Service Buttons and Drop Variables
  var serviceBtn = $("#service-btn");
  var serviceDrop = $("#service-drop");
  var ccs = $("#ccs");
  var deviceSec = $("#device-sec");
  var mediaSec = $("#media-sec");
  var cloudSec = $("#cloud-sec");
  var emailSec = $("#email-sec");
  var paymentSec = $("#payment-sec");
  var wifiSec = $("#wifi-sec");
  var ciBtn = $("#ci-btn");
  var ciDrop = $("#ci-drop");
  var oi = $("#oi");
  var ci = $("#ci");
  var textBox = $("#text-box");
  var irBtn = $("#ir-btn");
  var irDrop = $("#ir-drop");
  var vr = $("#vr");
  var hr = $("#hr");
  var dr = $("#dr");
  var linkBox = $("#link-box");
  //Social Button and Drop Variables
  var socialBtn = $("#social-btn");
  var socialDrop = $("#social-drop");
  var facebook = $("#facebook");
  var fbInput = $("#fb-input");
  var twitter = $("#twitter");
  var twitterInput = $("#twitter-input");
  var insta = $("#insta");
  var instaInput = $("#insta-input");
  var link = $("#link");
  var linkInput = $("#link-input");
  var pint = $("#pint");
  var pintInput = $("#pint-input");
  var youtube = $("#youtube");
  var youtubeInput = $("#youtube-input");
  var snap = $("#snap");
  var snapInput = $("#snap-input");
  var whats = $("#whats");
  var whatsInput = $("#whats-input");
  // Payment Button and Drop Variables
  var paymentBtn = $("#payment-btn");
  var paymentDrop = $("#payment-drop");
  var paypal = $("#paypal");
  var skrill = $("#skrill");
  var visa = $("#visa");
  var bank = $("#bank");
  var paypalInput = $("#paypal-input");
  var skrillInput = $("#skrill-input");
  var visaInput = $("#visa-input");
  var bankInput = $("#bank-input");
  // Email Button and Drop Variables
  var emailBtn = $("#email-btn");
  var emailDrop = $("#email-drop");
  var yahoo = $("#yahoo");
  var hotmail = $("#hotmail");
  var gmail = $("#gmail");
  var outlook = $("#outlook");
  var customMail = $("#customMail");
  var yahooInput = $("#yahoo-input");
  var hotmailInput = $("#hotmail-input");
  var gmailInput = $("#gmail-input");
  var outlookInput = $("#outlook-input");
  var customMailInput = $("#customMail-input");
  // Cloud Button and Drop Variables
  var cloudBtn = $("#cloud-btn");
  var cloudDrop = $("#cloud-drop");
  var icloud = $("#icloud");
  var gcloud = $("#gcloud");
  var dropbox = $("#dropbox");
  var googleDrive = $("#googleDrive");
  var icloudInput = $("#icloud-input");
  var gcloudInput = $("#gcloud-input");
  var dropboxInput = $("#dropbox-input");
  var googleDriveInput = $("#googleDrive-input");
  // Device Button and Drop Variables
  var deviceBtn = $("#device-btn");
  var deviceDrop = $("#device-drop");
  var mobileBtn = $("#mobile-btn");
  var mobileDrop = $("#mobile-drop");
  var android = $("#android");
  var androidInput = $("#android-input");
  var ios = $("#ios");
  var iosInput = $("#ios-input");
  var pcBtn = $("#pc-btn");
  var pcDrop = $("#pc-drop");
  var windows = $("#windows");
  var windowsInput = $("#windows-input");
  var mac = $("#mac");
  var macInput = $("#mac-input");
  var linux = $("#linux");
  var linuxInput = $("#linux-input");
  var stv = $("#stv");
  var stvInput = $("#stv-input");
  //Service Selection
  serviceBtn.click(function (event) {
    event.preventDefault();
    serviceDrop.slideToggle();
  });
  ccs.click(function () {
    if ($(this).prop("checked") == true) {
      deviceSec.show();
      mediaSec.show();
      cloudSec.show();
      emailSec.show();
      paymentSec.show();
      wifiSec.show();
    } else if ($(this).prop("checked") == false) {
      deviceSec.hide();
      mediaSec.hide();
      cloudSec.hide();
      emailSec.hide();
      paymentSec.hide();
      wifiSec.hide();
    }
  });
  ciBtn.click(function (event) {
    event.preventDefault();
    ciDrop.slideToggle();
    irDrop.slideUp();
  });
  oi.click(function () {
    if ($(this).prop("checked") == true) {
      textBox.show();
      deviceSec.hide();
      mediaSec.hide();
      cloudSec.hide();
      emailSec.hide();
      paymentSec.hide();
      wifiSec.hide();
    } else if ($(this).prop("checked") == false) {
      textBox.hide();
    }
  });
  ci.click(function () {
    if ($(this).prop("checked") == true) {
      textBox.show();
      deviceSec.hide();
      mediaSec.hide();
      cloudSec.hide();
      emailSec.hide();
      paymentSec.hide();
      wifiSec.hide();
    } else if ($(this).prop("checked") == false) {
      textBox.hide();
    }
  });
  irBtn.click(function (event) {
    event.preventDefault();
    irDrop.slideToggle();
    ciDrop.slideUp();
  });
  vr.click(function () {
    if ($(this).prop("checked") == true) {
      textBox.hide();
      deviceSec.show();
      mediaSec.hide();
      cloudSec.hide();
      emailSec.hide();
      paymentSec.hide();
      wifiSec.hide();
    } else if ($(this).prop("checked") == false) {
      deviceSec.hide();
    }
  });
  hr.click(function () {
    if ($(this).prop("checked") == true) {
      textBox.hide();
      deviceSec.show();
      mediaSec.show();
      cloudSec.show();
      emailSec.show();
      paymentSec.show();
      wifiSec.show();
    } else if ($(this).prop("checked") == false) {
      textBox.hide();
      deviceSec.hide();
      mediaSec.hide();
      cloudSec.hide();
      emailSec.hide();
      paymentSec.hide();
      wifiSec.hide();
    }
  });
  dr.click(function () {
    if ($(this).prop("checked") == true) {
      linkBox.show();
      textBox.show();
      deviceSec.hide();
      mediaSec.hide();
      cloudSec.hide();
      emailSec.hide();
      paymentSec.hide();
      wifiSec.hide();
    } else if ($(this).prop("checked") == false) {
      linkBox.hide();
      textBox.hide();
    }
  });
  //Social Section
  socialBtn.click(function (event) {
    event.preventDefault();
    socialDrop.slideToggle();
    paymentDrop.slideUp();
    deviceDrop.slideUp();
    emailDrop.slideUp();
    cloudDrop.slideUp();
  });
  facebook.click(function () {
    if ($(this).prop("checked") == true) {
      fbInput.show();
    } else if ($(this).prop("checked") == false) {
      fbInput.hide();
      fbInput.val(0);
    }
  });
  twitter.click(function () {
    if ($(this).prop("checked") == true) {
      twitterInput.show();
    } else if ($(this).prop("checked") == false) {
      twitterInput.hide();
      twitterInput.val(0);
    }
  });
  insta.click(function () {
    if ($(this).prop("checked") == true) {
      instaInput.show();
    } else if ($(this).prop("checked") == false) {
      instaInput.hide();
      instaInput.val(0);
    }
  });
  link.click(function () {
    if ($(this).prop("checked") == true) {
      linkInput.show();
    } else if ($(this).prop("checked") == false) {
      linkInput.hide();
      linkInput.val(0);
    }
  });
  pint.click(function () {
    if ($(this).prop("checked") == true) {
      pintInput.show();
    } else if ($(this).prop("checked") == false) {
      pintInput.hide();
      pintInput.val(0);
    }
  });
  youtube.click(function () {
    if ($(this).prop("checked") == true) {
      youtubeInput.show();
    } else if ($(this).prop("checked") == false) {
      youtubeInput.hide();
      youtubeInput.val(0);
    }
  });
  snap.click(function () {
    if ($(this).prop("checked") == true) {
      snapInput.show();
    } else if ($(this).prop("checked") == false) {
      snapInput.hide();
      snapInput.val(0);
    }
  });
  whats.click(function () {
    if ($(this).prop("checked") == true) {
      whatsInput.show();
    } else if ($(this).prop("checked") == false) {
      whatsInput.hide();
      whatsInput.val(0);
    }
  });

  //Payment Section
  paymentBtn.click(function (event) {
    event.preventDefault();
    paymentDrop.slideToggle();
    socialDrop.slideUp();
    deviceDrop.slideUp();
    emailDrop.slideUp();
    cloudDrop.slideUp();
  });
  paypal.click(function () {
    if ($(this).prop("checked") == true) {
      paypalInput.show();
    } else if ($(this).prop("checked") == false) {
      paypalInput.hide();
      paypalInput.val(0);
    }
  });
  skrill.click(function () {
    if ($(this).prop("checked") == true) {
      skrillInput.show();
    } else if ($(this).prop("checked") == false) {
      skrillInput.hide();
      skrillInput.val(0);
    }
  });
  visa.click(function () {
    if ($(this).prop("checked") == true) {
      visaInput.show();
    } else if ($(this).prop("checked") == false) {
      visaInput.hide();
      visaInput.val(0);
    }
  });
  bank.click(function () {
    if ($(this).prop("checked") == true) {
      bankInput.show();
    } else if ($(this).prop("checked") == false) {
      bankInput.hide();
      bankInput.val(0);
    }
  });

  //Email Section
  emailBtn.click(function (event) {
    event.preventDefault();
    emailDrop.slideToggle();
    socialDrop.slideUp();
    paymentDrop.slideUp();
    deviceDrop.slideUp();
    cloudDrop.slideUp();
  });
  yahoo.click(function () {
    if ($(this).prop("checked") == true) {
      yahooInput.show();
    } else if ($(this).prop("checked") == false) {
      yahooInput.hide();
      yahooInput.val(0);
    }
  });
  hotmail.click(function () {
    if ($(this).prop("checked") == true) {
      hotmailInput.show();
    } else if ($(this).prop("checked") == false) {
      hotmailInput.hide();
      hotmailInput.val(0);
    }
  });
  gmail.click(function () {
    if ($(this).prop("checked") == true) {
      gmailInput.show();
    } else if ($(this).prop("checked") == false) {
      gmailInput.hide();
      gmailInput.val(0);
    }
  });
  outlook.click(function () {
    if ($(this).prop("checked") == true) {
      outlookInput.show();
    } else if ($(this).prop("checked") == false) {
      outlookInput.hide();
      outlookInput.val(0);
    }
  });
  customMail.click(function () {
    if ($(this).prop("checked") == true) {
      customMailInput.show();
    } else if ($(this).prop("checked") == false) {
      customMailInput.hide();
      customMailInput.val(0);
    }
  });

  // Device Section
  deviceBtn.click(function (event) {
    event.preventDefault();
    deviceDrop.slideToggle();
    socialDrop.slideUp();
    paymentDrop.slideUp();
    emailDrop.slideUp();
    cloudDrop.slideUp();
  });
  mobileBtn.click(function (event) {
    event.preventDefault();
    mobileDrop.slideToggle();
    pcDrop.slideUp();
  });
  android.click(function () {
    if ($(this).prop("checked") == true) {
      androidInput.show();
    } else if ($(this).prop("checked") == false) {
      androidInput.hide();
      androidInput.val(0);
    }
  });
  ios.click(function () {
    if ($(this).prop("checked") == true) {
      iosInput.show();
    } else if ($(this).prop("checked") == false) {
      iosInput.hide();
      iosInput.val(0);
    }
  });
  pcBtn.click(function (event) {
    event.preventDefault();
    pcDrop.slideToggle();
    mobileDrop.slideUp();
  });
  windows.click(function () {
    if ($(this).prop("checked") == true) {
      windowsInput.show();
    } else if ($(this).prop("checked") == false) {
      windowsInput.hide();
      windowsInput.val(0);
    }
  });
  linux.click(function () {
    if ($(this).prop("checked") == true) {
      linuxInput.show();
    } else if ($(this).prop("checked") == false) {
      linuxInput.hide();
      linuxInput.val(0);
    }
  });
  mac.click(function () {
    if ($(this).prop("checked") == true) {
      macInput.show();
    } else if ($(this).prop("checked") == false) {
      macInput.hide();
      macInput.val(0);
    }
  });
  stv.click(function () {
    if ($(this).prop("checked") == true) {
      stvInput.show();
    } else if ($(this).prop("checked") == false) {
      stvInput.hide();
      stvInput.val(0);
    }
  });
  //Cloud Section
  cloudBtn.click(function (event) {
    event.preventDefault();
    cloudDrop.slideToggle();
    deviceDrop.slideUp();
    socialDrop.slideUp();
    paymentDrop.slideUp();
    emailDrop.slideUp();
  });
  icloud.click(function () {
    if ($(this).prop("checked") == true) {
      icloudInput.show();
    } else if ($(this).prop("checked") == false) {
      icloudInput.hide();
      icloudInput.val(0);
    }
  });
  gcloud.click(function () {
    if ($(this).prop("checked") == true) {
      gcloudInput.show();
    } else if ($(this).prop("checked") == false) {
      gcloudInput.hide();
      gcloudInput.val(0);
    }
  });
  dropbox.click(function () {
    if ($(this).prop("checked") == true) {
      dropboxInput.show();
    } else if ($(this).prop("checked") == false) {
      dropboxInput.hide();
      dropboxInput.val(0);
    }
  });
  googleDrive.click(function () {
    if ($(this).prop("checked") == true) {
      googleDriveInput.show();
    } else if ($(this).prop("checked") == false) {
      googleDriveInput.hide();
      googleDriveInput.val(0);
    }
  });
});
