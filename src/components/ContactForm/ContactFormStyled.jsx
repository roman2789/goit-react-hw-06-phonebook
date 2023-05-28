import { Form, Field } from 'formik';
import styled from 'styled-components';
import { font } from '../mixins';

export const MainForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 240px;
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.colorBg};
`;

export const Input = styled(Field)`
  border: 0;
  outline: 0;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 5px 0;
  background-color: ${props => props.theme.colors.buttonBg};
  ${font({ fs: 16, fw: 400, lh: 20 })};
  box-shadow: inset 3px 3px 7px ${props => props.theme.colors.colorShadow},
    inset -7px -7px 12px ${props => props.theme.colors.white};
  transition: all 0.2s ease-in-out;
  appearance: none;
  &:focus {
    box-shadow: inset 1px 1px 2px var(--color-shadow),
      inset -1px -1px 2px var(--color-white);
  }
`;

export const FormLabel = styled.label`
  ${font({ fs: 16, fw: 700, lh: 20 })};
  display: block;
  margin-bottom: 10px;
`;

export const AddButton = styled.button`
  border-radius: 10px;
  margin: 0 auto;
  padding: 10px 20px;
  ${font({ fs: 16, fw: 600, lh: 20 })};
  background-color: ${props => props.theme.colors.greyBg};
  color: ${props => props.theme.colors.buttonText};
  box-shadow: -3px -3px 7px ${props => props.theme.colors.white},
    7px 7px 12px ${props => props.theme.colors.colorShadow};
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: -2px -2px 5px ${props => props.theme.colors.white},
      2px 2px 5px ${props => props.theme.colors.colorShadow};
  }
  &:active {
    background-color: ${props => props.theme.colors.grey};
    color: ${props => props.theme.colors.white};
    box-shadow: inset 1px 1px 2px ${props => props.theme.colors.white},
      inset -1px -1px 2px ${props => props.theme.colors.colorShadow};
  }
`;
