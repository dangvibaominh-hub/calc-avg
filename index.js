function showMessage(){
    alert("");
}

function calcAvg(){
   
   const avg1Element = document.getElementById("avg1");
   const avg2Element = document.getElementById("avg2");
   const avg3Element = document.getElementById("avg3");
   const avg4Element = document.getElementById("avg4");
   const avg5Element = document.getElementById("avg5");
   const avg6Element = document.getElementById("avg6");
   const avg7Element = document.getElementById("avg7");
   const avg8Element = document.getElementById("avg8");
   const avg9Element = document.getElementById("avg9");

   console.log(avg1Element.value);
   console.log(avg2Element.value);
   console.log(avg3Element.value);
   console.log(avg4Element.value);
   console.log(avg5Element.value);
   console.log(avg6Element.value);
   console.log(avg7Element.value);
   console.log(avg8Element.value);
   console.log(avg9Element.value);
   const avg = Number(avg1Element.value) + Number(avg2Element.value) + Number(avg3Element.value) + Number(avg4Element.value) + Number(avg5Element.value) + Number(avg6Element.value) + Number(avg7Element.value) + Number(avg8Element.value) + Number(avg9Element.value)/ 9;
   alert(avg.toFixed(1));
}