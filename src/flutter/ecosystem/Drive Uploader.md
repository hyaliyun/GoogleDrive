
# Google Drive Uploader Bot
  
`It Was my first Python Project And behind this  Whole credit goes To ` [CyberBoySumanjay](https://github.com/cyberboysumanjay) 

### Inspired By Sumanjay  Bot :D [Google Drive Uploader](https://telegram.dog/driveuploadbot)

Here Is Live Version Of Bot  [Gdriveupme_bot](http://telegram.dog/gdriveupme_bot)



# Update (30 May 2020)

- Teamdrive Support added 


`Teamdrive is not for users You have to hardcode it ,`
`Wait for V2 bot This Bot don't have active development I will add User Specfic Teamdrive option`

# How can You Add Teamdrive
-  Replace `TEAMDRIVE_FOLDER_ID` and `TEAMDRIVE_ID` in [creds.py](./creds.py) 


### What Is this ?
 ```
   A Telegram Bot Written In Python 

 ```
 ### what can it do ?

 ```  
 It Can Upload Your Direct and Supported links into Google Drive.

 ```
### Install Module 
```
  sudo pip3 install -r requirements.txt
```
### Run This bot
```
python3 bot.py
```
 ### How Can We use It 
  - First authorise Bot Using `/auth` command Generate a Key and send it To bot .
  - Now You can Send Supported Link To Bot.

### Avalible Commands
  - `/start` =  Start Message
  - `/auth` = Authorise You
  - `/revoke` = Delete Your Saved credential
  - `/help` =  help Text

## Supported Links : 
 - Direct Link
 - Mega.nz Link
 - openload link (not avalibe anymore)
 - Dropbox Link

## Requirements
  - [Google Drive api Credential](https://console.cloud.google.com/apis/credentials) (Others type)  `Required`
  - Telegram Bot Token (Using BotFather)  `Required`
  - Openload ftp login and Key  `optional`
  - Mega Email and Password  `Optional`

 ` If You  wanna Change Openload Api and Mega Email Password You Can Change it From Given Path`
   - Mega => Plugins > TEXT.py
   - Openload  => Plugins > dlopenload.py

## Setup Your Own Bot
```
1. Create Your  [Google Drive api Credential](https://console.cloud.google.com/apis/credentials) (other type) and Download  Its json

2. Paste it In Bot Root Directroy  and Rename it "client_secrets.json"

3. Replace Your Bot Token in  [creds.py file]

4. Your Bot is Ready to Host. 
```

