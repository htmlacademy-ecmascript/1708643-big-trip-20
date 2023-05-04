import {getRandomPicture} from '../utils.js';

const mockDestinations = [
  {
    'id': 1,
    'description': 'Compellavisseque adfantur, pro et sociavisset ex ex recusavistis, expectabisque, creuissetque.',
    'name': 'Saint Petersburg',
    'pictures': [
      {
        'src': getRandomPicture(),
        'description': 'Saint Petersburg1'
      },
      {
        'src': getRandomPicture(),
        'description': 'Saint Petersburg2'
      }
    ]
  },
  {
    'id': 2,
    'description': 'Oravissetisque ad sanguisque effodamus ob in moveamus institueram. Helica foedentque declinavisse, dicavisseque, in confligis patrii ab caucasus descenderatisque, ad exorti profereminique, vocabantque uicissetque portaveris exaudiamque.',
    'name': 'Naples',
    'pictures': [
      {
        'src': getRandomPicture(),
        'description': 'Naples1'
      },
      {
        'src': getRandomPicture(),
        'description': 'Naples2'
      }
    ]
  },
  {
    'id': 3,
    'description': 'Iis exquiratisque praestaremus aut villa devolvit dolore, cum latinorum compellabatisque, aut refixaque ob vastarique, caritatisque sentirentque existimemusque resonavere multares detrudes.',
    'name': 'Geneva',
    'pictures': [
      {
        'src': getRandomPicture(),
        'description': 'Geneva1'
      },
      {
        'src': getRandomPicture(),
        'description': 'Geneva2'
      },
      {
        'src': getRandomPicture(),
        'description': 'Geneva3'
      }
    ]
  },
  {
    'id': 4,
    'description': 'Rediveratis cum ueniet, cognovissetis, ex affixus constavisse aut cum detrudo. Devolveremusque abibo intererimus et cupitis a bellumque hircus.',
    'name': 'Paris',
    'pictures': [
      {
        'src': getRandomPicture(),
        'description': 'Paris1'
      },
      {
        'src': getRandomPicture(),
        'description': 'Paris2'
      },
      {
        'src': getRandomPicture(),
        'description': 'Paris3'
      }
    ]
  }
];

function getDestinationById(id) {
  return mockDestinations.find((destination) => destination.id === id);
}

export {getDestinationById};
