import classNames from "classnames";

type Props = {
  logoClassName?: string;
  textClassName?: string;
};

export const FullLogo: React.FC<Props> = ({ textClassName, logoClassName }) => {
  return (
    <div className="flex-shrink-0 flex items-center gap-2">
      {/** TODO: Replace with logo */}
      <div
        className={classNames(
          "h-[20px] w-[20px] bg-[#D9D9D9] rounded-[4px]",
          logoClassName
        )}
      />
      <h1 className={classNames("text-base text-gray-800", textClassName)}>
        TasteGPT
      </h1>
    </div>
  );
};
