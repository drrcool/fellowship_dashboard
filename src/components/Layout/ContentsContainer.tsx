export const ContentsContainer = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <div className="my-10 flex flex-col gap-5">{children}</div>;
};

export const TwoColumnContainer = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <div className="grid grid-cols-2 gap-5">{children}</div>;
};
