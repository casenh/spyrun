#!/usr/bin/env python

import random
import json
import subprocess

if __name__ == '__main__':

	# First, open all the necessary files and populate the arrays
	for n in range(1,1000):
		subprocess.call(['node', './populate_encounters.js', str(n)])
