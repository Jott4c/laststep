import { ModalProvider } from "./ModalContext";

import { UserProvider } from "./UserContext";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <UserProvider>
      <ModalProvider>{children}</ModalProvider>
    </UserProvider>
  );
};

export default Providers;
