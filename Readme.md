
# ccwc - linux cli  command 

## Installation
0. Use git to clone this project : ``` git clone https://github.com/Mxk01/ccwc-linux-command.git```
1. Copy your JavaScript file to `/usr/local/bin` on Linux.
``` cp ./ccwc.js``` 
2. Navigate to the `/usr/local/bin` directory:

   ```
   cd /usr/local/bin
   ```
3.Create a symbolic link named ccwc:
```
    sudo ln -s ./ccwc.js ccwc
```
Make the script executable.This grants execute permissions to the script.:
```sudo chmod +x /usr/local/bin/ccwc```
 
If you encounter errors about missing packages, update your PATH:

  ```  export PATH=$PATH:/usr/local/bin
  ```
Usage

Run your script using the created symbolic link:

```
ccwc test.txt -c -w 
```
Deleting the Symbolic Link

To remove the symbolic link, run:
```
sudo rm /usr/local/bin/ccwc
```
