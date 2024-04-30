import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={clsx(
        "px-4 py-10 md:px-6 md:py-4 lg:py-6",
        className,
      )}
      {...restProps}
    >
      <div className="mx-auto flex w-full flex-col max-w-full">
        {children}
      </div>
    </Comp>
  );
}
