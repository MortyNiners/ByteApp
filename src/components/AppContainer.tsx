import { HeaderContainer } from './HeaderContainer.tsx';
import { User } from './User.tsx';

export const AppContainer = () => {
  return (
    <>
      <section className=" min-w-full  ">
        <HeaderContainer />
        <div className="grid grid-cols-12  min-h-full">
          <div className="col-span-3 ">
            <User />
          </div>
          <div className="col-span-3"></div>
          <div className="col-span-6"></div>
        </div>
      </section>
    </>
  );
};
