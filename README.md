Metaforične preslikave
=======

Pri implementaciji smo uporabili naslednje ključne knjižnice:

* [tracking.js](https://trackingjs.com/) - zaznavanje in kadriranje obraza
* [Color Sampler](https://github.com/emn178/color-sampler) - izbira barve
* [MediaStreamRecorder.js ](https://github.com/streamproc/MediaStreamRecorder) - snemanje zvoka


###Struktura projekta

* server - koda za shranjevanje audio datotek in zapis v podatkovno bazo, nastavitve za podatkovno bazo (naslov, uporabniško ime, geslo)
* js - koda za nalaganje in uporabo knjižnic, najpomembnejše faceTracking.js in audioRecorder.js.

Vsak .html dokument ima pripadajočo .js skripto. Po korakih aplikacije si dokumenti sledijo v naslednjem zaporedju:

* index - faceTrackijg.js
* introcudction - intrduction.js
* colorPick - colorSelectSampler.js, colorSampler/color-sampler.min.js
* colorNaming - colorNaming.js
* colorNamePlaylist - colorNamePlaylist.js

###Uporaba aplikacije
Uporabnik na vstopni strani klikne na gumb Start audio, ob kliku katerega se odpre dialog za izbiro mikrofona. Po izbiri
audio vhoda uporabnik klikne na gumb Start video s katerim izbere video vhod. Po izbiri video vhoda se prikaže video stream
ob katerem se zažene tudi zaznava obraza. Po uspešni zaznavi se uproabniku prikaže predstavitev projekta. V naslednjem koraku
uporabnik izbere dve barvni točkovni vrednosti kateri se združita v povprečno barvo. Po potrditvi izbire uporabnik vstopi v korak
v katerem mora poimenovati povprečno barvo. Na tem koraku se audio datoteka in slika uporabnika shrani na strežnik v datoteko **preslikave_uploads**,
predpona imena shranjenih datotek, čas, izbrani barvi in povprečna barva pa se shranijo v podatkovno bazo.


###Struktura baze
Pri implementaciji smo uporabili MySQL bazo. Izvorna koda, ki vpisuje v bazo se nahaja v **server/database_insert.php**.
Skripta **js/audioRecorder.js** vsebuje izvorno kodo, ki kliče funkcije za shranjevanje datotek in pisanje v podatkovno bazo.
Nastavitve uporabniškega imena, gesla, ime strežnika in ime tabele so zapisane v **server/database_credentials.php**.
Tabela (aktivnost_p) za metaforične preslikave vsebuje naslednje stolpce:

* cas - datetime
* predpona - varchar(250)
* leva_barva - varchar(250)
* desna_barva - varchar(250)
* povprecna_barva - varchar(250)

###Predvajanje obstoječih zapisov - Galerija
V zadnjem koraku aplikacije se izvede koda skripte **js/colorNamePlaylist.js**, ki kliče **server/get_list.php** s katerim se pridobi
seznam shranjenih datotek in izbranih barv uporabnika. Predponi imena datoteke, ki se prebere iz podatkovne baze, pripnemo
**_user** in dobimo popolno ime datoteke - slike uporabika, ki je shranjena v datoteki **preslikave_uploads**. Sama predpona
se uporabi za branje audio datoteke - izjava uporabika. Slika uporabika skupaj z izjavo in izbranimi barvami se prikaže skupaj na
pogledu do prikaza naslednjega vnosa.

###Namestitev
Pri implementaciji projekta smo si pomagali s paketom [XAMPP - strežnik Apache in PHP](https://www.apachefriends.org/index.html).
Celoten projekt, vsebino datoteke **ioi-preslikave_base-master** skopiramo v novo ustvarjeno datoteko (v nadaljevanju **preslikave**), ki se nahaja v **C:\xampp\htdocs** (Windows). 
Poleg tega pa potrebujemo datoteko v katero se bodo shranjevale slike in audio posnetki uporabnikov. Za ta namen v **C:\xampp\htdocs** ustvarimo
datoteko **preslikave_uploads**. Ob zagonu strežnika je aplikacija dosegljiva na naslovu **http://localhost:8080/preslikave/** (zadnji del naslova predstavlja 
predhodno ustvarjeno datoteko v katero smo kopirali vsebino projekta). V primeru drugačne strukture datotek, je potrebno ustrezno poraviti 
strukturo v datoteki **server/save.php** in **server/upload_images.php**.


###Uporabljene predloge:

* [Start Bootstrap](http://startbootstrap.com/) - [One Page Wonder](http://startbootstrap.com/template-overviews/one-page-wonder/)
* [One Page Wonder](http://startbootstrap.com/template-overviews/one-page-wonder/) is a basic one page template for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/).
