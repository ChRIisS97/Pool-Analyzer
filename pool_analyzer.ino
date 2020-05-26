// Import required libraries
#ifdef ESP32
  #include <WiFi.h>
  #include <ESPAsyncWebServer.h>
#else
  #include <Arduino.h>
  #include <ESP8266WiFi.h>
  #include <Hash.h>
  #include <AsyncTCP.h>
  #include <ESPAsyncWebServer.h>
#endif
#include <OneWire.h>
#include <DallasTemperature.h>
#include "SPIFFS.h"

// Data wire is connected to GPIO 4
#define ONE_WIRE_BUS 4   // Sensor 1
#define ONE_WIRE_BUS_ 16 // Sensor 2

// Setup a oneWire instance to communicate with any OneWire devices
OneWire oneWire(ONE_WIRE_BUS);   // Sensor 1
OneWire oneWire2(ONE_WIRE_BUS_); // Sensor 2

// Pass our oneWire reference to Dallas Temperature sensor 
DallasTemperature sensors(&oneWire);   // Sensor 1
DallasTemperature sensors2(&oneWire2); // Sensor 2

// Replace with your network credentials
const char* ssid = "YOURWIFI";
const char* password = "YOURPASSWORD";

AsyncWebServer server(80);

String readDSTemperatureC() {
  // Call sensors.requestTemperatures() to issue a global temperature and Requests to all devices on the bus
  sensors.requestTemperatures(); 
  float tempC = sensors.getTempCByIndex(0);
  
  if(tempC == -127.00) {
    Serial.println("Failed to read from DS18B20 sensor");
    return "--";
  } else {
    Serial.print("Temperature Celsius: ");
    Serial.println(tempC); 
  }
  return String(tempC);
}
String readDSTemperatureS() {
  // Call sensors.requestTemperatures() to issue a global temperature and Requests to all devices on the bus
  sensors2.requestTemperatures(); 
  float tempS = sensors2.getTempCByIndex(0);

  if(tempS == -127.00) {
    Serial.println("Failed to read from DS18B20 sensor");
    return "--";
  } else {
    Serial.print("Temperature Celsius S: ");
    Serial.println(tempS); 
  }
  return String(tempS);
}

String readDBM() {
  long rssi = WiFi.RSSI();
  return String(rssi);
}
String readConnection() {
  long online = WiFi.status();
  if (online == WL_CONNECTED) {
    return String("online");
  } else{
    return String("offine");
  }
}

// Replaces placeholder with DHT values
String processor(const String& var){
  //Serial.println(var);
  if(var == "TEMPC"){
    return readDSTemperatureC();
  }
  if(var == "TEMPS"){
    return readDSTemperatureS();
  }
  else if(var == "DBM"){
    return readDBM();
  }
  else if(var == "CONNECTION"){
    return readConnection();
  }
  return String();
}

void setup(){
  Serial.begin(115200);
  Serial.println();
  // Start up the DS18B20 library
  sensors.begin();
  sensors2.begin();
  
  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  Serial.println("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.println(WiFi.localIP());
  long rssi = WiFi.RSSI();
  Serial.print("RSSI:");
  Serial.println(rssi);

  if(!SPIFFS.begin(true)){
    Serial.println("An Error has occurred while mounting SPIFFS");
    return;
  }
  
  // Route for root / web page
  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send(SPIFFS, "/Webpage.html", String(), false, processor);
  });
  server.on("/style.css", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send(SPIFFS, "/style.css","text/css");
  });
  server.on("/lines.js", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send(SPIFFS, "/lines.js", "text/javascript");
  });
  server.on("/intercation.js", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send(SPIFFS, "/intercation.js", "text/javascript");
  });
  server.on("/Chart.bundle.min.js", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send(SPIFFS, "/Chart.bundle.min.js", "text/javascript");
  });

  server.on("/temperaturec", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send_P(200, "text/plain", readDSTemperatureC().c_str());
  });
  server.on("/temperatures", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send_P(200, "text/plain", readDSTemperatureS().c_str());
  });
  
  /*server.on("/dbm", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send_P(200, "text/plain", readDBM().c_str());
  });
  server.on("/connection", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send_P(200, "text/plain", readConnection().c_str());
  });*/
  server.begin();
}
 
void loop(){
  
}
