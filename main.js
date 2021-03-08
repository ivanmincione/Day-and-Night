  // Developed By Ivan Mincione
  // Cambio di scena impostando la classe active
  function toggleScene(){
    let change = document.querySelector('.scene');
    change.classList.toggle('active')
  }

  function stars(){
    //funzione per generare star
    let count = 1000; //numero star generate
    let i = 0;
    while (i < count){
      let scene = document.querySelector('.scene'); // Selezione della scena
      let star = document.createElement('i'); // Creo la variabile per generare le star
      let x = Math.floor(Math.random() * window.innerWidth); // Area di riempimento asse x
      let y = Math.floor(Math.random() * window.innerHeight); // Area di riempimento asse y
      let size = Math.random() * 2; // grandezza delle star
      // timeset star
      let duration = Math.random() * 10; 


      star.style.left = x+'px';
      star.style.top = y+'px';
      star.style.width = size+'px';
      star.style.height = size+'px';

      star.style.animationDuration = 5 + duration+'s';
      star.style.animationDelay = duration+'s';

      // stampo le star in pagina
      scene.appendChild(star);
      i++
    }
  }
  stars();