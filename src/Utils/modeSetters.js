// main background color switcher
export const setBackgroundColor = modeColor => {
  return modeColor === 'Dark Mode' ? 'bg-slate-700' : 'bg-white';
};
// font color switcher
export const setFontColor = modeColor => {
  return modeColor === 'Dark Mode' ? 'text-white' : 'text-black';
};
// icon color switcher
export const setIcon = modeColor => {
  return modeColor === 'Dark Mode' ? 'sun' : 'moon';
};
// body background color switcher
export const setBreweriesBackgroundColor = modeColor => {
  return modeColor === 'Dark Mode' ? 'bg-slate-800' : 'bg-[#FAFAFA]';
};
