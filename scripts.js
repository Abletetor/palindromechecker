// select the html element
const inputText                           = document.getElementById("input-text");
const palindromeCheckbtn     = document.getElementById("check-btn");
const palindromeResultDiv     = document.getElementById("result");

// A function to check for a palindrome
const checkForPalindrome = (input) => {
      const originalInput = input; //for later use

      // check if the input entered is an empty string
      if (input === "") {
            alert("Please enter a value");
            return;
      };
      palindromeResultDiv.replaceChildren();  //remove previous results

      // convert the input into a lowercase string
      const lowercaseStr = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
      let resultMsg = `<strong>${originalInput}</strong> ${lowercaseStr === [...lowercaseStr].reverse().join('') ? "is" : "is not"} a palindrome.`;

      //create a paragraph element
      const pElement = document.createElement("p");
      pElement.className = "user-input"; //give class name
      pElement.innerHTML = resultMsg; //assign resultmsg to it
      palindromeResultDiv.appendChild(pElement); //add the result palindrome-div element

      palindromeResultDiv.classList.remove("hidden");  //remove the hidden class
}

// add event listener the check  button
palindromeCheckbtn.addEventListener("click", () => {
      checkForPalindrome(inputText.value);
      inputText.value = "";
});

//add event listener to input text field to listern for keyboard event
inputText.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
            checkForPalindrome(inputText.value);
            inputText.value = "";
      };
});

//get the footer year
document.querySelector(".year").textContent = new Date().getFullYear();