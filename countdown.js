function countdown()
{
    var countdown_div = document.getElementById("countdown_id");

    var current_date = new Date();
    var event_date = new Date("Nov 19 16:20:00 2014");
    var total_seconds = (event_date - current_date) / 1000;
    var day_text = "days";
    var hour_text = "hours";
    var minute_text = "minutes";
    var second_text = "seconds";
    var text_to_show ="Countdown till my birthday :";
    if (total_seconds < 0)
    {
	total_seconds = Math.abs(total_seconds);
    }
    if (total_seconds > 0)
    {
	var days = Math.floor(total_seconds / (60 * 60 * 24));
	var hours = Math.floor((total_seconds - (days * 60 * 60 * 24)) / (60 * 60));
	minutes = Math.floor((total_seconds - ((days * 60 * 60 * 24 + hours * 60 * 60))) / 60);
	secondes = Math.floor(total_seconds - ((days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60)));


	if (days == 1||days==0)
	{
	    day_text = 'day';
	}

	if (hours == 1||hours==0)
	{
	    hour_text = 'hour';
	}
	if (minutes == 1||minutes==0)
	{
	    minute_text = 'minute';
	}
	if (secondes == 1||secondes==0)
	{
	    second_text = 'second';
	}

	if(days==0)
	{
	    text_to_show = "That's today !";
	    hours=0;
	    minutes=0;
	    secondes=0;
	    day_text = 'day';
	    hour_text = 'hour';
	    minute_text = 'minute';
	    second_text = 'second';

	}    
	
	countdown_div.innerHTML = "<span style='font-size: 17px; color:white; text-align: center; margin: 1%;'>"+text_to_show+"</span><br><div class='date_countdown'><span style='font-size:25px;text-align: center;'>"+ days + "</span><br><span style='font-size:9px; text-align: center;'>"+day_text+"</span></div><div class='date_countdown'><span style='font-size:25px;text-align: center;'>" + hours + "</span><br><span style='font-size:9px; text-align: center;'>"+hour_text+"</span></div><div class='date_countdown'><span style='font-size:25px;text-align: center;'>" + minutes +"</span><br><span style='font-size:9px; text-align: center;'>"+minute_text+"</span></div><div class='date_countdown'><span style='font-size:25px;text-align: center;'>" + secondes +"</span><br><span style='font-size:9px; text-align: center;'>"+second_text+"</span></div>";
    }
    else
    {
	    text_to_show = "The event is now behind us";
	    hours=0;
	    minutes=0;
	    secondes=0;

	    day_text = 'day';
	    hour_text = 'hour';
	    minute_text = 'minute';
	    second_text = 'second';


	countdown_div.innerHTML = "<span style='font-size: 17px; color:white; text-align: center; margin: 1%;'>"+text_to_show+"</span><br><div class='date_countdown'><span style='font-size:25px;text-align: center;'>"+ days + "</span><br><span style='font-size:9px; text-align: center;'>"+day_text+"</span></div><div class='date_countdown'><span style='font-size:25px;text-align: center;'>" + hours + "</span><br><span style='font-size:9px; text-align: center;'>"+hour_text+"</span></div><div class='date_countdown'><span style='font-size:25px;text-align: center;'>" + minutes +"</span><br><span style='font-size:9px; text-align: center;'>"+minute_text+"</span></div><div class='date_countdown'><span style='font-size:25px;text-align: center;'>" + secondes +"</span><br><span style='font-size:9px; text-align: center;'>"+second_text+"</span></div>";
    }

    var refreshing = setTimeout("countdown();", 1000);
}