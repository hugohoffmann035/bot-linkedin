function startBotConexoes() {
  let contador = 0;
  let conexao = 0;

  scrollTo(0, document.querySelector('body').scrollHeight);

  const nextpage = () => {
    if (contador <= 0) {
      document.querySelectorAll('.artdeco-pagination__indicator').forEach((item, idx) => {
        if (item.classList.contains("selected")) {
          var nextPag = document.querySelectorAll('.artdeco-pagination__indicator')[idx + 1]
          nextPag.children[0].click()
          setTimeout(() => {
            this.startBotConexoes()
          }, 6000)
        }
      })
    }
  }

  setTimeout(() => {
    document.querySelectorAll('button[class="artdeco-button artdeco-button--2 artdeco-button--secondary ember-view"]').forEach((item, idx) => {
      contador++;
    });

    document.querySelectorAll('button[class="artdeco-button artdeco-button--2 artdeco-button--secondary ember-view"]').forEach((item, idx) => {
      if (item.innerText.trim().toLowerCase() != "conectar") {
        contador--;
        nextpage()
        return;
      }

      setTimeout(() => {
        item.click();

        var modalFooter = document.querySelector(".artdeco-modal__actionbar")
        modalFooter.children[1].click()

        conexao++;
        contador--;
        console.log(`Seu BOT já conectou ${conexao} pessoa(s)!`);

        nextpage()
      }, idx * 6000);
    });
  }, 7000)
}

this.startBotConexoes()