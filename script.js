
function compute()
{
    var test=document.getElementById("principal").value;//Get the value of the principal from the html document
	
		if (test>0)//Check if the content of principal is positif
			{
				var principal = document.getElementById("principal").value;//Get the value of the principal from the html document
				var rate = document.getElementById("rate").value;//Get the value of the rate from the html document
				var years = document.getElementById("years").value;//Get the value of the number of years from the html document
				var interest=principal*years*rate/100;//Calculate the value of the interest
				var year=new Date().getFullYear()+parseInt(years);//Calculate the actual from the date of now
				document.getElementById("result").innerHTML="If you deposit " + "<span class='yellowcolor'>"+ principal+ "</span>,<br/>" +
				"at an interest rate of  " + "<span class='yellowcolor'>"+rate + "%</span>.<br/>" + "You will receive an amount of "+ "<span class='yellowcolor'>"+ interest +"</span>,<br/>" + "in the year  "+"<span class='yellowcolor'>"+ year+"</span>";
				//Injection of html code inside the tag with result ID
			}
		else//promt an error message
			{
				alert("Enter a positive number");
			}
}
function updateRate()//Update in real time the value of the interest rate
{
	var rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}       