const express = require('express');
const app = express();

app.set('views', './ejs_views');
app.set('view engine', 'ejs');


app.get('views/datos', (req, res) => {
    
    res.render('index', {productos: [
        
            {
                id: 1,
                title: 'remera 1',
                price: 200,
                thumbnail: 'www.google.com',
                
            },
        
            {   
                id: 2,
                title: 'remera 2',
                price: 300,
                thumbnail: 'www.google.com',
                
            },
        
            {   
                id: 3,
                title: 'remera 3',
                price: 400,
                thumbnail: 'www.google.com',
                
            }
        ]
      ,} ) // lo que se muestra en html index///
})

app.listen(8080, () => {
    console.log('Escuchando!')
});