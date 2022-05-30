
    
    const getRandomArbitrary = (participantes, min, max)=>{
        return participantes [Number((Math.random() * (max - min) + min).toFixed(0))]
    }
        const sorteo = ["piedra", 'papel', 'tijera']
        console.log("El ganador es:" + getRandomArbitrary(sorteo, 0, (sorteo.length-1)))

    let entrada = document.querySelector('#input').value
    const juego = (event)=>{
        event.preventDefault();
        if(getRandomArbitrary===entrada.value){
            alert("empate, sigue jugando")
        } else if(getRandomArbitrary==="tijera" && entrada.value === "piedra"){
            alert('Ganaste!!!')
        } else if(getRandomArbitrary==="tijera" && entrada.value === "papel"){
            alert('Perdiste!!!')
        } else if(getRandomArbitrary==="piedra" && entrada.value === "papel"){
            alert('Ganaste!!!')
        } else if(getRandomArbitrary==="piedra" && entrada.value === "tijera"){
            alert('Perdiste!!!')
        } else if(getRandomArbitrary==="papel" && entrada.value === "piedra"){
            alert('Ganaste!!!')
        } else if(getRandomArbitrary==="papel" && entrada.value === "tijera"){
            alert('Perdiste!!!')
        } 
    }