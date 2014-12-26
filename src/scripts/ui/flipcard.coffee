# Company: Eureka²
# Developer: Stefano Graziato
# Email: stefano.graziato@eurekaa.it
# Homepage: http://www.eurekaa.it
# GitHub: https://github.com/eurekaa

# File Name: submenu
# Created: 08/12/2014 20:08

define ['lodash', 'jquery.ui', 'ui'], (_, $, ui)->

   # import stylesheet.
   ui.load_stylesheet 'styles/ui/flipcard'

   # define widget.
   $.widget 'ui.euk_flipcard',

      options: 
         turned: 0
         class: 'euk-flipcard'
         
      _create: ->
         self = @
         self.element.html """
            <div class='#{self.options.class}'>
               <div class='container'>
                  <figure class='front'>#{self.element.html()}</figure>
                  <figure class='back'></figure>
               </div>     
            </div>
         """
      
      is_frontside: -> @.options.turned % 2
      
      load: (element)->
         self = @
         container = @.element.find '.container'
         front = @.element.find 'figure.front'
         back = @.element.find 'figure.back'

         back.html $(element).html()
         back.css 
            'transform': 'rotateY(180deg)'
            'backface-visibility': 'hidden'
         front.css 'backface-visibility', 'hidden'
         
         if @.is_frontside()
            container.css transform: 'translateX(-100%) rotateY(-180deg)'
            front.css('display', 'hidden')
         else
            container.css transform: 'translateX(0) rotateY(0)'
            back.css('display', 'hidden')
         
         @.options.turned++

                  
         