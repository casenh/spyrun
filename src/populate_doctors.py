#!/usr/bin/env python

import random
import json
import subprocess

NAMES = './data/names.txt'
ADDRESSES = './data/addresses.txt'


if __name__ == '__main__':
	# First, open all the necessary files and populate the arrays
	nameFile = open(NAMES, 'r')
	nameArray = []
	for name in nameFile:
		nameArray.append(name[:-1])
	
	addressFile = open(ADDRESSES, 'r')
	digitArray = []
	streetArray = []
	cityArray = []
	stateArray = []
	zipArray = []
	for address in addressFile:
		addressSplit = address.split()
		
		#Get the digits
		digitArray.append(addressSplit[0])

		#Get the street
		index = 1
		street = ""
		while addressSplit[index][len(addressSplit[index]) - 1] != ',':
				street += addressSplit[index]
				street += " " 
				index += 1
		street += addressSplit[index][:-1]
		streetArray.append(street)
		index += 1

		#Get the city
		city = ""
		while addressSplit[index][len(addressSplit[index]) - 1] != ',':
				city += addressSplit[index]
				city += " "
				index += 1
		city += addressSplit[index][:-1]
		cityArray.append(city)
		index += 1

		#Get the state
		state = ""
		while addressSplit[index][len(addressSplit[index]) - 1] != ',':
				state += addressSplit[index]
				state += " "
				index += 1
		state += addressSplit[index][:-1]
		stateArray.append(state)
		index += 1

		#Get the zip
		zipArray.append(addressSplit[index][:-1])

	#Now print the results to a file
	nameOutputFile = open("./data/names_output.txt", 'w')
	json_dump_file = open("doctorJSON.txt", 'w')
	random.seed(100)
	for n in range(1000,2000):
		#Get the name
		temp = random.randint(0,199)
		temp2 = random.randint(0,199)
		firstName = nameArray[temp][:-2]
		lastName = nameArray[temp2][:-4]
		#Get the username
		username = "Doctor" + str(n)
		#Get the email
		#email = firstName + '.' + lastName + "@mail.com"
		#Get the patientID
		doctorID = str(n)
		#Get the address
		temp = random.randint(0,199)
		address = digitArray[temp] + " " + streetArray[temp]
		city = cityArray[temp]
		state = stateArray[temp]
		addressZip = zipArray[temp]
		#Get the gender
		temp = random.randint(0,1)
		gender = "Male"
		if temp == 1:
			gender = "Female"
		#Get the birthdate
		month = random.randint(1,12)
		if month < 10:
			month = "0" + str(month)
		else:
			month = str(month)
		day = random.randint(1, 30)
		if day < 10:
			day = "0" + str(day)
		else:
			day = str(day)
		year = random.randint(1940, 2005)
		year = str(year)

		#Create the JSON
		json_dump = json.dumps([{'username': username, 'doctorGender': (gender), 'doctorBirthdate': (month + "/" + day + "/" + year), 'doctorZip': (addressZip), 'doctorState': (state), 'doctorAddress': (address), 'doctorName': (firstName + " " + lastName), 'doctorID': (str(n)), 'doctorHospital': "Houston", 'doctorSpecialty': "Orthopedics"}])
		json_dump_file.write(json_dump[1:-1] + '\n')
	json_dump_file.close()
	subprocess.call(['mongoimport', '--db', 'entities', '--collection', 'doctors', '--type', 'json', '--file', './doctorJSON.txt'])
