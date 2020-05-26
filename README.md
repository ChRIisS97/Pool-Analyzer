# Pool-Analyzer

A small project that takes care of your pool and informs you how your pool is doing. That means you get information about chlorine content, pH-value, conductivity of the water and more.. .

![alt text](https://github.com/ChRIisS97/Pool-Analyzer/blob/master/Screenshot%20(32).png)
**Working prototyp Version 0.4**


# Description
The idea was born because my dad always measured the chlorine content and pH value by hand. This means small tablets that change colour on contact with the water. With this you could estimate how much you have to add to bring the values back to the optimal range.  Unfortunately this is not very efficient and accurate. Hence this small project with an esp32 and the Internet of Things

still in process and can receive changes but hope it will give you a small impression


# What do you need

```
> Esp32 or 8266 or some other boards with wifi
> The Arduino IDE
> Some Sensor like the temperaturesensor DS18B20
> The SPIFFS filesystem 
```


# My Sensors for this project

- Ph Sensor [link here](https://www.dfrobot.com/product-1110.html)
- Conductivity Sensor [link here](https://www.dfrobot.com/product-1123.html)
- Chlorine Sensor [link here](https://www.dfrobot.com/product-1071.html)
- 2 Temperature Sensors [link here](https://www.dfrobot.com/product-689.html)
- voltage Sensor for autarkic operation [link here](https://www.dfrobot.com/search-voltage.html)

# instructions 

```
> Download files
> Load the SPIFFS filesystem to your Arduino IDE
> Creat a new folder with the name data in the filesystem for your HTML & CSS & JS files
> Load the Arduino file near to yor data folder and upload to your Esp 
> Check your Serial Monitor and type the IP adress in your Browser
```

