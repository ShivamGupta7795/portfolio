$(document).ready(function(){
	var div = document.getElementsByClassName('modal');
	var id;
	var span;
	var modal = [];
	var btn = [];
	var span_arr = [];
	for(i=0;i<div.length; i++){
		 modal[i] = document.getElementsByClassName('modal')[i];
		 btn[i] = document.getElementsByClassName('project-name')[i];
		 span_arr[i] = document.getElementsByClassName("close")[i];

	}
	
	$(".project-name").click(function(){
		id = this.id;
		span = span_arr[id];
		$(modal[id]).show();
	});

	$(".close").click(function(){
		$(modal[id]).hide();
		$("#modal-resume").hide();
	});
	
	

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal[id]) {
	        // div.style.display = "none";
	        $(modal[id]).hide();
	    }
	}

	$("#resume").click(function(){
		$("#modal-resume").show();
	});
});