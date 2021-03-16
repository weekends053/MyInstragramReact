import React from 'react';
import Img from './Img';
import NoImgs from './NoImgs';

const ListImageAll = props => {
	const results = props.data;
	let imgs;
	if (results.length > 0) { 
		imgs = results.map(img =>
			<Img						///เรียกก data จาก components
				url={img.urls.thumb}
				user={img.user.links.html}
				name={img.user.name}
				link={img.links.html}
				likes={img.likes}
				description={img.description}
				key={img.id}
			/>
		);
	} else {
		imgs = <NoImgs />;
	}
	return (
		<ul className="img-list">
			{imgs}
		</ul>
	);
};

export default ListImageAll; 
