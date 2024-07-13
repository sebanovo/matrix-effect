class Matrix {
  canvas
  width
  height
  ctx
  fontSize = 20
  maxColumns
  columns

  FPS = 30
  interval = 1000 / this.FPS

  characters = 'ﾄﾈｿﾏﾊﾎｩｶﾕｫﾍｪｵﾛｬﾚｸｺﾌｱﾒｰｦｽﾁﾜﾂｹﾗﾓｭﾐﾙﾑﾆｳﾝｯｲﾃﾀﾘｮﾔｾﾋﾅｼｷｴﾖﾉﾇｧｻｨ1234567890'

  #idIterval

  constructor(canvas, width, height) {
    this.canvas = canvas
    this.width = this.canvas.width = width
    this.height = this.canvas.height = height
    this.ctx = canvas.getContext('2d')
    this.maxColumns = Math.floor(width / this.fontSize) + 1
  }

  #getRandomChar() {
    const index = Math.floor(Math.random() * this.characters.length)
    const char = this.characters[index]
    return char
  }

  #initializeColumns() {
    this.columns = Array(this.maxColumns).fill({})
    this.columns.forEach((_, index) => {
      this.columns[index] = {
        row: 0,
        oldRow: -20,
        text: '',
        oldText: ''
      }
    })
  }
  #setNewRow(data) {
    if (data.row > 100 + Math.random() * 10000) data.row = 0
    else data.row = data.row + 20
  }
  #renderLetter(data, column) {
    const x = column * 20
    this.ctx.font = `${this.fontSize}pt UbuntuMono`
    this.ctx.fillStyle = '#0f0'
    this.ctx.fillText(data.oldText, x, data.oldRow)
    this.ctx.fillStyle = '#fff'
    this.ctx.fillText(data.text, x, data.row)
  }
  #matrix = () =>  {
    this.ctx.fillStyle = '#0001'
    this.ctx.fillRect(0, 0, this.width, this.height)
    this.ctx.shadowBlur = this.fontSize
    this.columns.forEach((data, index) => {
      data.oldRow = data.row
      data.oldText = data.text
      data.text = this.#getRandomChar()
      this.#setNewRow(data)
      this.#renderLetter(data, index)
    })
  }
  run() {
    this.#initializeColumns()
    this.ctx.fillStyle = '#000'
    this.ctx.fillRect(0, 0, this.width, this.height)
    this.#idIterval = setInterval(this.#matrix, this.interval)
  }
  pause() {
    clearInterval(this.#idIterval)
  }
}
