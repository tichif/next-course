import { useRouter } from 'next/router';

const ClientsProjectPage = () => {
  const router = useRouter();

  const buttonClickedHandler = () => {
    router.push('/clients/tichif/123');
  };

  return (
    <div>
      <h1>The Clients Projects Page</h1>
      <button onClick={buttonClickedHandler}>Load Project</button>
    </div>
  );
};

export default ClientsProjectPage;
