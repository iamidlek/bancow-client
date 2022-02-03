import React from 'react';
import styled from 'styled-components';
import AppLinkBox from '../AppLinkBox';

const Section = styled.div`
	transition: ease all 0.5s;
	background-color: ${(props) => props.theme.alt.backgroud1};
	margin-top: 50px;
	@media ${(props) => props.theme.breakpoints.sm} {
		margin-top: 10px;
	}
`;

const Container = styled.div`
	width: 80%;
	margin: 0 auto;
	padding-left: 6%;
	display: flex;
	flex-direction: column;
	@media ${(props) => props.theme.breakpoints.md} {
		justify-content: center;
		align-items: center;
		padding-left: 0;
	}
`;

const HeadLine3B = styled.h3`
	font-weight: bold;
	font-size: 44px;
	color: ${(props) => props.theme.alt.text1};
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 36px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 240px;
		text-align: center;
	}
`;

const HeadLine3 = styled.h3`
	font-size: 44px;
	color: ${(props) => props.theme.alt.text1};
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 36px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		text-align: center;
	}
`;

const SubFooter = () => {
	return (
		<Section>
			<Container>
				<HeadLine3>뱅카우로</HeadLine3>
				<HeadLine3B>한우 투자하러 가볼까요?</HeadLine3B>
				<AppLinkBox />
			</Container>
		</Section>
	);
};

export default SubFooter;
