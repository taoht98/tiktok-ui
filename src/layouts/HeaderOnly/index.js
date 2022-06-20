import Header from '~/layouts/components/Header';

export default function HeaderOnly({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
