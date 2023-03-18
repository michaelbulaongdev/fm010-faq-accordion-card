import './App.css';
import AccordionItem from './components/AccordionItem';
import {list} from './components/list';

function App() {
	return (
		<div className='App'>
			<div>
				<h1>FAQ</h1>
				{list.map((item, index) => {
					return (
						<AccordionItem
							key={index}
							question={item.question}
							answer={item.answer}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
