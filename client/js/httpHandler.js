import { setInterval } from "timers";

setInterval(
  function () {

    const serverUrl = 'http://127.0.0.1:3000';

    $.ajax({
      url: serverUrl,
      method: 'GET',
      success: function (result) {
        SwimTeam.move(result);
      }
    })
  }, 1000
);
