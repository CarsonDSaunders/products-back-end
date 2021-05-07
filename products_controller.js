module.exports = {
    create: (req, res, next) => {
        const { name, description, price, image_url} = req.body;
        const dbInstance = req.app.get('db');
        dbInstance.create_product([name, description, price, image_url])
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => {
            res.status(500).send("I AM ERROR")
            console.error(err)
        })
    },
    getOne: (req, res, next) => {
        const id = req.params.id;
        const dbInstance = req.app.get('db');
        dbInstance.read_product(id)
        .then((product) => {
            res.status(200).send(product)
        })
        .catch(err => {
            res.status(500).send("I AM ERROR")
            console.error(err)
        })
    },
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.read_products()
        .then((products) => {
            res.status(200).send(products)
        })
        .catch(err => {
            res.status(500).send("I AM ERROR")
            console.error(err)
        })
    },
    update: (req, res, next) => {
        const id = req.params.id;
        const desc = req.query.desc;
        const dbInstance = req.app.get('db');
        dbInstance.update_product([id, desc])
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => {
            res.status(500).send("I AM ERROR")
            console.error(err)
        })
    },
    delete: (req, res, next) => {
        const id = req.params.id;
        const dbInstance = req.app.get('db');
        dbInstance.delete_product(id)
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => {
            res.status(500).send("I AM ERROR")
            console.error(err)
        })
    }
}