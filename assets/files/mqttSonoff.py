import paho.mqtt.client as mqtt
import time, sys, rrdtool, os

last_topic = ""
last_payload = ""

# main
def on_connect(client, userdata, flags, rc):
    print("Connected")
    client.is_connected = True

def on_message(client, userdata, message):
    ''' note: message is a tuple of (topic, payload, qos, retain)'''
    global last_topic, last_payload
    last_topic = message.topic
    last_payload = message.payload
    if "Factor" in last_payload:
	newpayload = last_payload.split(':')
	#newpayload = map(float, last_payload.split(':'))
	newpayload = newpayload[9]
	newpayload = newpayload[:-9]
	print(newpayload)
	try:
	    Update = 'N:'+ (newpayload)
	    rrdtool.update(
	    "%s/sonoffPwrs.rrd" % (os.path.dirname(os.path.abspath(__file__))),
	    Update)
	except rrdtool.error, e:   
	    pass
    else:
	pass

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.is_connected = False
client.loop_start()
client.connect("localhost")

time.sleep(6)
if not client.is_connected:
    print("problem connecting to the MQTT server; please check your settings")
    sys.exit(1)

client.subscribe("stat/sonoff/POWER")

# wait a little bit
time.sleep(15)

# ask for system status
time.sleep(1)

# now wait for a time stamp from the sonoff; this could take an hour
client.subscribe("tele/sonoff/+")


while 1:
    if last_topic.startswith("tele/") and last_topic.endswith("STATE"):
        locate_time = last_payload.find('"Time":')
        the_time = last_payload[locate_time+8:locate_time+8+19]
        print("the sonoff thinks the time is: "+the_time)
        continue
    time.sleep(5)


client.loop_stop()

client.disconnect()