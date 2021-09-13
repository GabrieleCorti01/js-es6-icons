
// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone 
// disponibili come da layout.
// Milestone 2
// Coloriamo le icone per tipo
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const container = document.getElementById("box-icon")

const colors = [
    "magenta",
    "lime",
    "turquoise",
    "red"
]

function printToPage(array, container){
    let htmlContent = "";

    array.forEach(element => {
        
        const {name, prefix, type} = element;
        

        container.innerHTML += 
        `<div>
            <i class="${family} ${prefix} ${name}"> </i>
            <h4 class="my-icon-title">${name} (${type})</h4>
        </div>
        `;

    });
}

function getTypes(array){
    
}

function getUniquePropertyValues(array, property){
    const types = [];

    array.forEach(element =>{
        if(! types.includes(element[property])){
            type.push(element[property]);
        }
    });
    return types;
}

function colorizeItems(array, colors){
    const types = getUniquePropertyValues(array, "type");
    console.log(types);

    const colorizedArray = array.map((element) => {
        
        const indexOfType = types.indexOf(element.type);
        if ( indexOfType !== -1 ) {

            element.color = colors[indexOfType];
        } 
    })
}