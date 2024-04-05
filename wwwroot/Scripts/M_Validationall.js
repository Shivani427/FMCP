// JScript File
/* Function use to validate this form's control's value */
function CheckforAddDetails()
{  

//var strErrorinDataSubmiting='Submission failed: ';
  var strErrorinDataValidating='Error in Data Entry: ';
    var strDoubleNextLine = ' \n\n';
    var ShowAllMessageForApplicantDetail = "Please correct the following entries:";
    var strSingleNextLine = ' \n';
    
    var strrdblApplicantCategory='';
    var strrdblApplicantCategory1='0';
    
    var strlstBusiActTypeIndividual='';
    var strlstBusiActTypeIndividual1='0';
    
    var strddl_ApplicantTitle='';
    var strddl_ApplicantTitle1='0';
    
    var strtxt_ApplicantFirstname='';
    var strtxt_ApplicantFirstname1='0';
    
    var strddl_ApplicantFTitle='';
    var strddl_ApplicantFTitle1='0';
    
    var strtxt_ApplicantFFirstname='';
    var strtxt_ApplicantFFirstname1='0';
    
    var strtxt_ApplicantDob='';
    var strtxt_ApplicantDob1='0';
    
    var strtxt_ApplicantEmail='';
    var strtxt_ApplicantEmail1='0';
    
    var strrdbPositionInMine='';
    var strrdbPositionInMine1='0';
    
    var strtxt_ApplicantAddress1='';
    var strtxt_ApplicantAddress11='0';
    
    var strddl_ApplicantState='';
    var strddl_ApplicantState1='0';
    
    var strddl_ApplicantDistrict='';
    var strddl_ApplicantDistrict1='0';
    
    var strtxt_ApplicantPin='';
    var strtxt_ApplicantPin1='0';
    
        
    var strtxt_OfficePhoneCode='';
    var strtxt_OfficePhoneCode1='0';    
    var strtxt_OfficePhoneNum='';
    var strtxt_OfficePhoneNum1='0';
    
    var panvalue='';
    var panvalue1='';
    var panval='';   
    
    var emailvalue='';
    var emailvalue1='';
    var email='';
    
    var strVoterPassportDriving='';
    var strVoterPassportDriving1='0';
    
    
    var voteridvalue='';
    var voteridvalue1='';
    var voteridval='';
    
    var passportvalue='';
    var passportvalue1='';
    var passportval='';
    
    var strIecode='';
    var strIecode1='0';
    
    var strtxt_Firm_CompRegisNo='';
    var strtxt_Firm_CompRegisNo1='0';
    var strddl_Firm_CompRegisState='';
    var strddl_Firm_CompRegisState1='0';
    var strtxt_Firm_CompRegisDate='';
    var strtxt_Firm_CompRegisDate1='0';
    
    var strtxt_Capta='';
    var strtxt_Capta1='';
    var arrow='--> ';
    var concatAll='';
      
var browserName=navigator.appName;
//alert(browserName);


if(browserName=="Netscape") 
{    
        if((document.getElementsByName('rdblApplicantCategory')[0].checked != true)&& (document.getElementsByName('rdblApplicantCategory')[1].checked != true)&&(document.getElementsByName('rdblApplicantCategory')[2].checked != true)&&(document.getElementsByName('rdblApplicantCategory')[3].checked!=true))
        {
           strrdblApplicantCategory =arrow + 'Please select applicant category\n';
           strrdblApplicantCategory1='1';
        } 
        else
        {
           if(document.getElementsByName('rdblApplicantCategory')[0].checked == true)
           {          
           
              if((document.getElementById('lstBusiActTypeIndividual').value=='')||(document.getElementById('lstBusiActTypeIndividual').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
           
               if(document.getElementById('ddl_ApplicantTitle').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                }
               
                if(document.getElementById('txt_ApplicantFirstname').value=='')
                {
                strtxt_ApplicantFirstname=arrow + 'Please enter first name\n';
                strtxt_ApplicantFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                
                if(document.getElementById('ddl_ApplicantFTitle').value=='--Title--')
                {  
                strddl_ApplicantFTitle=arrow + 'Please select father title\n';
                strddl_ApplicantFTitle1='1';
                }
               
                if(document.getElementById('txt_ApplicantFFirstname').value=='')
                {
                strtxt_ApplicantFFirstname=arrow + 'Please enter father first name\n';
                strtxt_ApplicantFFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                
                if(document.getElementById('txt_ApplicantDob').value=='')
                {
                strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                strtxt_ApplicantDob1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_ApplicantDob').value!='')
                {
                  var result=isDate(document.getElementById('txt_ApplicantDob').value);
                  if(result<0)
                  {
                  strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                  strtxt_ApplicantDob1='1';
                  }
                  else if(result>1)
                  {
                  strtxt_ApplicantDob=arrow + 'date of birth date must be less than or equal to Today date \n';
                  strtxt_ApplicantDob1='1';
                  }
                }                
                                               
                if((document.getElementsByName('rdbPositionInMine')[0].checked!=true) && (document.getElementsByName('rdbPositionInMine')[1].checked!=true) && (document.getElementsByName('rdbPositionInMine')[2].checked!=true) && (document.getElementsByName('rdbPositionInMine')[3].checked!=true))
                {
                strrdbPositionInMine=arrow + 'Please select position in mine\n';
                strrdbPositionInMine1='1';
                }
                if(document.getElementById('txt_ApplicantAddress1').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_ApplicantState').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_ApplicantDistrict').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_ApplicantDistrict').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }                  
                
                if(document.getElementById('txt_ApplicantPin').value=='')
                {
                strtxt_ApplicantPin=arrow + 'Please enter pincode\n';
                strtxt_ApplicantPin1='1';
                }
                
                if(document.getElementById('txt_ApplicantEmail').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_ApplicantEmail').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_ApplicantEmail').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }
                
                if(document.getElementById('txt_OfficePhoneCode').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OfficePhoneNum').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                
                if(document.getElementById('txt_ApplicantPan').value=='')
                {
                panvalue=arrow + 'Please enter PAN number\n';
                panvalue1='1';   
                }
                
                if(document.getElementById('txt_ApplicantPan').value!='')
                {   
                var pan=ValidationPan(document.getElementById('txt_ApplicantPan').value);   
                if(pan<=0)
                {
                panvalue=arrow + 'Invalid PAN number\n';   
                panvalue1='1';
                }
                }
                
                if((document.getElementById('txt_VoterID').value=='') && (document.getElementById('txt_ApplicantPassportNo').value=='') && (document.getElementById('txt_ApplicantDrivingNo').value==''))
                {
                strVoterPassportDriving=arrow + 'Please enter either one(VoterID/Passport/Driving Licence) or all\n';
                strVoterPassportDriving1='1';
                }
                
                if(document.getElementById('txt_VoterID').value!='')
                {   
                var voterid=ValidationVoterID(document.getElementById('txt_VoterID').value);   
                if(voterid<=0)
                {
                voteridvalue=arrow + 'Invalid VoterID number\n';   
                voteridvalue1='1';
                }
                }              
                
                if(document.getElementById('txt_ApplicantPassportNo').value!='')
                {   
                var passport=ValidationPassport(document.getElementById('txt_ApplicantPassportNo').value);   
                if(passport<=0)
                {
                passportvalue=arrow + 'Invalid Passport number\n';   
                passportvalue1='1';
                }
                }                
                if(document.getElementById('txt_Iecode').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }
                   
//                if(document.getElementById('txt_Capta').value=='')
//                {
//                strtxt_Capta=arrow + 'Please enter code\n';
//                strtxt_Capta1='1';
//                }
           }
            
           else if(document.getElementsByName('rdblApplicantCategory')[1].checked == true)
            {
            
                if((document.getElementById('lstBusiActTypeAssociate').value=='')||(document.getElementById('lstBusiActTypeAssociate').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
                    
                if(document.getElementById('ddl_TitleAssociate').value=='--Title--')
                {  
                    strddl_ApplicantTitle=arrow + 'Please select title\n';
                    strddl_ApplicantTitle1='1';
                
                    if(document.getElementById('txt_FNameAssociate').value=='')
                    {
                    strtxt_ApplicantFirstname=arrow + 'Please enter first name\n';
                    strtxt_ApplicantFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    } 
                    
                    if(document.getElementById('ddl_FTitleAssociate').value=='--Title--')
                    {  
                    strddl_ApplicantFTitle=arrow + 'Please select father title\n';
                    strddl_ApplicantFTitle1='1';
                    }
                   
                    if(document.getElementById('txt_FFirstnameAssociate').value=='')
                    {
                    strtxt_ApplicantFFirstname=arrow + 'Please enter father first name\n';
                    strtxt_ApplicantFFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    
                    if(document.getElementById('txt_DobAssociate').value=='')
                    {
                    strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                    strtxt_ApplicantDob1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    else if(document.getElementById('txt_DobAssociate').value!='')
                    {
                      var result=isDate(document.getElementById('txt_DobAssociate').value);
                      if(result<0)
                      {
                      strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                      strtxt_ApplicantDob1='1';
                      }
                      else if(result>1)
                      {
                      strtxt_ApplicantDob=arrow + 'date of birth date must be less than or equal to Today date \n';
                      strtxt_ApplicantDob1='1';
                      }
                    }                
                 }              
                 else if(document.getElementById('ddl_TitleAssociate').value=='M/S')
                 {
                 
                    if(document.getElementById('txt_FNameAssociate').value=='')
                    {
                    strtxt_ApplicantFirstname=arrow + 'Please enter name\n';
                    strtxt_ApplicantFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    strddl_ApplicantFTitle='';

                    strddl_ApplicantFTitle1='0';

                    strtxt_ApplicantFFirstname='';

                    strtxt_ApplicantFFirstname1='0';

                    strtxt_ApplicantDob='';
                    strtxt_ApplicantDob1='0';
                 
                 }
                 else                 
                 {
                    strddl_ApplicantTitle='';
                    strddl_ApplicantTitle1='0';
                
                    if(document.getElementById('txt_FNameAssociate').value=='')
                    {
                    strtxt_ApplicantFirstname=arrow + 'Please enter first name\n';
                    strtxt_ApplicantFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    } 
                    
                    if(document.getElementById('ddl_FTitleAssociate').value=='--Title--')
                    {  
                    strddl_ApplicantFTitle=arrow + 'Please select father title\n';
                    strddl_ApplicantFTitle1='1';
                    }
                   
                    if(document.getElementById('txt_FFirstnameAssociate').value=='')
                    {
                    strtxt_ApplicantFFirstname=arrow + 'Please enter father first name\n';
                    strtxt_ApplicantFFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    
                    if(document.getElementById('txt_DobAssociate').value=='')
                    {
                    strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                    strtxt_ApplicantDob1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    else if(document.getElementById('txt_DobAssociate').value!='')
                    {
                      var result=isDate(document.getElementById('txt_DobAssociate').value);
                      if(result<0)
                      {
                      strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                      strtxt_ApplicantDob1='1';
                      }
                      else if(result>1)
                      {
                      strtxt_ApplicantDob=arrow + 'date of birth date must be less than or equal to Today date \n';
                      strtxt_ApplicantDob1='1';
                      }
                    }                
                 }                     
                
                if(document.getElementById('txt_Address1Associate').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_StateAssociate').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_DistrictAssociate').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_DistrictAssociate').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }                  
                
                if(document.getElementById('txt_PincodeAssociate').value=='')
                {
                strtxt_ApplicantPin=arrow + 'Please enter pincode\n';
                strtxt_ApplicantPin1='1';
                }
                
                if(document.getElementById('txt_EmailAssociate').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_EmailAssociate').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_EmailAssociate').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }   
                  
                if(document.getElementById('txt_OPhoneCodeAssociate').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OPhoneNumAssociate').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                
                if(document.getElementById('txt_PanAssociate').value=='')
                {
                panvalue=arrow + 'Please enter PAN number\n';
                panvalue1='1';   
                }
                
                if(document.getElementById('txt_PanAssociate').value!='')
                {   
                var pan=ValidationPan(document.getElementById('txt_PanAssociate').value);   
                if(pan<=0)
                {
                panvalue=arrow + 'Invalid PAN number\n';   
                panvalue1='1';
                }
                }
                if(document.getElementById('txt_IecodeAssociate').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }
                                                    
//                if(document.getElementById('txt_CaptaAssociate').value=='')
//                {
//                strtxt_Capta=arrow + 'Please enter code\n';
//                strtxt_Capta1='1';
//                }
            }
            
            
            else if(document.getElementsByName('rdblApplicantCategory')[2].checked == true)
            {
  
                if((document.getElementById('lstBusiActTypeFirm').value=='')||(document.getElementById('lstBusiActTypeFirm').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
                    
                if(document.getElementById('ddl_TitleFirm').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                }
               
                if(document.getElementById('txt_FNameFirm').value=='')
                {
                strtxt_ApplicantFirstname=arrow + 'Please enter name\n';
                strtxt_ApplicantFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }               
                
                if(document.getElementById('txt_Address1Firm').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_StateFirm').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_DistrictFirm').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_DistrictFirm').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                
                if(document.getElementById('txt_PincodeFirm').value=='')
                {
                strtxt_ApplicantPin=arrow + 'Please enter pincode\n';
                strtxt_ApplicantPin1='1';
                }
                
                if(document.getElementById('txt_EmailFirm').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_EmailFirm').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_EmailFirm').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }    
                    
                if(document.getElementById('txt_OPhoneCodeFirm').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OPhoneNumFirm').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_FirmRegisNo').value=='')
                {
                strtxt_Firm_CompRegisNo=arrow + 'Please enter registration number\n';
                strtxt_Firm_CompRegisNo1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                                
                
                if((document.getElementById('ddl_FirmRegisState').value=='') || (document.getElementById('ddl_FirmRegisState').value=='--Select State--'))
                {
                strddl_Firm_CompRegisState=arrow + 'Please select registration state\n';
                strddl_Firm_CompRegisState1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_FirmRegisDate').value=='')
                {
                strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                strtxt_Firm_CompRegisDate1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                else if(document.getElementById('txt_FirmRegisDate').value!='')
                {
                  var result=isDate(document.getElementById('txt_FirmRegisDate').value);
                  if(result<0)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                  else if(result>1)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'date of registration must be less than or equal to Today date \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                }
                if(document.getElementById('txt_IecodeFirm').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }  
                                                    
//                if(document.getElementById('txt_CaptaFirm').value=='')
//                {
//                strtxt_Capta=arrow + 'Please enter code\n';
//                strtxt_Capta1='1';
//                }
            }   
            
            else if(document.getElementsByName('rdblApplicantCategory')[3].checked == true)
            {
            
                if((document.getElementById('lstBusiActTypeCompany').value=='')||(document.getElementById('lstBusiActTypeCompany').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
                    
                if(document.getElementById('ddl_TitleCompany').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                }
               
                if(document.getElementById('txt_FNameCompany').value=='')
                {
                strtxt_ApplicantFirstname=arrow + 'Please enter name\n';
                strtxt_ApplicantFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }               
                
                if(document.getElementById('txt_Address1Company').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_StateCompany').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_DistrictCompany').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_DistrictCompany').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                
                if(document.getElementById('txt_PincodeCompany').value=='')
                {
                strtxt_ApplicantPin=arrow + 'Please enter pincode\n';
                strtxt_ApplicantPin1='1';
                }
                
                if(document.getElementById('txt_EmailCompany').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_EmailCompany').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_EmailCompany').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }
                    
                if(document.getElementById('txt_OPhoneCodeCompany').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OPhoneNumCompany').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_CompanyRegisNo').value=='')
                {
                strtxt_Firm_CompRegisNo=arrow + 'Please enter registration number\n';
                strtxt_Firm_CompRegisNo1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                    
                if((document.getElementById('ddl_CompanyRegisState').value=='') || (document.getElementById('ddl_CompanyRegisState').value=='--Select State--'))
                {
                strddl_Firm_CompRegisState=arrow + 'Please select registration state\n';
                strddl_Firm_CompRegisState1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_CompanyRegisDate').value=='')
                {
                strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                strtxt_Firm_CompRegisDate1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                else if(document.getElementById('txt_CompanyRegisDate').value!='')
                {
                  var result=isDate(document.getElementById('txt_CompanyRegisDate').value);
                  if(result<0)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                  else if(result>1)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'date of registration must be less than or equal to Today date \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                }
                if(document.getElementById('txt_IecodeCompany').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }  
                                                    
//                if(document.getElementById('txt_CaptaCompany').value=='')
//                {
//                strtxt_Capta=arrow + 'Please enter code\n';
//                strtxt_Capta1='1';
//                }
            }   
        }

        concatAll=strrdblApplicantCategory+strlstBusiActTypeIndividual+strddl_ApplicantTitle+strtxt_ApplicantFirstname+strddl_ApplicantFTitle+strtxt_ApplicantFFirstname+strtxt_ApplicantDob+strrdbPositionInMine+strtxt_ApplicantAddress1+strddl_ApplicantState+strddl_ApplicantDistrict+strtxt_ApplicantPin+emailvalue+strtxt_OfficePhoneCode+strtxt_OfficePhoneNum+panvalue+strVoterPassportDriving+voteridvalue+passportvalue+strtxt_Firm_CompRegisNo+strddl_Firm_CompRegisState+strtxt_Firm_CompRegisDate+strIecode;
    
        if(concatAll.length > 0)
        {
            alert(strErrorinDataValidating+strDoubleNextLine+ShowAllMessageForApplicantDetail+strSingleNextLine+concatAll);
            
            if(document.getElementsByName('rdblApplicantCategory')[0].checked == true)
            {
//                if(strtxt_Capta1=='1')
//                {
//                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
//                document.getElementById('txt_Capta').focus();
//                }
                if(strIecode1=='1')
                {
                document.getElementById('txt_Iecode').focus();
                }
                if(passportvalue1=='1')
                {
                document.getElementById('txt_ApplicantPassportNo').focus();                
                }
                
                if(voteridvalue1=='1')
                {
                document.getElementById('txt_VoterID').focus();                
                }
                if(strVoterPassportDriving1=='1')
                {                
                document.getElementById('txt_VoterID').focus();                
                }
                
                if(panvalue1=='1')
                {
                document.getElementById('txt_ApplicantPan').focus();
                }
                
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OfficePhoneNum').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OfficePhoneCode').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_ApplicantEmail').focus();
                }
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_ApplicantPin').focus();
                }
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_ApplicantDistrict').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_ApplicantState').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_ApplicantAddress1').focus();
                }
                if(strrdbPositionInMine1=='1')
                {
                document.getElementById('rdbPositionInMine').focus();
                }                
                
                if(strtxt_ApplicantDob1=='1')
                {
                document.getElementById('txt_ApplicantDob').focus();
                }
                if(strtxt_ApplicantFFirstname1=='1')
                {
                document.getElementById('txt_ApplicantFFirstname').focus();
                }
                if(strddl_ApplicantFTitle1=='1')
                {
                document.getElementById('ddl_ApplicantFTitle').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_ApplicantFirstname').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_ApplicantTitle').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeIndividual').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }
            return false;
            }
            
            else if(document.getElementsByName('rdblApplicantCategory')[1].checked == true)
            {
//                if(strtxt_Capta1=='1')
//                {
//                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
//                document.getElementById('txt_CaptaAssociate').focus();
//                }     
               
               if(strIecode1=='1')
               {
               document.getElementById('txt_IecodeAssociate').focus();
               }
                if(panvalue1=='1')
                {
                document.getElementById('txt_PanAssociate').focus();
                } 
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OPhoneNumAssociate').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OPhoneCodeAssociate').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_EmailAssociate').focus();
                }
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_PincodeAssociate').focus();
                }
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_DistrictAssociate').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_StateAssociate').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_Address1Associate').focus();
                }                
                
                if(strtxt_ApplicantDob1=='1')
                {
                document.getElementById('txt_DobAssociate').focus();
                }
                if(strtxt_ApplicantFFirstname1=='1')
                {
                document.getElementById('txt_FFirstnameAssociate').focus();
                }
                if(strddl_ApplicantFTitle1=='1')
                {
                document.getElementById('ddl_FTitleAssociate').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_FNameAssociate').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_TitleAssociate').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeAssociate').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }
                
              return false;  
            }
            
            else if(document.getElementsByName('rdblApplicantCategory')[2].checked == true)
            {
//                if(strtxt_Capta1=='1')
//                {
//                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
//                document.getElementById('txt_CaptaFirm').focus();
//                }     
               
                if(strIecode1=='1')
                {
                document.getElementById('txt_IecodeFirm').focus();
                }
                if(strtxt_Firm_CompRegisDate1=='1')
                {
                document.getElementById('txt_FirmRegisDate').focus();
                }
                if(strddl_Firm_CompRegisState1=='1')
                {
                document.getElementById('ddl_FirmRegisState').focus();
                }                
                                
                if(strtxt_Firm_CompRegisNo1=='1')
                {
                document.getElementById('txt_FirmRegisNo').focus();
                }
                
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OPhoneNumFirm').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OPhoneCodeFirm').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_EmailFirm').focus();
                }
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_PincodeFirm').focus();
                }
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_DistrictFirm').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_StateFirm').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_Address1Firm').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_FNameFirm').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_TitleFirm').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeFirm').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }
                
              return false;  
            }
            
            else if(document.getElementsByName('rdblApplicantCategory')[3].checked == true)
            {
//                if(strtxt_Capta1=='1')
//                {
//                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
//                document.getElementById('txt_CaptaCompany').focus();
//                }     
                if(strIecode1=='1')
                {
                document.getElementById('txt_IecodeCompany').focus();
                }
                if(strtxt_Firm_CompRegisDate1=='1')
                {
                document.getElementById('txt_CompanyRegisDate').focus();
                }
                if(strddl_Firm_CompRegisState1=='1')
                {
                document.getElementById('ddl_CompanyRegisState').focus();
                }               
                
                if(strtxt_Firm_CompRegisNo1=='1')
                {
                document.getElementById('txt_CompanyRegisNo').focus();
                }
                
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OPhoneNumCompany').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OPhoneCodeCompany').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_EmailCompany').focus();
                }
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_PincodeCompany').focus();
                }
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_DistrictCompany').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_StateCompany').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_Address1Company').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_FNameCompany').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_TitleCompany').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeCompany').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }
                
              return false;  
            }
        }       
}

