const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const Writer = require("./Writer");
const PDFWriter = require("./PDFWriter");

const leitor = new Reader();
const escritor = new Writer();

async function main() {
    var dados = await leitor.Read("./Planilha.csv");
    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

    var html = await HtmlParser.Parse(usuarios);

    PDFWriter.WritePDF(Date.now() + ".pdf", html);
}

main();
