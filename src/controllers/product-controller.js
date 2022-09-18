
const Product = require('../models/Product')

exports.get = (req, res, next)=>{
  Product.find({active: true}, 'title price slug')
  .then(data => {
    res.status(200).send(data);
}).catch(e => {
    res.status(400).send(e);
});    
}

exports.getBySlug = (req, res, next)=>{
  Product.findOne({
    active: true,
    slug: req.params.slug
  }, 'title description price slug tags')
  .then(data => {
    res.status(200).send(data);
}).catch(e => {
    res.status(400).send(e);
});    
}

exports.getById = (req, res, next)=>{
  Product
  .findById(req.params.id)
  .then(data => {
    res.status(200).send(data);
}).catch(e => {
    res.status(400).send(e);
});    
}

exports.getByTag = (req, res, next)=>{
  Product
  .find({
    tags: req.params.tag,
    active: true,
  }, 'title description price slug tags')
  .then(data => {
    res.status(200).send(data);
}).catch(e => {
    res.status(400).send(e);
});    
}

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    product.save()
    .then(x => {
        res.status(201).send({ mesage: "Produto cadastrado com sucesso!'" });
    }).catch(e => {
        res.status(400).send({
            message: '[ERRO] Falha durante cadastro!',
            data: e
        });
    });    
};
exports.put = (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id,{
      $set: {
        title:req.body.title,
        slug:req.body.slug,
        description:req.body.description,
        price: req.body.price,
      }
    }).then(x=>{
      res.status(200).send({message: 'Produto atualizado com sucesso!'})
    }).catch(e=>{
      res.status(400).send({
        message: 'Falha ao atualizar o produto',
        data: e
      })
    })
};
exports.delete = (req, res, next) => {
    res.status(201).send(req.body);
};