function Pokemon(n,v,a,g)
{
	
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.grito = g;
	this.gritar = function ()
	{
		alert(this.grito);
	}
}

function pikachu()
{
	var pikachu = new Pokemon("Pikachu", 100, 55, "pika!!");
	pikachu.vida = pikachu.vida - 13;

	poke.innerHTML= "Pokemon" + '<img src="pika.png" />';

	nombrePokemon.innerText = "Mi Pokemon es: " + pikachu.nombre;

	datosPokemon.innerText = "tiene una vida de: " + pikachu.vida + ", un ataque de: " + pikachu.ataque + " y su grito es: " + pikachu.grito;

}
function charmander()
{
	var charmander = new Pokemon("charmander", 100, 54, "Chard!!");
	charmander.vida = charmander.vida ;

	poke.innerHTML= "Pokemon" + '<img src="char.png" />';

	nombrePokemon.innerText = "Mi Pokemon es: " + charmander.nombre;

	datosPokemon.innerText = "tiene una vida de: " + charmander.vida + ", un ataque de: " + charmander.ataque + " y su grito es: " + charmander.grito;

}
function squirtle()
{
	var squirtle = new Pokemon("squirtle", 100, 54, "squir.!");
	squirtle.vida = squirtle.vida ;

	poke.innerHTML= "Pokemon" + '<img src="squir.png" />';

	nombrePokemon.innerText = "Mi Pokemon es: " + squirtle.nombre;

	datosPokemon.innerText = "tiene una vida de: " + squirtle.vida + ", un ataque de: " + squirtle.ataque + " y su grito es: " + squirtle.grito;

}
function bulbasaur()
{
	var bulbasaur = new Pokemon("bulbasaur", 100, 54, "Bul bul.!");
	bulbasaur.vida = bulbasaur.vida ;

	poke.innerHTML= "Pokemon" + '<img src="bul.png" />';

	nombrePokemon.innerText = "Mi Pokemon es: " + bulbasaur.nombre;

	datosPokemon.innerText = "tiene una vida de: " + bulbasaur.vida + ", un ataque de: " + bulbasaur.ataque + " y su grito es: " + bulbasaur.grito;

}
bulbasaur
