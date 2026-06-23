# ⚽ Squad Rotator + Infinite Reroll

Um script de navegador (Client-side) desenvolvido para manipular a seleção de times no site `7a0.com.br`. Ele intercepta as requisições de rede para garantir que você jogue apenas com os melhores elencos clássicos (focado principalmente em seleções históricas do Brasil) e adiciona um botão flutuante para roletar (reroll) os times infinitamente.

## 🚀 Funcionalidades

* **Interceptação de Fetch (`window.fetch`):** O script sobrescreve o comportamento padrão do navegador para substituir as requisições originais de JSON por elencos predefinidos de alta qualidade.
* **Abertura Fixa (Top Tiers):** As suas três primeiras rolagens de times são garantidas. Você sempre começará com:
1. **Brasil 1970**
2. **URSS 1958**
3. **França 1982**


* **Pool Customizada Inteligente:** A partir da quarta rolagem, o script sorteia times de uma lista selecionada a dedo, implementando uma regra que **impede que o mesmo país venha duas vezes seguidas**.
* **Botão Flutuante (Infinite Reroll):** Injeta um botão fixo no canto superior direito da tela. Com apenas um clique, ele aciona o botão original de *reroll* do site (`.reroll-btn`), permitindo trocar de time de forma rápida e contínua.

## 🛠️ Como Usar

Como este é um script direto, você pode executá-lo diretamente no Console do seu navegador.

1. Acesse o site alvo (`7a0.com.br`).
2. Abra as **Ferramentas de Desenvolvedor** do navegador:
* **Windows/Linux:** Pressione `F12` ou `Ctrl + Shift + I`
* **Mac:** Pressione `Cmd + Option + I`


3. Navegue até a aba **Console**.
4. Copie todo o conteúdo do arquivo `script.js`.
5. Cole o código no Console e pressione `Enter`.
6. Pronto! Um botão escrito **"♾ Infinite Reroll"** aparecerá no canto superior direito da sua tela. Basta clicar nele para buscar novos times.

## ⚙️ Customização

Você pode facilmente alterar os times que deseja tirar modificando as variáveis no topo do código `script.js`:

**Para mudar os times fixos iniciais:**
Basta trocar as URLs das variáveis `firstSquad`, `secondSquad` e `thirdSquad` pelo link do JSON do time desejado.

```javascript
const firstSquad = "sua_url_aqui.json";

```

**Para alterar a lista de sorteio (Pool):**
Adicione ou remova URLs de arquivos `.json` dentro do array `squads`. O script cuidará automaticamente de embaralhar as opções disponíveis.

## ⚠️ Avisos e Limitações

* **Padrão de URL:** O script utiliza uma expressão regular (`/\/squads\/([A-Z]{3})/`) para identificar o país a partir da URL. Se o site mudar a estrutura das URLs, a função que evita repetições do mesmo país pode parar de funcionar.
* **Botão Original:** O botão *Infinite Reroll* procura por um elemento com a classe `.reroll-btn` na página. Se o site sofrer uma atualização de layout e mudar essa classe, o clique automático precisará ser ajustado.
* **Uso Pessoal:** Este script manipula as requisições no *client-side* do seu próprio navegador e não afeta o servidor do site. Recomendado o uso apenas para fins educacionais ou de entretenimento pessoal.
