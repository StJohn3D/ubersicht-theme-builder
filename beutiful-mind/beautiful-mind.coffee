command: false
goal: require('./src/goal')
refreshFrequency: 83

boundsSet: false

render: (output) ->
	x = 20
	y = 20
	if !this.boundsSet
		this.boundsSet = true
		this.goal.setBounds(window.innerWidth, window.innerHeight)
	return """
	<div class='beautiful-mind' style='left:#{x}px; top:#{y}px;'>
		<div class='beautiful-mind-eye'></div>
	</div>
	"""

update: (output, domeEL) ->
	newPos = this.goal.getNextStep();
	x = newPos.x
	y = newPos.y
	$(domeEL).find('.beautiful-mind').css top: y + 'px'
	$(domeEL).find('.beautiful-mind').css left: x + 'px'

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