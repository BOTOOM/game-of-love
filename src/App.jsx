import './App.css'
import { createGame } from 'odyc'
import { levels, sprites } from './assets'
import { play } from './game'

const intro = createGame()
await intro.openMessage(`** Game of Love **


 una prequeña aventura



         by Edwar`,`Érase una vez una princesita
        
 a la cual se le perdió su amorcito`,
`Por lo cual la princesita ha decidido buscarlo

para poder estar juntos`,)
play(0)


// const game = createGame({
//   title: [`** Game of Love **


//      una prequeña aventura



//         by Edwar`,`Erase una vez una princesita
        
// a la cual se le perdio su amorcito`,
//         `Por lo cual la princesita ha decidio a buscarlo
        
// para poder estar juntos`,],
//   colors: [
// 		'#212529', // 0
// 		'#f8f9fa', // 1
// 		'#ced4da', // 2
// 		'#228be6', // 3
// 		'#fa5252', // 4
// 		'#fcc419', // 5
// 		'#ffd8a8', // 6
// 		'#40c057', // 7
// 		'#f06595', // 8
// 		'#a52f01', // 9
// 		'#fcc2d7', // a
// 		'#0000ff', // b
// 		'#ffff00', // c
//     '#e64980', // d
//     '#ae3ec9', // e
//     '#e599f7', // f
//     '#ffff00' // g

// 		// and so on...
// 	],
//   messageBackground: 0,
// 	messageColor: 1,
// 	dialogBackground: 0,
// 	dialogColor: 1,
// 	dialogBorder: 1,
// 	dialogSpeed: 'NORMAL',
// 	screenWidth: 12,
// 	screenHeight: 12,
// 	cellWidth: 16,
// 	cellHeight: 18,
// 	background: 1,
// 	volume: 0.5,
//   player: {
//     sprite: sprites.player,
//     position: [1, 1]
//   },
//   templates: {
//     x: {
//       sprite: 2
//     }
//   },
//   map: `
// 	.............................
// 	.....x.......................
// 	.....x.......................
// 	.....x.......................
// 	.....x.......................
// 	.....x.......................
// 	.....x.......................
// 	.....x.......................
// 	.............................
// 	.............................
// 	.............................
// 	.............................
// 	.............................
// 	.............................
// 	.............................
// 	.............................
// 	.............................
// 	.............................
// 	.............................
// 	.............................
// 	.............................
// 	.............................
// 	.............................
// 	.............................
// 	.............................
// 	.............................
// 	.............................
// 	.............................
// 	.............................
// 			`
// })

function App() {

  return (
    <>
      <div>
       {/* {game.render()} */}
      </div>
  
    </>
  )
}

export default App
