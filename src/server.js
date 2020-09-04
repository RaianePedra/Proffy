  //servidor
  const express = require('express');
  const server = express();
  
  const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')
  
  //configuracao do nunjucks (template, engine)
  const nunjucks = require('nunjucks');
  nunjucks.configure('src/views', {
    express: server,
    noCache: true,
  })
  //Inicio e config do servidor
  server
  //configurando arquivos estaticos (css, scripts, imagens)
  .use(express.urlencoded({ extended: true }))
  .use(express.static("public"))
  //rotas da aplicaçao
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .post("/save-classes", saveClasses)
  
  .listen(5500);
