# Company: Eureka²
# Developer: Stefano Graziato
# Email: stefano.graziato@eurekaa.it
# Homepage: http://www.eurekaa.it
# GitHub: https://github.com/eurekaa

# File Name: index
# Created: 08/12/2014 20:29

define ['lodash'], (_)->

   load_stylesheet: (urls)->
      if not _.isArray urls then urls = new Array(urls)
      for url in urls
         if not _.string.endsWith url, '.css' then url += '.css'
         link = document.createElement 'link'
         link.type = 'text/css'
         link.rel = 'stylesheet'
         link.href = url
         document.getElementsByTagName('head')[0].appendChild link
      return true