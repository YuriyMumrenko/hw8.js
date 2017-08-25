
$(".enter_Task1").on("click", function(){

	let inpUrl = $('.inpUrl').val();    
	let pattern = /\w+(?=\.\w+$)/gi;
	let res = inpUrl.match(pattern);
	res = res.toString();    
	res = res.replace(/o/ig , "0");
	res = res.replace(/l/ig , "1");
	res = res.replace(/i/ig , "3");
	res = res.replace(/s/ig , "5");
	res = res + RandomSet(4);
	$('.output').text('результат: ' +  res).css({"color" : "green"}); 
	
	function RandomSet(n){  
		return Math.random().toString(36).slice(2, 2 + Math.max(1, Math.min(n, 10)) );
	}
});


//--------------------------------------





































