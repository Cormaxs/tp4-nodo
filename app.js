import express from'express';

const app = express();
const PORT = 3000;


//ruteo basico o raiz
app.get('/', (req, res) => {
    res.send("Pagina de inicio");
})
//ruteo basico de datos
app.get('/data', (req, res) => {
    res.send("Datos recibidos");
})


//ruteo con parametros
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID es : ${userId}`)
})

//ruteo con multiples parametros
app.get('/product/:category/:id', (req, res) =>{
    const categoria = req.params.category;
    const userID = req.params.id;

    res.send(`La categoria de producto es : ${categoria} y el producto es : ${userID}`);
})


//ruteo de consulta ejemplo de uso http://localhost:3000/search?q=algo
app.get('/search', (req, res)=>{
    const query = req.query.q;
    res.send(`El resultado para ${query} es : ${query}`);
})

//multiples parametros de consulta

app.get('/filter', (req, res)=>{
    const {type, minPrice, maxPrice} = req.query;
    res.send(`Filtrar por rango de precios ${type}, rango de precios ${minPrice} - ${maxPrice}`)
})



app.listen(PORT, () => {
    console.log(`Escuchgando en el puerto ${PORT} en http://localhost:${3000}`);
})