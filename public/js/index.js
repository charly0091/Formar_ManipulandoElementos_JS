window.addEventListener('load', function() {

    let main = document.querySelector('main');
    let h2 = document.querySelector('h2');
    let a = document.querySelector('a');
    let p = document.querySelectorAll('p');

    let nombre = prompt('Ingrese su nombre');

    if(nombre){
        h2.innerHTML = nombre;
    } else {
        h2.innerHTML = 'invitado';
    }

    h2.style.textTransform = 'uppercase';
    a.style.color = '#E51B3E';

    let fondo = this.confirm("¿Desea colocar un fondo de pantalla?");
    if(fondo == true){
        main.classList.add('fondo');
    }

    for(let i= 0;i<p.length;i++){
        if(i%2==0){
            p[i].classList.add('destacadoPar');
        } else {
            p[i].classList.add('destacadoImpar');
        }
    }

    main.style.display = 'block';
    
}); 
