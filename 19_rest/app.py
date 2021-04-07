# Dean Carey & Benjamin Gallai
# k19: A RESTful Journey Skyward
# SoftDev -- Rona Ed.
# Apr 5 2021


import requests

from flask import Flask, render_template #allows us to utilize html templates
app = Flask(__name__)

@app.route("/")
def get_image(): #function defined to save the image url from the given textfile
	with open('key_nasa.txt', 'r') as api_file: #read in API key from external file
		api_key = api_file.readline()[:-1]

	webpage = requests.get('https://api.nasa.gov/planetary/apod?api_key=' + api_key)

	with open('request.json', 'wb') as request: #Creates request.json file
		request.write(webpage.content) #Writes the contents of the given webpage onto the json file

	with open('request.json', 'r') as request:
		request_str = request.read()

	img_desc = request_str.split('","')[1][14:] #First index to indicate split array
	img_title = request_str.split('","')[5][8:] #Second index to splice the split string in array
	img_url = request_str.split('","')[6][6:-3] #Lower splice to eliminate section title, upper splice to remove .jpg extension on url

	return render_template('main.html', title=img_title, img_url=img_url, description=img_desc)

if __name__ == "__main__":
    app.debug = True
    app.run()


