import urllib.request

webUrl = urllib.request.urlopen("http://www.google.com")
print("Result Code :" + str(webUrl.getcode()))
data = webUrl.read()
print(data)