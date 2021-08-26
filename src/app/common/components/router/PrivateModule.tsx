import { usePrivateModule } from '../../hooks';

type PrivateModuleProps = {
  paths: string[];
  isAuthenticated: boolean;
  children: (auth: boolean) => void;
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
