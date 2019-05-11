var myApp = new Framework7();
var $$ = Dom7;
var pictureSource;   
var destinationType; 
var mainView = myApp.addView('.view-main', {
  dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {
  console.log("Device is ready!");
  onDeviceReady();
});

/**
 * Device ready.
 */
function onDeviceReady() {
  pictureSource = navigator.camera.PictureSourceType;
  destinationType = navigator.camera.DestinationType;
}

/**
 * Called when a photo is successfully retrieved
 * @param {Image data} imageData 
 */
function onPhotoDataSuccess(imageData) {
  myApp.alert('Phot is successfuly saved.');
}

/**
 * Show the captured photo
 * The inline CSS rules are used to resize the image
 * 
 * @param {URI image} imageURI 
 */
function onPhotoURISuccess(imageURI) {
  var largeImage = document.getElementById('largeImage');
  largeImage.style.display = 'block';
  largeImage.src = imageURI;
}
/**
 * Take picture using device camera and retrieve 
 * image as base64-encoded string
 */
function capturePhoto() {
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
    saveToPhotoAlbum: true
  });
}

/**
 * Retrieve image file location from specified source
 * @param {Image capture} source 
 */
function getPhoto(source) {
  navigator.camera.getPicture(onPhotoURISuccess, onFail, {
    quality: 50,
    destinationType: destinationType.FILE_URI,
    sourceType: source
  });
}

/**
 * Called if something bad happens.
 * @param {Fail message} message 
 */
function onFail(message) {
  alert('Failed because: ' + message);
}

