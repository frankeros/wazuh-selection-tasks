# Wazuh tests

In this repository you can find some of the tasks required by Wazuh.

### Quick start

You need to clone this repo.
`$ git clone https://github.com/frankeros/wazuh-selection-tasks.git`

### Sections
* [Task 1: Getting familiar with Wazuh](task-1-getting-familiar-with-wazuh)
* [Task 2: Extracting alert information](/task-2)
* [Task 4: Simple API REST with Node.js](/task-4)
* [Task 6: Simple App with React](/task-6/my-app)


## Task 1 Getting familiar with Wazuh

#### 1. What problems did you have?
>I didn’t have any big problem. 
>I found the documentation very clear. But in some pages, at least for me, it was a little hard to found some references. 
>For example, when the ossec-conf file is mentioned, maybe a link to https://documentation.wazuh.com/3.13/user-manual/reference/ossec-conf/index.html would help.

#### 2. What daemons are executed and are active in the background by default when a manager starts?

>You can see they here.

![alt text](https://github.com/frankeros/wazuh-selection-tasks/assets/deamons.png)

#### 3. What physical file stores the agent registry information?
>The Wazuh manager uses the /var/ossec/etc/client.keys file to store the registration record of each Wazuh agent, which includes ID, name, IP, and key.

#### 4. Describe the steps involved to install Wazuh and generate alerts.

>To install Wazuh I followed the [installation guide](https://documentation.wazuh.com/3.13/installation-guide/index.html). 

**Wazuh Manager**
 * First I installed Wuazu server on a Ubuntu host using [packages](https://documentation.wazuh.com/3.13/installation-guide/installing-wazuh-manager/linux/ubuntu/wazuh_server_packages_ubuntu.html), and this services were installed:

    1. Wazhu Manager 
    2. Wazhu Api
    3. Filebeat

* Then I installed the Elastick Stack using [Debian packages](https://documentation.wazuh.com/3.13/installation-guide/installing-elastic-stack/elastic_server_deb.html), and this services were installed:
    1. Elasticsearch
    2. Kibana

>All the services were installed with the default configurations in the localhost (127.0.0.1).

**Wazuh Agent**

* Finally, I installed Wazhu agent into a Windows host using the packages. 
* Then, I configured the Manager IP using the GUI, and I registered the agent with the manager using the [user manual](https://documentation.wazuh.com/3.13/user-manual/registering/index.html).

>Currently, I am not trained to understand all types of alerts, but the logs were showed on the 		Wazuh app.  