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
			<div className='accordion-header' onClick={handleClick}>
				<p>{props.question}</p>
				<ArrowIcon className={isFlipped ? 'flipped' : ''} />
			</div>
			{isExpanded && <p className='accordion-content'>{props.answer}</p>}
		</div>
	);
}

export default AccordionItem;
