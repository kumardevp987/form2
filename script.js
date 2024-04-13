var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


function validation(){
    let grossF=document.getElementById("gross").value;
    let extraF=document.getElementById("extra").value;
    let dedF=document.getElementById("deductions").value;
    let age=document.getElementById("age").value;

    let a,b,c;

    // Regular expression to match numbers
    var numberPattern = /^\d+$/;
    a= numberPattern.test(grossF) ? 1: 0;
    b= numberPattern.test(extraF) ? 1: 0;
    c= numberPattern.test(dedF) ? 1: 0;
    console.log(a + " "+ b + " "+ c + " " + age);

    document.getElementById("grossinfo").style.bottom= a ? "500px" : "30px";
    document.getElementById("extrainfo").style.bottom= b ? "500px" : "30px";
    document.getElementById("dedinfo").style.bottom= c ? "500px" : "30px";
    document.getElementById("ageinfo").style.bottom= age !='none' ? "500px" : "30px";

    if(a && b && c && age != 'none'){
        showPopup();
    }

}

document.getElementById("gross").addEventListener("click",()=>{
    document.getElementById("grossinfo").style.bottom= "500px";
});
document.getElementById("extra").addEventListener("click",()=>{
    document.getElementById("extrainfo").style.bottom= "500px";
});
document.getElementById("deductions").addEventListener("click",()=>{
    document.getElementById("dedinfo").style.bottom= "500px";
});
document.getElementById("age").addEventListener("click",()=>{
    document.getElementById("ageinfo").style.bottom= "500px";
});



function showPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    calculation();
  }

  function hidePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("form").reset();
  }

  function dontGo(event) {
    event.preventDefault();
  }
document.getElementById("clickMe").addEventListener("click",dontGo);


function calculation(){
    let gross=parseInt(document.getElementById("gross").value);
    let extra=parseInt(document.getElementById("extra").value);
    let ded=parseInt(document.getElementById("deductions").value);
    let age=parseInt(document.getElementById("age").value);
    let overall= gross + extra - ded;
    let tax;

    //console.log(gross + " " + extra + " "+ ded  +" "+ age + " " + overall);
    
    if(overall <= 800000){
        console.log("NOO TAX")
        tax=0;
    }
    else{
        if(age== 1){
            tax= 0.3 * (overall - 800000 );  
        }
        else if(age == 2){
            tax= 0.4 * (overall - 800000 );
        }
        else {
            tax= 0.1 * (overall - 800000 );
        }
    }
    let actualIncome=overall-tax;

    let span = document.getElementById("tax");
    span.innerHTML = actualIncome.toLocaleString();
    
}
