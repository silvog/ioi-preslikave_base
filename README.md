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
audio vhoda uporabnik klikne na gumb Start video s katerim izbere video vhod. Po izbiri video vhoda se prikaže video stream
ob katerem se zažene tudi zaznava obraza. Po uspešni zaznavi se uproabniku prikaže predstavitev projekta. V naslednjem koraku
uporabnik izbere dve barvni točkovni vrednosti kateri se združita v povprečno barvo. Po potrditvi izbire uporabnik vstopi v korak
v katerem mora poimenovati povprečno barvo. Na tem koraku se audio datoteka in slika uporabnika shrani na strežnik v datoteko **preslikave_uploads**,
predpona imena shranjenih datotek, izbrani barvi in povprečna barva pa se shranijo v podatkovno bazo.


###Struktura baze
Pri implementaciji smo uporabili MySQL bazo. Izvorna koda, ki vpisuje v bazo se nahaja v **server/database_insert.php**.
Tabela za metaforične preslikave vsebuje naslednje stolpce:

* cas - datetime
* predpona - varchar(250)
* leva_barva - varchar(250)
* desna_barva - varchar(250)
* povprecna_barva - varchar(250)


Template used:

* [Start Bootstrap](http://startbootstrap.com/) - [One Page Wonder](http://startbootstrap.com/template-overviews/one-page-wonder/)
* [One Page Wonder](http://startbootstrap.com/template-overviews/one-page-wonder/) is a basic one page template for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/).
