var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';
  var visits = customerData[firstName] ? customerData[firstName].visits : 0;

    switch(visits) {
      case 0:
        greeting = 'Welcome! Is this your first time?'
        break;
      case 1:
        greeting = 'Welcome back, ' + firstName + '! We\'re glad you liked us the first time!'
        break;
      default:
        greeting = 'Welcome back, ' + firstName + '! So glad to see you again!';
        break;
    }

  return greeting;
}

greetCustomer('Joe')
