$(document).ready(function () {
  var socialBtn = $("#social-btn");
  var socialDrop = $("#social-drop");
  var facebook = $("#facebook");
  var fbInput = $("#fb-input");
  var twitter = $("#twitter");
  var twitterInput = $("#twitter-input");
  var insta = $("#insta");
  var instaInput = $("#insta-input");
  socialBtn.click(function (event) {
    event.preventDefault();
    socialDrop.slideToggle();
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

  var deviceBtn = $("#device-btn");
  var deviceDrop = $("#device-drop");
  deviceBtn.click(function (event) {
    event.preventDefault();
    deviceDrop.slideToggle();
  });
  var mobileBtn = $("#mobile-btn");
  var mobileDrop = $("#mobile-drop");
  mobileBtn.click(function (event) {
    event.preventDefault();
    mobileDrop.slideToggle();
  });

  var android = $("#android");
  var androidInput = $("#android-input");
  android.click(function () {
    if ($(this).prop("checked") == true) {
      androidInput.show();
    } else if ($(this).prop("checked") == false) {
      androidInput.hide();
      androidInput.val(0);
    }
  });
  var ios = $("#ios");
  var iosInput = $("#ios-input");
  ios.click(function () {
    if ($(this).prop("checked") == true) {
      iosInput.show();
    } else if ($(this).prop("checked") == false) {
      iosInput.hide();
      iosInput.val(0);
    }
  });

  var pcBtn = $("#pc-btn");
  var pcDrop = $("#pc-drop");
  pcBtn.click(function (event) {
    event.preventDefault();
    pcDrop.slideToggle();
  });

  var windows = $("#windows");
  var windowsInput = $("#windows-input");
  windows.click(function () {
    if ($(this).prop("checked") == true) {
      windowsInput.show();
    } else if ($(this).prop("checked") == false) {
      windowsInput.hide();
      windowsInput.val(0);
    }
  });

  var linux = $("#linux");
  var linuxInput = $("#linux-input");
  linux.click(function () {
    if ($(this).prop("checked") == true) {
      linuxInput.show();
    } else if ($(this).prop("checked") == false) {
      linuxInput.hide();
      linuxInput.val(0);
    }
  });

  var mac = $("#mac");
  var macInput = $("#mac-input");
  mac.click(function () {
    if ($(this).prop("checked") == true) {
      macInput.show();
    } else if ($(this).prop("checked") == false) {
      macInput.hide();
      macInput.val(0);
    }
  });
});
