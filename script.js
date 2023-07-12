const myButton = document.getElementById("changepic");
    let myImage = document.getElementById("smailimage");

    function ChangebtnTxT(){
      if(myButton.textContent === "Tap for another image of me!"){
            myButton.textContent =  "Tap for previous image!     "
      }
      else{                   
        myButton.textContent = "Tap for another image of me!"
      }

    function changeImg() {
      const mySrc = myImage.getAttribute("src");

      if (mySrc === "images/smailpic.jpg") {
        myImage.setAttribute("src", "images/smailpic2.jpg");
      } else {
        myImage.setAttribute("src", "images/smailpic.jpg");
      }
    }

    myButton.addEventListener("click", changeImg);
    myButton.addEventListener("click", ChangebtnTxT);



    



  
