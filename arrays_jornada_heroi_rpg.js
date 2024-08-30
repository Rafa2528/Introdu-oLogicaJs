// Inventário inicial do heroi
let inventario = ["Espada de ferro","escudo","poção de vida","machado","capa de invisibilidade","armadura de ouro"]

// Exibindo o inventário inicial
console.log("Seu inventario inicial:", inventario);

// Heroi encontra um novo item
let novoItem = "Poção de teletransporte";
inventario.push(novoItem);

// Exibindo o inventário atualizado
console.log("Voce encontrou um bau! Novo item adicionado ao seu inventário:",inventario);

// Heroi enfrenta um goblin
console.log("Um goblin apareceu! Prepare-se para a batalha.");

// Atacando o goblin
let itemUsado2 = inventario[2];
console.log("Voce ataca o goblin com sua",itemUsado2);

// Finalizando o inimigo
let itemUsado0 = inventario[0];
console.log("Voce ataca o goblin com sua",itemUsado0);

// Finalizando a batalha
console.log("Voce derrotou o goblin e continua sua jornada.");

// Quantidade de itens
console.log(inventario.length)

