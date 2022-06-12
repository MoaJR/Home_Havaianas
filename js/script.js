const tl = gsap.timeline({defaults: {duration: 1}});
for(var i=0; i<6; i++){
    tl.to('#chi'+(i+1), {x: i*80, opacity: 1, ease:Power1.easeOut}, '<')
}


for(var j=0; j<4; j++){
    tl.fromTo('#texto'+(j+1), {x: 500, opacity: 0}, {x: 0, opacity: 1, delay:(j/15)}, '<')
}

function trocaCor(cor){
    corTemp = parseInt(cor.substr(((cor.length)-5), (cor.length)));
   // let corFunction = corTemp + 50;
    let corFunction = 80;

    colorSlice = cor.replace(corTemp, corFunction)
    return document.getElementById("nav-bg").style.background = cor, document.getElementById("home-bg").style.background = colorSlice; 
}

function imgUp(element){
    idUp = element.id;
    gsap.to('#'+idUp, {y: -20, ease: Elastic.easeOut.config(0.7, 0)});
    switch (idUp) {
        case 'chi1': trocaCor("hsl(135, 100%, 34%)"); //verde
            break;
        case 'chi2': trocaCor("hsl(54, 85%, 51%)"); //amarelo
            break;
        case 'chi3': trocaCor("hsl(171, 62%, 45%)"); //agua
            break;
        case 'chi4': trocaCor("hsl(292, 57%, 49%)"); //roxo
            break;
        case 'chi5': trocaCor("hsl(0, 83%, 57%)"); //vermelho
            break;
        case 'chi6': trocaCor("hsl(248, 54%, 50%)"); //azul
            break; 
    }
}

function imgDown(element2){
    idDown = element2.id;
    gsap.to('#'+idDown, 0.5, {y: 0});
}