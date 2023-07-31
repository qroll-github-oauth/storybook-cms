import { styled } from "@linaria/react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...otherProps }: ButtonProps) => {
  return (
    <StyledButton type="button" {...otherProps}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  color: #eee;
  background: #436;
  border: none;
  border-radius: 5px;
`;
