import React from 'react';
import styled from 'styled-components';

export const Section = styled.div`
	transition: ease all 0.5s;
	background-color: ${(props) => props.theme.colors.point};
`;

const Box = styled.div`
	height: 450px;
	width: 80%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media ${(props) => props.theme.breakpoints.md} {
		margin-top: 20px;
	}
	@media screen and (max-width: 870px) {
		flex-direction: column;
		height: 550px;
		padding: 34px 0;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 34px 0 38px;
		height: 580px;
	}
`;

const InfoBox = styled.div`
	color: ${(props) => props.theme.colors.subGray};
	margin-top: 44px;
	font-size: 19px;
	line-height: 1.5;
	@media screen and (max-width: 870px) {
		font-size: 16px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
		width: 220px;
	}
`;

const Col = styled.div`
	display: flex;
	flex-direction: column;
`;

const FlexBox = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 16px;
`;

const Footer = () => {
	return (
		<Section>
			<Box>
				<div>
					<img src="companylogo.png" alt="company logo" />
					<InfoBox>
						주소 서울특별시 마포구 마포대로 122, 12층 14층 (우. 04213)
						<br />
						사업자등록번호 574-81-01983
						<br />
						통신판매업신고번호 2020-서울중구-3078호
						<br />
						대표자 안재현
						<br />
						고객센터 support@stockeeper.co, 02-2274-2517
						<br />
						제휴 및 대외협력 bancow_official@naver.com
					</InfoBox>
				</div>
				<Col>
					<InfoBox>Follow Us On:</InfoBox>
					<FlexBox>
						<a href="https://www.youtube.com/channel/UCATOmelT_aoRb484L3DU-DQ" target="_blank" rel="noreferrer">
							<img src="/linkicons/youtube.png" alt="youtube link" width={40} />
						</a>
						<a href="https://www.instagram.com/bancow_official/" target="_blank" rel="noreferrer">
							<img
								src="/linkicons/instagram.png"
								alt="instagram link"
								style={{ backgroundColor: 'white', borderRadius: '9px' }}
								width={40}
							/>
						</a>
						<a href="http://pf.kakao.com/_dzLCs/chat" target="_blank" rel="noreferrer">
							<img src="/linkicons/kakaotalk.png" alt="kakaotalk link" style={{ borderRadius: '9px' }} width={40} />
						</a>
						<a href="https://blog.naver.com/bancow_official" target="_blank" rel="noreferrer">
							<img src="/linkicons/naverblog.png" alt="naverblog link" width={40} />
						</a>
					</FlexBox>
					<InfoBox>
						Copyright © 2022
						<br />
						stockeeper Co., Ltd.
					</InfoBox>
				</Col>
			</Box>
		</Section>
	);
};

export default Footer;
