import foods from "./dataset.js";

function createFoodCard(food) {
  let foodCard = `<div class="col-4">
        <div class="card" style="width: 18rem;">
            <img src="${food.imagem}" class="card-img-top" alt="${food.nome}">
            <div class="card-body">
                <h5 class="card-title">${food.nome}</h5>
                <p class="card-text">
                    ${food.descricao}
                </p>
            </div>
        </div>
    </div>`;
  return foodCard;
}

function addFoodsCard() {
  for (let food of foods) {
    addFoodCard(food);
    
  }
}

function addFoodCard(food) {
  let foodCard = createFoodCard(food);
    let cardDeck = document.getElementById("card-deck");
    cardDeck.insertAdjacentHTML("beforeend", foodCard);

}


let addFoodButton = document.getElementById("addFoodButton");
addFoodButton.onclick = (event) => {
  
  let foodForm = document.getElementById("foodForm");

 
  foodForm.onsubmit = (e) => {
    e.preventDefault();
    /*
    let nome = document.getElementById("nome").value;

    let imagem = document.getElementById("imagem").value;

    let preço = document.getElementById("preço").value;

    let descrição = document.getElementById("descrição").value;
    
    console.log(nome, imagem, preço, descrição);


    const newfood = {
      nome: nome,
      imagem: imagem,
      preço: preço,
      descrição: descrição,

    };
    console.log(newfood);
    */
    let newfood = Object.fromEntries(new FormData(foodForm))

    foods.push(newfood);

    addFoodCard(newfood)
    
    

  };

};

addFoodsCard();