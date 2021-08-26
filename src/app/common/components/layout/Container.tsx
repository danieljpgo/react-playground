type ContainerProps = {
  children: React.ReactNode;
};

export default function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <main>{children}</main>
  );
}
