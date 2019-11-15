const ProcedureManipulators = require('../procedureManipulators/ProcedureManipulators')

module.exports = class MatrixDrawers {
    constructor(lines, columns, seconds) {
        this.lines = lines
        this.columns = columns
        this.seconds = seconds
    }
    startManipulation() {
        const PManipulators = new ProcedureManipulators(this.lines, this.columns, this.seconds)
        const finalMatrix = PManipulators.finalStateMatrix(this.drawInitialMatrix()) 
        // return PManipulators.finalStateMatrix(this.drawInitialMatrix())
        console.log('Matriz Final: \n')
        finalMatrix.map(m => console.log(m.map(n => n.symbol)))
        return finalMatrix
    }

    initialBombPlacement() {
        const placements = []
        const amountOfBombs = Math.floor(Math.random() * ((this.lines * this.columns) - 2))
        console.log(amountOfBombs)
        for (let i = 0; i < amountOfBombs; i++) {
            const l = Math.floor(Math.random() * this.lines)
            const c = Math.floor(Math.random() * this.columns)
            const p = placements.find(p => p.lineInitialBomb === l && p.columnInitialBomb === c)
            if (!p) {
                placements.push({
                    lineInitialBomb: l,
                    columnInitialBomb: c,
                })
            } 
        }
        return placements
    }

    drawInitialMatrix() {
        let initBombPlacements = this.initialBombPlacement()
        console.log(initBombPlacements)
        let matrix = this.drawMatrixWithXsAndPoints()
        for (const initialBP of initBombPlacements) {
            matrix[initialBP.lineInitialBomb][initialBP.columnInitialBomb] = {
                line: initialBP.lineInitialBomb,
                column: initialBP.columnInitialBomb,
                secondIn: 0,
                symbol: '0'
            }
        }
        console.log('Matriz Inicial: \n')
        matrix.map(m => console.log(m.map(n => n.symbol)))
        return matrix
    }

    drawMatrixWithXsAndPoints() {
        let matrix = []
        for (let i = 0; i < this.lines; i++) {
            matrix[i] = []
            for (let j = 0; j < this.columns; j++) {
                const randomNum = Math.random()
                if (randomNum > 0.5) {
                    matrix[i][j] = {
                        line: i,
                        column: j,
                        secondIn: 0,
                        symbol: 'X',
                    }
                } else if (randomNum <= 0.5) {
                    matrix[i][j] = {
                        line: i,
                        column: j,
                        secondIn: 0,
                        symbol: '.',
                    }
                }
            }
        }
        return matrix
    }
}