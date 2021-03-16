import React, { Component } from 'react';

export default class Search extends Component {
	state = {
		searchText: ''
	};

	OnChangeImage = e => { //ฟังก์ชั่นเปลี่ยนรูป
		this.setState({ searchText: e.target.value }); //โดยเปลี่ยนจากตอนที่เรา Search
	};

	BtnSubmit = e => { //ฟังก์ชั่นปุ่มค้นหา
		e.preventDefault();
		this.props.onSearch(this.query.value);
		e.currentTarget.reset();
	};

	render() {
		return (
			<form className="search-form" onSubmit={this.BtnSubmit}>
				<label className="is-hidden" htmlFor="search">Search</label>
				<input
					type="search"
					onChange={this.OnChangeImage}
					ref={input => (this.query = input)}
					name="search"
					placeholder="Search..."
				/>
				<button type="submit" id="submit" className="search-button">
					<i className="material-icons icn-search">search</i>
				</button>
			</form>
		);
	}
}
