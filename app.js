//ido koszones es nev es input mezo ertekenek felvetel var-ba eltarolas - eltaroljuk valtozoba azokat az elemeket amelyen muveleteket akarok vegrehajtani

var time = document.getElementById("time");
    greet = document.getElementById("greet");
    todo = document.getElementById("todo");


//ido dinamikus beallitasa az oldalon

function showTime(){

    //Ora-perc-masodperc eltarolasa valtozoba - date() ev honap nap ora perc masodpercet megadja
    var today = new Date();
        hour = today.getHours();   //ora eltarolasa
        min = today.getMinutes();    //perc eltarolasa
        sec = today.getSeconds();    //masodperc eltarolasa

    //ido megjelenitese az erre felvett elemben (time)/bongeszoben - ami a time-ban jelenleg bennevan azt az innerHTML felulirja ezzel:
    time.innerHTML = addZero(hour)+"<span>:</span>"+addZero(min)+"<span>:</span>"+addZero(sec);

    //idozito fuggvenyek egyike itt setTimeout() lefuttatja minden masodpercben a showTime fuggvenyunket - minden masodpercben latni fogjuk az idot a bongeszoben - 1000milisecondumokkent azaz 1 masodperc alatt
    setTimeout(showTime, 1000);
    //setInterval() - bizonyos idokozonkent csinalja ue.

}

//hozzunk letre egy fuggvenyt, amely hozzaad az ora perc masodperc ele egy 0-t, ha az adott ido kisebb, mint 10. ha erteke kisebb mint 10 rakunk egy nullat ha nem akkor semmit - itt a ? az egy if fuggveny igazabol (?ha igaz es :ha hamis)
function addZero(number){

    return(parseInt(number) < 10 ? '0' : '')+number;
}


//hozzunk letre egy fuggvenyt amely adott napszakhoz fogja allitani az oldal hatterkepet es betuszinet es koszontest
function setBgGreet(){

    //megint el kell tarolnunk az orat egy valtozoban
    var today = new Date();
        hour = today.getHours();

    //megnezzuk, h az hour valtozoban eltarolt ertek kisebb -e mint 12 --> delelott/reggel van
    if(hour < 12){

        //beallitjuk a napszakhoz tartozo koszontest
        greet.innerText = "Jo reggelt, ";
        //beallitjuk a napszakhoz tartozo hatterkepet es betuszint ha szukseges
        document.body.style.backgroundImage = "url('morning.jpg')";
    }
    else if(hour < 18){

        greet.innerText = "Good afternoon, ";

        document.body.style.backgroundImage = "url('afternoon.jpg')";
        document.body.style.color = "white";
        todo.style.color = "white";
        todo.style.borderColor = "white";
    }
    else{

        greet.innerText = "Good night, ";

        document.body.style.backgroundImage = "url('night.jpg')";
        document.body.style.color = "white";
        todo.style.color = "white";
        todo.style.borderColor = "white";

    }

    //minden oraban futtassa le ezt a fuggvenyt -> ezzel tudjuk ellenorizni, hogy adott ora kisebb e mint a feltetelben megadott ertek
    setTimeout(setBgGreet, 3600000);
}



//meghivom a funkciot showTime-fuggvenyt
showTime();
setBgGreet();


