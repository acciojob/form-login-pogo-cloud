
function getFormValue(event) {
	let form=document.querySelector("#form1");
	// form.addEventListener("onsubmit",abc);
	
	event.preventDefault();
    let firstname=document.querySelector("#f-name").value;
	let lastname=document.querySelector("#l-name").value;
	console.log(firstname+" "+lastname);
	debugger;
	if(firstname!=""&&lastname!=""){
		alert(firstname+" "+lastname);
		return;
	}
	function abc(event){
		event.preventdefault();
		console.log("HI");
		
	}
	

}
