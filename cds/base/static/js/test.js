require(["jquery"], function (text){
	if (status == "less") 
      {
        document.getElementById("textArea").innerHTML=text;
        document.getElementById("toggleButton").innerText = "(see less)";
        status = "more";
        } 
        else if (status == "more") 
        {
          document.getElementById("textArea").innerHTML = "";
          document.getElementById("toggleButton").innerText = "(see more)";
          status = "less"
        }
})
