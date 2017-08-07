function transformEmployeeData(array) {
  var newArr = [];
  var employeeData = {};

  for (var i = 0; i < array.length; i++) {
    employeeData = {};
    for (var j = 0; j < array[i].length; j++) {
      employeeData[array[i][j][0]] = array[i][j][1];
    }
    newArr.push(employeeData);
  }

  return newArr;
}

var arr = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];
transformEmployeeData(arr);