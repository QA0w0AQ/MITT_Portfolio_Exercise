$(document).ready(function () {

    $("#btnmath").click(function () {
        var num1 = Number($("#input1").val());
        var num2 = Number($("#input2").val());
        var num3 = Number($("#input3").val());
        var num4 = Number($("#input4").val());
        var num5 = Number($("#input5").val());

        //do math functions
        var sum = num1 + num2 + num3 + num4 + num5;
        var average = sum / 5;
        var product = num1 * num2 * num3 * num4 * num5;
        var smallest = Math.min(num1, num2, num3, num4, num5);
        var largest = Math.max(num1, num2, num3, num4, num5);

        //display data
        $("#sum").text(`The sum of the numbers is: ${sum}`);
        $("#average").text(`The average of the numbers is: ${average}`);
        $("#product").text("The product of the numbers is: " + product);
        $("#smallest").text("The smallest number is: " + smallest);
        $("#largest").text("The largest  number is: " + largest);
    });

    $("#btnpa").click(function () {
        var InputContent = String($("#pal").val())
        var result = InputContent.split('').reverse().join('');

        if (InputContent == result) {
            $("#paout").text("The world is Palindrome!");
        }
        else {
            $("#paout").text("The world is  not Palindrome!");
        }
    });

    $("#btnfb").click(function () {
        var num1 = Number($("#fbnum1").val());
        var num2 = Number($("#fbnum2").val());
        var number = [];
       
        for (var i = 1; i <= 100; i++) {            
            if (i % num1 == 0 && i % num2 == 0) {
                number.push("FizzBuzz")
            } else if (i % num1 == 0) {
                number.push("Fizz")
            } else if (i % num2 == 0) {
                number.push("Buzz")
            } else {
                number.push(i)
            }
        }
        var output = number.join(', ');
        $("#fbout").text(output);
    });

    $("#btnfa").click(function () {
        var num = Number($("#fanum").val());
        var result = num;
        for (var i = num - 1; i >= 1; i--) {
            result = result * i;
            }
        $("#faout").text(`The number's factorial is ${result}`);
    });

    $("#Showh").hide();
    $("#Showh1").hide();
    $("#Showh2").hide();
    $("#Showh3").hide();
    
    $("#btnCode").click(function () {
        $("#Showh").toggle();
    });
    $("#btnCode1").click(function () {
        $("#Showh1").toggle();
    });
    $("#btnCode2").click(function () {
        $("#Showh2").toggle();
    });
    $("#btnCode3").click(function () {
        $("#Showh3").toggle();
    });
})