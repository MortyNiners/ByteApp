import { HeaderContainer } from './HeaderContainer.tsx';
import { User } from './User.tsx';

export const AppContainer = () => {
  return (
    <>
      <HeaderContainer />
      <section className=" min-w-[320px]">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <User />
          </div>
          <div className="col-span-3"></div>
          <div className="col-span-6"></div>
        </div>
      </section>
    </>
  );
};
