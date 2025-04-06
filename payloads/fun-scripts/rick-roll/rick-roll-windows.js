//Opens Powershell, turns volume all the way up, closes Powershell and opens rick roll in the default browser

layout('US');
typingSpeed(5,5);
press("GUI r");
delay(100);
type("powershell\n");
delay(3000);
type('$vol = (New-Object -ComObject WScript.Shell)\n');
type('for ($i=0; $i -lt 50; $i++) { $vol.SendKeys([char]175) }\n');
type('Start-Process "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; exit\n');
