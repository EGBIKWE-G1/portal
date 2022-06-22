import React from "react";
import Stories from "react-insta-stories";

export const UserStory = ({
  item,
  onCloseStories,
  onAllStoriesEnded,
  onStoryEnd,
}) => {
  const handleClick = (event) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    // onCloseStories();
  };
  return (
    <div
      className="tw-flex tw-h-full tw-items-center tw-justify-center"
      onClick={handleClick}
    >
      <Stories
        height="100%"
        storyStyles={{ height: "100%" }}
        storyContainerStyles={{ height: "100%" }}
        onAllStoriesEnd={onAllStoriesEnded}
        onStoryEnd={onStoryEnd}
        stories={item?.items?.map((el) => {
          return {
            url: el.srcURL,
            type: el.type === "photo" ? "image" : el.type,
            duration: "",
            header: "",
            seeMore: "",
            seeMoreCollapsed: "",
            // defaultInterval: "1500",
          };
        })}
      />
    </div>
  );
};
