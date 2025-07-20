let chart=document.getElementById("chart");
let arr=[30,20,40,50];
let maxValue=Math.max(...arr);

arr.forEach((value)=>{
  let bar=document.createElement("div");
  bar.className="bar";
  let height=(value/maxValue)*100
  bar.style.height=`${height}%`;

  let label=document.createElement("div");
  label.className="label";
  label.textContent=value;
  bar.appendChild(label);
  chart.appendChild(bar);
})
