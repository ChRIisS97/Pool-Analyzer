[![forthebadge made-with-python](http://ForTheBadge.com/images/badges/made-with-python.svg)](https://www.python.org/)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)


![alt text](https://github.com/ChRIisS97/Pool-Analyzer/blob/master/Pictures/Harmony.png)

![alt text](https://github.com/ChRIisS97/Pool-Analyzer/blob/master/Pictures/Harmony2.png)

![alt text](https://github.com/ChRIisS97/Pool-Analyzer/blob/master/Pictures/Screenshot%20(36).png)

# components
```
Hardware used
> Raspberry Pi with Raspbian OS (Lite/Desktop)
> ds18b20 (Temperature sensor)
> Outdoor case
> pH/Chlorine/Conductivity sensor (Coming soon)

Software used
> Python (latest release)
> Pip (Packagemanager for Python)
> Flask (Server application)
```

<br>

# How to - Pre installation 
> 1 - Download **Raspbian OS** (Lite OR Default) [RaspberryPi.org](https://www.raspberrypi.org/downloads/)
```
https://www.raspberrypi.org/downloads/
```

> 2 - install **Python** [Python Website](https://www.python.org/downloads/)
```ruby
sudo apt install python3 idle3
```

> 3 - install **Pip** (Not required for Raspbian OS Default) [Pip Manager](https://www.raspberrypi.org/documentation/linux/software/python.md)
```ruby
For Python3 -> sudo apt install python3-pip 
For Python2 -> sudo apt install python-pip
```

> 4 - Download Pool-Analyzer Zip [PoolAnalyzer Zip](https://github.com/ChRIisS97/Pool-Analyzer)
```
Download Pool-Analyzer und unzip it 
```

> 5 - Go into dictionary **Webapp** and run [Flask Framework](https://palletsprojects.com/p/flask/)
```ruby
Pip install flask 
```

> 6 - put your temperature sensors in file ds18b20.py [Connect Sensors](https://raspberryautomation.com/connect-multiple-ds18b20-temperature-sensors-to-a-raspberry-pi/)
```
First look for your sensornames
https://raspberryautomation.com/connect-multiple-ds18b20-temperature-sensors-to-a-raspberry-pi/
```
```ruby
Put your path for each sensornames in one variable 
sensor = '/sys/bus/w1/devices/28-02069177028a/w1_slave' - example
sensor2 = 'your path to the second sensor2'
sensor3 = 'your path to the third sensor3'
```

<br>

# How to - Start App 
> 1 - Then run this comand in your commandline
```ruby
Go into Webapp and run -> python app.py
```

<br> 

# Authors
> **Christopher Himann** - *Initial work* - *Further development* - 

# License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

# Acknowledgments
inspiration : [ICO](https://ondilo.com/en/) or [Hydropi](https://myhydropi.com/pool-monitor)

