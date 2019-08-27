function validate(){
    var id = document.getElementById('id');
	var model = document.getElementById('model');
	var license = document.getElementById('license');
	var passengers = document.getElementById('passengers');
	var year = document.getElementById('year');
	var colour = document.getElementById('colour');
	
		
		if(id.value == '')
		{
			alert('Please enter vehicle ID');
			return false;
		}
		if(model.value == '')
		{
			alert('Please enter vehicle model');
			return false;
		}
		if(license.value == '')
		{
			alert('Please enter license no');
			return false;
		}
		if(passengers.value == '')
		{
			alert('Please enter no of passengers');
			return false;
		}
		if(year.value == '')
		{
			alert('Please enter manufactured year');
			return false;
		}
		if(colour.value == '')
		{
			alert('Please enter vehicle colour');
			return false;
		}
	
		
	
}