function startBotLike () {
    let contador = 0;
    let like = 0;

    document.querySelectorAll(".react-button__trigger").forEach((item, idx) => {
        contador++;
    })

    document.querySelectorAll(".react-button__trigger").forEach((item, idx) => {
        let btnLike = document.querySelectorAll(".react-button__trigger")[idx];
        
        if(btnLike.getAttribute("aria-pressed") == "true") {
            console.log(`Já deu like nessa publicação!`)
            contador--;
            window.scrollTo(0, document.querySelector("body").scrollHeight);
        } else {
            setTimeout(() => {
                btnLike.click();
                contador--;
                like++;
                console.log(`${like} Like(s)`)

                if(contador <= 0) {
                    window.scrollTo(0, document.querySelector("body").scrollHeight);

                    setTimeout(() => {
                        this.startBotLike()
                    }, 7000)
                }
            }, 8000)
        }
    })
}

this.startBotLike()