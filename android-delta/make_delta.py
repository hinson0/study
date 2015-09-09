import os, sys, getopt, bsdiff4

class run_setting:
	def __init__(self):
		self.__settings = self.__anlyze_opt()
	
	def usage_tips(self):
		print "---------------------------------------------------------------------"
		print "Usage:"
		print " make_delta.py [options]"
		print ""
		print "General Options:"
		print "	-h,--help	Show help."
		print "	-f,--first	Set the First File Name"
		print "	-s,--second	Set the Second File Name"
		print "	-o,--out	Set the Output File Name"
		print "---------------------------------------------------------------------"

	def __anlyze_opt(self):
		test_info = {'flag':0}

		longargs = ['first=', 'second=', 'out=', 'help']
			
		try:
			opts, args = getopt.getopt(sys.argv[1:], 'f:s:o:h', longargs)
		except getopt.GetoptError:
			self.usage_tips()
			sys.exit()
				
		for opt, arg in opts:
			if opt in ('-h', '--help'):
				self.usage_tips();
				sys.exit()	
			elif opt in ('-f', '--first'):
				test_info['first'] = arg
				test_info['flag'] +=1
			elif opt in ('-s', '--second'):
				test_info['second'] = arg
				test_info['flag'] +=2
			elif opt in ('-o',  '--out'):
				test_info['out'] = arg
				test_info['flag'] +=4

		#flag: 0:test an env; 1:test a set of cases; 2:wrong; 3:test one case 		
		if test_info['flag'] != 7:  
			self.usage_tips()
			sys.exit()

		return test_info
	
	def get_settings(self):
		return self.__settings
		
	def get_first(self):
		return self.__settings.get('first')
		
	def get_second(self):
		return self.__settings.get('second')
	
	def get_out(self):
		return self.__settings.get('out')


cmd_settings = run_setting()

#print cmd_settings.get_first()
#print cmd_settings.get_second()
#print cmd_settings.get_out() 

if not os.path.isfile(cmd_settings.get_first()):
    print "first file not exists"
    sys.exit()

if not os.path.isfile(cmd_settings.get_second()):
    print "second file not exists"
    sys.exit()	
	
f_f = open(cmd_settings.get_first(), "rb")
binary_f = f_f.read()

f_s = open(cmd_settings.get_second(), "rb")
binary_s = f_s.read()

binary_delta = bsdiff4.diff(binary_f, binary_s)

f_o = open(cmd_settings.get_out(), "wb")
f_o.write(binary_delta)
f_o.close()

f_f.close()
f_s.close()









