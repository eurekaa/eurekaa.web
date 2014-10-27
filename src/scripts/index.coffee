# Company: Eureka²
# Developer: Stefano Graziato
# Email: stefano.graziato@eurekaa.it
# Homepage: http://www.eurekaa.it
# GitHub: https://github.com/eurekaa

# File Name: index
# Created: 16/04/14 14.12


require.onError = (err)-> console.error err
require.config
   baseUrl: "."
   urlArgs: 'v=' + (new Date()).getTime()
   paths:
      domready: "scripts/libs/require.domready"
      jquery: "scripts/libs/jquery"
      jquery_ui: "scripts/libs/jquery.ui"
      lodash: "scripts/libs/lodash"
   shim: 
      jquery_ui: 
         deps: ["jquery"]
         exports: "$"

require ['domready!', 'jquery'], (dom, $)->
   
   
   $('nav.main a').on 'click', ->
      $('nav.main a.active').addClass 'quiet'
      $('nav.main a.active').removeClass 'active'
      $(@).removeClass 'quiet'
      $(@).addClass 'active'
