import {useState} from 'react';
import {ReactComponent as ArrowIcon} from '../images/icon-arrow-down.svg';

function AccordionItem(props) {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = () => {
		setIsExpanded(!isExpanded);
		setIsFlipped(!isFlipped);
	};

	return (
		<div className='accordion-item'>
			<div
				className={
					isExpanded ? 'accordion-header expanded' : 'accordion-header'
				}
				onClick={handleClick}>
				<p>{props.question}</p>
				<div className='arrow'>
					<ArrowIcon className={isFlipped ? 'flipped' : ''} />
				</div>
			</div>
			<div>
				{isExpanded && <p className='accordion-content'>{props.answer}</p>}
			</div>
		</div>
	);
}

export default AccordionItem;
