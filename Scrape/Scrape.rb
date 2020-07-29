require 'open-uri'
require 'nokogiri'

url = "https://www.google.com/search?q=animal+noises&oq=animal+noises&aqs=chrome..69i57j46l3j0l3.2161j0j7&sourceid=chrome&ie=UTF-8"

html_file = open(url).read
html_doc = Nokogiri::HTML(html_file)

p html_doc.search('.m6cn6') #.each do |element|
#   p "hi"
#   puts element.text
# end
