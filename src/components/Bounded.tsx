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
        "px-4 py-4 xs:flex-row xs:py-2,px-2,gap-5 xs:justify-between",
        className,
      )}
      {...restProps}
    >
      <div className="mx-auto flex flex-col justify-between">
        {children}
      </div>
    </Comp>
  );
}
