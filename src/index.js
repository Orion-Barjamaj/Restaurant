import _ from 'lodash';
import './style.css';
import FirecrackerChickenSandwichPic from './chichenSandwich.jpg';

const HomeBtn = document.querySelector(".home");
const MenuBtn = document.querySelector(".menu");
const ContactBtn = document.querySelector(".contact");
const content = document.querySelector("#content");
menuItems = [{
    title: 'Firecracker Chicken Sandwich',
    pic: FirecrackerChickenSandwichPic,
    price: '',
    ingridients: 'Spicy chicken fillet with explosive flavor.',
},
{
    title: 'BBQ Bomb Burger',
    pic: '',
    price: '',
    ingridients: '',
},
{
    title: 'Loaded Cheesy Fries',
    pic: '',
    price: '',
    ingridients: '',
},
{
    title: 'Caesar Crunch Wrap',
    pic: '',
    price: '',
    ingridients: '',
},
{
    title: 'Avocado Blaze Burger',
    pic: '',
    price: '',
    ingridients: '',
},
{
    title: 'Buffalo Blast Tenders',
    pic: '',
    price: '',
    ingridients: '',
},
{
    title: 'Spicy Shrimp Slam Tacos',
    pic: '',
    price: '',
    ingridients: '',
},
{
    title: 'Philly Fusion Sandwich',
    pic: '',
    price: '',
    ingridients: '',
},
{
    title: 'Teriyaki Tango Bowl',
    pic: '',
    price: '',
    ingridients: '',
},
{
    title: 'Southwest Fiesta Salad',
    pic: '',
    price: '',
    ingridients: '',
},
];

document.querySelectorAll(".like").forEach(button => {
    button.addEventListener("click", function() {
      this.classList.toggle("clicked");
    });
});

function DeleteAll(){
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
}

function RenderHome(){
    content.classList.remove("menuPage");
    content.classList.add("homePage");
    const textDiv = document.createElement('div');
    textDiv.setAttribute("class", "homeText");
    content.appendChild(textDiv);
    textDiv.innerHTML = "Welcome to FlavorFusion Express! Indulge in a culinary journey like no other at FlavorFusion Express, where we blend tantalizing flavors from around the globe with the convenience of fast food.<br><br> From sizzling fajita quesadillas to fiery fusion burgers and everything in between, our menu is crafted to delight your taste buds and leave you craving more.<br><br>Experience the thrill of bold flavors, quick service, and friendly smiles as you embark on a delicious adventure with us. Whether you're craving a classic favorite or eager to explore something new, we've got something for everyone.<br><br> Join us and discover why FlavorFusion Express is not just a meal, but a flavorful experience that will keep you coming back for more. Start your flavor journey today!";
    const imgContainer = document.createElement('div');
    imgContainer.setAttribute("class", "Images");
    content.appendChild(imgContainer);
    const img1 = document.createElement('div');
    img1.setAttribute("id", "img1");
    imgContainer.appendChild(img1);
    const img2 = document.createElement('div');
    img2.setAttribute("id", "img2");
    imgContainer.appendChild(img2);
    const img3 = document.createElement('div');
    img3.setAttribute("id", "img3");
    imgContainer.appendChild(img3);
}

function RenderMenu(){
    content.classList.remove("homePage");
    content.classList.add("menuPage");
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('class', 'menuContainer');
    content.appendChild(menuContainer);
    for(let i = 0; i < 5; i++){
        const menuItem = document.createElement('div');
        menuItem.setAttribute('class', 'menuItem');
        menuContainer.appendChild(menuItem);
    }
}

HomeBtn.addEventListener("click", (event) => {
    DeleteAll();
    RenderHome();
});

MenuBtn.addEventListener("click", (event) => {
    DeleteAll();
    RenderMenu();
});

RenderHome();