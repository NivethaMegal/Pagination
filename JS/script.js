var mobileTemplate = document.querySelector(".mobile-card-template");
// console.log(mobileTemplate);
var mobileSection = document.querySelector(".mobiles-section");
var mainSection=document.querySelector(".main-section");
var heading=document.querySelector(".mobile-heading");
var mobiles = {
    SAMSUNG: [
        {
            name: "samsung a50",
            ram: 8,
            price: 50000.25
        },
        {
            name: "samsung m20",
            ram: 6,
            price: 30000
        },
        {
            name: "samsung m30",
            ram: 12,
            price: 58000.25
        },
        {
            name: "samsung m40",
            ram: 8,
            price: 100000.25
        },
        {
            name: "samsung m50",
            ram: 6,
            price: 50000.25
        },
        {
            name: "samsung note 10",
            ram: 12,
            price: 58000.25
        },
        {
            name: "samsung note 10+",
            ram: 8,
            price: 100000.25
        },
        {
            name: "samsung a80",
            ram: 6,
            price: 50000.25
        }
    ],
    APPLE: [
        {
            name: "iphone 6s",
            ram: 8,
            price: 50000.25
        },
        {
            name: "iphone 7s",
            ram: 6,
            price: 30000
        },
        {
            name: "iphone xr",
            ram: 12,
            price: 58000.25
        },
        {
            name: "iphone xs",
            ram: 8,
            price: 100000.25
        },
        {
            name: "iphone x",
            ram: 6,
            price: 50000.25
        }

    ],
    REDMI: [
        {
            name: "redmi note 4",
            ram: 8,
            price: 50000.25
        },
        {
            name: "redmi note 5",
            ram: 6,
            price: 30000
        },
        {
            name: "redmi note 6",
            ram: 12,
            price: 58000.25
        },
        {
            name: "redmi y2",
            ram: 8,
            price: 100000.25
        },
        {
            name: "redmi y1",
            ram: 6,
            price: 50000.25
        }

    ]
};

//var mobileType = "mediumBudget";
// var list=(Object.keys(mobiles));
for(let val of Object.keys(mobiles)){
var count=0;
var mobileType=val;
var header=heading.cloneNode(true);
header.classList.remove("mobile-heading");
header.innerText=mobileType;
var section=mobileSection.cloneNode(false);
section.classList.remove("mobiles-section-template");
section.appendChild(header);
var child=mobiles[mobileType].forEach(function(item) {
  var mobile = mobileTemplate.cloneNode(true);
  mobile.classList.remove("mobile-card-template");
  mobile.querySelector(".mobile-name").innerText = item["name"];
  mobile.querySelector(".mobile-ram").innerText = item["ram"];
  mobile.querySelector(".mobile-price").innerText = item["price"];
  section.appendChild(mobile);
  count=count+1;
});

var pageButton=document.querySelector(".page-button");
var dynamicButton=document.querySelector(".dynamic-button");
if(count>6){
    var buttonVal=Math.ceil(count/6);
    console.log(buttonVal);
    var pagination=dynamicButton.cloneNode(true);
    var i;
    for(i=0;i<buttonVal;i++){
   var dynamicButton=document.querySelector(".dynamic-button");
   var button=pageButton.cloneNode(true);
button.innerText=i+1;
console.log(button);
pagination.appendChild(button);
    }
section.appendChild(pagination);
}
mainSection.appendChild(section);
}
