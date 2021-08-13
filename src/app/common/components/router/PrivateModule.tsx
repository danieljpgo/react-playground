import { usePrivateModule } from '../../hooks/usePrivateModule';

type PrivateModuleProps = {
  children: (auth: boolean) => void;
  paths: string[];
  isAuthenticated: boolean;
};

export default function PrivateModule(props: PrivateModuleProps) {
  const { paths, isAuthenticated, children } = props;

  const auth = usePrivateModule(paths, isAuthenticated);

  return (
    <>
      { children(auth) }
    </>
  );
}
