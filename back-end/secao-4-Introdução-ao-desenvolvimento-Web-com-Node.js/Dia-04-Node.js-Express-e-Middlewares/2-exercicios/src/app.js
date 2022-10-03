const express = require('express');

const app = express();

app.use(express.json());

// app.post('/activities', (_req, res) => {
//     res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
// });

app.post('/activities', (req, res) => {
    const activity = req.body;
    const nameInvalied = activity.name !== '';
    console.log(typeof (activity.price));

    const obj = {
        [!nameInvalied]: res.status(400).json({ message: 'O campo name é obrigatório' }),
        [activity.name.length <= 4]: res.status(400)
            .json({ message: 'O campo name deve ter pelo menos 4 caracteres' }),
        [typeof (activity.price) !== 'number']: res.status(400)
            .json({ message: 'O campo price é obrigatório' }),
        [activity.price === '']: res.status(400)
            .json({ message: 'O campo price é obrigatório' }),
        [activity.price < 0]: res.status(400)
            .json({ message: 'O campo price deve ser um número maior ou igual a zero' }),
    };
    return (obj[!nameInvalied] || obj[typeof (activity.price) !== 'number']
    || obj[activity.price === ''] || obj[activity.price < 0]) 
    || res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });

    // if (!nameInvalied) {
    //     return res.status(400).json({ message: 'O campo name é obrigatório' });
    // }
    // if (activity.name.length <= 4) {
    //     return res.status(400).json({ message: 'O campo name deve ter pelo menos 4 caracteres' });
    // }
    // if (typeof (activity.price) !== 'number') {
    //     return res.status(400).json({ message: 'O campo price é obrigatório' });
    // }
    // if (activity.price === '') {
    //     return res.status(400).json({ message: 'O campo price é obrigatório' });
    // }
    // if (activity.price < 0) {
    //     return res.status(400)
    //     .json({ message: 'O campo price deve ser um número maior ou igual a zero' });
    // }
    // return res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = app;
