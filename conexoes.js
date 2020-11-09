function startBotConexoes() {
  let contador = 0;

  document.querySelectorAll('.search-result__action-button').forEach((item, idx) => {
    setTimeout(() => {
      if(!item.disabled){
          item.click();
          
          var modalFooter = document.querySelector(".artdeco-modal__actionbar")
          modalFooter.children[1].click()

          contador++;
          console.log(`Seu BOT já conectou ${contador} pessoa(s)!`);
      } else { 
        console.log('Você já segue essa pessoa.');
      }
    }, idx * 7000);

    /*
    if(!document.querySelectorAll('.search-result__action-button')[idx+1]) {
      document.querySelectorAll('.artdeco-pagination__indicator').forEach((item, idx) => {
        if(item.classList.contains("selected")) {
          var nextPag = document.querySelectorAll('.artdeco-pagination__indicator')[idx+1]
          nextPag.children[0].click()
        }
      })

      this.startBotConexoes();
    }
    */
  });
}

this.startBotConexoes()