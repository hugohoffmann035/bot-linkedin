function startBotConexoes() {
  let contador = 0;
  let conexao = 0;

  document.querySelectorAll('.search-result__action-button').forEach((item, idx) => {
    contador++;
  });

  document.querySelectorAll('.search-result__action-button').forEach((item, idx) => {
    setTimeout(() => {
      if(!item.disabled){
          item.click();
          
          var modalFooter = document.querySelector(".artdeco-modal__actionbar")
          modalFooter.children[1].click()

          conexao++;
          contador--;
          console.log(`Seu BOT já conectou ${conexao} pessoa(s)!`);
      } else { 
        contador--;
        console.log('Você já segue essa pessoa.');
      }

      if(contador <= 0) {
        document.querySelectorAll('.artdeco-pagination__indicator').forEach((item, idx) => {
          if(item.classList.contains("selected")) {
            var nextPag = document.querySelectorAll('.artdeco-pagination__indicator')[idx+1]
              nextPag.children[0].click()
            setTimeout(() => {
              this.startBotConexoes()
            }, 6000)
          }
        })
      }
    }, idx * 6000);
  });
}

this.startBotConexoes()