else
{
  if (browserName=="Microsoft Internet Explorer")
  {
  
        if((document.getElementsByName('rdblApplicantCategory')[1].checked != true)&& (document.getElementsByName('rdblApplicantCategory')[2].checked != true)&&(document.getElementsByName('rdblApplicantCategory')[3].checked != true)&&(document.getElementsByName('rdblApplicantCategory')[4].checked!=true))
        {
           strrdblApplicantCategory =arrow + 'Please select applicant category\n';
           strrdblApplicantCategory1='1';
        } 
        else
        {
           if(document.getElementsByName('rdblApplicantCategory')[1].checked == true)
           {
           
              if((document.getElementById('lstBusiActTypeIndividual').value=='')||(document.getElementById('lstBusiActTypeIndividual').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
           
               if(document.getElementById('ddl_ApplicantTitle').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                }
               
                if(document.getElementById('txt_ApplicantFirstname').value=='')
                {
                strtxt_ApplicantFirstname=arrow + 'Please enter first name\n';
                strtxt_ApplicantFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                
                if(document.getElementById('ddl_ApplicantFTitle').value=='--Title--')
                {  
                strddl_ApplicantFTitle=arrow + 'Please select father title\n';
                strddl_ApplicantFTitle1='1';
                }
               
                if(document.getElementById('txt_ApplicantFFirstname').value=='')
                {
                strtxt_ApplicantFFirstname=arrow + 'Please enter father first name\n';
                strtxt_ApplicantFFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                
                if(document.getElementById('txt_ApplicantDob').value=='')
                {
                strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                strtxt_ApplicantDob1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_ApplicantDob').value!='')
                {
                  var result=isDate(document.getElementById('txt_ApplicantDob').value);
                  if(result<0)
                  {
                  strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                  strtxt_ApplicantDob1='1';
                  }
                  else if(result>1)
                  {
                  strtxt_ApplicantDob=arrow + 'date of birth date must be less than or equal to Today date \n';
                  strtxt_ApplicantDob1='1';
                  }
                }
                               
                if((document.getElementsByName('rdbPositionInMine')[0].checked!=true) && (document.getElementsByName('rdbPositionInMine')[1].checked!=true) && (document.getElementsByName('rdbPositionInMine')[2].checked!=true) && (document.getElementsByName('rdbPositionInMine')[3].checked!=true))
                {
                strrdbPositionInMine=arrow + 'Please select position in mine\n';
                strrdbPositionInMine1='1';
                }
                if(document.getElementById('txt_ApplicantAddress1').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_ApplicantState').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }                
                if(document.getElementById('ddl_ApplicantDistrict').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_ApplicantDistrict').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }                  
                if(document.getElementById('txt_ApplicantPin').value=='')
                {
                strtxt_ApplicantPin=arrow + 'Please enter pincode\n';
                strtxt_ApplicantPin1='1';
                }
                if(document.getElementById('txt_ApplicantEmail').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_ApplicantEmail').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_ApplicantEmail').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }    
                if(document.getElementById('txt_OfficePhoneCode').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OfficePhoneNum').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                
                if(document.getElementById('txt_ApplicantPan').value=='')
                {
                panvalue=arrow + 'Please enter PAN number\n';
                panvalue1='1';   
                }
                
                if(document.getElementById('txt_ApplicantPan').value!='')
                {   
                var pan=ValidationPan(document.getElementById('txt_ApplicantPan').value);   
                if(pan<=0)
                {
                panvalue=arrow + 'Invalid PAN number\n';   
                panvalue1='1';
                }
                }
                
                if((document.getElementById('txt_VoterID').value=='') && (document.getElementById('txt_ApplicantPassportNo').value=='') && (document.getElementById('txt_ApplicantDrivingNo').value==''))
                {
                strVoterPassportDriving=arrow + 'Please enter either one(VoterID/Passport/Driving Licence) or all\n';
                strVoterPassportDriving1='1';
                }
                
                if(document.getElementById('txt_VoterID').value!='')
                {   
                var voterid=ValidationVoterID(document.getElementById('txt_VoterID').value);   
                if(voterid<=0)
                {
                voteridvalue=arrow + 'Invalid VoterID number\n';   
                voteridvalue1='1';
                }
                }              
                
                if(document.getElementById('txt_ApplicantPassportNo').value!='')
                {   
                var passport=ValidationPassport(document.getElementById('txt_ApplicantPassportNo').value);   
                if(passport<=0)
                {
                passportvalue=arrow + 'Invalid Passport number\n';   
                passportvalue1='1';
                }
                }
                if(document.getElementById('txt_Iecode').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }  
                    
//                if(document.getElementById('txt_Capta').value=='')
//                {
//                strtxt_Capta=arrow + 'Please enter code\n';
//                strtxt_Capta1='1';
//                }
           }
            
           else if(document.getElementsByName('rdblApplicantCategory')[2].checked == true)
            {
            
                if((document.getElementById('lstBusiActTypeAssociate').value=='')||(document.getElementById('lstBusiActTypeAssociate').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
                    
                if(document.getElementById('ddl_TitleAssociate').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                
                    if(document.getElementById('txt_FNameAssociate').value=='')
                    {
                    strtxt_ApplicantFirstname=arrow + 'Please enter first name\n';
                    strtxt_ApplicantFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    } 
                    
                    if(document.getElementById('ddl_FTitleAssociate').value=='--Title--')
                    {  
                    strddl_ApplicantFTitle=arrow + 'Please select father title\n';
                    strddl_ApplicantFTitle1='1';
                    }
                   
                    if(document.getElementById('txt_FFirstnameAssociate').value=='')
                    {
                    strtxt_ApplicantFFirstname=arrow + 'Please enter father first name\n';
                    strtxt_ApplicantFFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    
                    if(document.getElementById('txt_DobAssociate').value=='')
                    {
                    strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                    strtxt_ApplicantDob1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    else if(document.getElementById('txt_DobAssociate').value!='')
                    {
                      var result=isDate(document.getElementById('txt_DobAssociate').value);
                      if(result<0)
                      {
                      strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                      strtxt_ApplicantDob1='1';
                      }
                      else if(result>1)
                      {
                      strtxt_ApplicantDob=arrow + 'date of birth date must be less than or equal to Today date \n';
                      strtxt_ApplicantDob1='1';
                      }
                    }                
                 }              
                 else if(document.getElementById('ddl_TitleAssociate').value=='M/S')
                 {
                 
                    if(document.getElementById('txt_FNameAssociate').value=='')
                    {
                    strtxt_ApplicantFirstname=arrow + 'Please enter name\n';
                    strtxt_ApplicantFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    strddl_ApplicantFTitle='';

                    strddl_ApplicantFTitle1='0';

                    strtxt_ApplicantFFirstname='';

                    strtxt_ApplicantFFirstname1='0';

                    strtxt_ApplicantDob='';
                    strtxt_ApplicantDob1='0';
                 
                 }
                 else                 
                 {   
                    strddl_ApplicantTitle='';
                    strddl_ApplicantTitle1='0';
                
                    if(document.getElementById('txt_FNameAssociate').value=='')
                    {
                    strtxt_ApplicantFirstname=arrow + 'Please enter first name\n';
                    strtxt_ApplicantFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    } 
                    
                    if(document.getElementById('ddl_FTitleAssociate').value=='--Title--')
                    {  
                    strddl_ApplicantFTitle=arrow + 'Please select father title\n';
                    strddl_ApplicantFTitle1='1';
                    }
                   
                    if(document.getElementById('txt_FFirstnameAssociate').value=='')
                    {
                    strtxt_ApplicantFFirstname=arrow + 'Please enter father first name\n';
                    strtxt_ApplicantFFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    
                    if(document.getElementById('txt_DobAssociate').value=='')
                    {
                    strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                    strtxt_ApplicantDob1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    else if(document.getElementById('txt_DobAssociate').value!='')
                    {
                      var result=isDate(document.getElementById('txt_DobAssociate').value);
                      if(result<0)
                      {
                      strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                      strtxt_ApplicantDob1='1';
                      }
                      else if(result>1)
                      {
                      strtxt_ApplicantDob=arrow + 'date of birth date must be less than or equal to Today date \n';
                      strtxt_ApplicantDob1='1';
                      }
                    }                
                 }      
                
                if(document.getElementById('txt_Address1Associate').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_StateAssociate').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_DistrictAssociate').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_DistrictAssociate').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }                  
                if(document.getElementById('txt_PincodeAssociate').value=='')
                {
                strtxt_ApplicantPin=arrow + 'Please enter pincode\n';
                strtxt_ApplicantPin1='1';
                }
                if(document.getElementById('txt_EmailAssociate').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_EmailAssociate').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_EmailAssociate').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }     
                if(document.getElementById('txt_OPhoneCodeAssociate').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OPhoneNumAssociate').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                   
                if(document.getElementById('txt_PanAssociate').value=='')
                {
                panvalue=arrow + 'Please enter PAN number\n';
                panvalue1='1';   
                }
                
                if(document.getElementById('txt_PanAssociate').value!='')
                {   
                var pan=ValidationPan(document.getElementById('txt_PanAssociate').value);   
                if(pan<=0)
                {
                panvalue=arrow + 'Invalid PAN number\n';   
                panvalue1='1';
                }
                }
                if(document.getElementById('txt_IecodeAssociate').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }   
                                                    
//                if(document.getElementById('txt_CaptaAssociate').value=='')
//                {
//                strtxt_Capta=arrow + 'Please enter code\n';
//                strtxt_Capta1='1';
//                }
            }
            
            
            else if(document.getElementsByName('rdblApplicantCategory')[3].checked == true)
            {
            
                if((document.getElementById('lstBusiActTypeFirm').value=='')||(document.getElementById('lstBusiActTypeFirm').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
                    
                if(document.getElementById('ddl_TitleFirm').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                }
               
                if(document.getElementById('txt_FNameFirm').value=='')
                {
                strtxt_ApplicantFirstname=arrow + 'Please enter name\n';
                strtxt_ApplicantFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }               
                
                if(document.getElementById('txt_Address1Firm').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_StateFirm').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_DistrictFirm').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_DistrictFirm').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('txt_PincodeFirm').value=='')
                {
                strtxt_ApplicantPin=arrow + 'Please enter pincode\n';
                strtxt_ApplicantPin1='1';
                }
                if(document.getElementById('txt_EmailFirm').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_EmailFirm').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_EmailFirm').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }   
                if(document.getElementById('txt_OPhoneCodeFirm').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                
                if(document.getElementById('txt_OPhoneNumFirm').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_FirmRegisNo').value=='')
                {
                strtxt_Firm_CompRegisNo=arrow + 'Please enter registration number\n';
                strtxt_Firm_CompRegisNo1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }   
                
                if((document.getElementById('ddl_FirmRegisState').value=='') || (document.getElementById('ddl_FirmRegisState').value=='--Select State--'))
                {
                strddl_Firm_CompRegisState=arrow + 'Please select registration state\n';
                strddl_Firm_CompRegisState1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_FirmRegisDate').value=='')
                {
                strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                strtxt_Firm_CompRegisDate1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                else if(document.getElementById('txt_FirmRegisDate').value!='')
                {
                  var result=isDate(document.getElementById('txt_FirmRegisDate').value);
                  if(result<0)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                  else if(result>1)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'date of registration must be less than or equal to Today date \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                }
                if(document.getElementById('txt_IecodeFirm').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }                                     
//                if(document.getElementById('txt_CaptaFirm').value=='')
//                {
//                strtxt_Capta=arrow + 'Please enter code\n';
//                strtxt_Capta1='1';
//                }
            }   
            
            else if(document.getElementsByName('rdblApplicantCategory')[4].checked == true)
            {
            
                if((document.getElementById('lstBusiActTypeCompany').value=='')||(document.getElementById('lstBusiActTypeCompany').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
                    
                if(document.getElementById('ddl_TitleCompany').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                }
               
                if(document.getElementById('txt_FNameCompany').value=='')
                {
                strtxt_ApplicantFirstname=arrow + 'Please enter name\n';
                strtxt_ApplicantFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }               
                
                if(document.getElementById('txt_Address1Company').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_StateCompany').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_DistrictCompany').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_DistrictCompany').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }                  
                if(document.getElementById('txt_PincodeCompany').value=='')
                {
                strtxt_ApplicantPin=arrow + 'Please enter pincode\n';
                strtxt_ApplicantPin1='1';
                }
                if(document.getElementById('txt_EmailCompany').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_EmailCompany').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_EmailCompany').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }   
                if(document.getElementById('txt_OPhoneCodeCompany').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OPhoneNumCompany').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_CompanyRegisNo').value=='')
                {
                strtxt_Firm_CompRegisNo=arrow + 'Please enter registration number\n';
                strtxt_Firm_CompRegisNo1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                    
                if((document.getElementById('ddl_CompanyRegisState').value=='') || (document.getElementById('ddl_CompanyRegisState').value=='--Select State--'))
                {
                strddl_Firm_CompRegisState=arrow + 'Please select registration state\n';
                strddl_Firm_CompRegisState1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_CompanyRegisDate').value=='')
                {
                strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                strtxt_Firm_CompRegisDate1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                else if(document.getElementById('txt_CompanyRegisDate').value!='')
                {
                  var result=isDate(document.getElementById('txt_CompanyRegisDate').value);
                  if(result<0)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                  else if(result>1)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'date of registration must be less than or equal to Today date \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                }
                if(document.getElementById('txt_IecodeCompany').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }                                     
//                if(document.getElementById('txt_CaptaCompany').value=='')
//                {
//                strtxt_Capta=arrow + 'Please enter code\n';
//                strtxt_Capta1='1';
//                }
            }   
        }

        concatAll=strrdblApplicantCategory+strlstBusiActTypeIndividual+strddl_ApplicantTitle+strtxt_ApplicantFirstname+strddl_ApplicantFTitle+strtxt_ApplicantFFirstname+strtxt_ApplicantDob+strrdbPositionInMine+strtxt_ApplicantAddress1+strddl_ApplicantState+strddl_ApplicantDistrict+strtxt_ApplicantPin+emailvalue+strtxt_OfficePhoneCode+strtxt_OfficePhoneNum+panvalue+strVoterPassportDriving+voteridvalue+passportvalue+strtxt_Firm_CompRegisNo+strddl_Firm_CompRegisState+strtxt_Firm_CompRegisDate+strIecode;
    
        if(concatAll.length > 0)
        {
            alert(strErrorinDataValidating+strDoubleNextLine+ShowAllMessageForApplicantDetail+strSingleNextLine+concatAll);
            
            if(document.getElementsByName('rdblApplicantCategory')[1].checked == true)
            {
//                if(strtxt_Capta1=='1')
//                {
//                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
//                document.getElementById('txt_Capta').focus();
//                }
                if(strIecode1=='1')
                {
                document.getElementById('txt_Iecode').focus();
                }
                
                if(passportvalue1=='1')
                {
                document.getElementById('txt_ApplicantPassportNo').focus();                
                }
                
                if(voteridvalue1=='1')
                {
                document.getElementById('txt_VoterID').focus();                
                }
                if(strVoterPassportDriving1=='1')
                {                
                document.getElementById('txt_VoterID').focus();                
                }
                
                if(panvalue1=='1')
                {
                document.getElementById('txt_ApplicantPan').focus();
                }
                
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OfficePhoneNum').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OfficePhoneCode').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_ApplicantEmail').focus();
                }
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_ApplicantPin').focus();
                }
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_ApplicantDistrict').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_ApplicantState').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_ApplicantAddress1').focus();
                }
                if(strrdbPositionInMine1=='1')
                {
                document.getElementById('rdbPositionInMine').focus();
                }               
                
                if(strtxt_ApplicantDob1=='1')
                {
                document.getElementById('txt_ApplicantDob').focus();
                }
                if(strtxt_ApplicantFFirstname1=='1')
                {
                document.getElementById('txt_ApplicantFFirstname').focus();
                }
                if(strddl_ApplicantFTitle1=='1')
                {
                document.getElementById('ddl_ApplicantFTitle').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_ApplicantFirstname').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_ApplicantTitle').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeIndividual').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }
            return false;
            }
            
            else if(document.getElementsByName('rdblApplicantCategory')[2].checked == true)
            {
//                if(strtxt_Capta1=='1')
//                {
//                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
//                document.getElementById('txt_CaptaAssociate').focus();
//                }     
                if(strIecode1=='1')
                {
                document.getElementById('txt_IecodeAssociate').focus();
                }
                
                if(panvalue1=='1')
                {
                document.getElementById('txt_PanAssociate').focus();
                } 
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OPhoneNumAssociate').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OPhoneCodeAssociate').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_EmailAssociate').focus();
                }
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_PincodeAssociate').focus();
                }
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_DistrictAssociate').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_StateAssociate').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_Address1Associate').focus();
                }
                if(strtxt_ApplicantDob1=='1')
                {
                document.getElementById('txt_DobAssociate').focus();
                }
                if(strtxt_ApplicantFFirstname1=='1')
                {
                document.getElementById('txt_FFirstnameAssociate').focus();
                }
                if(strddl_ApplicantFTitle1=='1')
                {
                document.getElementById('ddl_FTitleAssociate').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_FNameAssociate').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_TitleAssociate').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeAssociate').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }
                
              return false;  
            }
            
            else if(document.getElementsByName('rdblApplicantCategory')[3].checked == true)
            {
//                if(strtxt_Capta1=='1')
//                {
//                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
//                document.getElementById('txt_CaptaFirm').focus();
//                }     
                if(strIecode1=='1')
                {
                document.getElementById('txt_IecodeFirm').focus();
                }
                if(strtxt_Firm_CompRegisDate1=='1')
                {
                document.getElementById('txt_FirmRegisDate').focus();
                }
                if(strddl_Firm_CompRegisState1=='1')
                {
                document.getElementById('ddl_FirmRegisState').focus();
                }                
                if(strtxt_Firm_CompRegisNo1=='1')
                {
                document.getElementById('txt_FirmRegisNo').focus();
                }
                
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OPhoneNumFirm').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OPhoneCodeFirm').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_EmailFirm').focus();
                }
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_PincodeFirm').focus();
                }
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_DistrictFirm').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_StateFirm').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_Address1Firm').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_FNameFirm').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_TitleFirm').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeFirm').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }
                
              return false;  
            }
            
            else if(document.getElementsByName('rdblApplicantCategory')[4].checked == true)
            {
//                if(strtxt_Capta1=='1')
//                {
//                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
//                document.getElementById('txt_CaptaCompany').focus();
//                }     
                if(strIecode1=='1')
                {
                document.getElementById('txt_IecodeCompany').focus();
                }
                if(strtxt_Firm_CompRegisDate1=='1')
                {
                document.getElementById('txt_CompanyRegisDate').focus();
                }
                if(strddl_Firm_CompRegisState1=='1')
                {
                document.getElementById('ddl_CompanyRegisState').focus();
                }
                                
                if(strtxt_Firm_CompRegisNo1=='1')
                {
                document.getElementById('txt_CompanyRegisNo').focus();
                }
                
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OPhoneNumCompany').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OPhoneCodeCompany').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_EmailCompany').focus();
                }
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_PincodeCompany').focus();
                }
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_DistrictCompany').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_StateCompany').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_Address1Company').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_FNameCompany').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_TitleCompany').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeCompany').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }
                
              return false;  
            }
        }
  }
 else
  {
    if((document.getElementsByName('rdblApplicantCategory')[0].checked != true)&& (document.getElementsByName('rdblApplicantCategory')[1].checked != true)&&(document.getElementsByName('rdblApplicantCategory')[2].checked != true)&&(document.getElementsByName('rdblApplicantCategory')[3].checked!=true))
        {
           strrdblApplicantCategory =arrow + 'Please select applicant category\n';
           strrdblApplicantCategory1='1';
        } 
        else
        {
           if(document.getElementsByName('rdblApplicantCategory')[0].checked == true)
           {
           
              if((document.getElementById('lstBusiActTypeIndividual').value=='')||(document.getElementById('lstBusiActTypeIndividual').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
           
               if(document.getElementById('ddl_ApplicantTitle').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                }
               
                if(document.getElementById('txt_ApplicantFirstname').value=='')
                {
                strtxt_ApplicantFirstname=arrow + 'Please enter first name\n';
                strtxt_ApplicantFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                
                if(document.getElementById('ddl_ApplicantFTitle').value=='--Title--')
                {  
                strddl_ApplicantFTitle=arrow + 'Please select father title\n';
                strddl_ApplicantFTitle1='1';
                }
               
                if(document.getElementById('txt_ApplicantFFirstname').value=='')
                {
                strtxt_ApplicantFFirstname=arrow + 'Please enter father first name\n';
                strtxt_ApplicantFFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                
                if(document.getElementById('txt_ApplicantDob').value=='')
                {
                strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                strtxt_ApplicantDob1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_ApplicantDob').value!='')
                {
                  var result=isDate(document.getElementById('txt_ApplicantDob').value);
                  if(result<0)
                  {
                  strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                  strtxt_ApplicantDob1='1';
                  }
                  else if(result>1)
                  {
                  strtxt_ApplicantDob=arrow + 'date of birth date must be less than or equal to Today date \n';
                  strtxt_ApplicantDob1='1';
                  }
                }
                               
                if((document.getElementsByName('rdbPositionInMine')[0].checked!=true) && (document.getElementsByName('rdbPositionInMine')[1].checked!=true) && (document.getElementsByName('rdbPositionInMine')[2].checked!=true) && (document.getElementsByName('rdbPositionInMine')[3].checked!=true))
                {
                strrdbPositionInMine=arrow + 'Please select position in mine\n';
                strrdbPositionInMine1='1';
                }
                if(document.getElementById('txt_ApplicantAddress1').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_ApplicantState').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_ApplicantDistrict').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_ApplicantDistrict').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('txt_ApplicantPin').value=='')
                {
                strtxt_ApplicantPin=arrow + 'Please enter pincode\n';
                strtxt_ApplicantPin1='1';
                }
                if(document.getElementById('txt_ApplicantEmail').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_ApplicantEmail').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_ApplicantEmail').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }   
                if(document.getElementById('txt_OfficePhoneCode').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OfficePhoneNum').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                
                if(document.getElementById('txt_ApplicantPan').value=='')
                {
                panvalue=arrow + 'Please enter PAN number\n';
                panvalue1='1';   
                }
                
                if(document.getElementById('txt_ApplicantPan').value!='')
                {   
                var pan=ValidationPan(document.getElementById('txt_ApplicantPan').value);   
                if(pan<=0)
                {
                panvalue=arrow + 'Invalid PAN number\n';   
                panvalue1='1';
                }
                }
                
                if((document.getElementById('txt_VoterID').value=='') && (document.getElementById('txt_ApplicantPassportNo').value=='') && (document.getElementById('txt_ApplicantDrivingNo').value==''))
                {
                strVoterPassportDriving=arrow + 'Please enter either one(VoterID/Passport/Driving Licence) or all\n';
                strVoterPassportDriving1='1';
                }
                
                if(document.getElementById('txt_VoterID').value!='')
                {   
                var voterid=ValidationVoterID(document.getElementById('txt_VoterID').value);   
                if(voterid<=0)
                {
                voteridvalue=arrow + 'Invalid VoterID number\n';   
                voteridvalue1='1';
                }
                }              
                
                if(document.getElementById('txt_ApplicantPassportNo').value!='')
                {   
                var passport=ValidationPassport(document.getElementById('txt_ApplicantPassportNo').value);   
                if(passport<=0)
                {
                passportvalue=arrow + 'Invalid Passport number\n';   
                passportvalue1='1';
                }
                }
                 if(document.getElementById('txt_Iecode').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }   
                    
//                if(document.getElementById('txt_Capta').value=='')
//                {
//                strtxt_Capta=arrow + 'Please enter code\n';
//                strtxt_Capta1='1';
//                }
           }
            
           else if(document.getElementsByName('rdblApplicantCategory')[1].checked == true)
            {
            
                if((document.getElementById('lstBusiActTypeAssociate').value=='')||(document.getElementById('lstBusiActTypeAssociate').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
                    
                if(document.getElementById('ddl_TitleAssociate').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                
                    if(document.getElementById('txt_FNameAssociate').value=='')
                    {
                    strtxt_ApplicantFirstname=arrow + 'Please enter first name\n';
                    strtxt_ApplicantFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    } 
                    
                    if(document.getElementById('ddl_FTitleAssociate').value=='--Title--')
                    {  
                    strddl_ApplicantFTitle=arrow + 'Please select father title\n';
                    strddl_ApplicantFTitle1='1';
                    }
                   
                    if(document.getElementById('txt_FFirstnameAssociate').value=='')
                    {
                    strtxt_ApplicantFFirstname=arrow + 'Please enter father first name\n';
                    strtxt_ApplicantFFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    
                    if(document.getElementById('txt_DobAssociate').value=='')
                    {
                    strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                    strtxt_ApplicantDob1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    else if(document.getElementById('txt_DobAssociate').value!='')
                    {
                      var result=isDate(document.getElementById('txt_DobAssociate').value);
                      if(result<0)
                      {
                      strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                      strtxt_ApplicantDob1='1';
                      }
                      else if(result>1)
                      {
                      strtxt_ApplicantDob=arrow + 'date of birth date must be less than or equal to Today date \n';
                      strtxt_ApplicantDob1='1';
                      }
                    }                
                 }              
                 else if(document.getElementById('ddl_TitleAssociate').value=='M/S')
                 {
                 
                    if(document.getElementById('txt_FNameAssociate').value=='')
                    {
                    strtxt_ApplicantFirstname=arrow + 'Please enter name\n';
                    strtxt_ApplicantFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    strddl_ApplicantFTitle='';

                    strddl_ApplicantFTitle1='0';

                    strtxt_ApplicantFFirstname='';

                    strtxt_ApplicantFFirstname1='0';

                    strtxt_ApplicantDob='';
                    strtxt_ApplicantDob1='0';
                 
                 }
                 else
                 {
                    strddl_ApplicantTitle='';
                    strddl_ApplicantTitle1='0';
                
                    if(document.getElementById('txt_FNameAssociate').value=='')
                    {
                    strtxt_ApplicantFirstname=arrow + 'Please enter first name\n';
                    strtxt_ApplicantFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    } 
                    
                    if(document.getElementById('ddl_FTitleAssociate').value=='--Title--')
                    {  
                    strddl_ApplicantFTitle=arrow + 'Please select father title\n';
                    strddl_ApplicantFTitle1='1';
                    }
                   
                    if(document.getElementById('txt_FFirstnameAssociate').value=='')
                    {
                    strtxt_ApplicantFFirstname=arrow + 'Please enter father first name\n';
                    strtxt_ApplicantFFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    
                    if(document.getElementById('txt_DobAssociate').value=='')
                    {
                    strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                    strtxt_ApplicantDob1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    else if(document.getElementById('txt_DobAssociate').value!='')
                    {
                      var result=isDate(document.getElementById('txt_DobAssociate').value);
                      if(result<0)
                      {
                      strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                      strtxt_ApplicantDob1='1';
                      }
                      else if(result>1)
                      {
                      strtxt_ApplicantDob=arrow + 'date of birth date must be less than or equal to Today date \n';
                      strtxt_ApplicantDob1='1';
                      }
                    }                
                 }                  
                
                if(document.getElementById('txt_Address1Associate').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_StateAssociate').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_DistrictAssociate').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_DistrictAssociate').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('txt_PincodeAssociate').value=='')
                {
                strtxt_ApplicantPin=arrow + 'Please enter pincode\n';
                strtxt_ApplicantPin1='1';
                }
                if(document.getElementById('txt_EmailAssociate').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_EmailAssociate').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_EmailAssociate').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }         
                if(document.getElementById('txt_OPhoneCodeAssociate').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OPhoneNumAssociate').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                
                if(document.getElementById('txt_PanAssociate').value=='')
                {
                panvalue=arrow + 'Please enter PAN number\n';
                panvalue1='1';   
                }
                
                if(document.getElementById('txt_PanAssociate').value!='')
                {   
                var pan=ValidationPan(document.getElementById('txt_PanAssociate').value);   
                if(pan<=0)
                {
                panvalue=arrow + 'Invalid PAN number\n';   
                panvalue1='1';
                }
                }
                if(document.getElementById('txt_IecodeAssociate').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }                                      
//                if(document.getElementById('txt_CaptaAssociate').value=='')
//                {
//                strtxt_Capta=arrow + 'Please enter code\n';
//                strtxt_Capta1='1';
//                }
            }
            
            
            else if(document.getElementsByName('rdblApplicantCategory')[2].checked == true)
            {
           
                if((document.getElementById('lstBusiActTypeFirm').value=='')||(document.getElementById('lstBusiActTypeFirm').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
                    
                if(document.getElementById('ddl_TitleFirm').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                }
               
                if(document.getElementById('txt_FNameFirm').value=='')
                {
                strtxt_ApplicantFirstname=arrow + 'Please enter name\n';
                strtxt_ApplicantFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }               
                
                if(document.getElementById('txt_Address1Firm').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_StateFirm').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_DistrictFirm').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_DistrictFirm').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('txt_PincodeFirm').value=='')
                {
                strtxt_ApplicantPin=arrow + 'Please enter pincode\n';
                strtxt_ApplicantPin1='1';
                } 
                if(document.getElementById('txt_EmailFirm').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_EmailFirm').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_EmailFirm').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }      
                if(document.getElementById('txt_OPhoneCodeFirm').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OPhoneNumFirm').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_FirmRegisNo').value=='')
                {
                strtxt_Firm_CompRegisNo=arrow + 'Please enter registration number\n';
                strtxt_Firm_CompRegisNo1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                
                if((document.getElementById('ddl_FirmRegisState').value=='') || (document.getElementById('ddl_FirmRegisState').value=='--Select State--'))
                {
                strddl_Firm_CompRegisState=arrow + 'Please select registration state\n';
                strddl_Firm_CompRegisState1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_FirmRegisDate').value=='')
                {
                strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                strtxt_Firm_CompRegisDate1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                else if(document.getElementById('txt_FirmRegisDate').value!='')
                {
                  var result=isDate(document.getElementById('txt_FirmRegisDate').value);
                  if(result<0)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                  else if(result>1)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'date of registration must be less than or equal to Today date \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                }
                if(document.getElementById('txt_IecodeFirm').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }                                    
//                if(document.getElementById('txt_CaptaFirm').value=='')
//                {
//                strtxt_Capta=arrow + 'Please enter code\n';
//                strtxt_Capta1='1';
//                }
            }   
            
            else if(document.getElementsByName('rdblApplicantCategory')[3].checked == true)
            {
            
                if((document.getElementById('lstBusiActTypeCompany').value=='')||(document.getElementById('lstBusiActTypeCompany').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
                    
                if(document.getElementById('ddl_TitleCompany').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                }
               
                if(document.getElementById('txt_FNameCompany').value=='')
                {
                strtxt_ApplicantFirstname=arrow + 'Please enter name\n';
                strtxt_ApplicantFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }               
                
                if(document.getElementById('txt_Address1Company').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_StateCompany').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_DistrictCompany').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_DistrictCompany').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }                  
                if(document.getElementById('txt_PincodeCompany').value=='')
                {
                strtxt_ApplicantPin=arrow + 'Please enter pincode\n';
                strtxt_ApplicantPin1='1';
                }
                if(document.getElementById('txt_EmailCompany').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_EmailCompany').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_EmailCompany').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }    
                if(document.getElementById('txt_OPhoneCodeCompany').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OPhoneNumCompany').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_CompanyRegisNo').value=='')
                {
                strtxt_Firm_CompRegisNo=arrow + 'Please enter registration number\n';
                strtxt_Firm_CompRegisNo1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                    
                if((document.getElementById('ddl_CompanyRegisState').value=='') || (document.getElementById('ddl_CompanyRegisState').value=='--Select State--'))
                {
                strddl_Firm_CompRegisState=arrow + 'Please select registration state\n';
                strddl_Firm_CompRegisState1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_CompanyRegisDate').value=='')
                {
                strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                strtxt_Firm_CompRegisDate1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                else if(document.getElementById('txt_CompanyRegisDate').value!='')
                {
                  var result=isDate(document.getElementById('txt_CompanyRegisDate').value);
                  if(result<0)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                  else if(result>1)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'date of registration must be less than or equal to Today date \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                }
                if(document.getElementById('txt_IecodeCompany').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }                                    
//                if(document.getElementById('txt_CaptaCompany').value=='')
//                {
//                strtxt_Capta=arrow + 'Please enter code\n';
//                strtxt_Capta1='1';
//                }
            }   
        }

        concatAll=strrdblApplicantCategory+strlstBusiActTypeIndividual+strddl_ApplicantTitle+strtxt_ApplicantFirstname+strddl_ApplicantFTitle+strtxt_ApplicantFFirstname+strtxt_ApplicantDob+strrdbPositionInMine+strtxt_ApplicantAddress1+strddl_ApplicantState+strddl_ApplicantDistrict+strtxt_ApplicantPin+emailvalue+strtxt_OfficePhoneCode+strtxt_OfficePhoneNum+panvalue+strVoterPassportDriving+voteridvalue+passportvalue+strtxt_Firm_CompRegisNo+strddl_Firm_CompRegisState+strtxt_Firm_CompRegisDate+strIecode;
    
        if(concatAll.length > 0)
        {
            alert(strErrorinDataValidating+strDoubleNextLine+ShowAllMessageForApplicantDetail+strSingleNextLine+concatAll);
            
            if(document.getElementsByName('rdblApplicantCategory')[0].checked == true)
            {
//                if(strtxt_Capta1=='1')
//                {
//                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
//                document.getElementById('txt_Capta').focus();
//                }
                if(strIecode1=='1')
                {
                document.getElementById('txt_Iecode').focus();
                }
                if(passportvalue1=='1')
                {
                document.getElementById('txt_ApplicantPassportNo').focus();                
                }
                
                if(voteridvalue1=='1')
                {
                document.getElementById('txt_VoterID').focus();                
                }
                if(strVoterPassportDriving1=='1')
                {                
                document.getElementById('txt_VoterID').focus();                
                }
                
                if(panvalue1=='1')
                {
                document.getElementById('txt_ApplicantPan').focus();
                }
                
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OfficePhoneNum').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OfficePhoneCode').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_ApplicantEmail').focus();
                }
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_ApplicantPin').focus();
                }
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_ApplicantDistrict').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_ApplicantState').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_ApplicantAddress1').focus();
                }
                if(strrdbPositionInMine1=='1')
                {
                document.getElementById('rdbPositionInMine').focus();
                }                
                
                if(strtxt_ApplicantDob1=='1')
                {
                document.getElementById('txt_ApplicantDob').focus();
                }
                if(strtxt_ApplicantFFirstname1=='1')
                {
                document.getElementById('txt_ApplicantFFirstname').focus();
                }
                if(strddl_ApplicantFTitle1=='1')
                {
                document.getElementById('ddl_ApplicantFTitle').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_ApplicantFirstname').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_ApplicantTitle').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeIndividual').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }
            return false;
            }
            
            else if(document.getElementsByName('rdblApplicantCategory')[1].checked == true)
            {
//                if(strtxt_Capta1=='1')
//                {
//                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
//                document.getElementById('txt_CaptaAssociate').focus();
//                }     
               
               if(strIecode1=='1')
               {
               document.getElementById('txt_IecodeAssociate').focus();
               }
                if(panvalue1=='1')
                {
                document.getElementById('txt_PanAssociate').focus();
                } 
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OPhoneNumAssociate').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OPhoneCodeAssociate').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_EmailAssociate').focus();
                }
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_PincodeAssociate').focus();
                }
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_DistrictAssociate').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_StateAssociate').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_Address1Associate').focus();
                }                
                
                if(strtxt_ApplicantDob1=='1')
                {
                document.getElementById('txt_DobAssociate').focus();
                }
                if(strtxt_ApplicantFFirstname1=='1')
                {
                document.getElementById('txt_FFirstnameAssociate').focus();
                }
                if(strddl_ApplicantFTitle1=='1')
                {
                document.getElementById('ddl_FTitleAssociate').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_FNameAssociate').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_TitleAssociate').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeAssociate').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }
                
              return false;  
            }
            
            else if(document.getElementsByName('rdblApplicantCategory')[2].checked == true)
            {
//                if(strtxt_Capta1=='1')
//                {
//                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
//                document.getElementById('txt_CaptaFirm').focus();
//                }     
                if(strIecode1=='1')
                {
                document.getElementById('txt_IecodeFirm').focus();
                }
                
                if(strtxt_Firm_CompRegisDate1=='1')
                {
                document.getElementById('txt_FirmRegisDate').focus();
                }
                if(strddl_Firm_CompRegisState1=='1')
                {
                document.getElementById('ddl_FirmRegisState').focus();
                }
                if(strtxt_Firm_CompRegisNo1=='1')
                {
                document.getElementById('txt_FirmRegisNo').focus();
                }
                
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OPhoneNumFirm').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OPhoneCodeFirm').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_EmailFirm').focus();
                }
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_PincodeFirm').focus();
                }                
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_DistrictFirm').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_StateFirm').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_Address1Firm').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_FNameFirm').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_TitleFirm').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeFirm').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }
                
              return false;  
            }
            
            else if(document.getElementsByName('rdblApplicantCategory')[3].checked == true)
            {
//                if(strtxt_Capta1=='1')
//                {
//                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
//                document.getElementById('txt_CaptaCompany').focus();
//                }     
                if(strIecode1=='1')
                {
                document.getElementById('txt_IecodeCompany').focus();
                }
                if(strtxt_Firm_CompRegisDate1=='1')
                {
                document.getElementById('txt_CompanyRegisDate').focus();
                }
                if(strddl_Firm_CompRegisState1=='1')
                {
                document.getElementById('ddl_CompanyRegisState').focus();
                }               
                
                if(strtxt_Firm_CompRegisNo1=='1')
                {
                document.getElementById('txt_CompanyRegisNo').focus();
                }
                
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OPhoneNumCompany').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OPhoneCodeCompany').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_EmailCompany').focus();
                }
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_PincodeCompany').focus();
                }
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_DistrictCompany').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_StateCompany').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_Address1Company').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_FNameCompany').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_TitleCompany').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeCompany').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }                
              return false;  
            }
        }       
  }
}
 
}


