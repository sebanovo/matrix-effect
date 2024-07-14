class Matrix {
  #canvas
  #ctx
  #idIterval
  #maxColumns
  #characters = 'ﾄﾈｿﾏﾊﾎｩｶﾕｫﾍｪｵﾛｬﾚｸｺﾌｱﾒｰｦｽﾁﾜﾂｹﾗﾓｭﾐﾙﾑﾆｳﾝｯｲﾃﾀﾘｮﾔｾﾋﾅｼｷｴﾖﾉﾇｧｻｨ1234567890'
  #columns = []
  #fontSize = 20
  #interval
  #isRunning = false;

  constructor(canvas, { width , height ,fontSize = this.#fontSize, FPS = 50, characters = this.#characters } = {}) {
    if(canvas == null) throw new Error('El Objeto canvas es obligatorio')
    if(width == null) width = canvas.width
    if(height == null) height = canvas.height
    this.#canvas = canvas
    this.#canvas.width = width 
    this.#canvas.height = height
    this.#canvas.width = this.#canvas.width
    this.#canvas.height = this.#canvas.height 
    this.#ctx = canvas.getContext('2d')
    this.#maxColumns = Math.floor(this.#canvas.width / this.#fontSize) + 1

    this.#characters = characters
    this.#fontSize = fontSize
    this.#interval = 1000 / FPS;
  }

  #getRandomChar() {
    const index = Math.floor(Math.random() * this.#characters.length)
    const char = this.#characters[index]
    return char
  }

  #initializeColumns() {
    for(let i = 0; i < this.#maxColumns; i++) {
      this.#columns.push({
        row: this.#canvas.height,
        oldRow: -20,
        text: '',
        oldText: ''
      })
    }
  }

  #setNewRow(data) {
    if (data.row > 100 + Math.random() * 10000) data.row = 0
    else data.row = data.row + 20
  }

  #renderLetter(data, column) {
    const x = column * 20
    this.#ctx.font = `${this.#fontSize}pt UbuntuMono`
    this.#ctx.fillStyle = '#0f0'
    this.#ctx.fillText(data.oldText, x, data.oldRow)
    this.#ctx.fillStyle = '#fff'
    this.#ctx.fillText(data.text, x, data.row)
  }

  #matrix = () =>  {
    this.#ctx.fillStyle = '#0001'
    this.#ctx.fillRect(0, 0, this.#canvas.width, this.#canvas.height)
    this.#ctx.shadowBlur = this.#fontSize
    this.#columns.forEach((data, index) => {
      data.oldRow = data.row
      data.oldText = data.text
      data.text = this.#getRandomChar()
      this.#setNewRow(data)
      this.#renderLetter(data, index)
    })
  }

  play() {
    this.#initializeColumns()
    this.#ctx.fillStyle = '#000'
    this.#ctx.fillRect(0, 0, this.#canvas.width, this.#canvas.height)
    this.#idIterval = setInterval(this.#matrix, this.#interval)
    this.#isRunning = true;
  }

  pause() {
    if(!this.#isRunning) return;
    clearInterval(this.#idIterval)
  }

  continue() {
    if(!this.#isRunning) return;
    this.#idIterval = setInterval(this.#matrix, this.#interval)
  }
}

const canvas = document.getElementById('matrix')
const matrix = new Matrix(canvas, {
  width: document.body.offsetWidth,
  height: document.body.offsetHeight,
});
matrix.play()
