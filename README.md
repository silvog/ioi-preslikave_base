Metaforične preslikave
=======

Pri implementaciji smo uporabili naslednje ključne knjižnice:

* [tracking.js](https://trackingjs.com/) - zaznavanje in kadriranje obraza
* [Color Sampler](https://github.com/emn178/color-sampler) - izbira barve
* [MediaStreamRecorder.js ](https://github.com/streamproc/MediaStreamRecorder) - snemanje zvoka


###Struktura projekta

* server - koda za shranjevanje audio datotek in zapis v podatkovno bazo, nastavitve za podatkovno bazo (naslov, uporabniško ime, geslo)
* js - koda za nalaganje in uporabo knjižnic, najpomembnejše faceTracking.js in audioRecorder.js.

###Uporaba aplikacije
Uporabnik na vstopni strani klikne na gumb Start audio, ob kliku katerega se odpre dialog za izbiro mikrofona. Po izbiri
audio vhoda uporabnik klikne na gumb Start video s katerim izbere video vhod.

Template used:

* [Start Bootstrap](http://startbootstrap.com/) - [One Page Wonder](http://startbootstrap.com/template-overviews/one-page-wonder/)
* [One Page Wonder](http://startbootstrap.com/template-overviews/one-page-wonder/) is a basic one page template for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/).
