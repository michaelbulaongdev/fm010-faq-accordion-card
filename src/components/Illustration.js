import {Box} from '@mui/material';
import ImageMobile from '../images/illustration-woman-online-mobile.svg';
import ImageBGMobile from '../images/bg-pattern-mobile.svg';

export default function Illustration() {
	return (
		<>
			<Box
				sx={{
					zIndex: 3,
					width: '60%',
					position: 'absolute',
					left: '20vw',
					top: '10vh',
				}}>
				<img src={ImageMobile} alt='illustration' />
			</Box>
			<Box
				sx={{
					zIndex: 2,
					width: '60%',
					position: 'absolute',
					left: '20vw',
					top: '15vh',
				}}>
				<img src={ImageBGMobile} alt='background' />
			</Box>
		</>
	);
}