function CheckforSubmitDetails()
{  

var strErrorinDataSubmiting='Submission failed: ';
//    var strErrorinDataValidating='Error in Data Entry: ';
    var strDoubleNextLine = ' \n\n';
    var ShowAllMessageForApplicantDetail = "Please correct the following entries:";
    var strSingleNextLine = ' \n';
    
    var strrdblApplicantCategory='';
    var strrdblApplicantCategory1='0';
    
    var strlstBusiActTypeIndividual='';
    var strlstBusiActTypeIndividual1='0';
    
    var strddl_ApplicantTitle='';
    var strddl_ApplicantTitle1='0';
    
    var strtxt_ApplicantFirstname='';
    var strtxt_ApplicantFirstname1='0';
    
    var strddl_ApplicantFTitle='';
    var strddl_ApplicantFTitle1='0';
    
    var strtxt_ApplicantFFirstname='';
    var strtxt_ApplicantFFirstname1='0';
    
    var strtxt_ApplicantDob='';
    var strtxt_ApplicantDob1='0';
    
    var strtxt_ApplicantEmail='';
    var strtxt_ApplicantEmail1='0';
    
    var strrdbPositionInMine='';
    var strrdbPositionInMine1='0';
    
    var strtxt_ApplicantAddress1='';
    var strtxt_ApplicantAddress11='0';
    
    var strddl_ApplicantState='';
    var strddl_ApplicantState1='0';
    
    var strddl_ApplicantDistrict='';
    var strddl_ApplicantDistrict1='0';
    
    var strtxt_ApplicantPin='';
    var strtxt_ApplicantPin1='0';
        
    var strtxt_OfficePhoneCode='';
    var strtxt_OfficePhoneCode1='0';    
    var strtxt_OfficePhoneNum='';
    var strtxt_OfficePhoneNum1='0';
    
    var panvalue='';
    var panvalue1='';
    var panval='';   
    
    var emailvalue='';
    var emailvalue1='';
    var email='';
    
    var strVoterPassportDriving='';
    var strVoterPassportDriving1='0';    
    
    var voteridvalue='';
    var voteridvalue1='';
    var voteridval='';
    
    var passportvalue='';
    var passportvalue1='';
    var passportval='';
    
    var strIecode='';
    var strIecode1='0';
    var strddl_SecurityQuestion='';
    var strddl_SecurityQuestion1='0';
    var strtxt_SecurityAnswer='';
    var strtxt_SecurityAnswer1='0';
        
    var strtxt_Firm_CompRegisNo='';
    var strtxt_Firm_CompRegisNo1='0';
    var strddl_Firm_CompRegisState='';
    var strddl_Firm_CompRegisState1='0';
    var strtxt_Firm_CompRegisDate='';
    var strtxt_Firm_CompRegisDate1='0';
    
    var strtxt_Capta='';
    var strtxt_Capta1='';
    var arrow='--> ';
    var concatAll='';
      
var browserName=navigator.appName;
//alert(browserName);


if(browserName=="Netscape") 
{    
        if((document.getElementsByName('rdblApplicantCategory')[0].checked != true)&& (document.getElementsByName('rdblApplicantCategory')[1].checked != true)&&(document.getElementsByName('rdblApplicantCategory')[2].checked != true)&&(document.getElementsByName('rdblApplicantCategory')[3].checked!=true))
        {
           strrdblApplicantCategory =arrow + 'Please select applicant category\n';
           strrdblApplicantCategory1='1';
        } 
        else
        {
           if(document.getElementsByName('rdblApplicantCategory')[0].checked == true)
           {
           
              if((document.getElementById('lstBusiActTypeIndividual').value=='')||(document.getElementById('lstBusiActTypeIndividual').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
           
               if(document.getElementById('ddl_ApplicantTitle').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                }
               
                if(document.getElementById('txt_ApplicantFirstname').value=='')
                {
                strtxt_ApplicantFirstname=arrow + 'Please enter first name\n';
                strtxt_ApplicantFirstname1='1';               
                }
                
                if(document.getElementById('ddl_ApplicantFTitle').value=='--Title--')
                {  
                strddl_ApplicantFTitle=arrow + 'Please select father title\n';
                strddl_ApplicantFTitle1='1';
                }
               
                if(document.getElementById('txt_ApplicantFFirstname').value=='')
                {
                strtxt_ApplicantFFirstname=arrow + 'Please enter father first name\n';
                strtxt_ApplicantFFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                
                if(document.getElementById('txt_ApplicantDob').value=='')
                {
                strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                strtxt_ApplicantDob1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_ApplicantDob').value!='')
                {
                  var result=isDate(document.getElementById('txt_ApplicantDob').value);
                  if(result<0)
                  {
                  strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                  strtxt_ApplicantDob1='1';
                  }
                  else if(result>1)
                  {
                  strtxt_ApplicantDob=arrow + 'date of birth date must be less than or equal to Today date \n';
                  strtxt_ApplicantDob1='1';
                  }
                }
                               
                if((document.getElementsByName('rdbPositionInMine')[0].checked!=true) && (document.getElementsByName('rdbPositionInMine')[1].checked!=true) && (document.getElementsByName('rdbPositionInMine')[2].checked!=true) && (document.getElementsByName('rdbPositionInMine')[3].checked!=true))
                {
                strrdbPositionInMine=arrow + 'Please select position in mine\n';
                strrdbPositionInMine1='1';
                }
                if(document.getElementById('txt_ApplicantAddress1').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_ApplicantState').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_ApplicantDistrict').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_ApplicantDistrict').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }                  
                if(document.getElementById('txt_ApplicantPin').value=='')
                {
                strtxt_ApplicantPin=arrow + 'Please enter pincode\n';
                strtxt_ApplicantPin1='1';
                }
                if(document.getElementById('txt_ApplicantEmail').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_ApplicantEmail').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_ApplicantEmail').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }   
                if(document.getElementById('txt_OfficePhoneCode').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OfficePhoneNum').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                
                if(document.getElementById('txt_ApplicantPan').value=='')
                {
                panvalue=arrow + 'Please enter PAN number\n';
                panvalue1='1';   
                }
                
                if(document.getElementById('txt_ApplicantPan').value!='')
                {   
                var pan=ValidationPan(document.getElementById('txt_ApplicantPan').value);   
                if(pan<=0)
                {
                panvalue=arrow + 'Invalid PAN number\n';   
                panvalue1='1';
                }
                }
                
                if((document.getElementById('txt_VoterID').value=='') && (document.getElementById('txt_ApplicantPassportNo').value=='') && (document.getElementById('txt_ApplicantDrivingNo').value==''))
                {
                strVoterPassportDriving=arrow + 'Please enter either one(VoterID/Passport/Driving Licence) or all\n';
                strVoterPassportDriving1='1';
                }
                
                if(document.getElementById('txt_VoterID').value!='')
                {   
                var voterid=ValidationVoterID(document.getElementById('txt_VoterID').value);   
                if(voterid<=0)
                {
                voteridvalue=arrow + 'Invalid VoterID number\n';   
                voteridvalue1='1';
                }
                }              
                
                if(document.getElementById('txt_ApplicantPassportNo').value!='')
                {   
                var passport=ValidationPassport(document.getElementById('txt_ApplicantPassportNo').value);   
                if(passport<=0)
                {
                passportvalue=arrow + 'Invalid Passport number\n';   
                passportvalue1='1';
                }
                }
                if(document.getElementById('txt_Iecode').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }     
                if(document.getElementById('ddl_SecurityQuestion').value=='--Choose a question--')
                {
                strddl_SecurityQuestion=arrow + 'Please choose security question\n';
                strddl_SecurityQuestion1='1';
                }
                if(document.getElementById('txt_SecurityAnswer').value=='')
                {
                strtxt_SecurityAnswer=arrow + 'Please enter security answer\n';
                strtxt_SecurityAnswer1='1';
                }
                if(document.getElementById('txt_Capta').value=='')
                {
                strtxt_Capta=arrow + 'Please enter code\n';
                strtxt_Capta1='1';
                }
           }
            
           else if(document.getElementsByName('rdblApplicantCategory')[1].checked == true)
            {
            
                if((document.getElementById('lstBusiActTypeAssociate').value=='')||(document.getElementById('lstBusiActTypeAssociate').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
                    
                if(document.getElementById('ddl_TitleAssociate').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                
                    if(document.getElementById('txt_FNameAssociate').value=='')
                    {
                    strtxt_ApplicantFirstname=arrow + 'Please enter first name\n';
                    strtxt_ApplicantFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    } 
                    
                    if(document.getElementById('ddl_FTitleAssociate').value=='--Title--')
                    {  
                    strddl_ApplicantFTitle=arrow + 'Please select father title\n';
                    strddl_ApplicantFTitle1='1';
                    }
                   
                    if(document.getElementById('txt_FFirstnameAssociate').value=='')
                    {
                    strtxt_ApplicantFFirstname=arrow + 'Please enter father first name\n';
                    strtxt_ApplicantFFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    
                    if(document.getElementById('txt_DobAssociate').value=='')
                    {
                    strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                    strtxt_ApplicantDob1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    else if(document.getElementById('txt_DobAssociate').value!='')
                    {
                      var result=isDate(document.getElementById('txt_DobAssociate').value);
                      if(result<0)
                      {
                      strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                      strtxt_ApplicantDob1='1';
                      }
                      else if(result>1)
                      {
                      strtxt_ApplicantDob=arrow + 'date of birth date must be less than or equal to Today date \n';
                      strtxt_ApplicantDob1='1';
                      }
                    }                
                 }              
                 else if(document.getElementById('ddl_TitleAssociate').value=='M/S')
                 {
                 
                    if(document.getElementById('txt_FNameAssociate').value=='')
                    {
                    strtxt_ApplicantFirstname=arrow + 'Please enter name\n';
                    strtxt_ApplicantFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    strddl_ApplicantFTitle='';

                    strddl_ApplicantFTitle1='0';

                    strtxt_ApplicantFFirstname='';

                    strtxt_ApplicantFFirstname1='0';

                    strtxt_ApplicantDob='';
                    strtxt_ApplicantDob1='0';
                 
                 }
                 else
                 {
                    strddl_ApplicantTitle='';
                    strddl_ApplicantTitle1='0';
                
                    if(document.getElementById('txt_FNameAssociate').value=='')
                    {
                    strtxt_ApplicantFirstname=arrow + 'Please enter first name\n';
                    strtxt_ApplicantFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    } 
                    
                    if(document.getElementById('ddl_FTitleAssociate').value=='--Title--')
                    {  
                    strddl_ApplicantFTitle=arrow + 'Please select father title\n';
                    strddl_ApplicantFTitle1='1';
                    }
                   
                    if(document.getElementById('txt_FFirstnameAssociate').value=='')
                    {
                    strtxt_ApplicantFFirstname=arrow + 'Please enter father first name\n';
                    strtxt_ApplicantFFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    
                    if(document.getElementById('txt_DobAssociate').value=='')
                    {
                    strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                    strtxt_ApplicantDob1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    else if(document.getElementById('txt_DobAssociate').value!='')
                    {
                      var result=isDate(document.getElementById('txt_DobAssociate').value);
                      if(result<0)
                      {
                      strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                      strtxt_ApplicantDob1='1';
                      }
                      else if(result>1)
                      {
                      strtxt_ApplicantDob=arrow + 'date of birth date must be less than or equal to Today date \n';
                      strtxt_ApplicantDob1='1';
                      }
                    }                
                 }
                
                if(document.getElementById('txt_Address1Associate').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_StateAssociate').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_DistrictAssociate').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_DistrictAssociate').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                                  
                if(document.getElementById('txt_PincodeAssociate').value=='')
                {
                strtxt_ApplicantPin=arrow + 'Please enter pincode\n';
                strtxt_ApplicantPin1='1';
                } 
                if(document.getElementById('txt_EmailAssociate').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_EmailAssociate').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_EmailAssociate').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }   
                if(document.getElementById('txt_OPhoneCodeAssociate').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OPhoneNumAssociate').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                
                if(document.getElementById('txt_PanAssociate').value=='')
                {
                panvalue=arrow + 'Please enter PAN number\n';
                panvalue1='1';   
                }
                
                if(document.getElementById('txt_PanAssociate').value!='')
                {   
                var pan=ValidationPan(document.getElementById('txt_PanAssociate').value);   
                if(pan<=0)
                {
                panvalue=arrow + 'Invalid PAN number\n';   
                panvalue1='1';
                }
                }
                
                if(document.getElementById('txt_IecodeAssociate').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                } 
                if(document.getElementById('ddl_SecurityQuestion').value=='--Choose a question--')
                {
                strddl_SecurityQuestion=arrow + 'Please choose security question\n';
                strddl_SecurityQuestion1='1';
                }
                if(document.getElementById('txt_SecurityAnswer').value=='')
                {
                strtxt_SecurityAnswer=arrow + 'Please enter security answer\n';
                strtxt_SecurityAnswer1='1';
                }                                   
                if(document.getElementById('txt_Capta').value=='')
                {
                strtxt_Capta=arrow + 'Please enter code\n';
                strtxt_Capta1='1';
                }
            }
            
            
            else if(document.getElementsByName('rdblApplicantCategory')[2].checked == true)
            {
           
                if((document.getElementById('lstBusiActTypeFirm').value=='')||(document.getElementById('lstBusiActTypeFirm').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
                    
                if(document.getElementById('ddl_TitleFirm').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                }
               
                if(document.getElementById('txt_FNameFirm').value=='')
                {
                strtxt_ApplicantFirstname=arrow + 'Please enter name\n';
                strtxt_ApplicantFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }               
                
                if(document.getElementById('txt_Address1Firm').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_StateFirm').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_DistrictFirm').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_DistrictFirm').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }  
                if(document.getElementById('txt_PincodeFirm').value=='')
                {
                strtxt_ApplicantPin=arrow + 'Please enter pincode\n';
                strtxt_ApplicantPin1='1';
                }                
                if(document.getElementById('txt_EmailFirm').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_EmailFirm').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_EmailFirm').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }    
                    
                if(document.getElementById('txt_OPhoneCodeFirm').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OPhoneNumFirm').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_FirmRegisNo').value=='')
                {
                strtxt_Firm_CompRegisNo=arrow + 'Please enter registration number\n';
                strtxt_Firm_CompRegisNo1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if((document.getElementById('ddl_FirmRegisState').value=='') || (document.getElementById('ddl_FirmRegisState').value=='--Select State--'))
                {
                strddl_Firm_CompRegisState=arrow + 'Please select registration state\n';
                strddl_Firm_CompRegisState1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_FirmRegisDate').value=='')
                {
                strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                strtxt_Firm_CompRegisDate1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                else if(document.getElementById('txt_FirmRegisDate').value!='')
                {
                  var result=isDate(document.getElementById('txt_FirmRegisDate').value);
                  if(result<0)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                  else if(result>1)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'date of registration must be less than or equal to Today date \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                }
                if(document.getElementById('txt_IecodeFirm').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }
                if(document.getElementById('ddl_SecurityQuestion').value=='--Choose a question--')
                {
                strddl_SecurityQuestion=arrow + 'Please choose security question\n';
                strddl_SecurityQuestion1='1';
                }
                if(document.getElementById('txt_SecurityAnswer').value=='')
                {
                strtxt_SecurityAnswer=arrow + 'Please enter security answer\n';
                strtxt_SecurityAnswer1='1';
                }                                    
                if(document.getElementById('txt_Capta').value=='')
                {
                strtxt_Capta=arrow + 'Please enter code\n';
                strtxt_Capta1='1';
                }
            }   
            
            else if(document.getElementsByName('rdblApplicantCategory')[3].checked == true)
            {
            
                if((document.getElementById('lstBusiActTypeCompany').value=='')||(document.getElementById('lstBusiActTypeCompany').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
                    
                if(document.getElementById('ddl_TitleCompany').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                }
               
                if(document.getElementById('txt_FNameCompany').value=='')
                {
                strtxt_ApplicantFirstname=arrow + 'Please enter name\n';
                strtxt_ApplicantFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }               
                
                if(document.getElementById('txt_Address1Company').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_StateCompany').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_DistrictCompany').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_DistrictCompany').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }                  
                if(document.getElementById('txt_PincodeCompany').value=='')
                {
                strtxt_ApplicantPin=arrow + 'Please enter pincode\n';
                strtxt_ApplicantPin1='1';
                } 
                if(document.getElementById('txt_EmailCompany').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_EmailCompany').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_EmailCompany').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }      
                if(document.getElementById('txt_OPhoneCodeCompany').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OPhoneNumCompany').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_CompanyRegisNo').value=='')
                {
                strtxt_Firm_CompRegisNo=arrow + 'Please enter registration number\n';
                strtxt_Firm_CompRegisNo1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                
                if((document.getElementById('ddl_CompanyRegisState').value=='') || (document.getElementById('ddl_CompanyRegisState').value=='--Select State--'))
                {
                strddl_Firm_CompRegisState=arrow + 'Please select registration state\n';
                strddl_Firm_CompRegisState1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_CompanyRegisDate').value=='')
                {
                strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                strtxt_Firm_CompRegisDate1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                else if(document.getElementById('txt_CompanyRegisDate').value!='')
                {
                  var result=isDate(document.getElementById('txt_CompanyRegisDate').value);
                  if(result<0)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                  else if(result>1)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'date of registration must be less than or equal to Today date \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                }
                if(document.getElementById('txt_IecodeCompany').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }
                 if(document.getElementById('ddl_SecurityQuestion').value=='--Choose a question--')
                {
                strddl_SecurityQuestion=arrow + 'Please choose security question\n';
                strddl_SecurityQuestion1='1';
                }
                if(document.getElementById('txt_SecurityAnswer').value=='')
                {
                strtxt_SecurityAnswer=arrow + 'Please enter security answer\n';
                strtxt_SecurityAnswer1='1';
                }                                   
                if(document.getElementById('txt_Capta').value=='')
                {
                strtxt_Capta=arrow + 'Please enter code\n';
                strtxt_Capta1='1';
                }
            }   
        }

        concatAll=strrdblApplicantCategory+strlstBusiActTypeIndividual+strddl_ApplicantTitle+strtxt_ApplicantFirstname+strddl_ApplicantFTitle+strtxt_ApplicantFFirstname+strtxt_ApplicantDob+strrdbPositionInMine+strtxt_ApplicantAddress1+strddl_ApplicantState+strddl_ApplicantDistrict+strtxt_ApplicantPin+emailvalue+strtxt_OfficePhoneCode+strtxt_OfficePhoneNum+panvalue+strVoterPassportDriving+voteridvalue+passportvalue+strtxt_Firm_CompRegisNo+strddl_Firm_CompRegisState+strtxt_Firm_CompRegisDate+strIecode+strddl_SecurityQuestion+strtxt_SecurityAnswer+strtxt_Capta;
    
        if(concatAll.length > 0)
        {
            alert(strErrorinDataSubmiting+strDoubleNextLine+ShowAllMessageForApplicantDetail+strSingleNextLine+concatAll);
            
            if(document.getElementsByName('rdblApplicantCategory')[0].checked == true)
            {
                if(strtxt_Capta1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('txt_Capta').focus();
                }
                if(strtxt_SecurityAnswer1=='1')
                {
                document.getElementById('txt_SecurityAnswer').focus();
                }
                if(strddl_SecurityQuestion1=='1')
                {
                document.getElementById('ddl_SecurityQuestion').focus();
                }
                if(strIecode1=='1')
                {
                document.getElementById('txt_Iecode').focus();
                }
                if(passportvalue1=='1')
                {
                document.getElementById('txt_ApplicantPassportNo').focus();                
                }
                
                if(voteridvalue1=='1')
                {
                document.getElementById('txt_VoterID').focus();                
                }
                if(strVoterPassportDriving1=='1')
                {                
                document.getElementById('txt_VoterID').focus();                
                }
                
                if(panvalue1=='1')
                {
                document.getElementById('txt_ApplicantPan').focus();
                }
                
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OfficePhoneNum').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OfficePhoneCode').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_ApplicantEmail').focus();
                }
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_ApplicantPin').focus();
                }
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_ApplicantDistrict').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_ApplicantState').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_ApplicantAddress1').focus();
                }
                if(strrdbPositionInMine1=='1')
                {
                document.getElementById('rdbPositionInMine').focus();
                }
                if(strtxt_ApplicantDob1=='1')
                {
                document.getElementById('txt_ApplicantDob').focus();
                }
                if(strtxt_ApplicantFFirstname1=='1')
                {
                document.getElementById('txt_ApplicantFFirstname').focus();
                }
                if(strddl_ApplicantFTitle1=='1')
                {
                document.getElementById('ddl_ApplicantFTitle').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_ApplicantFirstname').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_ApplicantTitle').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeIndividual').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }
            return false;
            }
            
            else if(document.getElementsByName('rdblApplicantCategory')[1].checked == true)
            {
                if(strtxt_Capta1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('txt_Capta').focus();
                }
                if(strtxt_SecurityAnswer1=='1')
                {
                document.getElementById('txt_SecurityAnswer').focus();
                }
                if(strddl_SecurityQuestion1=='1')
                {
                document.getElementById('ddl_SecurityQuestion').focus();
                }
                if(strIecode1=='1')
                {
                document.getElementById('txt_IecodeAssociate').focus();
                }               
                if(panvalue1=='1')
                {
                document.getElementById('txt_PanAssociate').focus();
                } 
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OPhoneNumAssociate').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OPhoneCodeAssociate').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_EmailAssociate').focus();
                }
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_PincodeAssociate').focus();
                }
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_DistrictAssociate').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_StateAssociate').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_Address1Associate').focus();
                }
                
                
                if(strtxt_ApplicantDob1=='1')
                {
                document.getElementById('txt_DobAssociate').focus();
                }
                if(strtxt_ApplicantFFirstname1=='1')
                {
                document.getElementById('txt_FFirstnameAssociate').focus();
                }
                if(strddl_ApplicantFTitle1=='1')
                {
                document.getElementById('ddl_FTitleAssociate').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_FNameAssociate').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_TitleAssociate').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeAssociate').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }
                
              return false;  
            }
            
            else if(document.getElementsByName('rdblApplicantCategory')[2].checked == true)
            {
                if(strtxt_Capta1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('txt_Capta').focus();
                }
                if(strtxt_SecurityAnswer1=='1')
                {
                document.getElementById('txt_SecurityAnswer').focus();
                }
                if(strddl_SecurityQuestion1=='1')
                {
                document.getElementById('ddl_SecurityQuestion').focus();
                }     
               if(strIecode1=='1')
                {
                document.getElementById('txt_IecodeFirm').focus();
                }
                
                if(strtxt_Firm_CompRegisDate1=='1')
                {
                document.getElementById('txt_FirmRegisDate').focus();
                }
                if(strddl_Firm_CompRegisState1=='1')
                {
                document.getElementById('ddl_FirmRegisState').focus();
                }
                
                if(strtxt_Firm_CompRegisNo1=='1')
                {
                document.getElementById('txt_FirmRegisNo').focus();
                }
                
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OPhoneNumFirm').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OPhoneCodeFirm').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_EmailFirm').focus();
                }
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_PincodeFirm').focus();
                }

                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_DistrictFirm').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_StateFirm').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_Address1Firm').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_FNameFirm').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_TitleFirm').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeFirm').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }
                
              return false;  
            }
            
            else if(document.getElementsByName('rdblApplicantCategory')[3].checked == true)
            {
                if(strtxt_Capta1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('txt_Capta').focus();
                }
                if(strtxt_SecurityAnswer1=='1')
                {
                document.getElementById('txt_SecurityAnswer').focus();
                }
                if(strddl_SecurityQuestion1=='1')
                {
                document.getElementById('ddl_SecurityQuestion').focus();
                }    
                if(strIecode1=='1')
                {
                document.getElementById('txt_IecodeCompany').focus();
                }
                if(strtxt_Firm_CompRegisDate1=='1')
                {
                document.getElementById('txt_CompanyRegisDate').focus();
                }
                if(strddl_Firm_CompRegisState1=='1')
                {
                document.getElementById('ddl_CompanyRegisState').focus();
                }
                               
                if(strtxt_Firm_CompRegisNo1=='1')
                {
                document.getElementById('txt_CompanyRegisNo').focus();
                }
                
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OPhoneNumCompany').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OPhoneCodeCompany').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_EmailCompany').focus();
                }
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_PincodeCompany').focus();
                }
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_DistrictCompany').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_StateCompany').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_Address1Company').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_FNameCompany').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_TitleCompany').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeCompany').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }
                
              return false;  
            }
        }       
}

