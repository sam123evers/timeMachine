import React from 'react'


var MainPage = React.createClass({
	render: function() {
		return(
			<div className="time-machine">
				<h1>TIME MACHINE</h1>
				<p>To go to the future press the fast forward button</p>
				<p>To go to the past press the rewind button</p>
				<p>To return to the current year press the pause button</p>
				<Cluster />
			</div>
		)
	}
})

const Cluster = React.createClass({

	getInitialState: function(){
		return {
			year: 2017, 
			progress: 'paused',
			tickRate: 1000,
			acceleration: 1
		}
	},
	
	_moveBackward: function() {
		console.log('moveBackward function')
		this.setState({
			progress: 'backward',
			acceleration: .9,
			tickRate: 1000
		})

	},

	_moveForward: function() {
		console.log('moveForward function')
		this.setState({
			progress: 'forward',
			accereration: .9,
			tickRate: 1000
		})
	},

	_pause: function() {
		console.log('pause function')
		this.setState({
			progress: 'paused',
			tickRate: 1000
		})
	},

	_tick: function() {
		console.log('tick function')
		var change = 0
		if(this.state.progress === 'backward') {
			change = -1
		}
		else if(this.state.progress === 'forward'){
			change = 1
		}
		this.setState({
			year: this.state.year + change,
			tickRate: this.state.tickRate * this.state.acceleration
		})
		console.log(this.state.year)
		setTimeout(this._tick, this.state.tickRate)
	},

	componentWillMount: function(){
		return this._tick()
	},



	render: function() {
		console.log('render function')
		console.log(this.state.progress)
		return(
			<div className="cluster">
					<p className="meow">current year:</p>
					<h2>{this.state.year}</h2>
					<div className="buttons">
						<button
							className={this.state.progress === 'backward' ? 'active' : ''}
							onClick={this._moveBackward}
							value='backward'>
							<img className="rewind" src="http://elizabethhagan.com/wp-content/uploads/2014/04/fast-forward-1-512.png" />
						</button>
						<button
							className={this.state.progress === 'paused' ? 'active' : ''}
							onClick={this._pause}
							value='stop'>
							<img className="pause" src="https://cdn.pixabay.com/photo/2015/08/14/15/15/break-888513_960_720.png" />
						</button>
						<button
							className={this.state.progress === 'forward' ? 'active' : ''}
							onClick={this._moveForward}
							value='forward'>
							<img className="forward" src="http://elizabethhagan.com/wp-content/uploads/2014/04/fast-forward-1-512.png" />
						</button>
					</div>
			</div>
		)
	}
})
	


export default MainPage


