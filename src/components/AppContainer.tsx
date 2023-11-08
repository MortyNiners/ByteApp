import { HeaderContainer } from './HeaderContainer.tsx';

export const AppContainer = () => {
  return (
    <>
      <HeaderContainer />
      <section className=" min-w-[320px]">
        <div className="grid grid-cols-12">
          <div className="col-span-3">salut</div>
          <div className="col-span-3">salut</div>
          <div className="col-span-6">salut</div>
        </div>
      </section>
    </>
  );
};