else
{
  if (browserName=="Microsoft Internet Explorer")
  {
  
        if((document.getElementsByName('rdblApplicantCategory')[1].checked != true)&& (document.getElementsByName('rdblApplicantCategory')[2].checked != true)&&(document.getElementsByName('rdblApplicantCategory')[3].checked != true)&&(document.getElementsByName('rdblApplicantCategory')[4].checked!=true))
        {
           strrdblApplicantCategory =arrow + 'Please select applicant category\n';
           strrdblApplicantCategory1='1';
        } 
        else
        {
           if(document.getElementsByName('rdblApplicantCategory')[1].checked == true)
           {
           
              if((document.getElementById('lstBusiActTypeIndividual').value=='')||(document.getElementById('lstBusiActTypeIndividual').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
           
               if(document.getElementById('ddl_ApplicantTitle').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                }
               
                if(document.getElementById('txt_ApplicantFirstname').value=='')
                {
                strtxt_ApplicantFirstname=arrow + 'Please enter first name\n';
                strtxt_ApplicantFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                
                if(document.getElementById('ddl_ApplicantFTitle').value=='--Title--')
                {  
                strddl_ApplicantFTitle=arrow + 'Please select father title\n';
                strddl_ApplicantFTitle1='1';
                }
               
                if(document.getElementById('txt_ApplicantFFirstname').value=='')
                {
                strtxt_ApplicantFFirstname=arrow + 'Please enter father first name\n';
                strtxt_ApplicantFFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                
                if(document.getElementById('txt_ApplicantDob').value=='')
                {
                strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                strtxt_ApplicantDob1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_ApplicantDob').value!='')
                {
                  var result=isDate(document.getElementById('txt_ApplicantDob').value);
                  if(result<0)
                  {
                  strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                  strtxt_ApplicantDob1='1';
                  }
                  else if(result>1)
                  {
                  strtxt_ApplicantDob=arrow + 'date of birth date must be less than or equal to Today date \n';
                  strtxt_ApplicantDob1='1';
                  }
                }
                               
                if((document.getElementsByName('rdbPositionInMine')[0].checked!=true) && (document.getElementsByName('rdbPositionInMine')[1].checked!=true) && (document.getElementsByName('rdbPositionInMine')[2].checked!=true) && (document.getElementsByName('rdbPositionInMine')[3].checked!=true))
                {
                strrdbPositionInMine=arrow + 'Please select position in mine\n';
                strrdbPositionInMine1='1';
                }
                if(document.getElementById('txt_ApplicantAddress1').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_ApplicantState').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_ApplicantDistrict').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_ApplicantDistrict').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }                  
                if(document.getElementById('txt_ApplicantPin').value=='')
                {
                strtxt_ApplicantPin=arrow + 'Please enter pincode\n';
                strtxt_ApplicantPin1='1';
                }
                if(document.getElementById('txt_ApplicantEmail').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';                
                }
                else if(document.getElementById('txt_ApplicantEmail').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_ApplicantEmail').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }   
                if(document.getElementById('txt_OfficePhoneCode').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OfficePhoneNum').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                
                if(document.getElementById('txt_ApplicantPan').value=='')
                {
                panvalue=arrow + 'Please enter PAN number\n';
                panvalue1='1';   
                }
                
                if(document.getElementById('txt_ApplicantPan').value!='')
                {   
                var pan=ValidationPan(document.getElementById('txt_ApplicantPan').value);   
                if(pan<=0)
                {
                panvalue=arrow + 'Invalid PAN number\n';   
                panvalue1='1';
                }
                }
                
                if((document.getElementById('txt_VoterID').value=='') && (document.getElementById('txt_ApplicantPassportNo').value=='') && (document.getElementById('txt_ApplicantDrivingNo').value==''))
                {
                strVoterPassportDriving=arrow + 'Please enter either one(VoterID/Passport/Driving Licence) or all\n';
                strVoterPassportDriving1='1';
                }
                
                if(document.getElementById('txt_VoterID').value!='')
                {   
                var voterid=ValidationVoterID(document.getElementById('txt_VoterID').value);   
                if(voterid<=0)
                {
                voteridvalue=arrow + 'Invalid VoterID number\n';   
                voteridvalue1='1';
                }
                }              
                
                if(document.getElementById('txt_ApplicantPassportNo').value!='')
                {   
                var passport=ValidationPassport(document.getElementById('txt_ApplicantPassportNo').value);   
                if(passport<=0)
                {
                passportvalue=arrow + 'Invalid Passport number\n';   
                passportvalue1='1';
                }
                }
                if(document.getElementById('txt_Iecode').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }      
                if(document.getElementById('ddl_SecurityQuestion').value=='--Choose a question--')
                {
                strddl_SecurityQuestion=arrow + 'Please choose security question\n';
                strddl_SecurityQuestion1='1';
                }
                if(document.getElementById('txt_SecurityAnswer').value=='')
                {
                strtxt_SecurityAnswer=arrow + 'Please enter security answer\n';
                strtxt_SecurityAnswer1='1';
                }    
                if(document.getElementById('txt_Capta').value=='')
                {
                strtxt_Capta=arrow + 'Please enter code\n';
                strtxt_Capta1='1';
                }
           }
            
           else if(document.getElementsByName('rdblApplicantCategory')[2].checked == true)
            {
            
                if((document.getElementById('lstBusiActTypeAssociate').value=='')||(document.getElementById('lstBusiActTypeAssociate').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
                    
                if(document.getElementById('ddl_TitleAssociate').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                
                    if(document.getElementById('txt_FNameAssociate').value=='')
                    {
                    strtxt_ApplicantFirstname=arrow + 'Please enter first name\n';
                    strtxt_ApplicantFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    } 
                    
                    if(document.getElementById('ddl_FTitleAssociate').value=='--Title--')
                    {  
                    strddl_ApplicantFTitle=arrow + 'Please select father title\n';
                    strddl_ApplicantFTitle1='1';
                    }
                   
                    if(document.getElementById('txt_FFirstnameAssociate').value=='')
                    {
                    strtxt_ApplicantFFirstname=arrow + 'Please enter father first name\n';
                    strtxt_ApplicantFFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    
                    if(document.getElementById('txt_DobAssociate').value=='')
                    {
                    strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                    strtxt_ApplicantDob1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    else if(document.getElementById('txt_DobAssociate').value!='')
                    {
                      var result=isDate(document.getElementById('txt_DobAssociate').value);
                      if(result<0)
                      {
                      strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                      strtxt_ApplicantDob1='1';
                      }
                      else if(result>1)
                      {
                      strtxt_ApplicantDob=arrow + 'date of birth date must be less than or equal to Today date \n';
                      strtxt_ApplicantDob1='1';
                      }
                    }                
                 }              
                 else if(document.getElementById('ddl_TitleAssociate').value=='M/S')
                 {
                 
                    if(document.getElementById('txt_FNameAssociate').value=='')
                    {
                    strtxt_ApplicantFirstname=arrow + 'Please enter name\n';
                    strtxt_ApplicantFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    strddl_ApplicantFTitle='';

                    strddl_ApplicantFTitle1='0';

                    strtxt_ApplicantFFirstname='';

                    strtxt_ApplicantFFirstname1='0';

                    strtxt_ApplicantDob='';
                    strtxt_ApplicantDob1='0';
                 
                 }
                 else
                 {
                    strddl_ApplicantTitle='';
                    strddl_ApplicantTitle1='0';
                
                    if(document.getElementById('txt_FNameAssociate').value=='')
                    {
                    strtxt_ApplicantFirstname=arrow + 'Please enter first name\n';
                    strtxt_ApplicantFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    } 
                    
                    if(document.getElementById('ddl_FTitleAssociate').value=='--Title--')
                    {  
                    strddl_ApplicantFTitle=arrow + 'Please select father title\n';
                    strddl_ApplicantFTitle1='1';
                    }
                   
                    if(document.getElementById('txt_FFirstnameAssociate').value=='')
                    {
                    strtxt_ApplicantFFirstname=arrow + 'Please enter father first name\n';
                    strtxt_ApplicantFFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    
                    if(document.getElementById('txt_DobAssociate').value=='')
                    {
                    strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                    strtxt_ApplicantDob1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    else if(document.getElementById('txt_DobAssociate').value!='')
                    {
                      var result=isDate(document.getElementById('txt_DobAssociate').value);
                      if(result<0)
                      {
                      strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                      strtxt_ApplicantDob1='1';
                      }
                      else if(result>1)
                      {
                      strtxt_ApplicantDob=arrow + 'date of birth date must be less than or equal to Today date \n';
                      strtxt_ApplicantDob1='1';
                      }
                    }                
                 }
                
                if(document.getElementById('txt_Address1Associate').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_StateAssociate').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_DistrictAssociate').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_DistrictAssociate').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }                  
                if(document.getElementById('txt_PincodeAssociate').value=='')
                {
                strtxt_ApplicantPin=arrow + 'Please enter pincode\n';
                strtxt_ApplicantPin1='1';
                } 
                if(document.getElementById('txt_EmailAssociate').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_EmailAssociate').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_EmailAssociate').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }          
                if(document.getElementById('txt_OPhoneCodeAssociate').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OPhoneNumAssociate').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                   
                if(document.getElementById('txt_PanAssociate').value=='')
                {
                panvalue=arrow + 'Please enter PAN number\n';
                panvalue1='1';   
                }
                
                if(document.getElementById('txt_PanAssociate').value!='')
                {   
                var pan=ValidationPan(document.getElementById('txt_PanAssociate').value);   
                if(pan<=0)
                {
                panvalue=arrow + 'Invalid PAN number\n';   
                panvalue1='1';
                }
                }
                if(document.getElementById('txt_IecodeAssociate').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }
                if(document.getElementById('ddl_SecurityQuestion').value=='--Choose a question--')
                {
                strddl_SecurityQuestion=arrow + 'Please choose security question\n';
                strddl_SecurityQuestion1='1';
                }
                if(document.getElementById('txt_SecurityAnswer').value=='')
                {
                strtxt_SecurityAnswer=arrow + 'Please enter security answer\n';
                strtxt_SecurityAnswer1='1';
                }                                                     
                if(document.getElementById('txt_Capta').value=='')
                {
                strtxt_Capta=arrow + 'Please enter code\n';
                strtxt_Capta1='1';
                }
            }            
            
            else if(document.getElementsByName('rdblApplicantCategory')[3].checked == true)
            {
            
                if((document.getElementById('lstBusiActTypeFirm').value=='')||(document.getElementById('lstBusiActTypeFirm').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
                    
                if(document.getElementById('ddl_TitleFirm').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                }
               
                if(document.getElementById('txt_FNameFirm').value=='')
                {
                strtxt_ApplicantFirstname=arrow + 'Please enter name\n';
                strtxt_ApplicantFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }               
                
                if(document.getElementById('txt_Address1Firm').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_StateFirm').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_DistrictFirm').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_DistrictFirm').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }                  
                if(document.getElementById('txt_PincodeFirm').value=='')
                {
                strtxt_ApplicantPin=arrow + 'Please enter pincode\n';
                strtxt_ApplicantPin1='1';
                }
                if(document.getElementById('txt_EmailFirm').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_EmailFirm').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_EmailFirm').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }  
                if(document.getElementById('txt_OPhoneCodeFirm').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OPhoneNumFirm').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_FirmRegisNo').value=='')
                {
                strtxt_Firm_CompRegisNo=arrow + 'Please enter registration number\n';
                strtxt_Firm_CompRegisNo1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                } 
                
                if((document.getElementById('ddl_FirmRegisState').value=='') || (document.getElementById('ddl_FirmRegisState').value=='--Select State--'))
                {
                strddl_Firm_CompRegisState=arrow + 'Please select registration state\n';
                strddl_Firm_CompRegisState1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_FirmRegisDate').value=='')
                {
                strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                strtxt_Firm_CompRegisDate1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                else if(document.getElementById('txt_FirmRegisDate').value!='')
                {
                  var result=isDate(document.getElementById('txt_FirmRegisDate').value);
                  if(result<0)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                  else if(result>1)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'date of registration must be less than or equal to Today date \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                }
                if(document.getElementById('txt_IecodeFirm').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }
                if(document.getElementById('ddl_SecurityQuestion').value=='--Choose a question--')
                {
                strddl_SecurityQuestion=arrow + 'Please choose security question\n';
                strddl_SecurityQuestion1='1';
                }
                if(document.getElementById('txt_SecurityAnswer').value=='')
                {
                strtxt_SecurityAnswer=arrow + 'Please enter security answer\n';
                strtxt_SecurityAnswer1='1';
                }                                    
                if(document.getElementById('txt_Capta').value=='')
                {
                strtxt_Capta=arrow + 'Please enter code\n';
                strtxt_Capta1='1';
                }
            }   
            
            else if(document.getElementsByName('rdblApplicantCategory')[4].checked == true)
            {
            
                if((document.getElementById('lstBusiActTypeCompany').value=='')||(document.getElementById('lstBusiActTypeCompany').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
                    
                if(document.getElementById('ddl_TitleCompany').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                }
               
                if(document.getElementById('txt_FNameCompany').value=='')
                {
                strtxt_ApplicantFirstname=arrow + 'Please enter name\n';
                strtxt_ApplicantFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }               
                
                if(document.getElementById('txt_Address1Company').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_StateCompany').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_DistrictCompany').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_DistrictCompany').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }                  
                if(document.getElementById('txt_PincodeCompany').value=='')
                {
                strtxt_ApplicantPin=arrow + 'Please enter pincode\n';
                strtxt_ApplicantPin1='1';
                }
                if(document.getElementById('txt_EmailCompany').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_EmailCompany').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_EmailCompany').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }
                if(document.getElementById('txt_OPhoneCodeCompany').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OPhoneNumCompany').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_CompanyRegisNo').value=='')
                {
                strtxt_Firm_CompRegisNo=arrow + 'Please enter registration number\n';
                strtxt_Firm_CompRegisNo1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                  
                if((document.getElementById('ddl_CompanyRegisState').value=='') || (document.getElementById('ddl_CompanyRegisState').value=='--Select State--'))
                {
                strddl_Firm_CompRegisState=arrow + 'Please select registration state\n';
                strddl_Firm_CompRegisState1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_CompanyRegisDate').value=='')
                {
                strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                strtxt_Firm_CompRegisDate1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                else if(document.getElementById('txt_CompanyRegisDate').value!='')
                {
                  var result=isDate(document.getElementById('txt_CompanyRegisDate').value);
                  if(result<0)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                  else if(result>1)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'date of registration must be less than or equal to Today date \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                }
                if(document.getElementById('txt_IecodeCompany').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }
                if(document.getElementById('ddl_SecurityQuestion').value=='--Choose a question--')
                {
                strddl_SecurityQuestion=arrow + 'Please choose security question\n';
                strddl_SecurityQuestion1='1';
                }
                if(document.getElementById('txt_SecurityAnswer').value=='')
                {
                strtxt_SecurityAnswer=arrow + 'Please enter security answer\n';
                strtxt_SecurityAnswer1='1';
                }                                    
                if(document.getElementById('txt_Capta').value=='')
                {
                strtxt_Capta=arrow + 'Please enter code\n';
                strtxt_Capta1='1';
                }
            }   
        }

        concatAll=strrdblApplicantCategory+strlstBusiActTypeIndividual+strddl_ApplicantTitle+strtxt_ApplicantFirstname+strddl_ApplicantFTitle+strtxt_ApplicantFFirstname+strtxt_ApplicantDob+strrdbPositionInMine+strtxt_ApplicantAddress1+strddl_ApplicantState+strddl_ApplicantDistrict+strtxt_ApplicantPin+emailvalue+strtxt_OfficePhoneCode+strtxt_OfficePhoneNum+panvalue+strVoterPassportDriving+voteridvalue+passportvalue+strtxt_Firm_CompRegisNo+strddl_Firm_CompRegisState+strtxt_Firm_CompRegisDate+strIecode+strddl_SecurityQuestion+strtxt_SecurityAnswer+strtxt_Capta;
    
        if(concatAll.length > 0)
        {
            alert(strErrorinDataSubmiting+strDoubleNextLine+ShowAllMessageForApplicantDetail+strSingleNextLine+concatAll);
            
            if(document.getElementsByName('rdblApplicantCategory')[1].checked == true)
            {
                if(strtxt_Capta1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('txt_Capta').focus();
                }
                if(strtxt_SecurityAnswer1=='1')
                {
                document.getElementById('txt_SecurityAnswer').focus();
                }
                if(strddl_SecurityQuestion1=='1')
                {
                document.getElementById('ddl_SecurityQuestion').focus();
                }
                if(strIecode1=='1')
                {
                document.getElementById('txt_Iecode').focus();
                }
                if(passportvalue1=='1')
                {
                document.getElementById('txt_ApplicantPassportNo').focus();                
                }
                
                if(voteridvalue1=='1')
                {
                document.getElementById('txt_VoterID').focus();                
                }
                if(strVoterPassportDriving1=='1')
                {                
                document.getElementById('txt_VoterID').focus();                
                }
                
                if(panvalue1=='1')
                {
                document.getElementById('txt_ApplicantPan').focus();
                }
                
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OfficePhoneNum').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OfficePhoneCode').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_ApplicantEmail').focus();
                }
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_ApplicantPin').focus();
                }
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_ApplicantDistrict').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_ApplicantState').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_ApplicantAddress1').focus();
                }
                if(strrdbPositionInMine1=='1')
                {
                document.getElementById('rdbPositionInMine').focus();
                }              
                
                if(strtxt_ApplicantDob1=='1')
                {
                document.getElementById('txt_ApplicantDob').focus();
                }
                if(strtxt_ApplicantFFirstname1=='1')
                {
                document.getElementById('txt_ApplicantFFirstname').focus();
                }
                if(strddl_ApplicantFTitle1=='1')
                {
                document.getElementById('ddl_ApplicantFTitle').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_ApplicantFirstname').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_ApplicantTitle').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeIndividual').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }
            return false;
            }
            
            else if(document.getElementsByName('rdblApplicantCategory')[2].checked == true)
            {
                if(strtxt_Capta1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('txt_Capta').focus();
                }
                if(strtxt_SecurityAnswer1=='1')
                {
                document.getElementById('txt_SecurityAnswer').focus();
                }
                if(strddl_SecurityQuestion1=='1')
                {
                document.getElementById('ddl_SecurityQuestion').focus();
                }     
                if(strIecode1=='1')
                {
                document.getElementById('txt_IecodeAssociate').focus();
                }
                if(panvalue1=='1')
                {
                document.getElementById('txt_PanAssociate').focus();
                } 
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OPhoneNumAssociate').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OPhoneCodeAssociate').focus();
                }
                 if(emailvalue1=='1')
                {
                document.getElementById('txt_EmailAssociate').focus();
                }
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_PincodeAssociate').focus();
                }
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_DistrictAssociate').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_StateAssociate').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_Address1Associate').focus();
                }                
               
                if(strtxt_ApplicantDob1=='1')
                {
                document.getElementById('txt_DobAssociate').focus();
                }
                if(strtxt_ApplicantFFirstname1=='1')
                {
                document.getElementById('txt_FFirstnameAssociate').focus();
                }
                if(strddl_ApplicantFTitle1=='1')
                {
                document.getElementById('ddl_FTitleAssociate').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_FNameAssociate').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_TitleAssociate').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeAssociate').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }
                
              return false;  
            }
            
            else if(document.getElementsByName('rdblApplicantCategory')[3].checked == true)
            {
                if(strtxt_Capta1=='1')
                {                
                document.getElementById('txt_Capta').focus();
                }
                if(strtxt_SecurityAnswer1=='1')
                {
                document.getElementById('txt_SecurityAnswer').focus();
                }
                if(strddl_SecurityQuestion1=='1')
                {
                document.getElementById('ddl_SecurityQuestion').focus();
                }     
                if(strIecode1=='1')
                {
                document.getElementById('txt_IecodeFirm').focus();
                }
                if(strtxt_Firm_CompRegisDate1=='1')
                {
                document.getElementById('txt_FirmRegisDate').focus();
                }
                if(strddl_Firm_CompRegisState1=='1')
                {
                document.getElementById('ddl_FirmRegisState').focus();
                }               
                
                if(strtxt_Firm_CompRegisNo1=='1')
                {
                document.getElementById('txt_FirmRegisNo').focus();
                }
                
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OPhoneNumFirm').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OPhoneCodeFirm').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_EmailFirm').focus();
                }
                
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_PincodeFirm').focus();
                }
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_DistrictFirm').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_StateFirm').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_Address1Firm').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_FNameFirm').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_TitleFirm').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeFirm').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }
                
              return false;  
            }
            
            else if(document.getElementsByName('rdblApplicantCategory')[4].checked == true)
            {
                if(strtxt_Capta1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('txt_Capta').focus();
                }
                if(strtxt_SecurityAnswer1=='1')
                {
                document.getElementById('txt_SecurityAnswer').focus();
                }
                if(strddl_SecurityQuestion1=='1')
                {
                document.getElementById('ddl_SecurityQuestion').focus();
                }     
                if(strIecode1=='1')
                {
                document.getElementById('txt_IecodeCompany').focus();
                }
                if(strtxt_Firm_CompRegisDate1=='1')
                {
                document.getElementById('txt_CompanyRegisDate').focus();
                }
                if(strddl_Firm_CompRegisState1=='1')
                {
                document.getElementById('ddl_CompanyRegisState').focus();
                }
                                
                if(strtxt_Firm_CompRegisNo1=='1')
                {
                document.getElementById('txt_CompanyRegisNo').focus();
                }
                
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OPhoneNumCompany').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OPhoneCodeCompany').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_EmailCompany').focus();
                }                
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_PincodeCompany').focus();
                }
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_DistrictCompany').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_StateCompany').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_Address1Company').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_FNameCompany').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_TitleCompany').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeCompany').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }
                
              return false;  
            }
        }
  }
 else
  {
    if((document.getElementsByName('rdblApplicantCategory')[0].checked != true)&& (document.getElementsByName('rdblApplicantCategory')[1].checked != true)&&(document.getElementsByName('rdblApplicantCategory')[2].checked != true)&&(document.getElementsByName('rdblApplicantCategory')[3].checked!=true))
        {
           strrdblApplicantCategory =arrow + 'Please select applicant category\n';
           strrdblApplicantCategory1='1';
        } 
        else
        {
           if(document.getElementsByName('rdblApplicantCategory')[0].checked == true)
           {
           
              if((document.getElementById('lstBusiActTypeIndividual').value=='')||(document.getElementById('lstBusiActTypeIndividual').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
           
               if(document.getElementById('ddl_ApplicantTitle').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                }
               
                if(document.getElementById('txt_ApplicantFirstname').value=='')
                {
                strtxt_ApplicantFirstname=arrow + 'Please enter first name\n';
                strtxt_ApplicantFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                
                if(document.getElementById('ddl_ApplicantFTitle').value=='--Title--')
                {  
                strddl_ApplicantFTitle=arrow + 'Please select father title\n';
                strddl_ApplicantFTitle1='1';
                }
               
                if(document.getElementById('txt_ApplicantFFirstname').value=='')
                {
                strtxt_ApplicantFFirstname=arrow + 'Please enter father first name\n';
                strtxt_ApplicantFFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                
                if(document.getElementById('txt_ApplicantDob').value=='')
                {
                strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                strtxt_ApplicantDob1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_ApplicantDob').value!='')
                {
                  var result=isDate(document.getElementById('txt_ApplicantDob').value);
                  if(result<0)
                  {
                  strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                  strtxt_ApplicantDob1='1';
                  }
                  else if(result>1)
                  {
                  strtxt_ApplicantDob=arrow + 'date of birth date must be less than or equal to Today date \n';
                  strtxt_ApplicantDob1='1';
                  }
                }
                               
                if((document.getElementsByName('rdbPositionInMine')[0].checked!=true) && (document.getElementsByName('rdbPositionInMine')[1].checked!=true) && (document.getElementsByName('rdbPositionInMine')[2].checked!=true) && (document.getElementsByName('rdbPositionInMine')[3].checked!=true))
                {
                strrdbPositionInMine=arrow + 'Please select position in mine\n';
                strrdbPositionInMine1='1';
                }
                if(document.getElementById('txt_ApplicantAddress1').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_ApplicantState').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_ApplicantDistrict').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_ApplicantDistrict').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }                  
                if(document.getElementById('txt_ApplicantPin').value=='')
                {
                strtxt_ApplicantPin=arrow + 'Please enter pincode\n';
                strtxt_ApplicantPin1='1';
                }
                if(document.getElementById('txt_ApplicantEmail').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_ApplicantEmail').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_ApplicantEmail').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }    
                if(document.getElementById('txt_OfficePhoneCode').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OfficePhoneNum').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                
                if(document.getElementById('txt_ApplicantPan').value=='')
                {
                panvalue=arrow + 'Please enter PAN number\n';
                panvalue1='1';   
                }
                
                if(document.getElementById('txt_ApplicantPan').value!='')
                {   
                var pan=ValidationPan(document.getElementById('txt_ApplicantPan').value);   
                if(pan<=0)
                {
                panvalue=arrow + 'Invalid PAN number\n';   
                panvalue1='1';
                }
                }
                
                if((document.getElementById('txt_VoterID').value=='') && (document.getElementById('txt_ApplicantPassportNo').value=='') && (document.getElementById('txt_ApplicantDrivingNo').value==''))
                {
                strVoterPassportDriving=arrow + 'Please enter either one(VoterID/Passport/Driving Licence) or all\n';
                strVoterPassportDriving1='1';
                }
                
                if(document.getElementById('txt_VoterID').value!='')
                {   
                var voterid=ValidationVoterID(document.getElementById('txt_VoterID').value);   
                if(voterid<=0)
                {
                voteridvalue=arrow + 'Invalid VoterID number\n';   
                voteridvalue1='1';
                }
                }              
                
                if(document.getElementById('txt_ApplicantPassportNo').value!='')
                {   
                var passport=ValidationPassport(document.getElementById('txt_ApplicantPassportNo').value);   
                if(passport<=0)
                {
                passportvalue=arrow + 'Invalid Passport number\n';   
                passportvalue1='1';
                }
                }
                if(document.getElementById('txt_Iecode').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }      
                if(document.getElementById('ddl_SecurityQuestion').value=='--Choose a question--')
                {
                strddl_SecurityQuestion=arrow + 'Please choose security question\n';
                strddl_SecurityQuestion1='1';
                }
                if(document.getElementById('txt_SecurityAnswer').value=='')
                {
                strtxt_SecurityAnswer=arrow + 'Please enter security answer\n';
                strtxt_SecurityAnswer1='1';
                }   
                if(document.getElementById('txt_Capta').value=='')
                {
                strtxt_Capta=arrow + 'Please enter code\n';
                strtxt_Capta1='1';
                }
           }
            
           else if(document.getElementsByName('rdblApplicantCategory')[1].checked == true)
            {
            
                if((document.getElementById('lstBusiActTypeAssociate').value=='')||(document.getElementById('lstBusiActTypeAssociate').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
                    
                if(document.getElementById('ddl_TitleAssociate').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                
                    if(document.getElementById('txt_FNameAssociate').value=='')
                    {
                    strtxt_ApplicantFirstname=arrow + 'Please enter first name\n';
                    strtxt_ApplicantFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    } 
                    
                    if(document.getElementById('ddl_FTitleAssociate').value=='--Title--')
                    {  
                    strddl_ApplicantFTitle=arrow + 'Please select father title\n';
                    strddl_ApplicantFTitle1='1';
                    }
                   
                    if(document.getElementById('txt_FFirstnameAssociate').value=='')
                    {
                    strtxt_ApplicantFFirstname=arrow + 'Please enter father first name\n';
                    strtxt_ApplicantFFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    
                    if(document.getElementById('txt_DobAssociate').value=='')
                    {
                    strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                    strtxt_ApplicantDob1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    else if(document.getElementById('txt_DobAssociate').value!='')
                    {
                      var result=isDate(document.getElementById('txt_DobAssociate').value);
                      if(result<0)
                      {
                      strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                      strtxt_ApplicantDob1='1';
                      }
                      else if(result>1)
                      {
                      strtxt_ApplicantDob=arrow + 'date of birth date must be less than or equal to Today date \n';
                      strtxt_ApplicantDob1='1';
                      }
                    }                
                 }              
                 else if(document.getElementById('ddl_TitleAssociate').value=='M/S')
                 {
                 
                    if(document.getElementById('txt_FNameAssociate').value=='')
                    {
                    strtxt_ApplicantFirstname=arrow + 'Please enter name\n';
                    strtxt_ApplicantFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    strddl_ApplicantFTitle='';

                    strddl_ApplicantFTitle1='0';

                    strtxt_ApplicantFFirstname='';

                    strtxt_ApplicantFFirstname1='0';

                    strtxt_ApplicantDob='';
                    strtxt_ApplicantDob1='0';
                 
                 }
                 else
                 {
                    strddl_ApplicantTitle='';
                    strddl_ApplicantTitle1='0';
                
                    if(document.getElementById('txt_FNameAssociate').value=='')
                    {
                    strtxt_ApplicantFirstname=arrow + 'Please enter first name\n';
                    strtxt_ApplicantFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    } 
                    
                    if(document.getElementById('ddl_FTitleAssociate').value=='--Title--')
                    {  
                    strddl_ApplicantFTitle=arrow + 'Please select father title\n';
                    strddl_ApplicantFTitle1='1';
                    }
                   
                    if(document.getElementById('txt_FFirstnameAssociate').value=='')
                    {
                    strtxt_ApplicantFFirstname=arrow + 'Please enter father first name\n';
                    strtxt_ApplicantFFirstname1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    
                    if(document.getElementById('txt_DobAssociate').value=='')
                    {
                    strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                    strtxt_ApplicantDob1='1';
                    //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                    }
                    else if(document.getElementById('txt_DobAssociate').value!='')
                    {
                      var result=isDate(document.getElementById('txt_DobAssociate').value);
                      if(result<0)
                      {
                      strtxt_ApplicantDob=arrow + 'Please enter date of birth of 10 digit in correct format dd/mm/yyyy \n';
                      strtxt_ApplicantDob1='1';
                      }
                      else if(result>1)
                      {
                      strtxt_ApplicantDob=arrow + 'date of birth date must be less than or equal to Today date \n';
                      strtxt_ApplicantDob1='1';
                      }
                    }                
                 }        
                
                if(document.getElementById('txt_Address1Associate').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_StateAssociate').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_DistrictAssociate').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_DistrictAssociate').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }                                  
                if(document.getElementById('txt_PincodeAssociate').value=='')
                {
                strtxt_ApplicantPin=arrow + 'Please enter pincode\n';
                strtxt_ApplicantPin1='1';
                }
                if(document.getElementById('txt_EmailAssociate').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_EmailAssociate').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_EmailAssociate').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }       
                if(document.getElementById('txt_OPhoneCodeAssociate').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OPhoneNumAssociate').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                
                if(document.getElementById('txt_PanAssociate').value=='')
                {
                panvalue=arrow + 'Please enter PAN number\n';
                panvalue1='1';   
                }
                
                if(document.getElementById('txt_PanAssociate').value!='')
                {   
                var pan=ValidationPan(document.getElementById('txt_PanAssociate').value);   
                if(pan<=0)
                {
                panvalue=arrow + 'Invalid PAN number\n';   
                panvalue1='1';
                }
                }
                if(document.getElementById('txt_IecodeAssociate').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }
                if(document.getElementById('ddl_SecurityQuestion').value=='--Choose a question--')
                {
                strddl_SecurityQuestion=arrow + 'Please choose security question\n';
                strddl_SecurityQuestion1='1';
                }
                if(document.getElementById('txt_SecurityAnswer').value=='')
                {
                strtxt_SecurityAnswer=arrow + 'Please enter security answer\n';
                strtxt_SecurityAnswer1='1';
                }                                      
                if(document.getElementById('txt_Capta').value=='')
                {
                strtxt_Capta=arrow + 'Please enter code\n';
                strtxt_Capta1='1';
                }
            }
            
            
            else if(document.getElementsByName('rdblApplicantCategory')[2].checked == true)
            {
           
                if((document.getElementById('lstBusiActTypeFirm').value=='')||(document.getElementById('lstBusiActTypeFirm').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
                    
                if(document.getElementById('ddl_TitleFirm').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                }
               
                if(document.getElementById('txt_FNameFirm').value=='')
                {
                strtxt_ApplicantFirstname=arrow + 'Please enter name\n';
                strtxt_ApplicantFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }               
                
                if(document.getElementById('txt_Address1Firm').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_StateFirm').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_DistrictFirm').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_DistrictFirm').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }                  
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_PincodeFirm').focus();
                }
                if(document.getElementById('txt_EmailFirm').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_EmailFirm').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_EmailFirm').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }    
                if(document.getElementById('txt_OPhoneCodeFirm').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OPhoneNumFirm').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_FirmRegisNo').value=='')
                {
                strtxt_Firm_CompRegisNo=arrow + 'Please enter registration number\n';
                strtxt_Firm_CompRegisNo1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                
                if((document.getElementById('ddl_FirmRegisState').value=='') || (document.getElementById('ddl_FirmRegisState').value=='--Select State--'))
                {
                strddl_Firm_CompRegisState=arrow + 'Please select registration state\n';
                strddl_Firm_CompRegisState1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_FirmRegisDate').value=='')
                {
                strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                strtxt_Firm_CompRegisDate1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                else if(document.getElementById('txt_FirmRegisDate').value!='')
                {
                  var result=isDate(document.getElementById('txt_FirmRegisDate').value);
                  if(result<0)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                  else if(result>1)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'date of registration must be less than or equal to Today date \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                }
                if(document.getElementById('txt_IecodeFirm').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }
                if(document.getElementById('ddl_SecurityQuestion').value=='--Choose a question--')
                {
                strddl_SecurityQuestion=arrow + 'Please choose security question\n';
                strddl_SecurityQuestion1='1';
                }
                if(document.getElementById('txt_SecurityAnswer').value=='')
                {
                strtxt_SecurityAnswer=arrow + 'Please enter security answer\n';
                strtxt_SecurityAnswer1='1';
                }
                if(document.getElementById('txt_Capta').value=='')
                {
                strtxt_Capta=arrow + 'Please enter code\n';
                strtxt_Capta1='1';
                }
            }   
            
            else if(document.getElementsByName('rdblApplicantCategory')[3].checked == true)
            {
            
                if((document.getElementById('lstBusiActTypeCompany').value=='')||(document.getElementById('lstBusiActTypeCompany').value=='--Select--'))
                {
                strlstBusiActTypeIndividual=arrow + 'Please select business/activity type\n';
                strlstBusiActTypeIndividual1='1';
                }
                    
                if(document.getElementById('ddl_TitleCompany').value=='--Title--')
                {  
                strddl_ApplicantTitle=arrow + 'Please select title\n';
                strddl_ApplicantTitle1='1';
                }
               
                if(document.getElementById('txt_FNameCompany').value=='')
                {
                strtxt_ApplicantFirstname=arrow + 'Please enter name\n';
                strtxt_ApplicantFirstname1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }               
                
                if(document.getElementById('txt_Address1Company').value=='')
                {
                strtxt_ApplicantAddress1=arrow + 'Please enter address\n';
                strtxt_ApplicantAddress11='1';
                //document.getElementById('txt_BusinessAddress1').focus();
                }  
                if(document.getElementById('ddl_StateCompany').value=='--Select State--')
                {
                strddl_ApplicantState=arrow + 'Please select state\n';
                strddl_ApplicantState1='1';
                //document.getElementById('ddl_BusinessState').focus();
                }
                if(document.getElementById('ddl_DistrictCompany').value=='')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }
                if(document.getElementById('ddl_DistrictCompany').value=='--Select District--')
                {
                strddl_ApplicantDistrict=arrow + 'Please select district\n';
                strddl_ApplicantDistrict1='1';
                //document.getElementById('ddl_BusinessDistrict').focus();
                }                  
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_PincodeCompany').focus();
                }
                if(document.getElementById('txt_EmailCompany').value=='')
                {
                emailvalue=arrow + 'Please enter Email ID\n';
                emailvalue1='1';
                //alert('in strtxt_BusinessFirstname1: ' + strtxt_BusinessFirstname1);
                }
                else if(document.getElementById('txt_EmailCompany').value!='')
                {
                var emval=ValidateEmail(document.getElementById('txt_EmailCompany').value);
                    if(emval<=0)
                    {
                    emailvalue=arrow + 'Invalid Email ID\n';
                    emailvalue1='1';
                    }
                }       
                if(document.getElementById('txt_OPhoneCodeCompany').value=='')
                {
                strtxt_OfficePhoneCode=arrow + 'Please enter phone code\n';
                strtxt_OfficePhoneCode1='1';
                //document.getElementById('txt_OfficePhoneCode1').focus();
                }
                if(document.getElementById('txt_OPhoneNumCompany').value=='')
                {
                strtxt_OfficePhoneNum=arrow + 'Please enter phone number\n';
                strtxt_OfficePhoneNum1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_CompanyRegisNo').value=='')
                {
                strtxt_Firm_CompRegisNo=arrow + 'Please enter registration number\n';
                strtxt_Firm_CompRegisNo1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }
                
                if((document.getElementById('ddl_CompanyRegisState').value=='') || (document.getElementById('ddl_CompanyRegisState').value=='--Select State--'))
                {
                strddl_Firm_CompRegisState=arrow + 'Please select registration state\n';
                strddl_Firm_CompRegisState1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                
                if(document.getElementById('txt_CompanyRegisDate').value=='')
                {
                strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                strtxt_Firm_CompRegisDate1='1';
                //document.getElementById('txt_OfficePhoneNum1').focus();
                }                
                else if(document.getElementById('txt_CompanyRegisDate').value!='')
                {
                  var result=isDate(document.getElementById('txt_CompanyRegisDate').value);
                  if(result<0)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'Please enter date of registration of 10 digit in correct format dd/mm/yyyy \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                  else if(result>1)
                  {
                  strtxt_Firm_CompRegisDate=arrow + 'date of registration must be less than or equal to Today date \n';
                  strtxt_Firm_CompRegisDate1='1';
                  }
                }
                if(document.getElementById('txt_IecodeCompany').value=='')
                {
                strIecode=arrow + 'Please enter IE code\n';
                strIecode1='1';
                }
                if(document.getElementById('ddl_SecurityQuestion').value=='--Choose a question--')
                {
                strddl_SecurityQuestion=arrow + 'Please choose security question\n';
                strddl_SecurityQuestion1='1';
                }
                if(document.getElementById('txt_SecurityAnswer').value=='')
                {
                strtxt_SecurityAnswer=arrow + 'Please enter security answer\n';
                strtxt_SecurityAnswer1='1';
                }                                    
                if(document.getElementById('txt_Capta').value=='')
                {
                strtxt_Capta=arrow + 'Please enter code\n';
                strtxt_Capta1='1';
                }
            }   
        }

        concatAll=strrdblApplicantCategory+strlstBusiActTypeIndividual+strddl_ApplicantTitle+strtxt_ApplicantFirstname+strddl_ApplicantFTitle+strtxt_ApplicantFFirstname+strtxt_ApplicantDob+strrdbPositionInMine+strtxt_ApplicantAddress1+strddl_ApplicantState+strddl_ApplicantDistrict+strtxt_ApplicantPin+emailvalue+strtxt_OfficePhoneCode+strtxt_OfficePhoneNum+panvalue+strVoterPassportDriving+voteridvalue+passportvalue+strtxt_Firm_CompRegisNo+strddl_Firm_CompRegisState+strtxt_Firm_CompRegisDate+strIecode+strddl_SecurityQuestion+strtxt_SecurityAnswer+strtxt_Capta;
    
        if(concatAll.length > 0)
        {
            alert(strErrorinDataSubmiting+strDoubleNextLine+ShowAllMessageForApplicantDetail+strSingleNextLine+concatAll);
            
            if(document.getElementsByName('rdblApplicantCategory')[0].checked == true)
            {
                if(strtxt_Capta1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('txt_Capta').focus();
                }
                if(strtxt_SecurityAnswer1=='1')
                {
                document.getElementById('txt_SecurityAnswer').focus();
                }
                if(strddl_SecurityQuestion1=='1')
                {
                document.getElementById('ddl_SecurityQuestion').focus();
                }                
                if(strIecode1=='1')
                {
                document.getElementById('txt_Iecode').focus();
                }
                
                if(passportvalue1=='1')
                {
                document.getElementById('txt_ApplicantPassportNo').focus();                
                }
                
                if(voteridvalue1=='1')
                {
                document.getElementById('txt_VoterID').focus();                
                }
                if(strVoterPassportDriving1=='1')
                {                
                document.getElementById('txt_VoterID').focus();                
                }
                
                if(panvalue1=='1')
                {
                document.getElementById('txt_ApplicantPan').focus();
                }
                
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OfficePhoneNum').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OfficePhoneCode').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_ApplicantEmail').focus();
                }
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_ApplicantPin').focus();
                }
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_ApplicantDistrict').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_ApplicantState').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_ApplicantAddress1').focus();
                }
                if(strrdbPositionInMine1=='1')
                {
                document.getElementById('rdbPositionInMine').focus();
                }                
                
                if(strtxt_ApplicantDob1=='1')
                {
                document.getElementById('txt_ApplicantDob').focus();
                }
                if(strtxt_ApplicantFFirstname1=='1')
                {
                document.getElementById('txt_ApplicantFFirstname').focus();
                }
                if(strddl_ApplicantFTitle1=='1')
                {
                document.getElementById('ddl_ApplicantFTitle').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_ApplicantFirstname').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_ApplicantTitle').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeIndividual').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }
            return false;
            }
            
            else if(document.getElementsByName('rdblApplicantCategory')[1].checked == true)
            {
                if(strtxt_Capta1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('txt_Capta').focus();
                }
                if(strtxt_SecurityAnswer1=='1')
                {
                document.getElementById('txt_SecurityAnswer').focus();
                }
                if(strddl_SecurityQuestion1=='1')
                {
                document.getElementById('ddl_SecurityQuestion').focus();
                }

                if(strIecode1=='1')
                {
                document.getElementById('txt_IecodeAssociate').focus();
                }               
                if(panvalue1=='1')
                {
                document.getElementById('txt_PanAssociate').focus();
                } 
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OPhoneNumAssociate').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OPhoneCodeAssociate').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_EmailAssociate').focus();
                }
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_PincodeAssociate').focus();
                }
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_DistrictAssociate').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_StateAssociate').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_Address1Associate').focus();
                }
                
                
                if(strtxt_ApplicantDob1=='1')
                {
                document.getElementById('txt_DobAssociate').focus();
                }
                if(strtxt_ApplicantFFirstname1=='1')
                {
                document.getElementById('txt_FFirstnameAssociate').focus();
                }
                if(strddl_ApplicantFTitle1=='1')
                {
                document.getElementById('ddl_FTitleAssociate').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_FNameAssociate').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_TitleAssociate').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeAssociate').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }
                
              return false;  
            }
            
            else if(document.getElementsByName('rdblApplicantCategory')[2].checked == true)
            {
                if(strtxt_Capta1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('txt_Capta').focus();
                }
                if(strtxt_SecurityAnswer1=='1')
                {
                document.getElementById('txt_SecurityAnswer').focus();
                }
                if(strddl_SecurityQuestion1=='1')
                {
                document.getElementById('ddl_SecurityQuestion').focus();
                }

               if(strIecode1=='1')
               {
               document.getElementById('txt_IecodeFirm').focus();
               }
                               
                if(strtxt_Firm_CompRegisDate1=='1')
                {
                document.getElementById('txt_FirmRegisDate').focus();
                }
                if(strddl_Firm_CompRegisState1=='1')
                {
                document.getElementById('ddl_FirmRegisState').focus();
                }
                
                if(strtxt_Firm_CompRegisNo1=='1')
                {
                document.getElementById('txt_FirmRegisNo').focus();
                }
                
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OPhoneNumFirm').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OPhoneCodeFirm').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_EmailFirm').focus();
                }
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_PincodeFirm').focus();
                }
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_DistrictFirm').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_StateFirm').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_Address1Firm').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_FNameFirm').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_TitleFirm').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeFirm').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }
                
              return false;  
            }
            
            else if(document.getElementsByName('rdblApplicantCategory')[3].checked == true)
            {
                if(strtxt_Capta1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('txt_Capta').focus();
                }
                if(strtxt_SecurityAnswer1=='1')
                {
                document.getElementById('txt_SecurityAnswer').focus();
                }
                if(strddl_SecurityQuestion1=='1')
                {
                document.getElementById('ddl_SecurityQuestion').focus();
                }

                if(strIecode1=='1')
                {
                document.getElementById('txt_IecodeCompany').focus();
                }                
                if(strtxt_Firm_CompRegisDate1=='1')
                {
                document.getElementById('txt_CompanyRegisDate').focus();
                }
                if(strddl_Firm_CompRegisState1=='1')
                {
                document.getElementById('ddl_CompanyRegisState').focus();
                }               
                
                if(strtxt_Firm_CompRegisNo1=='1')
                {
                document.getElementById('txt_CompanyRegisNo').focus();
                }
                
                if(strtxt_OfficePhoneNum1=='1')
                {
                document.getElementById('txt_OPhoneNumCompany').focus();
                }
                if(strtxt_OfficePhoneCode1=='1')
                {
                document.getElementById('txt_OPhoneCodeCompany').focus();
                }
                if(emailvalue1=='1')
                {
                document.getElementById('txt_EmailCompany').focus();
                }
                if(strtxt_ApplicantPin1=='1')
                {
                document.getElementById('txt_PincodeCompany').focus();
                }
                if(strddl_ApplicantDistrict1=='1')
                {
                document.getElementById('ddl_DistrictCompany').focus();
                }
                if(strddl_ApplicantState1=='1')
                {
                document.getElementById('ddl_StateCompany').focus();
                }
                if(strtxt_ApplicantAddress11=='1')
                {
                document.getElementById('txt_Address1Company').focus();
                }
                
                if(strtxt_ApplicantFirstname1=='1')
                {
                document.getElementById('txt_FNameCompany').focus();
                }
                                        
                if(strddl_ApplicantTitle1=='1')
                {
                //alert('again in strddl_BusinessTitle1: ' + strddl_BusinessTitle1);
                document.getElementById('ddl_TitleCompany').focus();
                }
                if(strlstBusiActTypeIndividual1=='1')
                {            
                 document.getElementById('lstBusiActTypeCompany').focus();
                }
                if(strrdblApplicantCategory1=='1')
                {
                document.getElementById('rdblApplicantCategory').focus();
                }                
              return false;  
            }
        }       
  }
}
 
}

