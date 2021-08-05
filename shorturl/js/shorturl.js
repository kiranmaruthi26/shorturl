$("#submit_url").click(function (event) {
	event.preventDefault();
	var original_url = $("#url").val();
	console.log(original_url);
	if(original_url == ""){
		$("#url").addClass("border-danger");
	}else{
		$("#url").removeClass("border-danger");


		/*function isValidURL(string) {
		  var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
		  	return (res !== null)
			};*/

			function isValidURL(myURL) {
            var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ //port
            '(\\?[;&amp;a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i');
            return pattern.test(myURL);
         }


			if(!isValidURL(original_url)){
				alert("Invalid URL..! Please check and try again")	
			}else{

				$("#urlForm").addClass("d-none");
				$("#loader_send").removeClass("d-none");

				// Function to generate random number 
				function randomNumber(min, max) { 
				    return Math.floor(Math.random() * (max - min) + min);
				} 
				   
				// Function call
				var uid = randomNumber(1000, 9999);
				console.log(uid); 

				$.ajax({
					type:"POST",
					url:"./shorturl.php",
					data:{original_url:original_url, uid:uid},
					datatype:'json',
					success: function(result) {
						$("#urlForm").removeClass("d-none");
						$("#loader_send").addClass("d-none");
						$("#loader_recive").removeClass("d-none");

						setTimeout(function(){
							$("#loader_recive").addClass("d-none");
							$("#shorturl_final").html(result);
						},3000);
						//console.log(result);
					}
				});
			}

	}

});



function copyUrl() {
  var copy_url = document.getElementById("final_url");
  copy_url.select();
  copy_url.setSelectionRange(0, 99999)
  document.execCommand("copy");
  
  document.getElementById("copy_url").value = "URL Copied";

  setTimeout(function(){
		document.getElementById("copy_url").value = "Copy to Clipboard";
	},3000);

}