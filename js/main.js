const imagesList = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

for (i = 0; i <= imagesList.length; i++){
    console.log(imagesList[i]);
};

let slideActive = 0;

const itemsDom = document.querySelector('.items');

for (let i = 0; i < imagesList.length; i++) {
    itemsDom.innerHTML += ` <div class="item">
                                <img class="img-slide" url="${imagesList[i]}"/>
                            </div>`;
}

const itemList = document.getElementsByClassName('item');

itemList[slideActive].classList.add('show');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click',
    function () {
        itemList[slideActive].classList.remove('show');
        slideActive++;
        itemList[slideActive].classList.add('show');

        prev.classList.remove('hidden');

        if (slideActive == itemList.length - 1) {
            next.classList.add('hidden');
        }
    }
)

prev.addEventListener('click',
    function () {
        itemList[slideActive].classList.remove('show');
        slideActive--;
        itemList[slideActive].classList.add('show');

        next.classList.remove('hidden');

        if (slideActive == 0) {
            prev.classList.add('hidden');
        }
    }
)