function ValidationPan(panval)
{
//alert('entre: ' + panval);
    var a=panval;
    var regex1=/^[A-Z]{3}[C,P,H,F,A,T,B,L,J,G]{1}[A-Z]{1}\d{4}[A-Z]{1}$/;  //this is the pattern of regular expersion
    //var regex1=/^[A-Z]{5}\d{4}[A-Z]{1}$/;  //this is the pattern of regular expersion
    if(regex1.test(a)== false)
    {
        //alert(a);
        return -1;   
    }  
    return 1;  
}

function ValidationVoterID(voteridval)
{
//alert('entre: ' + panval);
    var a=voteridval;
    var regex1=/^[A-Z]{3}\d{7}$/;  //this is the pattern of regular expersion
    if(regex1.test(a)== false)
    {
        //alert(a);
        return -1;   
    }  
    return 1;  
}


function ValidationPassport(passportval)
{
//alert('entre: ' + panval);
    var a=passportval;
    var regex1=/^[A-Z]{1}\d{7}$/;  //this is the pattern of regular expersion
    if(regex1.test(a)== false)
    {
        //alert(a);
        return -1;   
    }  
    return 1;  
}


function ValidateEmail(email) 
{
    var address = email;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;   
   if(reg.test(address) == false) 
   {
     // alert('Invalid Email Address');
      return -1;
   }
   return 1;
}

