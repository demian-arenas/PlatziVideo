export  const leftPad = n => `0${n}`.substr(-2);

export const formattedTime = secs => `${leftPad(~~(secs / 60))}:${leftPad(~~(secs % 60))}`;

export const isFullScreen = () => document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen

export const requestFullScreen = element => {
  try{
    element.requestFullscreen()
  } catch(error) {
    console.log(error)
  }
  try{
    element.webkitRequestFullscreen()
  } catch(error) {
    console.log(error)
  }
  try{
    element.mozRequestFullscreen()
  } catch(error) {
    console.log(error)
  }
  try{
    element.msRequestFullscreen()
  } catch(error) {
    console.log(error)
  }
}

export const exitFullScreen = () => {
  try {
    document.exitFullscreen()
  } catch(error) {
    console.log(error)
  }
  try {
    document.webkitExitFullscreen()
  } catch(error) {
    console.log(error)
  }
  try {
    document.mozCancelFullscreen()
  } catch(error) {
    console.log(error)
  }
  try {
    document.msExitFullscreen();
  } catch (error) {
    console.log(error);
  }
}