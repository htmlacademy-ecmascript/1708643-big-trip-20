const mockOffers = [
  {
    'type': 'taxi',
    'offers': [
      {
        'id': 1,
        'title': 'Upgrade to a business class',
        'price': 66
      },
      {
        'id': 2,
        'title': 'Drive slowly',
        'price': 48
      }
    ]
  },
  {
    'type': 'bus',
    'offers': [
      {
        'id': 1,
        'title': 'Order meal',
        'price': 191
      },
      {
        'id': 2,
        'title': 'Choose seats',
        'price': 94
      }
    ]
  },
  {
    'type': 'train',
    'offers': [
      {
        'id': 1,
        'title': 'Book a taxi at the arrival point',
        'price': 190
      }
    ]
  },
  {
    'type': 'flight',
    'offers': [
      {
        'id': 1,
        'title': 'Choose meal',
        'price': 135
      },
      {
        'id': 2,
        'title': 'Choose seats',
        'price': 57
      },
      {
        'id': 3,
        'title': 'Upgrade to comfort class',
        'price': 32
      },
      {
        'id': 4,
        'title': 'Upgrade to business class',
        'price': 48
      },
      {
        'id': 5,
        'title': 'Add luggage',
        'price': 162
      }
    ]
  },
  {
    'type': 'check-in',
    'offers': [
      {
        'id': 1,
        'title': 'Choose the time of check-in',
        'price': 166
      },
      {
        'id': 2,
        'title': 'Choose the time of check-out',
        'price': 158
      }
    ]
  },
  {
    'type': 'sightseeing',
    'offers': []
  },
  {
    'type': 'ship',
    'offers': [
      {
        'id': 1,
        'title': 'Upgrade to comfort class',
        'price': 183
      },
      {
        'id': 2,
        'title': 'Upgrade to business class',
        'price': 194
      }
    ]
  },
  {
    'type': 'drive',
    'offers': [
      {
        'id': 1,
        'title': 'With automatic transmission',
        'price': 137
      },
      {
        'id': 2,
        'title': 'With air conditioning',
        'price': 99
      }
    ]
  },
  {
    'type': 'restaurant',
    'offers': [
      {
        'id': 1,
        'title': 'Choose live music',
        'price': 200
      },
      {
        'id': 2,
        'title': 'Choose VIP area',
        'price': 127
      }
    ]
  }
];

function getOffersbyType(type) {
  for (const mock of mockOffers) {
    if (mock.type === type) {
      return mock.offers;
    }
  }
}

export {getOffersbyType};
