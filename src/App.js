import './App.css';
import {list} from './components/list';
import {ReactComponent as ArrowIcon} from './images/icon-arrow-down.svg';
import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material';

function App() {
	return (
		<div className='App'>
			<div>
				<h1>FAQ</h1>
				{list.map((item) => {
					return (
						<Accordion disableGutters='true'>
							<AccordionSummary>
								<p className='question'>{item.question}</p>
								<div className='arrow'>
									<ArrowIcon />
								</div>
							</AccordionSummary>
							<AccordionDetails>
								<p className='answer'>{item.answer}</p>
							</AccordionDetails>
						</Accordion>
					);
				})}
			</div>
		</div>
	);
}

export default App;
