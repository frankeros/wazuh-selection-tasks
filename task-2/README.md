# Task 2: Extracting alert information

## Prerequisites
- You should have been installed Node.
- You should have been installed Wazuh Manager.
- All the commands described below need to be executed with root user privileges. 
- The script assumes that alerts are stored in /var/ossec/logs/alerts/alerts.json in the same host that this script is running.


## Executing
### Get last alert information
You must run:
```bash
$ node read-alerts.js
```

### Get total alerts by day
You must run:
```bash
$ node read-alerts.js --count <YYYY/MM/DD>
```
Replace <YYYY/MM/DD> with your desired date value.
*Note: the param count should be a valid date.*