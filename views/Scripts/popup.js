function getImg(text){
		for(name in con){
    	if(con[name].name == text){
      	return con[name].img;
      }
    }
}

$(document).ready(function () {
    $("#module").tooltip({
        items: 'a',
        content: function(event, ui) { return '<img src="' + getImg($(this).text()) + '" width="200px"/>' }
    });
});