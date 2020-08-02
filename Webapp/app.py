from flask import Flask, render_template

from ds18b20 import readTempLines
from ds18b20 import readTempSensor
from ds18b20 import sensor
from ds18b20 import sensor2
from ds18b20 import sensor3

def read_sensor():
    temp_one = readTempSensor(sensor)
    temp_one = str(readTempLines(sensor)[0])
    return(temp_one)

def read_sensor_two():
    temp_two = readTempSensor(sensor2)
    temp_two = str(readTempLines(sensor2)[0])
    return(temp_two)

def read_sensor_three():
    temp_three = readTempSensor(sensor3)
    temp_three = str(readTempLines(sensor3)[0])
    return(temp_three)

app = Flask(__name__)

@app.route('/getDataFromSensor')
def read_sensor():
    temp_one = readTempSensor(sensor)
    temp_one = str(readTempLines(sensor)[0])
    return(temp_one)

@app.route('/getDataFromSensor2')
def read_sensor_two():
    temp_two = readTempSensor(sensor2)
    temp_two = str(readTempLines(sensor2)[0])
    return(temp_two)

@app.route('/getDataFromSensor3')
def read_sensor_three():
    temp_three = readTempSensor(sensor3)
    temp_three = str(readTempLines(sensor3)[0])
    return(temp_three)

@app.route('/')
def index():
    temp_one = read_sensor()
    temp_two = read_sensor_two()
    temp_three =read_ sensor_three()

    return renter_template('index.html', temp_one=temp_one, temp_two=temp_two, temp_three=temp_three)

if __name__ == '__main__':
        app.run(debug=True, host='0.0.0.0')
