let major = document.getElementById("main");
let searchbtn=document.getElementById("btnsearch");
searchbtn.addEventListener("click",con);
let men = document.getElementById("mens");
let women = document.getElementById("womens")
let jewel = document.getElementById("jewellery");
let electron = document.getElementById("electronics");
var btnarray = [];
btnarray = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) :[]
//btnarray[0] = { id: "john" };
//localStorage.setItem("cart" , JSON.stringify(btnarray));
//console.log(JSON.stringify(btnarray));
let searchin = document.getElementById("search");


fetch('https://fakestoreapi.com/products')
 .then((apidata) => {
  console.log(apidata);
  return apidata.json();
})
  .then((actualdata) => {
  console.log(actualdata);

      function con(data) {

      let sdata = searchin.value;
      major.innerHTML = "";

      for (let i = 0; i < 20; i++) {
        let mydata = actualdata[i];
        if (mydata.title.includes(sdata) || mydata.category.includes(sdata)) {

          const btn = document.createElement('button');
          const cr = document.createElement("div");
          btn.innerHTML = "Add to Cart";
          btn.style.color = "white";
          btn.style.height = "20px";
          btn.style.width = "200px";
          btn.style.backgroundColor = "black";

          btn.addEventListener("click", () => {
            btnarray.push(mydata);

          })
     cr.innerHTML = `

     <img src=${mydata.image} height="200" width="200" alt="photo" border="1px solid black" box-sizing="border-box"  justifyContent="space-between" />    
     <br>
     Name: ${mydata.title}
     <br>
     <br>
     Price  ${mydata.price}
     <br>
     <br>
     Count: ${mydata.rating.count}
     Rating -${mydata.rating.rate}
     <br>
     <br>
     `

          cr.style.height = "370px";
          cr.style.width = "200px";
          cr.style.borderStyle = "solid";
          cr.style.borderRadius = "5px";
          cr.style.borderColor = "black"
          cr.style.display = "block";
          cr.style.margin = "20px";
          cr.append(btn);
          // electron.append(cr);
          major.append(cr);

        }
      }
    }

    //For Electronics-

    for (let k = 9; k < 14; k++) {

      const mr = document.createElement("div");
      const mydata = actualdata[k];

      const btn = document.createElement('button');
      const cr = document.createElement("div");
      btn.innerHTML = "Add to Cart";
      btn.style.color = "white";
      btn.style.height = "20px";
      btn.style.width = "210px";
      btn.style.backgroundColor = "black";

      btn.addEventListener("click", () => {
        btnarray.push(mydata);
      })

     cr.innerHTML = `
     
     <img src=${mydata.image} 
       height="200" 
       width="210" 
       alt="photo" 
       border="1px solid black" 
       box-sizing="border-box"  
       justifyContent="space-between" />    
     <br>
     Name: ${mydata.title}
     <br>
     <br>
     Price  ${mydata.price}
     <br>
     <br>
     Count: ${mydata.rating.count}
     Rating -${mydata.rating.rate}
     <br>
     <br>
     `

      cr.style.height = "370px";
      cr.style.width = "210px";
      cr.style.borderStyle = "solid";
      cr.style.marginTop = "120px";
      cr.style.borderRadius = "5px";
      cr.style.borderColor = "black"
      cr.style.display = "block";
      cr.style.marginLeft = "28px";
      //cr.style.margin = "20px";
      cr.append(btn);
      electron.append(cr);
      major.append(electron);

    }


    //For Jewellery-

    for (let k = 4; k <= 7; k++) {

      const mr = document.createElement("div");
      const mydata = actualdata[k];
      const btn = document.createElement('button');
      const cr = document.createElement("div");
      btn.innerHTML = "Add to Cart";
      btn.style.color = "white";
      btn.style.height = "20px";
      btn.style.width = "210px";
      btn.style.backgroundColor = "black";

      btn.addEventListener("click", () => {
      btnarray.push(mydata);
      })

      //const cr=document.createElement("div");
      cr.innerHTML = `
     
     <img src=${mydata.image} 
      height="200" 
      width="210" 
      alt="photo" 
      border="1px solid black" 
      box-sizing="border-box"  
      justifyContent="space-between" />    
      <br>
      Name: ${mydata.title}
      <br>
      <br>
      Price  ${mydata.price}
      <br>
      <br>
      Count: ${mydata.rating.count}
      Rating -${mydata.rating.rate}
      <br>
      <br> 
     `

      cr.style.height = "370px";
      cr.style.width = "210px";
      cr.style.borderStyle = "solid";
      cr.style.marginTop = "120px";
      cr.style.borderRadius = "5px";
      cr.style.borderColor = "black"
      cr.style.display = "block";
      cr.style.marginLeft = "40px";
      //cr.style.margin = "20px";
      cr.append(btn);
      jewel.append(cr);
      major.append(jewel);


    }

    //For Mens-

    for (let k = 0; k <= 3; k++) {

      const mr = document.createElement("div");
      const mydata = actualdata[k];

      const btn = document.createElement('button');
      const cr = document.createElement("div");

      btn.innerHTML = "Add to Cart";
      btn.style.color = "white";
      btn.style.height = "20px";
      btn.style.width = "210px";
      btn.style.backgroundColor = "black";
      btn.addEventListener("click", () => {
        btnarray.push(mydata);
      })

      cr.innerHTML = `
      
      <img src=${mydata.image} 
       height="200" 
       width="210" 
       alt="photo" 
       border="1px solid black" 
       box-sizing="border-box"  
       justifyContent="space-between" />    
      <br>
      Name: ${mydata.title}
      <br>
      <br>
      Price  ${mydata.price}
      <br>
      <br>
      Count: ${mydata.rating.count}
      Rating -${mydata.rating.rate}
      <br>
      <br>
      `

      cr.style.height = "370px";
      cr.style.width = "210px";
      cr.style.borderStyle = "solid";
      cr.style.marginTop = "120px";
      cr.style.borderRadius = "5px";
      cr.style.borderColor = "black"
      cr.style.display = "block";
      cr.style.marginLeft = "40px";
      //cr.style.margin = "20px";
      cr.append(btn);
      men.append(cr);
      major.append(men);
    }

    //For Women-

    for (let k = 15; k <= 20; k++) {

      const mr = document.createElement("div");
      const mydata = actualdata[k];
      const btn = document.createElement('button');

      const cr = document.createElement("div");
      btn.innerHTML = "Add to Cart";
      btn.style.color = "white";
      btn.style.height = "20px";
      btn.style.width = "210px";
      btn.style.marginTop = "1px";
      btn.style.backgroundColor = "black";
      btn.addEventListener("click", () => {
        btnarray.push(mydata);
      })

      cr.innerHTML = `

     <img src=${mydata.image} 
      height="200" 
      width="210" 
      alt="photo" 
      border="1px solid black" 
      box-sizing="border-box" 
      justifyContent="space-between" />    
     <br>
     Name: ${mydata.title}
     <br>
     <br>
     Price  ${mydata.price}
     <br>
     <br>
     Count: ${mydata.rating.count}
     Rating -${mydata.rating.rate}
     <br>
     <br>
     `
      cr.style.height = "370px";
      cr.style.width = "210px";
      cr.style.borderStyle = "solid";
      cr.style.marginTop = "120px";
      cr.style.borderRadius = "5px";
      cr.style.borderColor = "black"
      cr.style.display = "block";
      cr.style.marginLeft = "38px";
      //cr.style.margin = "20px";

      cr.append(btn);
      women.append(cr);
      major.append(women);
    }
  })




