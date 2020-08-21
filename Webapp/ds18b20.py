#!/usr/bin/python3
#-*- coding: utf-8 -*-
import time, sys

# /sys/bus/w1/devices/deviceID/w1_slave
sensor = 'your path to the first sensor'
sensor2 = 'your path to the first sensor2'
sensor3 = 'your path to the first sensor3'

def readTempSensor(sensorName):
  f = open(sensorName, 'r')
  lines = f.readlines()
  f.close()
  return lines

def readTempLines(sensorName):
  lines = readTempSensor(sensorName)

while lines[0].strip()[-3:] != 'YES':
  time.sleep(0.2)
  lines = readTempSensor(sensorName)
  temperaturStr = lines[1].find('t=')
  if temperaturStr != -1:
     tempData = lines[1][temperaturStr+2:]
     tempCelsius = float(tempData)/1000.0
     return [tempCelsius]
