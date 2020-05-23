window.onload = init;

function init() {
	var addButton = document.getElementById("addButton");
	addButton.onclick = handleButtonClick;
	loadPlaylist();
}

function handleButtonClick() {
	var songText = document.getElementById("songTextInput");
	var songName = songText.value;
	
	if (songName.length > 0) {
		addListElement(songName);
	} else {
		alert ("Enter a song name");
	}
}

function addListElement(listValue) {
		var listElement = createListElement(listValue);
		var playlist = document.getElementById("playlist");
		playlist.appendChild(listElement);
		save(listValue);
}

function createListElement(listValue) {
	listElement = document.createElement("li");
	listElement.innerHTML = listValue;
	return listElement;
}

function getStoredArray(key) {
	var playlistArray = localStorage.getItem(key);
	if(playlistArray == null || playlistArray == "") {
		playlistArray = new Array();
	} else {
		playlistArray = JSON.parse(playlistArray);
	}
	return playlistArray;
}

function save (item) {
	var key = "playlist";
	var playlistArray = getStoredArray(key);
	playlistArray.push(item);
	localStorage.setItem(key, JSON.stringify(playlistArray));
}

function getSavedSongs() {
	return getStoredArray("playlist");
}

function loadPlaylist() {
	var playlistArray = getSavedSongs();
	var ul = document.getElementById("playlist");
	if (playlistArray != null) {
		for (var i=0; i < playlistArray.length; i++) {
			var li = document.createElement("li");
			li.innerHTML = playlistArray[i];
			ul.appendChild(li);
		}
	}

}