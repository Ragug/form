
	t3='<div id="thirdyr" ><div class="form-group"><label>Name: </label><input type="text" class="form-control" name="" placeholder="Ragu" id="f1" required></div><div class="form-group"><label>Roll No:</label><input type="text" class="form-control"name="" placeholder="19EEL119" id="f2" required></div><div class="form-group"><label>Email: </label><input type="email" class="form-control" name="" placeholder="ragug.19eee@kongu.edu" id="f3" required></div><div class="form-group"><label>Section </label><br><select name="" id="cls" class="form-select" required><option value="">Select</option><option value="A">A</option><option value="B">B</option> </select></div><div class="form-group"><label>Link to join the WhatsApp Group: <a href="https://chat.whatsapp.com/CwEvZbeeedlIl99lWZKYdR">click me </a> Have joined the WhatsApp group?</label><input type="radio" name="whatsapp" value="Yes" required><label for="" > &nbsp;Yes</label><br><input type="radio" name="whatsapp" value="No" onchange="handle(this)"><label for=""> &nbsp;No</label></div> </div>'
	s = '<div id="secyr"> <div class="form-group"> <label>Team Head Email Id:</label> <input type="email" class="form-control" name="" placeholder="ragug.19eee@kongu.edu" id="s1" required> </div> <div class="form-group"> <label>Team Name : </label> <input type="text" class="form-control" name="" placeholder="coding G" id="s2" required> </div> <div class="form-group"><label>Member 1 Name:</label><input type="text" class="form-control" name="" placeholder="ragu" id="s3" required></div><div class="form-group"><label>Member 1 Roll No :</label><input type="text" class="form-control" name="" placeholder="19eel119" id="s4" required></div><div class="form-group"><label>Member 2 Name:</label><input type="text" class="form-control" name="" placeholder="ragu" id="s5" required></div><div class="form-group"><label>Member 2 Roll No :</label><input type="text" class="form-control" name="" placeholder="19eel119" id="s6" required></div><div class="form-group"><label>Member 3 Name:</label><input type="text" class="form-control" name="" placeholder="ragu" id="s7" required></div><div class="form-group"><label>Member 3 Roll No :</label><input type="text" class="form-control" name="" placeholder="19eel119" id="s8" required></div><div class="form-group"><label>Link to join the WhatsApp Group: <a href="https://chat.whatsapp.com/CwEvZbeeedlIl99lWZKYdR">click me</a> Have joined the WhatsApp group?</label><input type="radio" name="whatsapp" value="Yes" required><label for="" > &nbsp;yes</label><br><input type="radio" name="whatsapp" value="No" onchange="handle(this)"><label for=""> &nbsp;No</label></div> </div>'
	function callselect(){
		let yr = document.getElementById('select').value;
		if (yr =="III"){
			console.log('3 year');
			document.getElementById("yrss").style.display='none';
			document.querySelector("#hi").innerHTML=t3;
			document.getElementById("submit").disabled = false;
	}
		else if(yr=="II"){
			console.log('2 year');
			document.getElementById("yrss").style.display='none';
			document.querySelector("#hi").innerHTML=s;
			document.getElementById("submit").disabled = false;
	}
		else {
			document.querySelector("#hi").innerHTML="";
			document.getElementById("yrss").style.display='block';
			document.getElementById("submit").disabled = true;
			// alert('select year to continue');
		
		}
	}

function postToGoogle() {
	// year
	var year = document.getElementById("select").value
	// third year
	if(year=='III'){
	var f1 = $("#f1").val()
	var f2 = $("#f2").val()
	var f3 = $("#f3").val()
	var f4 = document.getElementById("cls").value
	var f5 =  document.querySelector('input[name="whatsapp"]:checked').value;
	var op = {"entry.115175493": year,"entry.1933506123":f1,"entry.426420404":f2,"entry.76790224":f3,"entry.183191682":f4,"entry.1213677186":f5}
	console.log(f1,f2,f3,f4,f5,op)
}
else if(year=='II'){
	var s1 = $("#s1").val()
	var s2 = $("#s2").val()
	var s3 = $("#s3").val()
	var s4 = $("#s4").val()
	var s5 = $("#s5").val()
	var s6 = $("#s6").val()
	var s7 = $("#s7").val()
	var s8 = $("#s8").val()
	var s9 = document.querySelector('input[name="whatsapp"]:checked').value;
	var op = {
		"entry.115175493": year,
		"entry.611041629":s1,
		"entry.1172412227":s2,
		"entry.518890150":s3,
		"entry.918657890":s4,
		"entry.2005141775":s5,
		"entry.631136988":s6,
		"entry.227617309":s7,
		"entry.759075039":s8,
		"entry.795269048":s9

	}
	console.log(op)

}
	$.ajax({
		url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScN0_BUYFxBJWjMz8O3U24zFTC2Nr893eJMynF-mCi2ZtzuWw/formResponse",
		data: op,
		type: "POST",
		dataType: "xml",
		success: function(d)
		{
		},
		error: function(x, y, z)
			{
				$('#mG61Hd').hide();
				$("#myModal").modal('toggle');
			}
	});
	return false;
}



const container = document.getElementById('dialog-container');
		var bg_op=document.querySelector(".bg").style;
        const CustomAlert = new function(msg) {
            this.show = function(msg) {
                let content = document.getElementById('dialog-body');
                container.style.opacity = 1;
                content.textContent = msg;
				var hh = document.getElementById("select").value=='III'?'99%':'140%'
				container.style.top = hh;
				bg_op.opacity='30%';
            }

            this.close = function() {
				bg_op.opacity='100%';
                container.style.top = '-30%';
                container.style.opacity = 0;
            }
        }

		function handle(src) {
			// alert("Please join in the whatsapp group to get quick update about the event");
			CustomAlert.show('Please join in the whatsapp group to get quick update about the event');
			}