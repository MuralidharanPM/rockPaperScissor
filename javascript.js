function rollStart(callState) {
    let compuOpt;
    var randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum == 1) {
        compuOpt = "Rock"
    } else if (randomNum == 2) {
        compuOpt = "Paper"
    } else {
        compuOpt = "Scissor"
    }
    var loc = document.getElementById("resultLoc");
    if (loc ?? false) {
        loc.remove();
    }
    var newParagraph = document.createElement("p");
    newParagraph.id = "resultLoc";
    var textNode = "";
    let isFailureCase = false;
    if (compuOpt == "Rock" && callState == "Paper") {
        isFailureCase = true;
    } else if (compuOpt == "Paper" && callState == "Scissor") {
        isFailureCase = true;
    } else if (compuOpt == "Scissor" && callState == "Rock") {
        isFailureCase = true;
    }
    if (compuOpt == callState) {
        (newParagraph.classList).add("drawContCls");
        textNode = document.createTextNode("It is a Draw");
    } else {
        if (isFailureCase) {
            (newParagraph.classList).add("winContCls");
            textNode = document.createTextNode("You won this round");
        } else {
            (newParagraph.classList).add("lostContCls");
            if (randomNum == 1) {
                (newParagraph.classList).add("rockContCls");
            } else if (randomNum == 2) {
                (newParagraph.classList).add("paperContCls");
            } else {
                (newParagraph.classList).add("scissorContCls");
            }
            textNode = document.createTextNode("You lost this round to");
        }
    }
    newParagraph.appendChild(textNode);
    document.getElementById("resultSection").appendChild(newParagraph);
}