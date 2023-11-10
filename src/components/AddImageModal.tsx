import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { addImage } from '../services/addImage.ts';
import { useMe } from '../hooks/useMe.ts';
import XSvg from '../assets/Elements/x.svg';
export const AddImageModal = ({ modal }: { modal: Dispatch<SetStateAction<boolean>> }) => {
  const { data } = useMe();
  const userId = data?.id;
  const [selectedFile, setSelectedFile] = useState<File[]>([]);
  const [imageDelete, setImageDelete] = useState(false);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      setSelectedFile((prevState) => [...prevState, fileList[0]]);
    }
  };
  const submitFile = () => {
    if (userId) addImage({ userId }, selectedFile).catch((e) => e);
  };
  const handleEscape = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') modal(false);
  };
  const hoverHandle = () => {
    setImageDelete(true);
  };
  const hoverHandleExit = () => {
    setImageDelete(false);
  };
  return (
    <>
      <div onKeyDown={handleEscape} className=" absolute w-screen top-0 right-0 z-10 h-screen bg-gray-500/20">
        <div className=" overflow-y-auto overflow-x-hidden flex top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="  w-full max-w-md max-h-full">
            <div className="flex flex-col bg-white rounded-lg shadow">
              <div className="flex items-end">
                <button
                  onClick={() => modal(false)}
                  type="button"
                  className="mt-2 mr-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
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

              <div className="flex flex-col mt-0 p-2  md:p-5 md:pt-0 text-center">
                <h3 className="mb-8 text-lg font-normal text-gray-500">Choose your profile picture</h3>
                {selectedFile.length > 0 && (
                  <>
                    <div className="flex justify-center items-center mb-8">
                      {imageDelete && (
                        <div
                          onMouseLeave={hoverHandleExit}
                          className=" absolute rounded-full bg-gray-700/40 w-[200px] h-[200px] "
                        ></div>
                      )}
                      <img
                        onMouseEnter={hoverHandle}
                        src={URL.createObjectURL(selectedFile[0])}
                        alt="Uploaded image"
                        className={`w-[200px] h-[200px] rounded-full`}
                      />
                      {imageDelete && (
                        <img
                          onClick={() => setSelectedFile([])}
                          onMouseEnter={hoverHandle}
                          src={XSvg}
                          alt="x"
                          className="absolute w-[150px] cursor-pointer"
                        />
                      )}
                    </div>
                  </>
                )}
                <div className=" mb-8">
                  <input
                    id="fileInput1"
                    accept="image/*"
                    type="file"
                    onChange={handleFileChange}
                    className="cursor-pointer"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={submitFile}
                    type="button"
                    className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                  >
                    Submit
                  </button>
                  <button
                    onClick={() => modal(false)}
                    type="button"
                    className=" text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
