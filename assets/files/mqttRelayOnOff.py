import paho.mqtt.client as mqtt, time, sys

last_topic = ""
lasy_payload = ""

# main
def on_connect(client, userdata, flags, rc):
    print("Connected")
    client.is_connected = True

def on_message(client, userdata, message):
    ''' note: message is a tuple of (topic, payload, qos, retain)'''
    global last_topic, last_payload
    last_topic = message.topic
    last_payload = message.payload
    print("Got a message with topic: [" + last_topic + "] and payload [" + last_payload + "]")

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.is_connected = False
client.loop_start()
client.connect("control_central")

time.sleep(6)
if not client.is_connected:
    print("problem connecting to the MQTT server; please check your settings")
    sys.exit(1)

client.subscribe("stat/my_house_living_room/POWER")
client.publish("cmnd/my_house_living_room/power","1")

# wait a little bit
time.sleep(15)
client.publish("cmnd/my_house_living_room/power","0")

# ask for system status
time.sleep(1)
client.subscribe("stat/my_house_living_room/STATUS")
client.publish("cmnd/my_house_living_room/status",None)

# now wait for a time stamp from the sonoff; this could take an hour
client.subscribe("tele/my_house_living_room/+")

while 1:
    if last_topic.startswith("tele/") and last_topic.endswith("STATE"):
        locate_time = last_payload.find('"Time":')
        the_time = last_payload[locate_time+8:locate_time+8+19]
        print("the sonoff thinks the time is: "+the_time)
        break
    time.sleep(5)

client.loop_stop()
client.disconnect()