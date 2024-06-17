console.log("  Digite um número para gerar sua tabuada: ")
let entrada_usuario = null;
let tabuada = [];

process.stdin.on("data", function(data) {
    if (!entrada_usuario) { entrada_usuario = Number(data.toString().trim());

        for (let i = 1; i <= 10; i++) {
            let resultado = i * entrada_usuario;
            tabuada.push(resultado); // Adiciona o resultado ao array tabuada
            console.log(entrada_usuario +"x"+ i + "=" + resultado)
        }
    }
});