//Accessing all the button elements from HTML-
let all = document.getElementById("All");
let mens = document.getElementById("Mens");
let womens = document.getElementById("Womens");
let jewellery = document.getElementById("Jewellery");
let electronics = document.getElementById("Electronics");

//Features added When click on Men Button, Rest Items(Women, Jewels, Electronics) hide!!
mens.addEventListener("click", () => {
    
  women.style.visibility = "hidden"; 
  jewel.style.visibility = "hidden";
  electron.style.visibility = "hidden";
  men.style.visibility = "visible";

})


all.addEventListener("click", () => {
  major.innerHTML = "";

  men.style.top = "10px";
  men.style.left = "20px";
  women.style.top = "400px";
  women.style.left = "20px";
  jewel.style.top = "800px";
  jewel.style.left = "20px";
  electron.style.top = "1200px";
  electron.style.left = "20px";

  men.style.visibility = "visible";
  women.style.visibility = "visible";
  jewel.style.visibility = "visible";
  electron.style.visibility = "visible";

  major.append(men);
  major.append(women);
  major.append(jewel);
  major.append(electron);

})

//Features added When click on Women Button, Rest Items(Men, Jewels, Electronics) hide!!
womens.addEventListener("click", () => {
 
  men.style.visibility = "hidden";
  jewel.style.visibility = "hidden";
  electron.style.visibility = "hidden";
  women.style.visibility = "visible";
  women.style.top = "10px";
  women.style.left = "20px";

})

