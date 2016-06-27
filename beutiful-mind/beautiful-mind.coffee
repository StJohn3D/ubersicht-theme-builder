command: false

refreshFrequency: 83

render: (output) ->
	x = 20
	y = 20
	"""
	<div class='beautiful-mind' style='left:#{x}px; top:#{y}px;'>
		<div class='beautiful-mind-eye'></div>
	</div>
	"""

update: (output, domeEL) ->
	y = 20 + ((Math.sin( Date.now() / 200 ) / 2 + 0.5) * 5)
	$(domeEL).find('.beautiful-mind').css top: y + 'px'

style: """
	.beautiful-mind
		position: absolute
		width: 50px
		height: 50px
		border-radius: 25px
		background-color: #404040
	.beautiful-mind-eye
		position: relative
		width: 10px
		height: 10px
		top: 20px
		left: 20px
		border-radius: 50px
		background-color: #2D97FF
"""