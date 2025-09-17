
type MediaContainerProps = {
  src: string;
  children?: React.ReactNode;
};

export default function MediaContainer(
  { src, children }: MediaContainerProps
) {
  return (
    <div className="w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center p-4" style={{ backgroundImage: `url(${src})` }}>
      {children}
    </div>
  );
}