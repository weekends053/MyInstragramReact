import React from 'react';

const Img = props => 
	<li  >
		<a  href={props.link}>
			<img src={props.url} alt="Unsplash Image here" />
		</a>
		<p> <center>
			<h3> Photo by </h3>
			</center>
			<a href={props.user}>&nbsp; &nbsp; &nbsp; {props.name}</a> 
			<a href={props.link}>&nbsp; &nbsp; &nbsp; See on Unsplash</a>
			<center><p class="">{props.likes} Like</p></center>
			<p>&nbsp;&nbsp;{props.description}</p>
		</p>
	</li>;
	//เรียกใช้ prop user จากหน้า ListImageAll
	//เรียกใช้ prop link จากหน้า ListImageAll
	//เรียกใช้ prop like จากหน้า ListImageAll
	//เรียกใช้ prop description จากหน้า ListImageAll

export default Img;
