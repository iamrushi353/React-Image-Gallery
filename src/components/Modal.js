import React from "react";

const Modal = ({ visible, onClose, data }) => {
  const handleClose = () => {
    onClose();
  };

  if (!visible) return null;

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-opacity-30 backdrop-blur-sm
      flex justify-center items-center"
    >
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl sm:h-2/3 sm:w-2/3 md:w-1/2 md:h-3/4 xl:w-2/5 xl:h-4/5">
        <article key={data.id} className="rounded-3xl w-full h-full ">
          <a href={data.urls.regular} target="_blank" rel="noreferrer">
            <img
              src={data.urls.regular}
              alt={data.user.username}
              className="object-fill xl:w-full xl:h-4/5 md:w-full md:h-3/4 sm:h-2/3 sm:w-full rounded-3xl"
            />
          </a>

          <div className="p-5 pb-0 pt-0 flex flex-col md:flex-row items-start md:items-center justify-between">
            <article className="flex items-center justify-start ">
              <img
                src={data.user.profile_image.medium}
                alt={data.user.username}
                className="rounded-full mr-2 w-10 md:w-auto "
              />
              <ul>
                <li className="text-slate-800 font-bold">{data.user.name}</li>
              </ul>
            </article>

            <div>{data.user.location}</div>
            <article className="p-5 pb-0 mt-0 pt-0 md:mt-0 mr-0">
              <a
                href={`https://instagram.com/${data.user.instagram_username}`}
                className="text-sm text-slate-800 underline "
                target="_blank"
                rel="noreferrer"
              >
                {data.user.instagram_username}
              </a>
              <small className="text-slate-800 opacity-75 block font-bold">
                {data.likes} Likes
              </small>
            </article>
          </div>

          <div className="text-center">{data.description}</div>
        </article>
      </div>
    </div>
  );
};

export default Modal;
