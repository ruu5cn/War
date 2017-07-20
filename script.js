var Rdeck = 26;
var Rwon = 0;
var Bdeck = 26;
var Bwon = 0;
var cardList = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
var weight = 0;

var x = function() {
    var RdeckN = document.getElementById('redDeck');
    var RwonN = document.getElementById('redWon');
    var BdeckN = document.getElementById('blueDeck');
    var BwonN = document.getElementById('blueWon');
    var Rshow = document.getElementById('redShow');
    var Bshow = document.getElementById('blueShow');
    var banner = document.getElementById('banner');
    var dec;
    var needed;
    
    var Rdraw = Math.floor(Math.random()*13);
    var Bdraw = Math.floor(Math.random()*13);
    
    //resets cards
    if (Rdeck < 1 || Bdeck < 1) {
        if (Rdeck < 1) {
            Rdeck = Rwon;
            Rwon = 0;
        }
        if (Bdeck < 1) {
            Bdeck = Bwon;
            Bwon = 0;
        }
        dec = "Resetting decks";
    }
    //if you have to declare war
    else if (weight > 0) {
        if (Rdeck < 3 || Bdeck < 3) {
            if (Rdeck + Rwon < 3) {
                needed = 3 - (Rdeck + Rwon);
                weight -= needed;
                Rdeck = 0;
            } else {
                Rdeck -= 3;
            }
            if (Bdeck + Bwon < 3) {
                needed = 3 - (Bdeck + Bwon);
                weight -= needed;
                Bdeck = 0;
            } else {
                Bdeck -= 3;
            }
            Rdeck += Rwon;
            Rwon = 0;
            Bdeck += Bwon;
            Bwon = 0;
        } else {
            Rdeck -= 3;
            Bdeck -= 3;
        }
        if (Rdraw > Bdraw) {
            dec = "We declare war! Red wins!";
            Rwon += weight;
            weight = 0;
        } else if (Bdraw > Rdraw) {
            dec = "We declare war! Blue wins!";
            Bwon += weight;
            weight = 0;
        } else {
            dec = "We declare war! It's a tie! We have to declare war again!";
            weight += 6;
        }
    }
    //regular
    else {
        Rdeck -= 1;
        Bdeck -= 1;
        
        if (Rdraw > Bdraw) {
            dec = 'Red Won!';
            Rwon += 2;
        }
        else if (Bdraw > Rdraw) {
            dec = 'Blue Won!';
            Bwon += 2;
        }
        else {
            dec = "It's a tie! We have to declare war!";
            weight += 8;
        }
    }
    //checks to see if game is over
    if (Rdeck + Rwon === 0) {
        dec = "Blue has won the game";
    } else if (Bdeck + Bwon === 0) {
        dec = "Red has won the game";
    }
    
    Rdraw = cardList[Rdraw];
    Bdraw = cardList[Bdraw];
    
    Rshow.innerHTML = Rdraw;
    Bshow.innerHTML = Bdraw;
    RdeckN.innerHTML = Rdeck;
    RwonN.innerHTML = Rwon;
    BdeckN.innerHTML = Bdeck;
    BwonN.innerHTML = Bwon;
    banner.innerHTML = dec;
}
