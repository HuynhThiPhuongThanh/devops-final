const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Dự án DevOps'));
app.listen(3000, () => console.log('Server chạy tại port 3000'));