//  let Title1 = document.getElementById("title1");
//  let Author1 = document.getElementById("author1");
//  let Genre1 = document.getElementById("genre1");
//  let Price1 = document.getElementById("price1");
//  let Description1 = document.getElementById("description1");
//  let Available1 = document.getElementById("available1");
//  let Quantity1 = document.getElementById("quantity1");

//  let Title2 = document.getElementById("title2");
//  let Author2 = document.getElementById("author2");
//  let Genre2 = document.getElementById("genre2");
//  let Price2 = document.getElementById("price2");
//  let Description2 = document.getElementById("description2");
//  let Available2 = document.getElementById("available2");
//  let Quantity2 = document.getElementById("quantity2");

//  let Title3 = document.getElementById("title3");
//  let Author3 = document.getElementById("author3");
//  let Genre3 = document.getElementById("genre3");
//  let Price3 = document.getElementById("price3");
//  let Description3 = document.getElementById("description3");
//  let Available3 = document.getElementById("available3");
//  let Quantity3 = document.getElementById("quantity3");

//  let Title4 = document.getElementById("title4");
//  let Author4 = document.getElementById("author4");
//  let Genre4 = document.getElementById("genre4");
//  let Price4 = document.getElementById("price4");
//  let Description4 = document.getElementById("description4");
//  let Available4 = document.getElementById("available4");
//  let Quantity4 = document.getElementById("quantity4");

//  let Title5 = document.getElementById("title5");
//  let Author5 = document.getElementById("author5");
//  let Genre5 = document.getElementById("genre5");
//  let Price5 = document.getElementById("price5");
//  let Description5 = document.getElementById("description5");
//  let Available5 = document.getElementById("available5");
//  let Quantity5 = document.getElementById("quantity5");
 let Container = document.getElementById("booksContainer");
 let Container2 = document.getElementById("containercart");

 document.addEventListener("DOMContentLoaded", DisplayBookDetails)
 function DisplayBookDetails(){
    fetch("https://localhost:7250/api/v1/Book/AllBooks")
    .then((response) => response.json())
    .then((data)=>{
        for (let i = 0; i < data.length; i++) {
            let createdDiv = document.createElement("div");
            createdDiv.classList.add("row");
            createdDiv.innerHTML=`<div class="col-12 text-light">
            <h3 class="book" id="title1">${data[i].title}</h3>
            <p class="text-danger" id="author1">${data[i].author}</p>
            <p style="margin-top: -15;"class="text-danger" id="genre1">${data[i].genre}</p>
            <p class="text-danger" id="available1">${"Availability: " + data[i].availability}</p>
            <p class="text-danger" id="quantity1">${"Quantity: " + data[i].quantity}</p>
            <h6 style="margin-top: -15;"class="text-danger" id="price1">${"Price: $" + data[i].price}
            </h6>
            <p class="text-danger" style="text-decoration: underline;">Description</p>
            <p id="description1">${data[i].description}</p>
            <a href="cart.html?bookid=${data[i].id}"><button style=" outline: none; background-color: rgb(78, 214, 44); color: white; border-radius: 5px;  margin-bottom: 10px;" >Add to Cart</button></a>`
            Container.appendChild(createdDiv);
        }

    })   

}




window.addEventListener("DOMContentLoaded", DisplayBookDetail)
 async function DisplayBookDetail(){
    let url = window.location.href;
    let bookId = url.split("=")[1];
    const requestUrl = "https://localhost:7250/api/v1/Book/book/" + bookId;
    const request = new Request(requestUrl);
    const response = await fetch(request);
    let receivedResponse = await response.json();

            let createdDiv2 = document.createElement("div");
            createdDiv2.classList.add("row");
            createdDiv2.innerHTML=`<div class="col-12 text-light">
            <h3 class="book" id="title1">${receivedResponse.title}</h3>
            <p class="text-danger" id="author1">${receivedResponse.author}</p>
            <p style="margin-top: -15;"class="text-danger" id="genre1">${receivedResponse.genre}</p>
            <p class="text-danger" id="available1">${"Availability: " +receivedResponse.availability}</p>
            <p class="text-danger" id="quantity1">${"Quantity: " + receivedResponse.quantity}</p>
            <h6 style="margin-top: -15;"class="text-danger" id="price1">${"Price: $" + receivedResponse.price}
            </h6>
            <p class="text-danger" style="text-decoration: underline;">Description</p>
            <p id="description1">${receivedResponse.description}</p>`
            Container2.appendChild(createdDiv2);
        }

    

        // Title1.innerHTML= data[0].title;
        // Author1.innerHTML= data[0].author;
        // Genre1.innerHTML= data[0].genre;
        // Price1.innerHTML= "Price: $" + data[0].price;
        // Description1.innerHTML= data[0].description;
        // Available1.innerHTML= "Availability: " + data[0].availability;
        // Quantity1.innerHTML= "Quantity: " + data[0].quantity;

        // Title2.innerHTML= data[1].title;
        // Author2.innerHTML= data[1].author;
        // Genre2.innerHTML= "Genre: " + data[1].genre;
        // Price2.innerHTML= "Price: $" + data[1].price;
        // Description2.innerHTML= data[1].description;
        // Available2.innerHTML= "Availability: " + data[1].availability;
        // Quantity2.innerHTML= "Quantity: " + data[1].quantity;

        // Title3.innerHTML= data[2].title;
        // Author3.innerHTML= data[2].author;
        // Genre3.innerHTML= data[2].genre;
        // Price3.innerHTML= "Price: $" + data[2].price;
        // Description3.innerHTML= data[2].description;
        // Available3.innerHTML= "Availability: " + data[2].availability;
        // Quantity3.innerHTML= "Quantity: " + data[2].quantity;

        // Title4.innerHTML= data[3].title;
        // Author4.innerHTML= data[3].author;
        // Genre4.innerHTML= data[3].genre;
        // Price4.innerHTML= "Price: $" + data[3].price;
        // Description4.innerHTML= data[3].description;
        // Available4.innerHTML= "Availability: " + data[3].availability;
        // Quantity4.innerHTML= "Quantity: " + data[3].quantity;

        // Title5.innerHTML= data[4].title;
        // Author5.innerHTML= data[4].author;
        // Genre5.innerHTML= data[4].genre;
        // Price5.innerHTML= "Price: $" + data[4].price;
        // Description5.innerHTML= data[4].description;
        // Available5.innerHTML= "Availability: " + data[4].availability;
        // Quantity5.innerHTML= "Quantity: " + data[4].quantity;

    