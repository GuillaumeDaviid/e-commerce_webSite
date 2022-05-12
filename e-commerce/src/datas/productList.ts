import running from "../images/running.jpg"
import clavier from "../images/clavier.jpg"
import ecran from "../images/ecran.jpg"
import ballon from "../images/ballon.jpg"
import marteau from "../images/marteau.jpg"
import tournevis from "../images/tournevis.jpg"
import cactus from "../images/cactus.jpg"
import ps5 from '../images/ps5.jpg'

export const productList = [
	{
		name: 'clavier',
		category: 'informatique',
		id: '1ed',
		stock: 2,
		water: 3,
		image: clavier,
		cover: "clavier",
		price: 15
	},
	{
		name: 'marteau',
		category: 'bricolage',
		id: '2ab',
		stock: 3,
		water: 1,
		image: marteau,
		cover: "lyrata",
		price: 16
	},

	{
		name: 'tourne vis',
		category: 'bricolage',
		id: '3sd',
		stock: 1,
		water: 2,
		image: tournevis,
		cover: "pothos",
		price: 9
	},
	{
		name: 'écran',
		category: 'informatique',
		id: '4kk',
		stock: 2,
		water: 3,
		image: ecran,
		cover: "écran",
		price: 200
	},
	{
		name: 'Dictionnaire',
		category: 'livre',
		id: '5pl',
		stock: 3,
		water: 1,
		image: running,
		cover: "Dictionnaire",
		price: 25
	},

	{
		name: 'cactus',
		category: 'plante',
		id: '8fp',
		stock: 2,
		water: 1,
		image: cactus,
		cover: "cactus",
		price: 6
	},
	{
		name: 'PlayStation 5',
		category: 'informatique',
		id: '7ie',
		stock: 2,
		water: 3,
		image: ps5,
		cover: "PlayStation 5",
		price: 500
	},
	{
		name: 'Ballon de football',
		category: 'sport',
		id: '9vn',
		stock: 2,
		water: 1,
		image: ballon,
		cover: "Ballon de football",
		price: 8
	},

	{
		name: 'chaussure de running',
		category: 'vetement',
		id: '6uo',
		stock: 2,
		water: 2,
		image: running,
		cover: "chaussure de running",
		price: 40
	}
]