function isDate(registrationdt)
{            
     var registrationdate=registrationdt;
    
   if(((registrationdate.length < 10 && registrationdate.length>=1)||(registrationdate.length > 10)))
    {
      //alert('Please Enter Date of 10 digit in correct format dd/mm/yyyy');
      return -1;
    }    
    
    if(registrationdate!='')
    {

        var registrationdatearray=new Array();
        registrationdatearray=(registrationdate.split("/"));
        var dd1,mm1,yyyy1;
        dd1=registrationdatearray[0];
        mm1=registrationdatearray[1];
        yyyy1=registrationdatearray[2];
        
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
      
        var slash1=registrationdate.substring(2,3);//pick 1st slash from FromDate 
        var slash2=registrationdate.substring(5,6);//pick 2nd slash from FromDate
       
        if(((slash1 != '/') || (slash2 != '/')))
        {
          //alert('Please Enter Date of 10 digit in correct format dd/mm/yyyy');
          return -1;
        }
        else
        {            
               //Comparision for From Date and Today Date
                //From Date must be less than or Equal To Today Date
                if(yyyy1==yyyytoday)
                {
                    if(mm1==mmtoday)
                    {
                        if(dd1 <= ddtoday)
                        {
                            //strMsg2 = '';                            
                        }
                        else
                        {
                            //strMsg2 = arrow + 'Establishment Date must be less than or Equal To Today Date \n';
                            return 2;
                        }
                    }
                    else 
                    {
                        if(mm1>mmtoday)
                        {
                            //strMsg2 = arrow + 'Establishment Date must be less than or Equal To Today Date \n';
                            return 2;
                        }
                        else
                        {
                            //strMsg2 = '';
                        }                        
                    }
                }
                else
                {
                    if(yyyy1>yyyytoday)
                    {    
                        //strMsg2 = arrow + 'Establishment Date must be less than or Equal To Today Date \n';
                        return 2;
                    }
                    else
                    {
                        //strMsg2 = '';
                    }                        
                }
         }		
	}
return 1;
}