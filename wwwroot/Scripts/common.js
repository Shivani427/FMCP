/* Start function to show warning message if user select a date which is sunday from calendar */
    function ShowWarningMessage(sender, args)
    {
        var selectedDate = new Date();
        var pickDayName='';
        
        selectedDate = sender.get_selectedDate();
        pickDayName = selectedDate.getDay();//pick day value name from selected date

        if(pickDayName=="0")
        {
            alert('Selected date is Sunday'); 
        }
    }
/* End function to show warning message if user select a date which is sunday from calendar */

/* Start function to show alert message if passing date is greater than current date */
function checkDateGreaterThanCurrentDate(passDateVal)
{
    if(passDateVal=='')
    {
      alert('Please Enter Date');
      return false;
    }
   
    
    if((passDateVal.length < 10)||(passDateVal.length > 10))
    {
      alert('Please Enter Date for 10 digit in correct format dd/mm/yyyy');
      return false;
    }
    
    var slash1=passDateVal.substring(2,3);//pick 1st slash from passing date
    var slash2=passDateVal.substring(5,6);//pick 2nd slash from passing date
    //alert(slash1 + ':' + slash2)
    
    if((slash1 != '/') || (slash2 != '/'))
    {
      alert('Please Enter Date for 10 digit in correct format dd/mm/yyyy');
      return false;
    }
    
    var passDateValArray=new Array();
    passDateValArray=(passDateVal.split("/"));
    var ddpass,mmpass,yyyypass
    ddpass=passDateValArray[0];
    mmpass=passDateValArray[1];
    yyyypass=passDateValArray[2];
    
    
    var today=new Date();
    var ddtoday,mmtoday,yyyytoday;
    ddtoday=today.getDate();
    mmtoday=today.getMonth() + 1;
    yyyytoday=today.getFullYear();
    if((today.getDate()>=1) && (today.getDate()<=9))
    {
        ddtoday ='0' + ddtoday;
    }
    if((today.getMonth()>=0) && (today.getMonth()<=8))
    {
        mmtoday ='0' + mmtoday;
    }
   
    
    if(yyyytoday == yyyypass)
    {
        if(mmtoday == mmpass)
        {
            if(ddtoday >= ddpass)
            {               
                return true;
            }
            else
            {
                alert('Entered Date Must be less than Current Date');
                return false;
            }
        }
        else 
        {
            if(mmtoday < mmpass)
            {
                alert('Entered Date Must be less than Current Date');
                return false; 
            }
        }
    }
    else
    {
        if(yyyytoday < yyyypass)
        {
            alert('Entered Date Must be less than Current Date');
            return false; 
        }
    }
    //return false;
}
/* End function to show alert message if passing date is greater than current date */

/* Start function to block user defined File upload extensions, otherwise show alert message if passing other restricted extensions */
function checkFileExtension(elem) 
{
    var filePath = elem.value;
    
    if(filePath.indexOf('.') == -1)
        return false;
    
    var validExtensions = new Array();
    var ext = filePath.substring(filePath.lastIndexOf('.') + 1).toLowerCase();
    
    validExtensions[0] = 'pdf';
//    validExtensions[0] = 'jpg';
//    validExtensions[1] = 'jpeg';
//    validExtensions[2] = 'bmp';
//    validExtensions[3] = 'png';
//    validExtensions[4] = 'gif';  
//    validExtensions[5] = 'tif';  
//    validExtensions[6] = 'tiff';
//    validExtensions[7] = 'txt';
//    validExtensions[8] = 'doc';
//    validExtensions[9] = 'xls';
//    validExtensions[10] = 'pdf';
    for(var i = 0; i < validExtensions.length; i++) {
        if(ext == validExtensions[i])
            return true;
    }
    alert('The file extension (' + ext.toUpperCase() + ') is not allowed. Only (PDF) Files can upload!');
    elem.value='';
    return false;
}
/* End function to block user defined File upload extensions, otherwise show alert message if passing other restricted extensions */