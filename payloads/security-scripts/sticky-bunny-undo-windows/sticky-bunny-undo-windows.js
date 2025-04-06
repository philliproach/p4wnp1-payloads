//This script reverts the changes of the sticky-bunny-windows script back to normal.

layout('us');
press("GUI r");
delay(100);
type("powershell Start-Process powershell -Verb runAs\n");
delay(4000);
press("SHIFT TAB");
delay(100);
press("ENTER");
delay(2000);
type("$Acl = Get-Acl sethc.exe\n");
type("$Ar = New-Object  system.security.accesscontrol.filesystemaccessrule('Everyone','ReadAndExecute','Allow')\n");
type("$Acl.SetAccessRule($Ar)\n");
type("Set-Acl sethc.exe $Acl\n");
type("xcopy sethc.exe.bak sethc.exe\n");
delay(200);
press("y");
delay(1000);
type("exit\n");
