import styled from 'styled-components'

export const DetailedContainer = styled.div`
  padding: 10px;
  width: 100%;
  padding: 15px;
`
export const DetailedRowBetween = styled.div`
  color: #94a3b8;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`
export const DetailedRow = styled.div`
  display: flex;
  align-items: center;
`
export const DetailedHeading = styled.p`
  color: #475569;
  font-size: 15px;
  margin-bottom: 0px;
`
export const DetailedLiUl = styled.ul`
  color: #606060;
  display: flex;
  padding: 0px;
  margin-bottom: 0px;
  list-style-type: none;
  @media (min-width: 768px) {
    font-size: 12px;
  }
`

export const DetailedButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  margin-right: 15px;
`

export const DetailedHr = styled.hr`
  border: 1px solid #94a3b8;
`
export const DetailedLogo = styled.img`
  margin-right: 15px;
  width: 10%;
  @media (min-width: 768px) {
    width: 5%;
  }
`
export const DetailedPara = styled.p`
  color: #909090;
  margin-top: 0px;
  @media (min-width: 768px) {
    margin-left: ${props => (props.margin ? '5%' : '3px')};
  }
`
