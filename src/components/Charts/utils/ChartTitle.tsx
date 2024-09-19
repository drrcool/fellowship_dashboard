export const ChartTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-tremor-title font-bold">{title}</h2>
      {subtitle && <p className="text-tremor-default">{subtitle}</p>}
    </div>
  );
};
