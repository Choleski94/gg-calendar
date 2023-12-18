import styled from 'styled-components';

export const Marker = styled.div`
  & .marker-wrapper:before {
    ${({ color }) => color ? `background-color: ${color};` : ''}
  }
 
  & .tag {
    ${({ color }) => color ? `background-color: ${color};` : ''}
  }

  & .marker-wrapper .pin {
    ${({ color }) => color ? `border: 2px solid ${color};` : ''}

    &:before {
      ${({ color }) => color ? `border: 2px solid ${color};` : ''}
      ${({ color }) => color ? `background-color: ${color};` : ''}
    }

    .image { 

      color: #fff;
      font-size: 14px;
      font-weight: bold;
      line-height: 34px; 
      text-align: center;

      &:after {
       ${({ color }) => color ? `border-color: ${color} transparent transparent transparent` : ''}
      }
    }
  }
`;

export const MarkerTag = styled.div`
	&.tag {
		${({ bgColor }) => bgColor ? `background-color: ${bgColor};` : ''}
	}
`
