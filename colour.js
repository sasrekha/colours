let makeColorBox = () => {
  // Generate a random number between 0 and 20.
      let colorRando = Math.round(Math.random() * 20)
      const container = document.querySelector("#color-box-container")
  // Fetch a colour from the reqres API, with that number as the color page id:
      let url = "https://reqres.in/api/color/" + colorRando
      fetch(url)
          .then(response => {
  // If the fetch request fails, add a grey box to the HTML. Console log a warning.
              if (response.status === 404) {
                  container.insertAdjacentHTML("afterbegin", "<div class = \"color-box\" style = \"background-color:gray;\" ><p>Fetch failed.</p><h3>#808080</h3><p>(default colour)</p></div>")
                  //throw response
                  throw "This color page does not exist!"
              }
  // If the request succeeds, put a box into the HTML with a background of that color.
              return (response.json())
          }).then((colorData) => {
          let color = colorData.data.color
          console.log(color)
          container.insertAdjacentHTML("afterbegin", "<div class = \"color-box\" style = \"background-color:" + color + ";\" ><p>Fetch successful!</p><h3>" + color + "</h3></div>")
      }).catch((error) => {
          console.warn(error)
      })
  }
  
  // Make a button that will run this again, adding each box to the html.
  const fetchColorBtn = document.querySelector("#make-colorbox");
  fetchColorBtn.addEventListener("click", () => {
      makeColorBox();
  })
  