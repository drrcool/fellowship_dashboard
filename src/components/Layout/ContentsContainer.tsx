export const ContentsContainer = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <div className="my-5 flex flex-col gap-3">{children}</div>;
};

export const TwoColumnContainer = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <div className="grid md:grid-cols-2 gap-5">{children}</div>;
};
