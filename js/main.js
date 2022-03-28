const pocemon = [
    {
        num: "001",
        name: "Bulbasaur",
        img: "http://www.serebii.net/pokemongo/pokemon/001.png",
    },
    {
        num: "002",
        name: "Ivysaur",
        img: "http://www.serebii.net/pokemongo/pokemon/002.png"
    },
    {
        num: "003",
        name: "Venusaur",
        img: "http://www.serebii.net/pokemongo/pokemon/003.png"
    },
    {
        num: 004,
        name: "Charmander",
        img: "http://www.serebii.net/pokemongo/pokemon/004.png"
    },
    {
        num: 005,
        name: "Charmeleon",
        img: "http://www.serebii.net/pokemongo/pokemon/005.png",
    }
]

const pocemonWrapper = document.querySelector(".pocemon");


for (let i = 0; i < pocemon.length; i++) {

    const product = document.createElement("li");
    product.className = "pocemon__item";

    const currentProduct = pocemon[i];

    const productTitle = document.createElement("h2");
    productTitle.textContent = currentProduct.name;

    const productnum = document.createElement("p");
    productnum.textContent = currentProduct.num;

    const productImg = document.createElement("img");
    productImg.setAttribute("src", currentProduct.img);

    product.append(productImg);
    product.append(productTitle);
    product.append(productnum);

    pocemonWrapper.append(product);
}

const form = document.querySelector(".form");
const input = document.querySelector(".form__input");
const formInput = document.querySelector(".form__input-submit");

form.addEventListener("submit", function (evt) {
    evt.defaultPrevented();

    const inputValue = input.value;
    const forminputValue = formInput.value;
    if (inputValue.trim() && forminputValue.trim()) {
        const pocemonCar ={

            num: inputValue,
                name: forminputValue,
                img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffreepngimg.com%2Fpng%2F16235-pokemon-picture&psig=AOvVaw2x1n9E1Tc0ECm34bYtP_BI&ust=1648573579235000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiN1aml6fYCFQAAAAAdAAAAABAD"
               
        }     
        pocemon.push(pocemonCar)
        form.reset();
        const product = document.createElement("li");
        product.className = "pocemon__item";
        
        const currentProduct = pocemonCar;
    
        const productTitle = document.createElement("h2");
        productTitle.textContent = currentProduct.name;
    
        const productnum = document.createElement("p");
        productnum.textContent = currentProduct.num;
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", currentProduct.img);
    
        product.append(productImg);
        product.append(productTitle);
        product.append(productnum);
    
        pocemonWrapper.append(product);
    }
})


