(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //
  const ajaxFetch= () => {
    console.log("in ajax request")
    $.ajax({
      type: 'GET',
      url: serverUrl,
      // cache: false,
      // contentType: false,
      // processData: false,
      success: (data) => {
        // reload the page
          // var directions = ['left', 'right', 'up', 'down']
          // var randomDirection = directions[Math.floor(Math.random() * directions.length)]
          SwimTeam.move(data)
          console.log(data)
          console.log("GET success")
      },
      error: (data) => {
        console.error('error ')
      }
    });
    
  };

  //  setInterval(function(){ajaxFetch()}, 1000)

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUpload = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: 'http://127.0.0.1:3000',
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
