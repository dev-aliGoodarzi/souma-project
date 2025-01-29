import React from "react";
import styled from "styled-components";
import { WithMdPadding } from "../../../../../Components/StyledComponents/StyledComponents";

const Card = styled.div`
  width: 100%;
  height: 380px;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;

  &:hover {
    border-color: #1e8e3e;
    > div {
      margin-top: 6px;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  padding: 15px;
  transition: all 0.1s ease;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  transition: all 0.1s ease;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
  transition: all 0.1s ease;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  font-size: 12px;
  color: #777;
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const SliderCard: React.FC<{
  imgSrc: string;
  title: string;
  description: string;
  views: number;
  date: string;
}> = ({ imgSrc, title, description, views, date }) => {
  return (
    <WithMdPadding>
      <Card>
        <Image src={imgSrc} alt="Card Image" className="h-250 object-cover" />
        <Content>
          <Title className="truncate ">{title}</Title>
          <Description className="line-clamp-2 mt-6">{description}</Description>
        </Content>
        <Footer>
          <Icon>🔍 {views}</Icon>
          <span>{date}</span>
        </Footer>
      </Card>
    </WithMdPadding>
  );
};
