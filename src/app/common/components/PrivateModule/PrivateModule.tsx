import { usePrivateModule } from './usePrivateModule';

interface PrivateModuleProps {
  children: (auth: boolean) => void;
  paths: string[];
}

const PrivateModule = (props: PrivateModuleProps) => {
  const { paths, children } = props;
  const auth = usePrivateModule(paths);

  return (
    <>
      { children(auth) }
    </>
  );
};

export default PrivateModule;
