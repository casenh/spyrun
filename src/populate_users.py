#!/usr/bin/env python

import random
import json
import subprocess

if __name__ == '__main__':

	# Create Patients First
	for n in range(0,1000):
		username = "Patient" + str(n)
		subprocess.call(['node', './populate_users.js', username, "Patient"])
	# Create Doctors Second
	for n in range (1000, 2000):
		username = "Doctor" + str(n)
		subprocess.call(['node', './populate_users.js', username, "Doctor"])
