setInterval(
  function () {
    $.ajax({
      url: 'http://127.0.0.1:3000',
      type: 'GET',
      success: function (data) {
        SwimTeam.move(data);
      }
    })
  }, 200
);





