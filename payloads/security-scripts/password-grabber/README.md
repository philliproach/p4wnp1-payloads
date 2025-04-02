# Password Grabber
Create disk using genimg: /usr/local/P4wnP1/helper/genimg -i -s 50 -o passwords -l passwords
Copy the "tools" directory from this repository to the "passwords" disk
Create a folder named "loot" in the root folder of the "passwords" disk

Copy the "password-grabber.js" script to /usr/local/P4wnP1/HIDScripts/password-grabber.js
You need to setup P4wnP1 USB Gadget Settings as Keyboard and Mass Storage and mount the "passwords" disk you created
Create a trigger action that starts the HID script "password-grabber.js" when USB gadget connected to host
