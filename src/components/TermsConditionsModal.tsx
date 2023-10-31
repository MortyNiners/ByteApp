interface TermsTypes {
  checked: (value: boolean) => void;
  modal: (value: boolean) => void;
}
export const TermsConditionsModal = ({ checked, modal }: TermsTypes) => {
  return (
    <>
      <div className="fixed bg-gray-950/40 z-10  md:inset-0  min-w-screen min-h-screen">
        <div className="flex justify-center items-center min-h-screen">
          <div className=" w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <div className="flex items-start justify-between p-4 border-b rounded-t ">
                <h3 className="text-xl font-semibold text-gray-900  ">Terms and Conditions</h3>
                <button
                  onClick={() => modal(false)}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center  "
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path stroke="currentColor" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500  ">
                  With less than a month to go before the European Union enacts new consumer privacy laws for its
                  citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500  ">
                  The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is
                  meant to ensure a common set of data rights in the European Union. It requires organizations to notify
                  users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
              </div>
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b  ">
                <button
                  onClick={() => {
                    checked(true);
                    modal(false);
                  }}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                >
                  I accept
                </button>
                <button
                  onClick={() => {
                    checked(false);
                    modal(false);
                  }}
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
