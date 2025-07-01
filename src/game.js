import { createGame, vec2 } from 'odyc'
import { levels, sprites, colors } from './assets'

export function play(levelIndex) {
	const { map, pos } = levels[levelIndex]
	const grid = map
		.trim()
		.replace(/[ \t]/gm, '') //removes tabs and whitespaces
		.split('\n')
	const defaultScreenHeight = 15
	const defaultScreenWidth = 15
	const screenHeight = grid.length < defaultScreenHeight ? grid.length : defaultScreenHeight
	const screenWidth = grid[1].length < defaultScreenWidth ? grid[1].length : defaultScreenWidth

	const game = createGame({
		colors,
		player: {
			sprite: sprites.player,
			position: pos.value,
		},
		templates: {
			'#': {
				sprite: 1,
			},
			'<': {
				sprite: sprites.left,
				solid: false,
				onTurn: updateShip,
			},
			'>': {
				sprite: sprites.right,
				solid: false,
				onTurn: updateShip,
			},
			'^': {
				sprite: sprites.top,
				solid: false,
				onTurn: updateShip,
			},
			v: {
				sprite: sprites.bottom,
				solid: false,
				onTurn: updateShip,
			},
			'*': {
				sprite: sprites.mine,
				sound: ['FALL', 93],
				solid: false,
				end: true,
			},
			$: {
				sprite: sprites.goal,
				solid: false,
				onEnter() {
					game.playSound('POWERUP', 93)
					play(++levelIndex % levels.length)
				},
			},
			'&': {
				sprite: sprites.love,
				dialog: '',
				async onCollide(target) {
					await game.openDialog('Gracias por encontrarme mi princesa|por traer luz a mis dias|por hacerme muy feliz|por ser mi amorcita|estoy sumamente orgulloso de ti y te prometo que siempre estare a tu lado|<4>te amo<4>')
					await game.end('La princesita y el amorcito vivieron felices para siempre junto a su gatito', 'Gracias por jugar :3')
					play(0)
				}
				// onEnter() {
					
				// },
			},

		},
		map,
		screenWidth,
		screenHeight,
		cellWidth: 16,
		cellHeight: 18,
		background: 0,
		filter: {
			name: 'neon',
			settings: {
				scale: 1,      // Tile size (0 to 1)
				intensity: 0.8    // Glow intensity
			  }
		},
	})

	function gameOver() {
		game.playSound('FALL', 93)
		game.end()
	}

	const directions = {
		'<': [-1, 0],
		'>': [1, 0],
		'^': [0, -1],
		v: [0, 1],
	}
	const opposites = {
		'<': '>',
		'>': '<',
		'^': 'v',
		v: '^',
	}

	async function updateShip(target) {
		const dir = vec2(directions[target.symbol])
		const pos = vec2(target.position)
		let dest = pos.add(dir)
		const nextCell = game.getCell(...dest.value)

		//bounce
		if (nextCell.symbol !== null) {
			const newSymbol = opposites[target.symbol]
			game.addToCell(...pos.value, newSymbol)
			dest = pos
		}
		//go forward
		else {
			game.addToCell(...dest.value, target.symbol)
			game.getCell(...pos.value).remove()
		}
		//game over
		if (
			dest.equals(game.player.position) ||
			(dest.sub(dir).equals(game.player.position) &&
				dir.multiply(-1).equals(game.player.direction))
		)
			setTimeout(gameOver)
	}
}
