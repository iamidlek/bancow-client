import React from 'react';
import styled from 'styled-components';
import { HeadLine4, HeadLine5 } from '../../common/typography';
import Pagenation from './components/Pagenation';

const Section = styled.div`
	background-color: ${(props) => props.theme.alt.backgroud1};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 100px 0;
	@media ${(props) => props.theme.breakpoints.md} {
		padding: 70px 0;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 50px 0;
	}
`;

const UnderLineBox = styled.a`
	padding: 8px 0;
	width: 800px;
	border-bottom: 1px solid ${(props) => props.theme.alt.text1};
	margin-bottom: 38px;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 600px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 270px;
	}
`;

const HeadLine4Style = styled(HeadLine4)`
	font-size: 28px;
	margin-bottom: 8px;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 20px;
	}
`;

const HeadLine5Style = styled(HeadLine5)`
	color: ${(props) => props.theme.alt.text1};
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
	}
`;

// 언론ver  => event 처럼 상세페이지로 전환 가능
const Section2 = () => {
	return (
		<Section>
			<UnderLineBox href="http://www.todaykorea.co.kr/news/articleView.html?idxno=296481" target="_blank">
				<HeadLine4Style>한우자산플랫폼 뱅카우, 6차 펀딩 39분만에 종료</HeadLine4Style>
				<HeadLine5Style>2022-01-27</HeadLine5Style>
			</UnderLineBox>
			<UnderLineBox href="http://www.todaykorea.co.kr/news/articleView.html?idxno=296481" target="_blank">
				<HeadLine4Style>한우자산플랫폼 뱅카우, 6차 펀딩 39분만에 종료</HeadLine4Style>
				<HeadLine5Style>2022-01-27</HeadLine5Style>
			</UnderLineBox>
			<UnderLineBox href="http://www.todaykorea.co.kr/news/articleView.html?idxno=296481" target="_blank">
				<HeadLine4Style>한우자산플랫폼 뱅카우, 6차 펀딩 39분만에 종료</HeadLine4Style>
				<HeadLine5Style>2022-01-27</HeadLine5Style>
			</UnderLineBox>
			<UnderLineBox href="http://www.todaykorea.co.kr/news/articleView.html?idxno=296481" target="_blank">
				<HeadLine4Style>한우자산플랫폼 뱅카우, 6차 펀딩 39분만에 종료</HeadLine4Style>
				<HeadLine5Style>2022-01-27</HeadLine5Style>
			</UnderLineBox>
			<UnderLineBox href="http://www.todaykorea.co.kr/news/articleView.html?idxno=296481" target="_blank">
				<HeadLine4Style>한우자산플랫폼 뱅카우, 6차 펀딩 39분만에 종료</HeadLine4Style>
				<HeadLine5Style>2022-01-27</HeadLine5Style>
			</UnderLineBox>
			<Pagenation />
		</Section>
	);
};

export default Section2;
