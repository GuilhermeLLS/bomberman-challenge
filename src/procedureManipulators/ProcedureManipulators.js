module.exports = class ProcedureManipulators {
    constructor(lines, columns, seconds) {
        this.lines = lines
        this.columns = columns
        this.seconds = seconds
    }

    finalStateMatrix(initialMatrix) {
        let timeCounter = this.seconds <= 4 ? Number(this.seconds) : Number(this.seconds) % 4
        if (timeCounter === 1) {
            return initialMatrix
        }
        if (timeCounter === 2) {
            return this.timeCounter2Procedure(initialMatrix)
        }
        if (timeCounter === 3) {
            return this.timeCounter3Procedure(initialMatrix)
        }
    }

    timeCounter2Procedure(initialMatrix) {
        return initialMatrix.map((mLines) => mLines.map((elem) => {
            if (elem.symbol === '.') {
                return ({
                    symbol: '0',
                    secondIn: 2,
                    line: elem.line,
                    column: elem.column
                })
            } else {
                return elem
            }
        }))
    }

    timeCounter3Procedure(initialMatrix) {
        const guardaBomba = []
        let partialResultMatrix = this.timeCounter2Procedure(initialMatrix)
        partialResultMatrix.forEach(l => l.forEach(elem => {
                if (elem.secondIn === 0 && elem.symbol === '0') {
                    guardaBomba.push({ line: elem.line, column: elem.column })
                }  
            })
        )
        return this.explodeBombs(partialResultMatrix, guardaBomba)
    }

    explodeBombs(matrix, bombPlacements) {
        console.log('Matriz no segundo anterior: \n')
        matrix.map(m => console.log(m.map(n => n.symbol)))
        for (let bp of bombPlacements) {
            matrix = this.removeUnecessaryElements(bp, matrix)
        }
        return matrix
    }

    removeUnecessaryElements(bp, matrix) {
        matrix = this.removeUp(bp, matrix)
        matrix = this.removeDown(bp, matrix)
        matrix = this.removeRight(bp, matrix)
        matrix = this.removeLeft(bp, matrix)

        return matrix
    }
    removeUp(bp, matrix) {
        for (let i = bp.line; i >= 0; i--) {
            if (matrix[i][bp.column].symbol !== 'X') {
                matrix[i][bp.column].symbol = '.'
            } else {
                break
            }
        }
        return matrix
    }

    removeDown(bp, matrix) {
        for (let i = bp.line; i < this.lines; i++) {
            if (matrix[i][bp.column].symbol !== 'X') {
                matrix[i][bp.column].symbol = '.'
            } else {
                break
            }
        }
        return matrix
    }

    removeRight(bp, matrix) {
        for (let i = bp.column; i < this.columns; i++) {
            if (matrix[bp.line][i].symbol !== 'X') {
                matrix[bp.line][i].symbol = '.'
            } else {
                break
            }
        }
        return matrix
    }

    removeLeft(bp, matrix) {
        for (let i = bp.column; i >= 0; i--) {
            if (matrix[bp.line][i].symbol !== 'X') {
                matrix[bp.line][i].symbol = '.'
            } else {
                break
            }
        }
        return matrix
    }
}