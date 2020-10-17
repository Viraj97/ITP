function validateUpdateShift(){
    var NIC = document.getElementById('NIC');
    var time = document.getElementById('time');
    var date = document.getElementById('date');
	//var section = document.getElementById('section');
	//var position = document.getElementById('position');
		
		
		if(NIC.value == '')
		{
			alert('Please enter employee ID');
			return false;
		}
		if(time.value == '')
		{
			alert('Please enter employee time');
			return false;
        }
        if(date.value == '')
		{
			alert('Please enter employee date');
			return false;
		}
		// if(section.value == '')
		// {
		// 	alert('Please enter employee age');
		// 	return false;
		// }
		// if(position.value == '')
		// {
		// 	alert('Please enter employee birth day');
		// 	return false;
		// }
		
		
	
}