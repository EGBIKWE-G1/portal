import React, { useState, useEffect } from "react";
import { getStory } from "../utils/ApiRequests";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { UserStory } from "./UserStory";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const UserStories = () => {
  const [loading, setLoading] = useState(false);
  const [stories, setStories] = useState();
  const [currItem, setCurrItem] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);
  const [storyEnd, setStoryEnd] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = (item) => {
    setCurrIndex(item);
    setCurrItem(stories[item]);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onEnds = () => {
    setCurrIndex(currIndex + 1);
    setStoryEnd(true);
  };

  if (storyEnd === true) {
    setStoryEnd(false);
    // setCurrIndex(currIndex + 1);
    const newIndex = currIndex + 1;
    setCurrItem(stories[currIndex]);
    console.log(currIndex);
    console.log("story ended");
  }
  //create state to track stryEnding,
  //write a callback on the onEnd stories to update the storyEnd state
  // use a useEfect to update the current item

  const captisalize = (word) => {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  };
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  useEffect(() => {
    const getStories = async () => {
      try {
        setLoading(true);
        const { data } = await getStory();
        console.log(data.data, "stories");
        setStories(data.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getStories();
  }, []);

  return (
    <>
      <h4
        className="tw-font-normal tw-text-sm tw-mb-3 tw-ml-4"
        style={{ color: "#043F7C" }}
      >
        Watch more stories in feeds
      </h4>
      <div className="tw-flex tw-items-center hide-scrollbar lg:tw-px-4">
        {stories?.map((el, ind) => {
          console.log(el, "element");
          return (
            <>
              <div className="hide-scrollbar sc-children">
                <div className="userstories " onClick={() => handleOpen(ind)}>
                  {el.items[0].type === "video" ? (
                    <div className="overlay-stories">
                      <video src={el.items[0].srcURL} muted autoPlay loop />
                      <div className="text">
                        {el.userImageURL === null ? (
                          <div className="img-border tw-mt-3 tw-ml-3">
                            <img
                              src="/assets/images/useravatar.svg"
                              alt="profile"
                              className="tw-rounded tw-h-12 tw-w-12 tw-object-cover"
                            />
                          </div>
                        ) : (
                          <div className="img-border tw-mt-3 tw-ml-3">
                            <img
                              src={el.userImageURL}
                              alt="profile"
                              className=""
                            />
                          </div>
                        )}
                        <div
                          style={{
                            marginBottom: ".75rem!important",
                            maxWidth: "20px",
                          }}
                        >
                          <h6 className="tw-text-xs tw-text-justify tw-mb-3 tw-ml-3">
                            {captisalize(el.userFirstName) +
                              " " +
                              captisalize(el.userLastName)}
                          </h6>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="overlay-stories">
                        <img src={el.items[0].srcURL} className="img-stories" />
                        <div className="text">
                          {el.userImageURL === null ? (
                            <div className="img-border tw-mt-3 tw-ml-3">
                              <img
                                src="/assets/images/useravatar.svg"
                                alt="profile"
                                className="tw-rounded tw-h-12 tw-w-12 tw-object-cover"
                              />
                            </div>
                          ) : (
                            <div className="img-border tw-mt-3 tw-ml-3">
                              <img
                                src={el.userImageURL}
                                alt="profile"
                                className=""
                              />
                            </div>
                          )}
                          <div
                            style={{
                              marginBottom: ".75rem!important",
                              maxWidth: "20px",
                            }}
                          >
                            {/* <p className="tw-text-xs">{`${el.userFirstName} ${el.userLastName}`}</p> */}
                            <h6 className="tw-text-xs tw-text-justify tw-mb-3 tw-ml-3">
                              {captisalize(el.userFirstName) +
                                " " +
                                captisalize(el.userLastName)}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          );
          //   return el.items?.map((el) => {
          // });
        })}
      </div>
      <Modal
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <>
          <span
            className="tw-float-right tw-text-3xl tw-text-white tw-cursor-pointer tw-pt-5 tw-pr-5"
            onClick={handleClose}
          >
            X
          </span>
          <UserStory
            item={currItem}
            // onAllStoriesEnded={handleClose}
            onAllStoriesEnded={onEnds}
            onStoryEnd={() => console.log("")}

            // onStoryEnd={() => console.log("ended")}
          />
        </>
      </Modal>
    </>
  );
};

export default UserStories;
