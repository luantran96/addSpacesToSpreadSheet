


# Steps to run script:
   1. Open Terminal
   2. Copy the following lines into terminals one by one in the order as shown. Run each line by pressing enter
   ```
    
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
    source ~/.bashrc
    nvm install 6
    
   ```
  3. Click on `Clone or download` and click on Download as ZIP 
  4. Extract the addSpacesToSpreadSheet.zip into a folder
  5. Navigate to addSpacesToSpreadSheet folder in Terminal [(How to navigate to a folder in Terminal)](https://www.macworld.com/article/2042378/master-the-command-line-navigating-files-and-folders.html)
  6. Run this line in Terminal. Make sure you're in the extracted folder of the code
  ```
  
  npm install 
  
  ```
  7. Add the .csv file into the folder 'input' that you want to format. Make sure the file is renamed to 'my.csv'. Inside the csv file, make sure it follows the format shown in the example file (e.g: example.csv)
  8. Run the script by typing:
  
  ```
  
  npm start
  
  ```
   
   9. The newly formatted file will appear in the 'output' folder
   
