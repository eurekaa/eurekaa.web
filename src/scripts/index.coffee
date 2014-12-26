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
      "async": "scripts/libs/async"
      "domready": "scripts/libs/require.domready"
      "jquery": "scripts/libs/jquery"
      "jquery.ui": "scripts/libs/jquery.ui"
      "jquery.transit": "scripts/libs/jquery.transit" 
      "lodash": "scripts/libs/lodash.mixed"
      "lodash.base": "scripts/libs/lodash"
      "underscore.string": "scripts/libs/underscore.string"
      "ui": "scripts/ui/index"
      "ui.flipcard": "scripts/ui/flipcard"
   shim:
      "jquery.ui": deps: ['jquery', 'jquery.transit'], exports: '$'
      "jquery.transit": deps: ['jquery']
      "lodash": exports: '_'
      "underscore.string": deps: ['lodash.base'], exports: '_s'



require ['domready!', 'lodash', 'jquery.ui', 'ui', 'ui.flipcard' ], (dom, _, $, ui)->
   
   submenu = $('body > header .submenu')
   submenu.euk_flipcard()

   
   $('nav.menu li').on 'click', ->
      $('nav.menu li').removeClass 'active'
      $(@).addClass 'active'

      console.log 'section.' + $(@).attr('class') + ' .submenu'
      submenu.flipcard 'load', $('section.' + $(@).attr('rel') + ' .submenu')
   
   $('nav.menu .head .icon').on 'click', -> $('nav.menu').toggleClass 'closed'
   $('nav.menu .label').on 'click', -> $('nav.menu').toggleClass 'closed' 
      
   
   
   #$('.submenu figure.back').html($('section.home .submenu').html())
   
