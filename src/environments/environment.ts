
/**
 * TODO: Implement this, it's better when you have time.
 * https://www.jvandemo.com/how-to-use-environment-variables-to-configure-your-angular-application-without-a-rebuild/
 */
export const environment = {
  app: "Team Angular",
  version: "0.1.3",
  production: false,
  publicVapidKey: "BCjZ15Yq28AJMmwdpbyTMQhT3AMpZ7EmKGlB1kmQnhq6UOXZHiLv5r9op3OLln9IXCiDYe3_crvWV5X0bx0jYUY",
  privateVapidKey: "OfXfAppON-qUkUmC8HJUlA5wkbgGtxhymVEdZ3fFOGo",
  baseNotificationUrl: "http://localhost:5000/notifications",

  firebaseApiKey: "AIzaSyBhWs5avydlNtKhxMbt6KdAGWxFLdAk7Bw",
  firebaseAuthDomain: "alien-outrider-213710.firebaseapp.com",
  firebaseDatabaseURL: "https://alien-outrider-213710.firebaseio.com",
  firebaseProjectId: "alien-outrider-213710",
  firebaseStorageBucket: "gs://alien-outrider-213710.appspot.com",

  pubnubPublishKey: "pub-c-d6884608-953e-4f02-906b-c9c742cf0cd3",
  pubnubSubscribeKey: "sub-c-c3c303ea-d94d-11e9-9067-a65ad2c362ff",

  // 1. hue.smhfml.com
  // 2. nolle.serveo.net, dissero.serveo.net
  //    ssh -o ServerAliveInterval=60 -R hue:443:71.131.36.206:80 serveo.net
  // 3. 71-131-36-206.lightspeed.tukrga.sbcglobal.net
  // 4. 71.131.36.206
  // 5. 192.168.1.70
  philipsBridge: "192.168.1.70",
  philipsApiKey: "Bsmb0C4ah7xaSHjwqnFPOGRokDE7oO8NEttQxEuR"
};
