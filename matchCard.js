//khai bao dong hinh`
const cardArrays = [
    {
        name: 'cheeseburger',
        img: 'cheeseburger.png'
    },
    {
        name:'cheeseburger',
        img:'cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'fries.png'
    },
    {
        name: 'fries',
        img:'fries.png'
    },
    {
        name: 'hotdog',
        img: 'hotdog.png'
    },
    {
        name: 'hotdog',
        img:'hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'ice-cream.png'
    },
    {
        name: 'ice-cream',
        img:'ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'milkshake.png'
    },
    {
        name: 'milkshake',
        img:'milkshake.png'
    },
    {
        name: 'pizza',
        img: 'pizza.png'
    },
    {
        name: 'pizza',
        img:'pizza.png'
    },
]
// khai bao cac phan` tu? can thiet
var boxGame = document.querySelector('#boxGame');
var cardChosen = [];
var cardChosenId =[];
var cardsWon =[];
var score=document.getElementById('score');
// sort dong hinh len
function xepDongHinh()
{
    cardArrays.sort(()=>0.5-Math.random());
}
// nap hinh` vao boxGame
function napHinh()
{
    for(let i =0; i<cardArrays.length;i++)
    {
        var card = document.createElement('img');
        card.setAttribute('src','./blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',latBai);
        boxGame.appendChild(card);
    }
}
//lat bai`
function latBai()
{
    var cardId = this.getAttribute('data-id');
    cardChosen.push(cardArrays[cardId]);
    cardChosenId.push(cardId);
    this.setAttribute('src',cardArrays[cardId].img);
    this.removeEventListener('click',latBai);
    if(cardChosen.length === 2)
    {
        setTimeout(checkChuanKo,500);
    }

}
//logic phan` latBai
function checkChuanKo()
{
    
var cards=document.querySelectorAll('img');
    if(cardChosen[0].name == cardChosen[1].name)
    {
        cards[cardChosenId[0]].setAttribute('src', './white.png');
        cards[cardChosenId[1]].setAttribute('src', './white.png');
        cardsWon.push(cardChosen);
        alert("Ngon");
    }
    else
    {
        cards[cardChosenId[0]].setAttribute('src', './blank.png');
        cards[cardChosenId[1]].setAttribute('src', './blank.png');
        cards[cardChosenId[0]].addEventListener('click',latBai);
        cards[cardChosenId[1]].addEventListener('click',latBai);
        alert("ngu");
    }
    cardChosen=[];
    cardChosenId=[];
    score.textContent=cardsWon.length;
    if(cardsWon.length === cardArrays.length/2)
    {
        score.textContent='Hoan ho nhe';
    }
}
xepDongHinh();
napHinh();
