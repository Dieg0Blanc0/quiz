var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

//GET Paginas Pregunta y Respuesta
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

//GET Pagina Autor
router.get('/author', function(req, res, next){
    res.render('author');
});

module.exports = router;
