
'Speed Trials 	0:24 Firefox
'Speed Trials 	0:23 IE 
'Speed Trials 	0:27 Chrome
'All three 		1:15 

ALX "Say 'Test #1: Verify CandyMapper displays 'blank email' error message in Chrome'"
ALX "Launch 'www.CandyMapper.com' in Chrome" 
ALX "Click on the 'Get In Touch' Button"
ALX "Enter 'Paul' into the 'Name' Field"  'Two quoted values 
ALX "Click on the 'Send' button" 
ALX "Verify 'Please enter a valid email address' text appears" 
ALX "Enter 'qtpmgrossman@gmail.com' into 'Email' field"	
ALX "Enter 'Hello' into the 'Message' Field"
ALX "Click on the 'Send' button"
ALX "Verify the 'Thank you for your inquiry' text appears"	


'Declare replacible {Smart Tokens}
TOKEN "CandyMapper", "www.CandyMapper.com"

'IE
ALX "Say 'Test #2: Verify CandyMapper displays 'blank email' error message in Firefox'"
ALX "Launch {CandyMapper} in Firefox"    'Token Replacement 
ALX "Click on the 'Get In Touch' Button" 'Single quotes instead of doubled quotes
ALX "Enter 'Paul' into the 'Name' Field"  
ALX "Click 'Send' Button"
ALX "Verify 'Please enter a valid email address'" 
ALX "Enter 'qtpmgrossman@gmail.com' into the 'Email' field"	
ALX "Enter 'Hello' into the 'Message' Field"	
ALX "Click 'Send' Button"
ALX "Verify 'Thank you for your inquiry' text appears"	

'Assumed Say Comment
ALX "Test #3: Verify CandyMapper displays 'blank email' error message in IE"
ALX "Launch in IE"  'Assume reuse last URL, IE and Explorer 
ALX "Click 'Get In Touch'"	'Class assumption
ALX "Enter Paul into Name" 'Data from Name, with class assumption  
ALX "Click Send"' No single quotes, class assumption
ALX "Verify 'Please enter a valid email address'" 'Assumed Appears validation
ALX "Enter qtpmgrossman@gmail.com into Email"	
ALX "Enter Hello into Message"	
ALX "Click Send"
ALX "Verify 'Thank you for you inquiry'" 'Intentional error
'Balanced Sync/Wait
