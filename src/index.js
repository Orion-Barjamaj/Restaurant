import _ from 'lodash';
import './style.css';
import FirecrackerChickenSandwichPic from './chichenSandwich.jpg';
import BurgerPic from './burgerItem.jpg';
import FriesPic from './fries.jpg';
import CaesarCrunchWrapPic from './CaesarCrunchWrap.jpg';
import AvocadoBurgerPic from './avocadoBurger.jpg';
import BuffaloTenders from './buffalotenders.jpeg';
import ShrimpsPic from './shrimps.jpg';
import SandwichFusionPic from './sandwichItem.jpg';
import BowlPic from './bowls.jpg';
import FiestaSaladPic from './fiestaSalad.jpg';

const HomeBtn = document.querySelector(".home");
const MenuBtn = document.querySelector(".menu");
const ContactBtn = document.querySelector(".contact");
const content = document.querySelector("#content");
const menuItems = [{
    title: 'Firecracker Chicken Sandwich',
    pic: FirecrackerChickenSandwichPic,
    price: '$6.99',
    ingridients: 'Spicy chicken fillet with explosive flavor.',
},
{
    title: 'BBQ Bomb Burger',
    pic: BurgerPic,
    price: '$7.49',
    ingridients: 'Juicy beef patty topped with tangy BBQ sauce.',
},
{
    title: 'Loaded Cheesy Fries',
    pic: FriesPic,
    price: '$4.99',
    ingridients: 'Crispy fries smothered in cheese and toppings.',
},
{
    title: 'Caesar Crunch Wrap',
    pic: CaesarCrunchWrapPic,
    price: '$5.99',
    ingridients: 'Grilled chicken wrapped in Caesar salad goodness.',
},
{
    title: 'Avocado Blaze Burger',
    pic: AvocadoBurgerPic,
    price: '$8.99',
    ingridients: 'Avocado-packed burger with a fiery kick.',
},
{
    title: 'Buffalo Blast Tenders',
    pic: BuffaloTenders,
    price: '$6.49',
    ingridients: 'Tender chicken strips drenched in buffalo sauce.',
},
{
    title: 'Spicy Shrimp Slam Tacos',
    pic: ShrimpsPic,
    price: '$9.99',
    ingridients: 'Zesty shrimp tacos that pack a punch.',
},
{
    title: 'Philly Fusion Sandwich',
    pic: SandwichFusionPic,
    price: '$7.99',
    ingridients: 'East meets West in this flavorful Philly twist.',
},
{
    title: 'Teriyaki Tango Bowl',
    pic: BowlPic,
    price: '$8.49',
    ingridients: 'Grilled goodness served with a sweet teriyaki sauce.',
},
{
    title: 'Southwest Fiesta Salad',
    pic: FiestaSaladPic,
    price: '$7.79',
    ingridients: 'A salad bursting with southwestern flavors.',
},
];

function DeleteAll(){
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
}

function RenderHome(){
    content.classList.remove("menuPage");
    content.classList.remove("contactPage");
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
    content.classList.remove("contactPage");
    content.classList.add("menuPage");
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('class', 'menuContainer');
    content.appendChild(menuContainer);
    for(let i = 0; i < menuItems.length; i++){
        const menuItem = document.createElement('div');
        menuItem.setAttribute('class', 'menuItem');
        menuContainer.appendChild(menuItem);
        const menuTitle = document.createElement('div');
        menuTitle.setAttribute('class', 'title');
        menuTitle.textContent = menuItems[i].title;
        menuItem.appendChild(menuTitle);
        const menuInfo = document.createElement('div');
        menuInfo.setAttribute('class', 'info');
        menuItem.appendChild(menuInfo);
        const menuPic = document.createElement('img');
        menuPic.setAttribute('class', 'pic');
        menuPic.src = menuItems[i].pic;
        menuInfo.appendChild(menuPic);
        const pricingContainer = document.createElement('div');
        pricingContainer.setAttribute('class', 'pricing');
        menuInfo.appendChild(pricingContainer);
        const menuPrice = document.createElement('div');
        menuPrice.setAttribute('class', 'price');
        menuPrice.textContent = menuItems[i].price;
        pricingContainer.appendChild(menuPrice);
        const menuDesc = document.createElement('div');
        menuDesc.setAttribute('class', 'ingridients');
        menuDesc.textContent = menuItems[i].ingridients;
        pricingContainer.appendChild(menuDesc);
        const likeBtn = document.createElement('button');
        likeBtn.setAttribute('class', 'like');
        pricingContainer.appendChild(likeBtn);
    }
    document.querySelectorAll(".like").forEach(button => {
        button.addEventListener("click", function() {
          this.classList.toggle("clicked");
        });
    });    
}

function RenderContact(){
    content.classList.remove("homePage");
    content.classList.remove("menuPage");
    content.classList.add("contactPage");
    const callText = document.createElement('div');
    callText.setAttribute('class', 'callText');
    content.appendChild(callText);
    callText.textContent = "Like what you see? Call us now!!!";
    const number = document.createElement('div');
    number.setAttribute('class', 'number');
    content.appendChild(number);
    number.textContent = "917-875-8942";
    const adress = document.createElement('div');
    adress.setAttribute('class', 'adress');
    content.appendChild(adress);
    adress.textContent = "1297 Godfrey Road, New York";
}

HomeBtn.addEventListener("click", (event) => {
    DeleteAll();
    RenderHome();
});

MenuBtn.addEventListener("click", (event) => {
    DeleteAll();
    RenderMenu();
});

ContactBtn.addEventListener("click", (event) => {
    DeleteAll();
    RenderContact();
});

RenderHome();