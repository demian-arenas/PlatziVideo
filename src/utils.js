export const leftPad = n => `0${n}`.substr(-2);

export const formattedTime = secs => `${leftPad(~~(secs / 60))}:${leftPad(~~(secs % 60))}`;
