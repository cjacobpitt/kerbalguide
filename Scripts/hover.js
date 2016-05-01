function getImg(text) {
    console.log(text);
    for (name in con){
    	if(con[name].name == text){
            
      	 return con[name].img;
      }
    }
}

$(document).ready(function () {
    $(".module").tooltip({
        items: 'a',
        content: function(event, ui) { return '<img src="' + getImg($(this).text()) + '" width="200px"/>' },
        position: { my: 'center bottom', at: 'center top-10' }
    });
});