# qtip

	qtip = do ->

		div = null

		options =
			dataAttribute: 'data-qtip'
			id: 'qtip'
			visibleClass: 'visible'

## filter

since we're using event delegation, ensure that the event's target should indeed trigger a qtip

		filter = (element) ->

			title = element.hasAttribute 'title'
			data = element.hasAttribute options.dataAttribute
			parent = element.parentNode

			if title and data
				return element

			if parent and 'hasAttribute' of parent and 'getBoundingClientRect' of parent
				filter parent

## hide

		hide = (event) ->

			if filter event.target

				div.classList.remove options.visibleClass

## show

		show = (event) ->

			element = filter event.target

			if element

				event.preventDefault()

compute the `element`'s position on screen

				offset = element.getBoundingClientRect()

set the qtip's text

				div.innerHTML = element.getAttribute 'title'

position it

				left = offset.left + (element.offsetWidth - div.offsetWidth) / 2
				top = offset.top - div.offsetHeight - 10 # small offset so it's not covered up by the user's finger

				div.style.cssText = """
					left: #{left}px;
					top: #{top}px;
				"""

show it

				div.classList.add options.visibleClass

## initialize

		do ->

create qtip div

			div = document.createElement 'div'
			div.id = options.id
			document.body.appendChild div

attach mobile DOM events

			document.addEventListener 'touchstart', show
			document.addEventListener 'touchend', hide

attach desktop DOM events

			document.addEventListener 'mousedown', show
			document.addEventListener 'mouseup', hide