import { css } from "@linaria/core";

interface Props {
  title: string;
}

const Container = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: calc(100% - 32px);
  background-color: #f1f1f1;
  border-radius: 3px;
  margin: 16px 0;
`;

const Label = css`
  position: absolute;
  left: 0;
  top: 0;
  background-color: #dedede;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  padding: 4px 8px;
`;

export const Meta = ({ title }: Props) => {
  return (
    <div className={Container}>
      <div className={Label}>Meta</div>
      <code>{title || ""}</code>
    </div>
  );
};
