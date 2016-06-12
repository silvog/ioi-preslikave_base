$(document).ready(function () {
	isOnPlaylist = false;
    function colorPickContent() {
        $('#mainContent').load('colorPick.html');
    }

    setTimeout(colorPickContent, 20000);
});
