const VIDEO_ID_LENGTH = 11;

const renderEmbedLink = (url) => {
  if (!url) {
    return;
  }
  const urlObject = new URL(url);
  const videoId = urlObject.searchParams.get("v");
  if (videoId) {
    return "https://" + urlObject.hostname + "/embed/" + videoId;
  }
  const oldPathEnd = urlObject.pathname.split("/").pop();
  if (oldPathEnd.length > VIDEO_ID_LENGTH) {
    const newPathEnd = oldPathEnd.slice(0, 11);
    return urlObject.href.replace(oldPathEnd, newPathEnd);
  }
  console.log();
  return url;
};

export default renderEmbedLink;
