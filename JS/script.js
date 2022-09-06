// https://www.youtube.com/watch?v=37KohMnlP7Q

const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem")

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "../IMAGES/air.png",
      },
      {
        code: "darkblue",
        img: "../IMAGES/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "../IMAGES/jordan.png",
      },
      {
        code: "green",
        img: "../IMAGES/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "../IMAGES/blazer.png",
      },
      {
        code: "green",
        img: "../IMAGES/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "../IMAGES/crater.png",
      },
      {
        code: "lightgray",
        img: "../IMAGES/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "../IMAGES/hippie.png",
      },
      {
        code: "black",
        img: "../IMAGES/hippie2.png",
      },
    ],
  },
];

let chosenProduct = products[0]

const currenProductImg = document.querySelector(".productImg")
const currenProductTitle = document.querySelector(".productTitle")
const currenProductPrice = document.querySelector(".productPrice")
const currenProductColors = document.querySelectorAll(".color")
const currenProductSizes = document.querySelectorAll(".size")

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    
    menuItems.forEach((item)=>{
      item.style.borderBottom= 'none' //This line of code removes the boottom border as soon as another menu item is clicked
    })
    // change current slide
    wrapper.style.transform = `translateX( ${-100 * index}vw)`;
    wrapper.style.transition = "1s ease";
    item.style.borderBottom= '1px solid gray' //This puts a bottom border on the item that is clicked
    
    // change the chosen product
    chosenProduct = products[index]

    // change texts of current product
    currenProductTitle.textContent = chosenProduct.title
    currenProductPrice.textContent = '$' + chosenProduct.price
    currenProductImg.src = chosenProduct.colors[0].img

    // assign new colors
    currenProductColors.forEach((color, index) => {
      color.style.backgroundColor = chosenProduct.colors[index].code
    })

  })
}
)

currenProductColors.forEach((color, index) => {

  color.addEventListener('click', ()=>{
    currenProductImg.src = chosenProduct.colors[index].img
  })
})

// sizes box behaviour
currenProductSizes.forEach((size, index)=>{
  size.addEventListener('click', ()=>{
    currenProductSizes.forEach((size)=>{
      size.style.backgroundColor ="white" //returns background to white if another item is clicked
      size.style.color ="black"   //returns text color to black
    })
    size.style.backgroundColor ="black" //if size is clicked, make the bg to be black 
    size.style.color ="white" //and make the text color white

  })
})

const productButton =document.querySelector('.productButton');
const payment =document.querySelector('.payment');
const close =document.querySelector('.close');

productButton.addEventListener('click', ()=>{
  payment.style.display ='flex'
})

close.addEventListener('click', ()=>{
  payment.style.display ='none'
})