# Video Chat

Video chat demo on [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling) and websockets 

## How to start

* [Node.js](https://nodejs.org/en/download/) required

* Run `npm install` to install dependencies

* To start server run `npm start`

* Open [https://localhost:7000/](https://localhost:7000/) in browser

* Use terminal command `ifconfig -a` (or `winipcfg` on Windows) to discover your IP

* Locate to https://YOUR-IP:6530/ in browsers from other devices in LAN

## Real server

To use this demo with real SSL certificate on server:

* Put here files `host.crt` and `host.key`
* Run `./start` script

## Credits

Greetings to [this example](https://github.com/mdn/samples-server/tree/master/s/webrtc-from-chat)