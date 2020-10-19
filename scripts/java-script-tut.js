
function SetUpEvents() {
    
    //#region These are Variables (like int, strings,...)
    var testVariable = "Hello";
    var testNumberVariable = 10;
    var testBooleanVariable = true;
    //#endregion

    //Write at the Console
    console.log(testVariable);

    //#region An If Statement with a boolean and an else
    if (testBooleanVariable == true) {
        console.log("Its True");
    }
    else {
        console.log("Ohh it was False sry");
    }
    //#endregion

    //#region An If Statement with an else If Statement
    if (testNumberVariable > 10) {
        console.log("The Variable is greater than 10 yeah!");
    }
    else if (testNumberVariable <= 10) {
        console.log("The Variable is lower or equal 10. Sry you are not one of the cool Kids!");
    }
    //#endregion

    //#region An If Statements with Logical Operators (&&,||,...)
    if (testNumberVariable >= 10 && testBooleanVariable == true) {
        console.log("Both are true!");
    }
    if (testNumberVariable > 10 || testBooleanVariable == true) {
        console.log("!" + testNumberVariable + "!" + " Only one of your Variables is true but its ok");
    }
    //#endregion

    //#region Loops (while,...)
    while (testBooleanVariable) {
        console.log("This is a While loop!");
        if (testNumberVariable < 14) {
            testNumberVariable++;
        }
        else if (testNumberVariable == 14) {
            testBooleanVariable = false;
        }
    }
    //Reset the Variables
    testNumberVariable = 10;
    testBooleanVariable = true;

    //It is searching for all paragraphs in index.html
    var links = document.getElementsByTagName("p");
    for (var index = 0; index < links.length; index++) {
        console.log("This is the " + (index + 1) + ". For loop!");
    }
    //#endregion

    //#region First Function
    function GetAverage(a, b) {
        return a = (a + b) / 2;
    }
    var average = GetAverage(12, 5);
    console.log(average);
    //#endregion

    //#region NaN (Not a Number)
    var a = "asd";
    if (isNaN(a)) {
        console.log(a + " is a NaN");
    }
    else {
        console.log(a + " is not a NaN");
    }

    //#endregion

    //#region Events
    var title = document.getElementById("page-title");
    var cookie = 0;
    title.onclick = function MyOnClick() {
        cookie++;
        alert("You clicked me :>. Here is your " + cookie + ". Cookie!");
    };

    var paragraph = document.getElementById("paragraph");
    var hover = 0;
    title.onmouseover = function HoverMouse() {
        hover++;
        paragraph.textContent = ("You hovered over me " + hover + ". times :)");
    };
    //#endregion

    //#region Show More OnClick Event
    var content = document.getElementById("content");
    var button = document.getElementById("show-more");

    button.onclick = function () {

        if (content.className == "open") {
            content.className = "";
            button.textContent = "Show More";
        }
        else {
            content.className = "open";
            button.textContent = "Show Less";
        }

    };
//#endregion

    //This is a Pop-up Window
    alert("Welcome to my first JavaScript Project!");
}

//#region Window onLoad Event
window.onload = function () {
    SetUpEvents();
}
//#endregion

