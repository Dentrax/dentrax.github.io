var dallar = $("#dallar");
var kutuk = $("#kutuk");

for(i = 0; i < 4; i++){
	
	for(y = 0; y < 4; y++){
		
		dallar.append("<span style='color: red;'>~</span>");
	
		var z = ((y+2)+i+i+i+y);
		for(x = 0; x < z; x++){
			if(x == (z-1){
				dallar.append("*<span style='color: red;'>~</span>");
			}else{
				dallar.append("*~");
			}
		}
		dallar.append("<br>");
	}
}

for(i = 0; i < 5; i++){
	kutuk.append("¤");
	kutuk.append("<br>");
}