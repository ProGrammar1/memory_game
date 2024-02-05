const cards = document.querySelectorAll('.card');
let card1,card2;
var counter = 0;

function flipcard(e){
    let clickedCard = e.target;

    if(clickedCard != card1){
        clickedCard.classList.add('flip');
        console.log('tdsa');

        if(!card1){
            return card1 = clickedCard;

        }

        card2 = clickedCard;

        let card1_img = card1.querySelector('img').src,
        card2_img =card2.querySelector('img').src;
        matchcards(card1_img,card2_img);

    }
}

function matchcards(img1,img2){

    if(img1 != img2){

        setTimeout(() => {
            card1.classList.add('vibration');
            card2.classList.add('vibration');
        },400);

        setTimeout(() => {
            card1.classList.remove('vibration','flip');
            card2.classList.remove('vibration','flip');
            card1 = '';
            card2 = '';
        },500);     
    }
    else{

        counter++;

        if(counter != 15){
            console.log(counter);
            card1.removeEventListener('click',flipcard);
            card2.removeEventListener('click',flipcard);
            card1 = '';
            card2 = '';

        }
        else{
            reset();
            counter = 0;
        }
      
    }

}

function reset(){
    setTimeout(() => {
        cards.forEach( card => {
            card.classList.remove('flip');
        });

    }, 400);
   
}

cards.forEach( card => {
    card.addEventListener('click', flipcard);
});