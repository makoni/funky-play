var articles = document.getElementsByTagName('article');
var h2, artist;

var serviceLinks = {
	'yaMusicPlayLink' : 'http://music.yandex.ru/search?text=', 
	'vkMusicPlayLink' : 'http://vk.com/search?c%5Bperformer%5D=1&c%5Bsection%5D=audio&c%5Bq%5D='};

var createNewLink = function(type, artist) {
	var playButton = document.createElement('a');
	playButton.innerHTML = '&#9658;';
	playButton.className = type;	
	playButton.setAttribute('href', serviceLinks[type] + artist);
	playButton.setAttribute('target','_blank');

	return playButton;
};

var h2Link;
for ( var i = 0, k = articles.length; i < k; i++ ) {
	h2 = articles[i].getElementsByTagName('h2');
	h2Link = h2[0].getElementsByTagName('a');

	if ( h2Link.length > 0 ) {
		artist = h2[0].getElementsByTagName('a')[0].innerHTML.split(' - ')[0];
	} else {
		artist = h2[0].innerHTML.split(' - ')[0];
	}
	
	
	h2[0].appendChild(createNewLink('yaMusicPlayLink', artist));

	h2[0].appendChild(createNewLink('vkMusicPlayLink', artist));
}