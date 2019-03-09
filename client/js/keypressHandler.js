$('document').ready(function () {

  setInterval(
    function () {
      $.ajax({
        url: 'http://127.0.0.1:3000',
        type: 'GET',
        success: function (data) {
          SwimTeam.move(data);
        }
      })
    }, 1000
  );


  // $.get(
  //   '127.0.0.1:3000', function () {
  //     console.log('we in here!')
  //   }
  // );
  // $.ajax({
  //   url: '127.0.0.1:3000',
  //   type: 'GET'
  // }).done(function (data) {
  //   console.log('we in here!')
  //   SwimTeam.move(data);
  // });


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
