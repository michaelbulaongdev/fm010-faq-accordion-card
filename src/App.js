import './App.css';
import {list} from './components/list';
import {ReactComponent as ArrowSVG} from './images/icon-arrow-down.svg';
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
} from '@mui/material';

function App() {
	return (
		<div className='App'>
			<div>
				<h1>FAQ</h1>
				{list.map((item) => {
					return (
						<Accordion>
							<AccordionSummary>
								<Typography>{item.question}</Typography>
								<ArrowSVG />
							</AccordionSummary>
							<AccordionDetails>
								<Typography>{item.answer}</Typography>
							</AccordionDetails>
						</Accordion>
					);
				})}
			</div>
		</div>
	);
}

export default App;
