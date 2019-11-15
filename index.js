const readData = require('./src/readData')
const MatrixDrawer = require('./src/drawers/MatrixDrawers')

function Main() {
    const { lines, columns, seconds } = readData()
    const MDrawer = new MatrixDrawer(lines, columns, seconds) 
    MDrawer.startManipulation()
}
Main()