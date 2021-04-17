import { usePrivateModule } from './usePrivateModule';

interface PrivateModuleProps {
  children: (auth: boolean) => void;
  paths: string[];
  isAuthenticated: boolean;
}

const PrivateModule = (props: PrivateModuleProps) => {
  const { paths, isAuthenticated, children } = props;
  const auth = usePrivateModule(paths, isAuthenticated);

  return (
    <>
      { children(auth) }
    </>
  );
};

export default PrivateModule;
