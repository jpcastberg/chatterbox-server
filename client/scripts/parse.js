var Parse = {

  // server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function(message, successCB, errorCB = null) {

    $.ajax({
      url: 'http://localhost:3000/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error, textStatus, errorThrown) {
        console.error(textStatus, errorThrown);
        console.error('chatterbox: Failed to create message', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: 'http://localhost:3000/classes/messages',
      type: 'GET',
      //      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};