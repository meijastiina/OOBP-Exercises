// Get button from DOM 
const addButton = document.getElementById("addButton");
// Add event listener for the button
addButton.onclick = function () {
    // This happens when user clicks button
    
    // CREATE HTML ELEMENTS
    // Create productlist
    const productList = document.createElement("div");
    // Create productcard
    const productCard = document.createElement("div");
    // Create productimage
    const productImage = document.createElement("img");
    // Create productinfo
    const productInfo = document.createElement("div");
    // Create product name
    const productName = document.createElement("h1");
    const productNameText = document.createTextNode("EOS 90D")
    // Create h2s
    const productDetailsElement1 = document.createElement("h2");
    const productDetails1 = document.createTextNode("32.5 megapixels, 10 frames per second");
    const productDetailsElement2 = document.createElement("h2");
    const productDetails2 = document.createTextNode("4K video, 1300 frames per battery, ISO 25600");
    
    // ADD ATTRIBUTES 
    // Add class to productlist
    productList.className = "productList";
    productCard.className = "productCard";
    productInfo.className = "productInfo";
    productImage.src = "images/eos-90d.jpg";
    // productName.innerText = "<i>EOS</i> 90D";
    
    // ADD ELEMENTS TO THEIR PARENTS
    // Add productlist to page
    productName.appendChild(productNameText);
    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);
    productInfo.appendChild(productName);
    productDetailsElement1.appendChild(productDetails1);
    productInfo.appendChild(productDetailsElement1);
    productDetailsElement2.appendChild(productDetails2);
    productInfo.appendChild(productDetailsElement2);
    productList.appendChild(productCard);
    document.body.appendChild(productList);
}