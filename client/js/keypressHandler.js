$('document').ready(function () {
  // $.get(
  //   '127.0.0.1:3000', function () {
  //     console.log('we in here!')
  //   }
  // );

  console.log('reaaaddy!!!!!!');

  // $.ajax({
  //   url: '127.0.0.1:3000',
  //   type: 'GET'
  // }).done(function (data) {
  //   console.log('we in here!')
  //   SwimTeam.move(data);
  // });

  $.ajax({
    url: '127.0.0.1:3000',
    type: 'GET',
    success: function () {
      console.log('we in here!')
    }
  });



});

$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});


// module.exports.handleRandomKey = (key) => {
//   SwimTeam.move(key.toLowerCase())
// }

console.log('Client is running in the browser!');
