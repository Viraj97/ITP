function validateUpdate(){
    var UempId = document.getElementById('UempId');
    var UempName = document.getElementById('UempName');
    var UempNic = document.getElementById('Unic');
	var UempAge = document.getElementById('UempAge');
	var UempBirth = document.getElementById('UempBirth');
	var UempMob = document.getElementById('UempMob');
    var UempJd = document.getElementById('UempJd');
    var UempPos = document.getElementById('UempPos');
    var UempPass = document.getElementById('UempPass');
	var UgenderM = document.getElementById('UgenderM');
	var UgenderF = document.getElementById('UgenderF');
	var Upmarry = document.getElementById('Upmarry');
	var UpUnmarry = document.getElementById('UpUnmarry');
	
		
		if(UempId.value == '')
		{
			alert('Please enter employee ID');
			return false;
		}
		if(UempName.value == '')
		{
			alert('Please enter employee name');
			return false;
        }
        if(UempNic.value == '')
		{
			alert('Please enter employee NIC/Passport');
			return false;
		}
		if(UempAge.value == '')
		{
			alert('Please enter employee age');
			return false;
		}
		if(UempBirth.value == '')
		{
			alert('Please enter employee birth day');
			return false;
		}
		if(UempMob.value == '')
		{
			alert('Please enter employee mobile number');
			return false;
		}
		if(UempJd.value == '')
		{
			alert('Please enter employee joined date');
			return false;
        }
        if(UempPos.value == '')
		{
			alert('Please enter employee position');
			return false;
        }
        if(UempPass.value == '')
		{
			alert('Please enter employee password');
			return false;
		}
		if(UgenderM.checked == false && UgenderF.checked == false)
		{
			alert('Please choose employee gender');
			return false;
		}
		if(Upmarry.checked == false && UpUnmarry.checked == false)
		{
			alert('Please choose employee married status');
			return false;
		}
		
	
}