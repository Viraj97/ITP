function validateWork(){
    var WId = document.getElementById('WId');
    var WDate = document.getElementById('WDate');
    var WTime = document.getElementById('WTime');
	var Ftime = document.getElementById('Ftime');
    var Htime = document.getElementById('Htime');
    var Otime = document.getElementById('Otime');
	
		
		if(WId.value == '')
		{
			alert('Please enter employee ID');
			return false;
		}
		if(WDate.value == '')
		{
			alert('Please enter the date');
			return false;
        }
        if(WTime.value == '')
		{
			alert('Please enter employee working time');
			return false;
		}
	
		if(Ftime.checked == false && Htime.checked == false && Otime.checked == false)
		{
			alert('Please choose employee working time status');
			return false;
		}
		
	
}