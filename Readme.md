
# ccwc - linux cli  command 

A brief description of what this project does and who it's for

# Project Name

Brief project description.

## Installation
0. Use git to clone this project : ``` git clone https://github.com/Mxk01/ccwc-linux-command.git```
1. Copy your JavaScript file to `/usr/local/bin` on Linux.
``` cp ./ccwc.js``` 
2. Navigate to the `/usr/local/bin` directory:

   ```
   cd /usr/local/bin
   ```
    Create a symbolic link named ccwc:
```
    sudo ln -s ./ccwc.js ccwc
```

 
Replace /path/to/ccwc.js with the actual path to your JavaScript file.

Make the script executable:

bash

sudo chmod +x /usr/local/bin/ccwc

This grants execute permissions to the script.

If you encounter errors about missing packages, update your PATH:

bash

    export PATH=$PATH:/usr/local/bin

Usage

Run your script using the created symbolic link:

bash

ccwc

Deleting the Symbolic Link

To remove the symbolic link, run:

bash

sudo rm /usr/local/bin/ccwc
