
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxfC-U8kz1PjJuZx7U67b8E8li_NToUwGFFcErlcJua1Xd-dFfYvmfAQh4XiBHQbLAc/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")

        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "message sent successfully"
                setTimeout(function(){
                    msg.innerText = ""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })
      