import React, { Component } from 'react'; //เรียกใช้ components จาก react
import axios from 'axios'; //เรียกใช้ axios

import './App.css';
import ListImageAll from './Components/ListImageAll';
import Search from './Components/Search';

export default class App extends Component { 
	constructor() {
		super();
		this.state = {     //เรียกใช้ฟังก์ชั่น state
			imgs: [],		//โดยรูปเก็บเป็น array
			loadingState: true	//ถ้าฟังก์ชัน state เป็นจริง ให้โหลดรูปออกมา
		};
	}

	componentDidMount() {
		this.performSearch();		//เรียกใช้ฟอร์ม Search
	}

	performSearch = (query = '') => {	//ให้ค้นหาจากค่าว่าง เป็น delalut
		axios
			//เรียกใช้ API Unslash โดยให้มันเสร์ทหารูปโดยใช้คำสั่ง query จาก cliend_id โดย key จะเท่ากับ J8VpqV81zxQdR_9JL5knh3kMW0jo9N9OqiXz3kGxzYw
			//ถ้าต้องการเพิ่มหลายๆรูป ให้เปลี่ยนจาก 10 เป็นจำนวนที่ต้องการดังนี้ https://api.unsplash.com/search/photos/?page=1&per_page=10
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=J8VpqV81zxQdR_9JL5knh3kMW0jo9N9OqiXz3kGxzYw`
			)
			.then(data => { //เรียกใช้ axios มาแล้วให้แปลงค่า ถ้าโหลดมาเป็น flase
				this.setState({ imgs: data.data.results, loadingState: false });
			})
			.catch(err => {	//เรียกใช้คำสั่ง error
				console.log('Error happened during fetching!', err);
			});
	};

	render() {
		return (
			<div>
				<div className="main-header">
					<div className="inner">
						<h1 className="main-title">Search</h1>
						<Search onSearch={this.performSearch} />
					</div>
				</div>
				<div className="main-content">
					{this.state.loadingState
						? <p>Loading</p>
						: <ListImageAll data={this.state.imgs} />}
				</div>
			</div>
		);
	}
}
