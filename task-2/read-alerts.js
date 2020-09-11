const fs = require('fs');

const args = process.argv.splice(2);

Date.prototype.isValid = function () {
  // An invalid date object returns NaN for getTime() and NaN is the only
  // object not strictly equal to itself.
  return this.getTime() === this.getTime();
}; 

const printLastAlert = () => {
  try {
    const data = getData().pop();
    if (!data) {
      console.warn('There is not data to read.\n');
      return;
    }
    const info = getInfo(data);
    printInfo(info);
  } catch (error) {
    console.error(error);
  }
};

const getData = () => {
  const content = readFile();
  const items = parseData(content);
  return items;
};

const readFile = () => {
  try {
    return fs.readFileSync('/var/ossec/logs/alerts/alerts.json');
  } catch (error) {
    throw 'Error: The file does not exist.\n';
  }
};

const parseData = (content) => {
  const rawData = content.toString();
  const data = rawData.split('\n');
  if (rawData[rawData.length - 1] === '\n')
    data.splice(-1, 1);
  return data;
};

const getInfo = (raw) => {
  try {
    const log = JSON.parse(raw);
    return {
      'Timestamp': getValue(log, 'timestamp'),
      'Rule ID': getValue(log, 'rule.id'),
      'Rule Level': getValue(log, 'rule.level'),
      'Log file': getValue(log, 'location'),
    };
  } catch (error) {
    throw 'Error: The log is not a valid object';
  }  
}

const getValue = (object, property) => {
  const nestedProperties = property.split('.');
  return nestedProperties.reduce((_object, prop,) => {
    return _object && _object.hasOwnProperty(prop) ? _object[prop] : undefined;
  }, object);
};

const printInfo = (info) => {
  const lines = ['Last alert information:'];
  lines.push(...Object.keys(info).map((key) => {
    return `- ${key}: ${info[key]}`;
  }));
  console.log(lines.join('\n'));
};

const printAlertsGenerated = (rawDate) => {
  const date = new Date(rawDate);
  if(!date.isValid()) {
    console.error('Error: You must send a valid value for --count with the format YYYY/MM/DD');
    return;
  }
  const data = getData();
  let dayAlerts = 0;
  data.every((item) => {
    const log = getInfo(item);    
    const logDate = new Date(new Date(log['Timestamp']).toDateString());

    if(logDate - date === 0)
      ++dayAlerts;
    return logDate <= date;
  });
  console.log(`Alerts generated in ${rawDate}: ${dayAlerts}.`)
}

if(args.indexOf('--count') !== -1) {
  const param = args[args.indexOf('--count') + 1];  
  printAlertsGenerated(param);
} else {
  printLastAlert();
}

