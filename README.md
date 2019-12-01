# bomberman-challenge
bomberman challenge made by Guilherme Luiz Lara Silva 

# to run
use npm i, then npm run game

# about the structre
the project is divided between procedureManipulators and drawers. There is also a structure to read user input data.

# user input data (readData.js)
it was made using the readline-sync lib. it is basically a readline (lib from native es5) but using synchronous methods. I could use the readline lib, however it would force me to use the promisify lib (since the readline methods are all asynchronous), in that way it could cause a lot of unecessary complexity to the project.

# procedureManipulators
the procedureManipulators change the matrix according to the second that the user inputed. They change matrix elements only.

# drawers
the drawers are responsible for creating the initial matrix that will be manipulated by the procedureManipulators.
