// La primera parte de nuestro hechizo mágico.
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const asyncHandler = require('express-async-handler');
const app = express();
const port = 3000;

const rateLimit = require('express-rate-limit');

// Crea las reglas para el portero
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // Límite de 100 peticiones por IP en 15 minutos
    message: "Demasiadas peticiones. Inténtalo de nuevo más tarde."
});

// Aplica el portero a todas las peticiones
app.use(limiter);


// Aquí creamos nuestro baúl mágico (la base de datos)
const db = new sqlite3.Database('deseos.db');

// Aquí ponemos las reglas para el baúl: qué cajones tiene y qué guardar en ellos.
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS deseos (id INTEGER PRIMARY KEY, texto TEXT)");
});

// Esto es para que la magia funcione con lo que le enviamos.
app.use(express.json());

app.use(express.static('public')); // Esto le dice al servidor que muestre el contenido de la carpeta 'public'.

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Este es el camino para guardar un deseo.
app.post('/deseos', (req, res) => {
  const { texto } = req.body;
  if (!texto) {
    return res.status(400).json({ error: 'El deseo no puede estar vacío.' });
  }

  // Aquí guardamos el deseo en un cajón del baúl.
  const stmt = db.prepare("INSERT INTO deseos (texto) VALUES (?)");
  stmt.run(texto, function(err) {
    if (err) {
      return res.status(500).json({ error: 'Error al guardar el deseo.' });
    }
    res.status(201).json({ id: this.lastID, texto: texto });
  });
});

// Este es el camino para ver todos los deseos.
app.get('/deseos', asyncHandler(async (req, res) => {
    // Si el usuario pide "todos", ignoramos la paginación.
    if (req.query.all === 'true') {
        db.all("SELECT id, texto FROM deseos", (err, rows) => {
            if (err) {
                return res.status(500).json({ error: 'Error al obtener todos los deseos.' });
            }
            res.json(rows);
        });
    } else {
        // De lo contrario, usamos la paginación normal.
        const limit = 10;
        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * limit;

        db.all("SELECT id, texto FROM deseos LIMIT ? OFFSET ?", [limit, offset], (err, rows) => {
            if (err) {
                return res.status(500).json({ error: 'Error al obtener los deseos.' });
            }
            res.json(rows);
        });
    }
}));


// Esto le dice a nuestro baúl que está listo para recibir deseos.
app.listen(port, () => {
  console.log(`¡Nuestra magia está funcionando! Abre esta dirección en tu navegador: http://localhost:${port}`);
});