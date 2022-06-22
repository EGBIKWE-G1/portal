import React, { useEffect, useState, useRef } from "react";
import { getComments, getEntries } from "../utils/ApiRequests";
import ReactPlayer from "react-player";
import { AudioCard, VideoCard } from "material-ui-player";
import Skeleton from "@material-ui/lab/Skeleton";
import { format } from "timeago.js";
import VisibilitySensor from "react-visibility-sensor";

const Feeds = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const getEntry = async () => {
      try {
        setLoading(true);
        const { data } = await getEntries();

        setPosts(data.data);

        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getEntry();
  }, []);

  useEffect(() => {
    const getComment = async () => {
      try {
        setLoading(true);
        const { data } = await getComments();

        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getComment();
  }, []);
  useEffect(() => {
    if (isVisible) {
      videoRef.current.play();
    } else {
      if (videoRef.current.play) {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);
  return (
    <>
      {posts?.map((el) => {
        return (
          <div className="tw-mb-4">
            <div className="feeds-header tw-flex tw-items-center tw-justify-between tw-bg-white tw-h-12 tw-px-4">
              <div className="tw-flex tw-space-x-2 tw-items-center">
                {loading ? (
                  <Skeleton
                    animation="wave"
                    variant="circle"
                    width={40}
                    height={40}
                  />
                ) : (
                  <div className="feeds-img tw-rounded-full tw-flex tw-items-center tw-justify-center">
                    {el.userImageURL === null ? (
                      <img
                        // src="https://images.unsplash.com/photo-1631215583473-4710df684df1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                        src="/assets/images/useravatar.svg"
                        alt="profile-img"
                        className="tw-rounded-full"
                      />
                    ) : (
                      <img
                        // src="https://images.unsplash.com/photo-1631215583473-4710df684df1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                        src={el.userImageURL}
                        onerror="this.src='/assets/images/useravatar.svg'"
                        alt=""
                        className="tw-rounded-full"
                      />
                    )}
                  </div>
                )}

                {loading ? (
                  <Skeleton
                    variant="text"
                    height={10}
                    width="70%"
                    // className="tw-ml-3"
                  />
                ) : (
                  <p className="tw-text-xs">{el.userDisplayName}</p>
                )}
              </div>
              <div className="feeds-time">
                {loading ? (
                  <Skeleton
                    variant="text"
                    height={10}
                    width="70%"
                    // className="tw-ml-3"
                  />
                ) : (
                  <p
                    className="tw-text-gray-300 tw-font-thin"
                    style={{ fontSize: "10px" }}
                  >
                    {format(el.createdAt)}
                  </p>
                )}
              </div>
            </div>
            {loading ? (
              <Skeleton
                variant="rect"
                width={710}
                height={718}
                // className="tw-ml-3"
              />
            ) : (
              <div className="feeds-body tw-bg-white tw-w-full tw-h-1/5  tw-object-cover">
                {el.type === "video" ? (
                  // <video
                  //   src={el.mediaURL}
                  //   autoPlay
                  //   // loop
                  //   //   muted
                  //   // controls
                  //   className=" tw-w-full"
                  // />
                  <VisibilitySensor
                    onChange={(isVisible) => setIsVisible(isVisible)}
                  >
                    <ReactPlayer
                      url={el.mediaURL}
                      width="100%"
                      playing
                      playIcon={<button>Play</button>}
                      light="/assets/images/Transparent Bg.png"
                      ref={videoRef}
                      // height="100%"
                      // controls={true}
                    />
                  </VisibilitySensor>
                ) : (
                  <img
                    src={el.mediaURL}
                    alt=""
                    className="tw-w-full tw-h-4/5 tw-object-cover"
                  />
                )}

                <div className="tw-flex tw-justify-between tw-bg-white tw-h-10 feeds-comment tw-py-2 tw-px-3">
                  <div className="tw-flex tw-space-x-3">
                    <div className="tw-flex tw-space-x-1">
                      {loading ? (
                        <Skeleton
                          variant="circlle"
                          width={40}
                          height={40}
                          // className="tw-ml-3"
                        />
                      ) : (
                        <img src="/assets/images/love.svg" alt="" />
                      )}

                      <p>{el.totalLikes}</p>
                    </div>
                    <div className="tw-flex tw-space-x-1">
                      {loading ? (
                        <Skeleton
                          variant="text"
                          height={10}
                          width="70%"
                          // className="tw-ml-3"
                        />
                      ) : (
                        <img src="/assets/images/comment.svg" alt="" />
                      )}
                      <p>{el.totalComments}</p>
                    </div>
                    <div className="tw-flex tw-space-x-1">
                      <img src="/assets/images/share.svg" alt="" />
                      <p></p>
                    </div>
                  </div>
                  <div className="bookmark">
                    <img
                      src="/assets/images/bookmark.svg"
                      alt=""
                      className="tw-w-5"
                    />
                  </div>
                </div>
                <div className="tw-bg-white tw-flex-col">
                  <div className="tw-flex tw-items-center tw-space-x-3 tw-px-3 tw-py-3">
                    <p className="tw-text-sm">{el.userDisplayName}</p>
                    <p>{el.description}</p>
                    <hr />
                  </div>
                </div>
              </div>
            )}

            <div className="addComment tw-flex tw-items-center tw-justify-between tw-bg-white">
              <div className="commentText">Add a comment...</div>
              <div className="postText">Post</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Feeds;
