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


    $("#btnfb").click(function () {
        var num1 = Number($("#fbnum1").val());
        var num2 = Number($("#fbnum2").val());
        var number = [];
        //Step 2: Perform the algorithm
        for (var loop = 1; loop <= 100; loop++) {
            //Here is where we determine whether to print Fizz, Buzzz, FizzBuzz or the loop counter
            if (loop % num1 == 0 && loop % num2 == 0) {
                //$("#fbout").text("FizzBuzz");
                number.push("FizzBuzz")
            } else if (loop % num1 == 0) {
                //$("#fbout").text("Fizz");
                number.push("Fizz")
            } else if (loop % num2 == 0) {
                //$("#fbout").text("Buzz");
                number.push("Buzz")
            } else {
                //$("#fbout").text(loop);
                number.push(loop)
            }
        }

        //Step 3: Output the result
        var output = number.join(', ');
        $("#fbout").text(output);
    });

    $("#btnfa").click(function () {
        debugger;
        var num = Number($("#fanum").val());
        var result = num;
        for (var i = num - 1; i >= 1; i--) {
            result = result * i;
            }
        $("#faout").text(`The number's factorial is ${result}`);
    });

    $("#Showh").hide();
    
    $("#btnCode").click(function () {
        $("#Showh").toggle();
    });
})