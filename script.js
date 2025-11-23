// arr =[ {
//     name: 'suzain',
//     age: 30
// }, {
//     name: 'sdfjk',
//     age: 23
// }, {
//     name: 'susidf',
//     age: 45
// }]

// var sum=0;
// arr.forEach(function (elem) {
//     sum = sum + elem.age;
   
// })
// console.log(sum/arr.length);



// task(card):
const jobs = [
  {
    company: "Amazon",
    logo: "https://www.amazon.com/favicon.ico",
    role: "Senior UI/UX Designer",
    tags: ["Part-Time", "Senior Level"],
    pay: "$120/hr",
    saved: false
  },
  {
    company: "Google",
    logo: "https://www.google.com/favicon.ico",
    role: "Graphic Designer",
    tags: ["Part-Time", "Flexible Schedule"],
    pay: "$150–220k",
    saved: false
  },
  {
    company: "Dribbble",
    logo: "https://imgs.search.brave.com/f3_hZGN9hSaijyhbvd7tRfVnj5plTcsE-Qj2u3HfpPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMjUwNC8yNTA0/ODk3LnBuZw",
    role: "Senior Motion Designer",
    tags: ["Contract", "Remote"],
    pay: "$85/hr",
    saved: false
  },
  {
    company: "Figma",
    logo: "https://static.figma.com/app/icon/1/favicon.png",
    role: "UX Designer",
    tags: ["Full-Time", "In office"],
    pay: "$200–250k",
    saved: false
  },
  {
    company: "Airbnb",
    logo: "https://imgs.search.brave.com/w8q51BAnrfgX80-YiL6v51OuA8ZPZrOuD-AS1pRrBx4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy9o/ZC13aGl0ZS1haXJi/bmItcm91bmQtY2ly/Y2xlLWxvZ28taWNv/bi1wbmctaW1hZ2Ut/NzAxNzUxNjk1MTI1/MzUwdGt6bGphMWV6/bC5wbmc",
    role: "Junior UI/UX Designer",
    tags: ["Contract", "Remote"],
    pay: "$100/hr",
    saved: false
  },
  {
    company: "Apple",
    logo: "https://www.apple.com/favicon.ico",
    role: "Graphic Designer",
    tags: ["Full-Time", "Flexible Schedule"],
    pay: "$85–120k",
    saved: false
  }
];



sum='';

jobs.forEach(function(elem) {
    sum = sum + `<div class="card">

        <div class="top">

            <div class="image">
            <img src="${elem.logo}" alt="">
            </div>
            <button class="firstb">Save <i class="ri-bookmark-line"></i> </button>
        </div>


        <div class="center">
            <h3>${elem.company}</h3>
            <h4>${elem.role}</h4>

            <button class="secondb">${elem.tags[0]}</button>
            <button class="secondb">${elem.tags[1]}</button>
        </div>

        <hr>

        <div class="bottom">
            <h5>${elem.pay}</h5>
            <button class="thirdb">Apply now</button>
        </div>

    </div>`
})
var main =document.querySelector('main')
main.innerHTML= sum;




