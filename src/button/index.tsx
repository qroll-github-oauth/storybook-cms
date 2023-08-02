import { styled } from "@linaria/react";

type StyleType = "primary" | "secondary";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  styleType: StyleType;
}

export const Button = ({
  children,
  styleType = "primary",
  ...otherProps
}: ButtonProps) => {
  return (
    <StyledButton type="button" $styleType={styleType} {...otherProps}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ $styleType: StyleType }>`
  border: 1px solid none;
  border-radius: 5px;

  ${(props) => {
    switch (props.$styleType) {
      case "primary":
        return `
          color: #eee;
          background: #436;
          border: 1px solid #436;
        `;
      case "secondary":
        return `
          color: #222;
          background: #eee;
          border: 1px solid #436;
        `;
    }
  }}
`;
