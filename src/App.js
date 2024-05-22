
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCatsFetch } from './catState';
import './App.css';

function App() {

	const cats = useSelector(state => state.cats.cats);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCatsFetch());
	}, [dispatch]);
	console.log(cats);

	return (
		<div className="App">
			<h1>CAT SPECIES</h1>
			<p>Types of cats</p>
			<hr />
			<div className="Gallery">
				{cats.map(cat =>
					<div key={cat.id} className="row">
						<div className="column column-left">

						</div>
						<div className="column column-right">
							<h2>{cat.name}</h2>
							<h5>Temperament: {cat.temperament}</h5>
							<h5>Origin: {cat.origin}</h5>
							<h5>Avg. Life Time: {cat.life_span}</h5>
							<p>{cat.description}</p>
							<a href={cat.wikipedia_url}>Wikipedia</a>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