//Features added When click on Jewellery Button, Rest Items(Women, Men, Electronics) hide!!
jewellery.addEventListener("click", () => {

  jewel.style.visibility = "visible";
  jewel.style.top = "10px";
  jewel.style.left = "20px";
  men.style.visibility = "hidden";
  women.style.visibility = "hidden";
  electron.style.visibility = "hidden";




})


//Features added When click on Electronics Button, Rest Items(Women, Men, Jewels) hide!!
electronics.addEventListener("click", () => {
  electron.style.visibility = "visible";
  electron.style.top = "10px";
  electron.style.left = "20px";
  men.style.visibility = "hidden";
  women.style.visibility = "hidden";
  jewel.style.visibility = "hidden";

})
//console.log(btnarray);
//console.log(JSON.stringify(btnarray));
//localStorage.setItem("cart" , JSON.stringify(btnarray));



function con() {

let data=searchin.value;
//let data=data;
  fetch('https://fakestoreapi.com/products')
    .then((apidata) => {
    console.log(apidata);
    return apidata.json();
    })
    .then((actualdata) => {
    console.log(actualdata);

      let sdata = data;
      major.innerHTML = "";
      for (let i = 0; i < 20; i++) {
        let mydata = actualdata[i];
        if (mydata.title.toLowerCase().includes(sdata.toLowerCase()) || mydata.category.toLowerCase().includes(sdata.toLowerCase())) {

          const btn = document.createElement('button');
          const cr = document.createElement("div");
          btn.innerHTML = "Add to Cart";
          btn.style.color = "white";
          btn.style.height = "20px";
          btn.style.width = "200px";
          btn.style.backgroundColor = "black";

          btn.addEventListener("click", () => {
            btnarray.push(mydata);
          })
          cr.innerHTML = `

<img src=${mydata.image} 
 height="200" 
 width="200" 
 alt="photo" 
 border="1px solid black" 
 box-sizing="border-box"  
 justifyContent="space-between" />    
<br>
Name: ${mydata.title}
<br>
<br>
Price  ${mydata.price}
<br>
<br>
Count: ${mydata.rating.count}
Rating -${mydata.rating.rate}
<br>
<br>
`

          cr.style.height = "370px";
          cr.style.width = "200px";
          cr.style.borderStyle = "solid";

          cr.style.borderRadius = "5px";
          cr.style.borderColor = "black"
          cr.style.display = "block";
          cr.style.margin = "20px";
          cr.append(btn);
          // electron.append(cr);
          major.append(cr);
        }

      }
      actualdata.push(btnarray);
      localStorage.setItem("actual", JSON.stringify(actualdata));
      console.log(btnarray.length);
      if (btnarray.length > 1) {
        console.log(btnarray);
        console.log(JSON.stringify(btnarray));
        localStorage.setItem("cart", JSON.stringify(btnarray))
        //localStorage.setItem("cart" , btnarray);
      }

      // resolve(btnarray)
      }
      // resolve(btnarray)
    )  
}
















  //resolve(btnarray)
/* if(countValue.length>1)
 {
  console.log(btnarray);
  console.log(JSON.stringify(btnarray));


  localStorage.setItem("cart" , JSON.stringify(btnarray))
//localStorage.setItem("cart" , btnarray);
 }






})*/


//}

//console.log(btnarray);
//console.log(JSON.stringify(btnarray));

//localStorage.setItem("data" , JSON.stringify(users))
//localStorage.setItem("cart" , JSON.stringify(btnarray));

//console.log(btnarray)
//console.log(JSON.stringify(btnarray));
//localStorage.setItem("cart" ,btnarray);
 //window.location.href = "mycart.html";

 //data = JSON.parse(localStorage.getItem('data'));
 //console.log(JSON.stringify(btnarray));
 //localStorage.setItem("cart" , btnarray)