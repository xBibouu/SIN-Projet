import network
import urequests
import time
from uln2003 import *

servoOuvrir = machine.PWM(machine.Pin(13), freq=50)
servoLancer = machine.PWM(machine.Pin(12), freq=50)
servoGauche = machine.PWM(machine.Pin(14), freq=50)
servoDroite = machine.PWM(machine.Pin(27), freq=50)

SSID = "moto g84 5G_7774"
PASSWORD = "bibouprime"

sta_if = network.WLAN(network.STA_IF)

sta_if.active(True)


sta_if.connect(SSID, PASSWORD)

while not sta_if.isconnected():
    pass

print("Connecté au réseau Wi-Fi")

url = "http://172.17.112.127:3000"

while True:
    try:
        response = urequests.get(url)
        data = response.json()
        ouvrir = data['ouvrir']
        fermer = data['fermer']
        lancer = data['lancer']

        haut = data['haut']
        bas = data['bas']
        gauche = data['gauche']
        droite = data['droite']
        if ouvrir == 1:
            servoOuvrir.duty(30)
        if fermer == 1:
            servoOuvrir.duty(0)
        if lancer == 1:
            servoLancer.duty(80)
        if haut == 1:
           servoGauche.duty(130)
           servoDroite.duty(130)
        if bas == 1:
            servoGauche.duty(21)
            servoGauche.duty(21)
        if gauche == 1:
            servoDroite.duty(130)
        if droite == 1:
            servoGauche.duty(21)
    except Exception as e:
        print("Erreur lors de la récupération des données:", e)
        
